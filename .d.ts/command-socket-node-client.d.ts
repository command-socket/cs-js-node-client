import WebSocket from "ws";
import { CommandSocket, CommandSetStructure, CommandRegistry } from "@command-socket/core";
export declare class CommandSocketNodeClient<LCS extends CommandSetStructure = any, RCS extends CommandSetStructure = any> extends CommandSocket<LCS, RCS> {
    protected constructor(url: string, commandRegistry?: CommandRegistry<LCS>);
    protected constructor(websocket: WebSocket, commandRegistry?: CommandRegistry<LCS>);
    static create<LCS extends CommandSetStructure, RCS extends CommandSetStructure>(url: string, commandRegistry?: CommandRegistry<LCS>): Promise<CommandSocket<LCS, RCS>>;
    static create<LCS extends CommandSetStructure, RCS extends CommandSetStructure>(websocket: WebSocket, commandRegistry?: CommandRegistry<LCS>): Promise<CommandSocket<LCS, RCS>>;
}
