// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { ReactInstance, Surface, Location } from "react-360-web";

function init(bundle, parent, options = {}) {
  const SIZE = 300;

  const makeRandomNumber = () => {
    return Math.random() * 3;
  };

  // LOCATIONS : DOOR, ON THE CHAIR, ON THE DESK
  const locations = [[7.5, -10, 0], [2, -6, 2], [18, -6, 4]];
  const rn = Math.floor(makeRandomNumber());
  const location = new Location(locations[rn]);

  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options
  });

  // BUTTON
  const buttonSurface = new Surface(SIZE, SIZE, Surface.SurfaceShape.Flat);
  buttonSurface.setAngle(0, 0);
  r360.renderToSurface(
    r360.createRoot("Info", { name: "Talk", pos: rn }),
    buttonSurface
  );

  // 3D CHICKEN
  r360.renderToLocation(r360.createRoot("Chicken"), location);

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL("equismall.jpg"));
}

window.React360 = { init };
