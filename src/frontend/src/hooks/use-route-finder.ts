// use-route-finder.ts
// The full expanded road graph (50+ nodes) lives in types.ts on the frontend.
// Routing is handled entirely by the local Dijkstra in Map.tsx which uses all
// junction nodes. This hook is kept for compatibility but simply returns an
// empty result — Map.tsx drives route calculation directly.
import type { RouteResult } from "@/types";

interface UseRouteFinderParams {
  start: string | null;
  end: string | null;
  enabled: boolean;
}

export function useRouteFinder(_params: UseRouteFinderParams): {
  route: RouteResult | null;
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  refetch: () => void;
} {
  return {
    route: null,
    isLoading: false,
    isError: false,
    error: null,
    refetch: () => {},
  };
}
