/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	11:35 PM -- November 23rd, 2019.
 *	Project: @command-socket/node-client
 */

import WebSocket from "ws";
import {
	CommandSocket,
	CommandSetStructure,
	CommandRegistry
} from "@command-socket/core";
import { NodeWebSocket } from "./node-websocket";

/**
 * A browser-specific implementation of a CommandSocket.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class CommandSocketNodeClient<
	LCS extends CommandSetStructure = any,
	RCS extends CommandSetStructure = any,
	M extends {} = {}> extends CommandSocket<LCS, RCS, M> {
	
	protected constructor(url: string, commandRegistry?: CommandRegistry<LCS>, metadata?: Partial<M>);
	protected constructor(websocket: WebSocket, commandRegistry?: CommandRegistry<LCS>, metadata?: Partial<M>);
	protected constructor(urlOrWebSocket: string | WebSocket,
					   commandRegistry: CommandRegistry<LCS> = new CommandRegistry<LCS>(), metadata: Partial<M> = {}) {
		
		super(new NodeWebSocket(urlOrWebSocket as any), commandRegistry, metadata);
		
	}
	
	public static create<LCS extends CommandSetStructure, RCS extends CommandSetStructure>(
		url: string, commandRegistry?: CommandRegistry<LCS>): Promise<CommandSocket<LCS, RCS>>;
	
	public static create<LCS extends CommandSetStructure, RCS extends CommandSetStructure>(
		websocket: WebSocket, commandRegistry?: CommandRegistry<LCS>): Promise<CommandSocket<LCS, RCS>>;
	
	public static create<LCS extends CommandSetStructure, RCS extends CommandSetStructure>(urlOrWebSocket: string | WebSocket,
					   commandRegistry: CommandRegistry<LCS> = new CommandRegistry<LCS>()): Promise<CommandSocket<LCS, RCS>> {
		
		return new Promise<CommandSocket<LCS, RCS>>((resolve: (value?: (PromiseLike<CommandSocket<LCS, RCS>> | CommandSocket<LCS, RCS>)) => void): void => {
			
			let commandsocket: CommandSocket<LCS, RCS> = new CommandSocketNodeClient(urlOrWebSocket as any, commandRegistry);
			
			commandsocket.getEvents().OPEN.subscribe((): void => resolve(commandsocket));
			
		});
		
	}
	
}