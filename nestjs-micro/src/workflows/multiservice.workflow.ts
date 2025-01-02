import { proxyActivities } from "@temporalio/workflow";
import type { MultiserviceActivities } from "../activities/multiservice-activities";

const { ConvertStringToNumber, ConvertNumberToString } = proxyActivities<MultiserviceActivities>({
  startToCloseTimeout: "1 minute",
  // this queue decides which queue the worker needs to listen to
  taskQueue: "multiservice-one",
});

const { ConvertStringToArrayList } = proxyActivities<MultiserviceActivities>({
  startToCloseTimeout: "5s",
  // this queue decides which queue the worker needs to listen to
  taskQueue: "multiservice-two",
});

export async function multiserviceWorkflow(input: string): Promise<string[]> {
  // run the script "npm run worker" on the folder "express-micro" to start the worker either before or after starting the workflow I couldn't do it automatically because the "child_process" module is not allowed in the Temporal environment
  const number = await ConvertStringToNumber(input);
  console.log("Here we updated the DB as activity 1 finished");
  const string = await ConvertNumberToString(number);
  console.log("Here we updated the DB as activity 2 finished");
  const arrayList = await ConvertStringToArrayList(string);
  console.log("Here we updated the DB as activity 3 finished");

  return arrayList;
}