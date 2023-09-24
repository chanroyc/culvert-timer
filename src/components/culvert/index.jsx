import CulvertAdeleV1 from "./culvert-adele-v1/culvert-adele-v1";
import CulvertAdeleV2 from "./culvert-adele-v2/culvert-adele-v2";
import CulvertNW from "./culvert-nw/culvert-nw";
import CulvertWA from "./culvert-wa/culvert-wa";

export default [
  {
    name: 'Adele v1 (no cd hat)',
    component: <CulvertAdeleV1 />,
  },
  {
    name: 'Adele v2 (no cd hat)',
    component: <CulvertAdeleV2 />,
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