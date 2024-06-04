/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Body,
  Post,
  Param,
  Delete,
  ParseUUIDPipe,
  Patch,
  UseGuards,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from '../entities/item.entity';
import { CreateItemDto } from './dto/create-item.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { GetUser } from 'src/auth/decorator/get-user.decoretor';
import { User } from 'src/entities/user.entity';
import { RolesGuard } from 'src/auth/guards/roles.gurd';
import { Role } from 'src/auth/decorator/role.decorator';
import { UserStatus } from 'src/auth/user-status.enum';

@Controller('items')
@UseInterceptors(ClassSerializerInterceptor)
export class ItemsController {
  // eslint-disable-next-line no-undef
  [x: string]: any;
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly itemsService: ItemsService) {}
  @Get()
  async findAll(): Promise<Item[]> {
    return await this.itemsService.findAll();
  }
  @Get(';id') //下辺にする場合
  async findById(@Param('id', ParseUUIDPipe) id: string): Promise<Item> {
    return this.itemsService.findById(id);
  }
  @Post()
  @Role(UserStatus.PREMIUM)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async create(
    @Body() createItemDto: CreateItemDto,
    @GetUser() user: User,
  ): Promise<Item> {
    return await this.itemsService.create(createItemDto, user);
  }
  @Patch(';id')
  async updateStatus(
    @Param('id', ParseUUIDPipe) id: string,
    @GetUser() user: User,
  ): Promise<Item> {
    return await this.itemsService.updateStatus(id, user);
  }

  @Delete(';id')
  @UseGuards(JwtAuthGuard)
  async delete(
    @Param('id', ParseUUIDPipe) id: string,
    @GetUser() user: User,
  ): Promise<void> {
    await this.itemRepojitory.delete({ id, user });
  }
}
