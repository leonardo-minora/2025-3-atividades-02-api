import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Task])], // aqui configura as entidades
  controllers: [TasksController], // importa as urls e os métodos
  providers: [TasksService], // importa a lógica de negócio, para onde as urls e métodos vão chamar
})
export class TasksModule {}