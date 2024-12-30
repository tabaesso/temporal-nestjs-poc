import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { Worker } from '@temporalio/worker';
import * as activities from '../activities/example.activity';

@Injectable()
export class WorkerService implements OnModuleInit, OnModuleDestroy {
  private worker: Worker;

  async onModuleInit() {
    this.worker = await Worker.create({
      workflowsPath: require.resolve('../workflows/example.workflow'),
      activities,
      taskQueue: 'example',
    });

    console.log('Starting Temporal Worker...');
    this.worker.run();
  }

  async onModuleDestroy() {
    await this.worker.shutdown();
    console.log('Temporal Worker shut down');
  }
}
