import { Worker } from '@temporalio/worker';
import { MultiserviceActivities } from './activities/multiservice-activities';

const activities: MultiserviceActivities = {
  async ConvertStringToNumber(input: string): Promise<number> {
    console.log('ConvertStringToNumber');
    console.log(input);
    return parseInt(input);
  },

  async ConvertNumberToString(input: number): Promise<string> {
    console.log(input);
    console.log('ConvertNumberToString');
    return input.toString();
  },

  async ConvertStringToArrayList(input: string): Promise<string[]> {
    console.log(input);
    console.log('ConvertStringToArrayList');
    return input.split('');
  },

  async KillWorker(): Promise<void> {
    setImmediate(() => {
      process.exit(0);
    });

    return;
  }
};

async function run() {
  const worker = await Worker.create({
    activities,
    taskQueue: 'multiservice',
  });

  await worker.run();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

