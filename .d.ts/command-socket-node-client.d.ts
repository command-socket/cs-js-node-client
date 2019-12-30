import WebSocket from "ws";
import { CommandSocket, CommandSetStructure, CommandRegistry, FullCommandSet } from "@command-socket/core";
export declare class CommandSocketNodeClient<LCS extends CommandSetStructure = any, RCS extends CommandSetStructure = any> extends CommandSocket<LCS, RCS> {
    constructor(url: string, commandRegistry?: CommandRegistry<FullCommandSet<LCS>>);
    constructor(websocket: WebSocket, commandRegistry?: CommandRegistry<FullCommandSet<LCS>>);
}
