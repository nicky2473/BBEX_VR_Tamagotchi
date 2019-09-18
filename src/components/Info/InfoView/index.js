import PropTypes from "prop-types";
import React, { Component } from "react";
import { Text, View, VrButton } from "react-360";
import styles from "./styles";

export default class InfoView extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  };

  render() {
    const { name, onClick } = this.props;
    return (
      <View style={styles.root}>
        <VrButton style={styles.rootButton} onClick={onClick} />
        <Text style={styles.rootText}>{name}</Text>
      </View>
    );
  }
}
