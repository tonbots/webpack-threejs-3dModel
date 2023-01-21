import "./main.css";
import World from "./World/Wolrd";

async function main() {
  // Get a reference to the container element
  const container = document.querySelector("#scene-container");

  // 1. Create an instance of the World app
  const world = new World(container);

  // produce a single frame (render on demand)
  await world.init();

  // start the loop (produce a stream of frames)
  world.start();
}
main().catch((err) => {
  console.error(err);
});
