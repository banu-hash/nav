// Navigation API mixin — exposes the public query interface for campus routing.
// Delegates all logic to lib/navigation.mo; holds no state of its own.
import NavLib "../lib/navigation";
import Types  "../types/navigation";

mixin () {

  /// Find the shortest route between two campus locations using Dijkstra's Algorithm.
  ///
  /// Parameters
  ///   start  – name of the origin node (e.g. "Gate")
  ///   end    – name of the destination node (e.g. "Hostel")
  ///
  /// Returns
  ///   path     – ordered array of node names representing the shortest route
  ///   distance – total accumulated edge weight along the path
  ///   found    – false when either node is unknown or no path connects them
  public query func findRoute(start : Text, end : Text) : async Types.RouteResult {
    NavLib.findRoute(start, end);
  };

};
