import WebSocket from "ws";
import { CommandSocket, CommandSetStructure, CommandRegistry } from "@command-socket/core";
export declare class CommandSocketNodeClient<LCS extends CommandSetStructure = any, RCS extends CommandSetStructure = any, M extends {} = {}> extends CommandSocket<LCS, RCS, M> {
    protected constructor(url: string, commandRegistry?: CommandRegistry<LCS>, metadata?: Partial<M>);
    protected constructor(websocket: WebSocket, commandRegistry?: CommandRegistry<LCS>, metadata?: Partial<M>);
    static create<LCS extends CommandSetStructure, RCS extends CommandSetStructure, M extends {} = {}>(url: string, commandRegistry?: CommandRegistry<LCS>, metadata?: Partial<M>): Promise<CommandSocket<LCS, RCS>>;
    static create<LCS extends CommandSetStructure, RCS extends CommandSetStructure, M extends {} = {}>(websocket: WebSocket, commandRegistry?: CommandRegistry<LCS>, metadata?: Partial<M>): Promise<CommandSocket<LCS, RCS>>;
}
