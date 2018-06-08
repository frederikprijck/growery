import { Module } from '@nestjs/common';
import { SensorDataController } from './sensor-data.controller';

@Module({
  imports: [],
  controllers: [SensorDataController],
})
export class SensorDataModule {}
