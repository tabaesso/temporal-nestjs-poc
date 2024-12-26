import { Logger, Module, OnModuleInit } from '@nestjs/common';
import { TemporalSdkService } from './temporal-sdk.service';
import { Client } from '@temporalio/client';

@Module({
  imports: [],
  providers: [TemporalSdkService, Logger],
  exports: [TemporalSdkService],
})
export class TemporalSdkModule {}
