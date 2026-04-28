import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface RouteResult {
    found: boolean;
    path: Array<string>;
    distance: bigint;
}
export interface backendInterface {
    findRoute(start: string, end: string): Promise<RouteResult>;
}
