/* eslint-disable prettier/prettier */
import { SetMetadata } from '@nestjs/common';
export const Role = (...statuses: string[]) => SetMetadata('statues', statuses);
