// Navigation domain types for the Campus Navigation System.
// Defines all shared data structures used by the Dijkstra routing logic.
module {

  /// A campus location node (e.g. "Gate", "Library", "CSE Block").
  public type NodeId = Text;

  /// A weighted edge in the campus graph connecting two nodes.
  public type Edge = {
    to : NodeId;      // destination node
    weight : Nat;     // distance / travel time
  };

  /// Result returned by the findRoute query.
  public type RouteResult = {
    path     : [Text]; // ordered list of node names from start to end
    distance : Nat;    // total accumulated distance / cost
    found    : Bool;   // false when start/end node is unknown or no path exists
  };

};
