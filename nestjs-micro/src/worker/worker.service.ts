import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { Worker } from '@temporalio/worker';
import * as activities from '../activities/example.activity';
import { MultiserviceActivities } from '../activities/multiservice-activities';

@Injectable()
export class WorkerService implements OnModuleInit, OnModuleDestroy {
  private worker: Worker;
  private multiServiceWorker: Worker;

  async onModuleInit() {
    this.worker = await Worker.create({
      workflowsPath: require.resolve('../workflows/example.workflow'),
      activities,
      taskQueue: 'example',
    });

    this.multiServiceWorker = await Worker.create({
      workflowsPath: require.resolve('../workflows/multiservice.workflow'),
      taskQueue: 'multiservice',
    });

    console.log('Starting Temporal Worker...');
    this.worker.run();
    this.multiServiceWorker.run();
  }

  async onModuleDestroy() {
    await this.worker.shutdown();
    await this.multiServiceWorker.shutdown();
    console.log('Temporal Worker shut down');
  }
}
