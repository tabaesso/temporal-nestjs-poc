import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class TemporalSdkService {
  constructor(private readonly logger: Logger) {}

  private async get<T>(firstParam: T): Promise<T> {
    return firstParam;
  }
}
