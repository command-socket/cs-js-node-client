import WebSocket from "ws";
import { ISocket, SocketEvents } from "@command-socket/core";
export declare class NodeWebSocket implements ISocket {
    private websocket;
    private events;
    constructor(url: string);
    constructor(websocket: WebSocket);
    send(data: any): void;
    close(code?: number, reason?: string): void;
    getIP(): Promise<string>;
    getEvents(): SocketEvents;
}
