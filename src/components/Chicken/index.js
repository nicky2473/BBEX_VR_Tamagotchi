import React, { PureComponent } from "react";
import { asset } from "react-360";
import Entity from "Entity";

export default class Chicken extends PureComponent {
  render() {
    return (
      <Entity
        source={{
          obj: asset("chicken/chicken_01.obj")
        }}
        style={{
          transform: [
            { translate: [-10, 0, -10] },
            { scaleX: 0.05 },
            { scaleY: 0.05 },
            { scaleZ: 0.05 }
          ]
        }}
      />
    );
  }
}
