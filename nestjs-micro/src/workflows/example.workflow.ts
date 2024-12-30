import { proxyActivities } from '@temporalio/workflow';
import type * as activities from '../activities/example.activity';

const { getUser } = proxyActivities<typeof activities>({
  startToCloseTimeout: '1 minute',
});

export async function exampleWorkflow(email: string, apiUrl: string): Promise<string> {
  console.log('Workflow started.');

  const greetingUser = await getUser();

  return greetingUser || 'Hello there!';
}
