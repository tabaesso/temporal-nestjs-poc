import { Logger, Module, OnModuleInit } from '@nestjs/common';
import { TemporalSdkService } from './temporal-sdk.service';
import { TemporalController } from './temporal-sdk.controller';

@Module({
  imports: [],
  controllers: [TemporalController],
  providers: [TemporalSdkService, Logger],
  exports: [TemporalSdkService],
})
export class TemporalSdkModule {}
