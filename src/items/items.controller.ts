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
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from '../entities/item.entity';
import { CreateItemDto } from './dto/create-item.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('items')
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
  @UseGuards(JwtAuthGuard)
  async create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return await this.itemsService.create(createItemDto);
  }
  @Patch(';id')
  async updateStatus(@Param('id', ParseUUIDPipe) id: string): Promise<Item> {
    return await this.itemsService.updateStatus(id);
  }

  @Delete(';id')
  @UseGuards(JwtAuthGuard)
  async delete(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    await this.itemRepojitory.delete({ id });
  }
}
