import { Post, Controller } from '@nestjs/common';
import { SensorDataEntity } from './sensor-data.entity';

@Controller('sensor-data')
export class SensorDataController {
  constructor() {}

  @Post()
  post(data: SensorDataEntity): void {

  }
}
