// Navigation library — campus graph definition and Dijkstra's Algorithm.
// All functions are pure / stateless; they operate on the hard-coded graph.
// Campus: EGS Pillay Engineering College (14-node graph).
// Edge weights are real-world distances in metres, computed from pixel
// coordinates (1319×988 image) using a scaling factor of 0.5 m/pixel.
import Types "../types/navigation";
import Map "mo:core/Map";
import List "mo:core/List";
import Set "mo:core/Set";

module {

  // ─── Public surface used by the mixin ────────────────────────────────────────

  /// Returns the shortest path and total distance between two campus nodes.
  /// Returns found=false when either node is unknown or no path exists.
  /// Edge cases:
  ///   - start == end  → path=[start], distance=0, found=true
  ///   - unknown node  → path=[], distance=0, found=false
  ///   - no path       → path=[], distance=0, found=false
  public func findRoute(start : Types.NodeId, end : Types.NodeId) : Types.RouteResult {
    // Validate both nodes exist in the graph
    if (not nodeExists(start) or not nodeExists(end)) {
      return { path = []; distance = 0; found = false };
    };

    // Trivial case: same node
    if (start == end) {
      return { path = [start]; distance = 0; found = true };
    };

    let graph = buildGraph();

    // --- Dijkstra's Algorithm ---
    // dist: best known distance from start to each node (maxDist sentinel = infinity)
    let maxDist : Nat = 999_999_999;
    let dist = Map.empty<Types.NodeId, Nat>();
    // prev: predecessor map for path reconstruction
    let prev = Map.empty<Types.NodeId, Types.NodeId>();
    // visited: set of settled nodes
    let visited = Set.empty<Types.NodeId>();

    // Initialise all distances to "infinity"
    for ((nodeId, _edges) in graph.entries()) {
      dist.add(nodeId, maxDist);
    };
    dist.add(start, 0);

    // Simple O(n²) Dijkstra using the node list as the priority structure.
    // For a campus graph with 14 nodes this is perfectly efficient.
    let nodeCount = graph.size();
    var iterations = 0;

    label dijkstra loop {
      if (iterations >= nodeCount) { break dijkstra };
      iterations += 1;

      // Pick the unvisited node with the smallest tentative distance
      var minDist = maxDist;
      var current = "";

      for ((nodeId, _) in graph.entries()) {
        if (not visited.contains(nodeId)) {
          let d = switch (dist.get(nodeId)) {
            case (?d) d;
            case null maxDist;
          };
          if (d < minDist) {
            minDist := d;
            current := nodeId;
          };
        };
      };

      // No reachable unvisited node remains
      if (current == "") { break dijkstra };

      // Reached the destination — stop early
      if (current == end) { break dijkstra };

      // Settle the current node
      visited.add(current);

      // Relax outgoing edges
      let neighbours : [Types.Edge] = switch (graph.get(current)) {
        case (?edges) edges;
        case null [];
      };

      let currentDist = switch (dist.get(current)) {
        case (?d) d;
        case null maxDist;
      };

      for (edge in neighbours.vals()) {
        if (not visited.contains(edge.to)) {
          let newDist = currentDist + edge.weight;
          let oldDist = switch (dist.get(edge.to)) {
            case (?d) d;
            case null maxDist;
          };
          if (newDist < oldDist) {
            dist.add(edge.to, newDist);
            prev.add(edge.to, current);
          };
        };
      };
    };

    // Check if destination was reached
    let totalDist = switch (dist.get(end)) {
      case (?d) d;
      case null maxDist;
    };

    if (totalDist == maxDist) {
      // No path found
      return { path = []; distance = 0; found = false };
    };

    // Reconstruct path by following predecessors back from end to start
    let pathList = List.empty<Types.NodeId>();
    var step = end;

    label reconstruct loop {
      pathList.add(step);
      if (step == start) { break reconstruct };
      switch (prev.get(step)) {
        case (?p) { step := p };
        case null { break reconstruct }; // should not happen
      };
    };

    // Reverse to get start → end order
    let reversed = pathList.reverse();
    let path = reversed.toArray();

    { path; distance = totalDist; found = true };
  };

  // ─── Internal helpers (exposed for testability) ───────────────────────────────

  /// Returns the full adjacency list for the EGS Pillay campus graph as a Map.
  /// The graph is bidirectional — each edge is stored in both directions.
  ///
  /// Node IDs and approximate pixel coordinates (1319×988 image, scale 0.5 m/px):
  ///   east-entrance    (660, 900)   west-entrance    (730,  75)
  ///   sj-block         (370, 195)   apj-block        (310, 390)
  ///   pg-block         (330, 560)   gg-block         (660, 490)
  ///   main-block       (1000, 640)  boys-hostel      (130, 530)
  ///   staff-quarters   (160, 680)   canteen          (340, 460)
  ///   founders-memorial(580, 340)   eng-labs         (1000, 390)
  ///   das-parking      (570, 210)   atm              (1090, 760)
  public func buildGraph() : Map.Map<Types.NodeId, [Types.Edge]> {
    let g = Map.empty<Types.NodeId, [Types.Edge]>();

    // east-entrance (660, 900)
    g.add("east-entrance", [
      { to = "gg-block";    weight = 205 },
      { to = "main-block";  weight = 214 },
      { to = "atm";         weight = 226 },
    ]);

    // sj-block (370, 195)
    g.add("sj-block", [
      { to = "founders-memorial"; weight = 128 },
      { to = "das-parking";       weight = 100 },
      { to = "west-entrance";     weight = 190 },
      { to = "apj-block";         weight = 102 },
    ]);

    // apj-block (310, 390)
    g.add("apj-block", [
      { to = "founders-memorial"; weight = 137 },
      { to = "sj-block";          weight = 102 },
      { to = "canteen";           weight = 38  },
      { to = "boys-hostel";       weight = 114 },
    ]);

    // pg-block (330, 560)
    g.add("pg-block", [
      { to = "gg-block";       weight = 169 },
      { to = "boys-hostel";    weight = 101 },
      { to = "staff-quarters"; weight = 104 },
      { to = "canteen";        weight = 50  },
    ]);

    // gg-block (660, 490)
    g.add("gg-block", [
      { to = "east-entrance";     weight = 205 },
      { to = "founders-memorial"; weight = 85  },
      { to = "canteen";           weight = 161 },
      { to = "main-block";        weight = 186 },
      { to = "pg-block";          weight = 169 },
      { to = "eng-labs";          weight = 177 },
    ]);

    // main-block (1000, 640)
    g.add("main-block", [
      { to = "east-entrance"; weight = 214 },
      { to = "gg-block";      weight = 186 },
      { to = "eng-labs";      weight = 125 },
      { to = "atm";           weight = 75  },
    ]);

    // boys-hostel (130, 530)
    g.add("boys-hostel", [
      { to = "apj-block";      weight = 114 },
      { to = "pg-block";       weight = 101 },
      { to = "staff-quarters"; weight = 76  },
    ]);

    // staff-quarters (160, 680)
    g.add("staff-quarters", [
      { to = "pg-block";    weight = 104 },
      { to = "boys-hostel"; weight = 76  },
    ]);

    // canteen (340, 460)
    g.add("canteen", [
      { to = "gg-block";   weight = 161 },
      { to = "apj-block";  weight = 38  },
      { to = "pg-block";   weight = 50  },
    ]);

    // founders-memorial (580, 340)
    g.add("founders-memorial", [
      { to = "gg-block";   weight = 85  },
      { to = "das-parking"; weight = 65 },
      { to = "sj-block";   weight = 128 },
      { to = "apj-block";  weight = 137 },
    ]);

    // eng-labs (1000, 390)
    g.add("eng-labs", [
      { to = "gg-block";      weight = 177 },
      { to = "main-block";    weight = 125 },
      { to = "west-entrance"; weight = 207 },
    ]);

    // das-parking (570, 210)
    g.add("das-parking", [
      { to = "founders-memorial"; weight = 65  },
      { to = "west-entrance";     weight = 105 },
      { to = "sj-block";          weight = 100 },
    ]);

    // west-entrance (730, 75)
    g.add("west-entrance", [
      { to = "das-parking"; weight = 105 },
      { to = "sj-block";    weight = 190 },
      { to = "eng-labs";    weight = 207 },
    ]);

    // atm (1090, 760)
    g.add("atm", [
      { to = "east-entrance"; weight = 226 },
      { to = "main-block";    weight = 75  },
    ]);

    g;
  };

  /// Returns true when the given node ID exists in the EGS Pillay campus graph.
  public func nodeExists(nodeId : Types.NodeId) : Bool {
    let graph = buildGraph();
    graph.containsKey(nodeId);
  };

};
