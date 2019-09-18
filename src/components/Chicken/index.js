import React, { PureComponent } from "react";
import { asset, View, AmbientLight } from "react-360";
import Entity from "Entity";

export default class Chicken extends PureComponent {
  render() {
    return (
      <View>
        <AmbientLight intensity={2.5} />
        <Entity
          source={{
            obj: asset("chicken/Chicken_01.obj"),
            mtl: asset("chicken/Chicken_01.mtl")
          }}
          style={{
            transform: [
              { translate: [-10, 0, -10] },
              { scale: 0.01 },
              { rotateY: 90 }
            ]
          }}
        />
      </View>
    );
  }
}
