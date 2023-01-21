import createCamera from "./components/camera";
import createLights from "./components/lights";
import createScene from "./components/scene";
import createControls from "./systems/controls";
import Loop from "./systems/Loop";
import createRenderer from "./systems/renderer";
import Resizer from "./systems/Resize";
import loadBirds from "./components/birds/birds";

// from outside the module
let controls;
let camera;
let renderer;
let scene;
let loop;

class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);

    controls = createControls(camera, renderer.domElement);

    const { ambientLight, mainLight } = createLights();

    // loop.updatables.push(cube);
    loop.updatables.push(controls);

    scene.add(ambientLight, mainLight);

    const resizer = new Resizer(container, camera, renderer);
  }

  async init() {
    const { parrot, flamingo, stork } = await loadBirds();

    controls.target.copy(parrot.position);

    scene.add(parrot, flamingo, stork);
  }

  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export default World;
