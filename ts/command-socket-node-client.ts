/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	11:35 PM -- November 23rd, 2019.
 *	Project: @command-socket/node-client
 */

import WebSocket from "ws";
import {
	CommandSocket,
	CommandSetStructure,
	CommandRegistry,
	FullCommandSet
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
	RCS extends CommandSetStructure = any> extends CommandSocket<LCS, RCS> {
	
	public constructor(url: string, commandRegistry?: CommandRegistry<FullCommandSet<LCS>>);
	public constructor(websocket: WebSocket, commandRegistry?: CommandRegistry<FullCommandSet<LCS>>);
	public constructor(urlOrWebSocket: string | WebSocket,
					   commandRegistry: CommandRegistry<FullCommandSet<LCS>> = new CommandRegistry<FullCommandSet<LCS>>()) {
		
		super(new NodeWebSocket(urlOrWebSocket as any), commandRegistry);
		
	}
	
}