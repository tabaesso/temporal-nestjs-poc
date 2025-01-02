import { Client } from "@temporalio/client";
import { Request, Response } from "express";
import { greeting } from "../workflows";
import { randomUUID } from "crypto";

export class IndexController {
  public async startWorkflow(req: Request, res: Response): Promise<void> {
    const client = new Client();
    const result = await client.workflow.execute(greeting, {
      args: [req.params.name],
      taskQueue: 'hello-world',
      workflowId: 'workflow-' + randomUUID(),
    });
    console.log(`The greeting Workflow returned: ${result}`);
    
    res.send('Hello World!');
  }
}