import { Worker } from '@temporalio/worker';
import { MultiserviceActivities } from './activities/multiservice-activities';

let worker: Worker;

const activities: MultiserviceActivities = {
  async ConvertStringToNumber(input: string): Promise<number> {
    console.log('ConvertStringToNumber');
    console.log(input);
    return parseInt(input);
  },

  async ConvertNumberToString(input: number): Promise<string> {
    worker.shutdown();
    console.log(input);
    console.log('ConvertNumberToString');
    return input.toString();
  },
};

async function run() {
  worker = await Worker.create({
    activities,
    taskQueue: 'multiservice-one',
  });

  await worker.run();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

