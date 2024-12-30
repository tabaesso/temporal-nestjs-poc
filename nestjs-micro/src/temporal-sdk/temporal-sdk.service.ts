import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { Client } from '@temporalio/client';

@Injectable()
export class TemporalSdkService implements OnModuleInit {
  private client: Client;
  private readonly logger = new Logger(TemporalSdkService.name);

  async onModuleInit() {
    this.client = new Client();
    this.logger.log('Temporal client initialized');
  }

  async startWorkflow() {
    const handle = await this.client.workflow.start('exampleWorkflow', {
      taskQueue: 'example',
      workflowId: 'example',
      args: ['Hello, Temporal!'],
    });
    return handle.result();
  }

  async startMultiserviceWorkflow(input: string) {
    console.log('Workflow started.');
    const handle = await this.client.workflow.start('multiserviceWorkflow', {
      taskQueue: 'multiservice',
      workflowId: 'multiservice2',
      args: [input],
    });
    
   return handle.result();
  }


    

}
