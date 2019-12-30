/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	4:33 PM -- November 20th, 2019.
 *	Project: CommandSocket - Core
 */

/**
 * Unit tests for the IPUtilities module.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */

import * as IPUtilities from "../ip-utilities";
import "promise-any-polyfill";

const ACTUAL_IP: string = "47.6.34.113";

test("#getPublicIP returns correct public IP.", async () => {
	
	let resolvedIP: string = await IPUtilities.getPublicIP();
	
	expect(resolvedIP).toBe(ACTUAL_IP);
	
});

test.only("#getPublicIP only uses the network once.", async () => {
	
	let promiseAnyMock: any = jest.spyOn(Promise, "any");
	
	let resolvedIP: string = await IPUtilities.getPublicIP();
	let theSameResolvedIP: string = await IPUtilities.getPublicIP();
	
	expect(resolvedIP).toBe(ACTUAL_IP);
	expect(theSameResolvedIP).toBe(ACTUAL_IP);
	expect(promiseAnyMock).toHaveBeenCalledTimes(1);
	
});