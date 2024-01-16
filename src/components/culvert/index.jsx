import CulvertAdeleV1 from "./culvert-adele-v1/culvert-adele-v1";
import CulvertAdeleV2 from "./culvert-adele-v2/culvert-adele-v2";
import CulvertNW from "./culvert-nw/culvert-nw";
import CulvertWA from "./culvert-wa/culvert-wa";
import CulvertDW from "./culvert-dw/culvert-dw";

const culvert = [
  {
    name: 'Adele v2 (no cd hat)',
    component: <CulvertAdeleV2 />,
  },
  {
    name: 'Adele v1 (no cd hat)',
    component: <CulvertAdeleV1 />,
  },
  {
    name: 'Dawn Warrior',
    component: <CulvertDW />,
  },
  {
    name: 'Night Walker',
    component: <CulvertNW />,
  },
  {
    name: 'Wind Archer',
    component: <CulvertWA />,
  },
]

export default culvert;