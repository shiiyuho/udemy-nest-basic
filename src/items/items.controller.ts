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
import { ItemStatus } from './item-status.enum';
import { Item } from './item.model';

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
  create(
    @Body('id') id: string,
    @Body('name') name: string,
    @Body('price') price: number,
    @Body('description') description: string,
  ): Item {
    const item: Item = {
      id,
      name,
      price,
      description,
      status: ItemStatus.ON_SALE,
    };
    return this.itemsService.create(item);
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
