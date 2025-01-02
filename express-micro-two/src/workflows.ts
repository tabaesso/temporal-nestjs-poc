import { proxyActivities } from '@temporalio/workflow';
import type * as activities from './activities';

const { sayHelloWorld } = proxyActivities<
  typeof activities
>({
  startToCloseTimeout: '10 seconds',
});

export async function greeting(name: string): Promise<string> {
  const message = await sayHelloWorld(name);
  console.log('Received message:', message);
  return message;
}