import type { backendInterface } from "../backend";

export const mockBackend: backendInterface = {
  findRoute: async (start: string, end: string) => {
    // Simulate sample route data for visual testing
    if (start === end) {
      return { found: false, path: [], distance: BigInt(0) };
    }
    return {
      found: true,
      path: [start, "Library", "CSE Block", end],
      distance: BigInt(350),
    };
  },
};
