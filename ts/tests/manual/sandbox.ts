/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	10:14 PM -- February 21st, 2020.
 *	Project: CommandSocket - Node Client
 */

import { CommandSetStructure } from "@command-socket/core";
import { CommandSocketNodeClient } from "../../command-socket-node-client";

const main: () => Promise<void> = async (): Promise<void> => {
	
	interface RemoteCommandSet extends CommandSetStructure {
		
		sum: {
			
			name: "sum",
			parameter: number[],
			return: number
			
		};
		
	}
	
	let client: CommandSocketNodeClient<any, RemoteCommandSet> = await CommandSocketNodeClient.create("ws://localhost:5437");
	
	let result: number = await client.invoke("sum", [1, 2, 3, 7]);
	
	console.log("Got result: " + result);
	
	await client.close();
	
};

main();