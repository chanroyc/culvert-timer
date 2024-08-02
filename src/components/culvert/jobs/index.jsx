import { v1 as AdeleV1, v2 as AdeleV2 } from './adele';
import Bishop from './bishop';
import { v1 as DawnWarriorV1, v2 as DawnWarriorV2 } from './dw';
import NightWalker from './nw';
import WindArcher from './wa';
import Shadower from './shadower';

export default [
  {
    name: 'Adele v1',
    data: AdeleV1,
  },
  {
    name: 'Adele v2',
    data: AdeleV2,
  },
  {
    name: 'Bishop',
    data: Bishop,
  },
  {
    name: 'Dawn Warrior v1',
    data: DawnWarriorV1,
  },
  {
    name: 'Dawn Warrior v2',
    data: DawnWarriorV2
  },
  {
    name: 'Night Walker',
    data: NightWalker,
  },
  {
    name: 'Wind Archer',
    data: WindArcher,
  },
  {
    name: 'Shadower',
    data: Shadower,
  }
]