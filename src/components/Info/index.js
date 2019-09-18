import PropTypes from "prop-types";
import React, { PureComponent } from "react";
import InfoView from "./InfoView";
import { talk } from "../../talk";

export default class Info extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    pos: PropTypes.number.isRequired
  };

  state = {
    open: false
  };

  render() {
    const { name } = this.props;
    return <InfoView name={name} onClick={this.handleClick} />;
  }

  handleClick = () => {
    const { pos } = this.props;
    this.setState(({ open }) => ({ open: !open }));
    talk({ pos });
  };
}
