import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TemporalSdkModule } from './temporal-sdk/temporal-sdk.module';

@Module({
  imports: [TemporalSdkModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
