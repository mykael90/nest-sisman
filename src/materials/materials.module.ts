import { Module } from '@nestjs/common';
import { MaterialsService } from './materials.service';
import { MaterialsController } from './materials.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [MaterialsController],
  providers: [MaterialsService],
  imports: [PrismaModule],
})
export class MaterialsModule {}
