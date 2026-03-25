import type { ShopId, ShopDefinition } from '../types';
import { tesco } from './tesco';
import { sainsburys } from './sainsburys';
import { morrisons } from './morrisons';

export const shops: ShopDefinition[] = [tesco, sainsburys, morrisons];

export const shopById: Record<ShopId, ShopDefinition> = {
  tesco,
  sainsburys,
  morrisons,
};
