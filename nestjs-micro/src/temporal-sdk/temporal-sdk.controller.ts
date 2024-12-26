import { Controller, Post } from '@nestjs/common';
import { TemporalSdkService } from './temporal-sdk.service';

@Controller('temporal')
export class TemporalController {
  constructor(private temporalSdkService: TemporalSdkService) {}

  @Post('start')
  async start() {
    return await this.temporalSdkService.startWorkflow();
  }
}