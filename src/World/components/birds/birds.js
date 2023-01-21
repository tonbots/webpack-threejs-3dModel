import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Flamingo, Parrot, Stork } from "../../../../static/models";
import setupModel from "./setupModel";

async function loadBirds() {
  const loader = new GLTFLoader();

  const [parrotData, flamingoData, storkData] = await Promise.all([
    loader.loadAsync(Parrot),
    loader.loadAsync(Flamingo),
    loader.loadAsync(Stork),
  ]);

  const parrot = setupModel(parrotData);
  parrot.position.set(0, 0, 2.5);

  const flamingo = setupModel(flamingoData);
  flamingo.position.set(7.5, 0, -10);

  const stork = setupModel(storkData);
  stork.position.set(0, -2.5, -10);

  return { parrot, flamingo, stork };
}

export default loadBirds;
