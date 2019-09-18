import React, { PureComponent } from 'react';
import { asset } from 'react-360';
import Entity from 'Entity';
import { subscribe } from '../../rotate';

export default class Chicken extends PureComponent {
  state = {
    rotated: 0,
  };

  componentDidMount() {
    subscribe(this.handleRotate);
  }

  render() {
    const { rotated } = this.state;
    return (
      <Entity
        source={{
          obj: asset('chicken/chicken_01.obj'),
        }}
        style={{transform:[
          {translate: [-10, 0, -10]},
          {scaleX: 0.02 },
          { scaleY: 0.02 },
          { scaleZ: 0.02 },
          { rotateX: rotated },
        ]}}
      />
    );
  }

  handleRotate = () => {
    this.setState(({ rotated }) => ({ rotated: rotated + 1 }));
  }
}