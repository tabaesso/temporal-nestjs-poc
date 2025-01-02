export interface MultiserviceActivities {
  ConvertStringToNumber(input: string): Promise<number>;
  ConvertNumberToString(input: number): Promise<string>;
  ConvertStringToArrayList(input: string): Promise<string[]>;
}
