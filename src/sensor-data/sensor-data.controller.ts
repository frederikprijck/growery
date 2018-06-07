import { Get, Controller } from '@nestjs/common';

@Controller()
export class SensorDataController {
  constructor() {}

  @Get()
  root(): string {
  }
}
