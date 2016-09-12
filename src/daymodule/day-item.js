import React, {
  Component,
  Text
} from 'react-native';

import liststyle from "./day-item-style";

class DayItem extends Component {
  render () {
    return (
      <Text style={this.liststyle}>
        {this.props.day}
      </Text>
    );
  }
}

module.exports = DayItem;
