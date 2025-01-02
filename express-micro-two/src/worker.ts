import { Worker } from '@temporalio/worker';
import { MultiserviceActivities } from './activities/multiservice-activities';

let worker: Worker;

const activities: MultiserviceActivities = {
  async ConvertStringToArrayList(input: string): Promise<string[]> {
    worker.shutdown();

    return input.split('');
  },
};

async function run() {
  worker = await Worker.create({
    activities,
    taskQueue: 'multiservice-two',
  });

  await worker.run();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

