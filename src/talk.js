import { asset, NativeModules } from "react-360";

const { AudioModule } = NativeModules;

export const talk = posObj => {
  if (posObj.pos === 0) {
    AudioModule.playOneShot({
      source: asset("door.mp3")
    });
  } else if (posObj.pos === 1) {
    AudioModule.playOneShot({
      source: asset("chair.mp3")
    });
  } else if (posObj.pos === 2) {
    AudioModule.playOneShot({
      source: asset("desk.mp3")
    });
  }
};
