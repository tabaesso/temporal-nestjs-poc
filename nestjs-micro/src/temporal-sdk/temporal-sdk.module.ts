import { Logger, Module, OnModuleInit } from '@nestjs/common';
import { TemporalSdkService } from './temporal-sdk.service';
import { TemporalController } from './temporal-sdk.controller';
import { WorkerService } from '../worker/worker.service';

@Module({
  imports: [],
  controllers: [TemporalController],
  providers: [TemporalSdkService, Logger, WorkerService],
  exports: [TemporalSdkService],
})
export class TemporalSdkModule { }
