/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	11:36 PM -- November 23rd, 2019.
 *	Project: @command-socket/node-client
 */

import WebSocket from "ws";
import { ISocket, SocketEvents } from "@command-socket/core";
import * as IPUtilities from "./ip-utilities";

type MessageEvent = {
	
	data: any;
	type: string;
	target: WebSocket;
	
};

type CloseEvent = {
	
	wasClean: boolean;
	code: number;
	reason: string;
	target: WebSocket;
	
};

/**
 *
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class NodeWebSocket implements ISocket {
	
	private websocket: WebSocket;
	
	private events: SocketEvents;
	
	public constructor(url: string);
	public constructor(websocket: WebSocket);
	public constructor(urlOrWebSocket: string | WebSocket) {
		
		if (typeof urlOrWebSocket === "string") this.websocket = new WebSocket(urlOrWebSocket);
		else this.websocket = urlOrWebSocket;
		
		this.events = new SocketEvents();
		
		this.websocket.addEventListener("open", (): void => {
			
			this.events.OPEN.notify({
				source: this
			});
			
		});
		
		this.websocket.addEventListener("message", (event: MessageEvent): void => {
			
			this.events.MESSAGE.notify({
				source: this,
				data: event.data
			});
			
		});
		
		this.websocket.addEventListener("close", (event: CloseEvent): void => {
			
			this.events.CLOSE.notify({
				source: this,
				code: event.code,
				reason: event.reason
			});
			
		});
		
		// TODO [11/24/19 @ 12:08 AM] - Error event?
	
	}
	
	public send(data: any): void {
		
		this.websocket.send(data);
		
	}
	
	public close(code?: number, reason?: string): void {
	
		this.websocket.close(code, reason);
	
	}
	
	public async getIP(): Promise<string> {
	
		return await IPUtilities.getPublicIP();
	
	}
	
	public getEvents(): SocketEvents {
		
		return this.events;
		
	}
	
}