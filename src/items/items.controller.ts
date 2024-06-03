import {
  Controller,
  Get,
  Body,
  Post,
  Param,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from '../entities/item.entity';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
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
  async create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return await this.itemsService.create(createItemDto);
  }
  // @Patch(';id')
  // updateStatus(@Param('id', ParseUUIDPipe) id: string): Item {
  //   return this.itemsService.updateStatus(id);
  // }

  @Delete(';id')
  delete(@Param('id', ParseUUIDPipe) id: string): void {
    this.itemsService.delete(id);
  }
}
