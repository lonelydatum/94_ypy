import { games } from "./reads";

import { start } from "./_games_arcade.js";

function init() {
  return start(games);
}

export { init };
