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
	
	public static create<LCS extends CommandSetStructure, RCS extends CommandSetStructure, M extends {} = {}>(
		url: string, commandRegistry?: CommandRegistry<LCS>, metadata?: Partial<M>): Promise<CommandSocket<LCS, RCS>>;
	
	public static create<LCS extends CommandSetStructure, RCS extends CommandSetStructure, M extends {} = {}>(
		websocket: WebSocket, commandRegistry?: CommandRegistry<LCS>, metadata?: Partial<M>): Promise<CommandSocket<LCS, RCS>>;
	
	public static create<LCS extends CommandSetStructure, RCS extends CommandSetStructure, M extends {} = {}>(
		urlOrWebSocket: string | WebSocket,
		commandRegistry: CommandRegistry<LCS> = new CommandRegistry<LCS>(),
		metadata: Partial<M> = {}): Promise<CommandSocket<LCS, RCS>> {
		
		return new Promise<CommandSocket<LCS, RCS, M>>((resolve: (value?: (PromiseLike<CommandSocket<LCS, RCS, M>> | CommandSocket<LCS, RCS, M>)) => void): void => {
			
			let commandsocket: CommandSocket<LCS, RCS, M> = new CommandSocketNodeClient(urlOrWebSocket as any, commandRegistry, metadata);
			
			commandsocket.getEvents().OPEN.subscribe((): void => resolve(commandsocket));
			
		});
		
	}
	
}