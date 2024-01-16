import CulvertAdele from "./culvert-adele/culvert-adele";
import CulvertNW from "./culvert-nw/culvert-nw";
import CulvertWA from "./culvert-wa/culvert-wa";
import CulvertDW from "./culvert-dw/culvert-dw";

const culvert = [
  {
    name: 'Adele (no cd hat)',
    component: <CulvertAdele />,
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