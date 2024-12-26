import { Logger, Module } from '@nestjs/common';
import { TemporalSdkService } from './temporal-sdk.service';

@Module({
  imports: [],
  providers: [TemporalSdkService, Logger],
  exports: [TemporalSdkService],
})
export class TemporalSdkModule {}
