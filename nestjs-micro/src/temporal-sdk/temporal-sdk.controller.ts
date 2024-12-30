import { Body, Controller, Post } from '@nestjs/common';
import { TemporalSdkService } from './temporal-sdk.service';

@Controller('temporal')
export class TemporalController {
  constructor(private temporalSdkService: TemporalSdkService) {}

  @Post('start')
  async start() {
    return await this.temporalSdkService.startWorkflow();
  }

  @Post('start-multiservice')
  async startMultiservice(@Body() body: { input: string }) {
    const { input } = body;
    return await this.temporalSdkService.startMultiserviceWorkflow(input);
  }
}