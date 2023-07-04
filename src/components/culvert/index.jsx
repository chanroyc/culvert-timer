import CulvertAdele from "./culvert-adele/culvert-adele";
import CulvertNW from "./culvert-nw/culvert-nw";
import CulvertWA from "./culvert-wa/culvert-wa";

export default [
  {
    name: 'Adele (no cd hat)',
    component: <CulvertAdele />,
  },
  {
    name: 'NW',
    component: <CulvertNW />,
  },
  {
    name: 'WA',
    component: <CulvertWA />,
  },
]