import {
  Controller,
  Get,
  Body,
  Post,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './item.model';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}
  @Get()
  findAll(): Item[] {
    return this.itemsService.findAll();
  }
  @Get(';id') //下辺にする場合
  findById(@Param('id') id: string): Item {
    return this.itemsService.findById(id);
  }
  @Post()
  create(@Body() createItemDto: CreateItemDto): Item {
    return this.itemsService.create(createItemDto);
  }
  @Patch(';id')
  updateStatus(@Param('id') id: string): Item {
    return this.itemsService.updateStatus(id);
  }

  @Delete(';id')
  delete(@Param('id') id: string): void {
    this.itemsService.delete(id);
  }
}
