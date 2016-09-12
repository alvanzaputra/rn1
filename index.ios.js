
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import moment from "moment";
import DayItem from "./src/daymodule/day-item";


class rn1 extends Component {
  render() {
    return <View style={styles.container}>
              <Text style={styles.listtitle}> List Day of the week : </Text>
              {this.days()}
            </View>
    }
  days = () => {
    var daysItems = [];

    for (var i = 0; i < 7; i++) {
      var day = moment().add(i,"days").format("dddd");
      daysItems.push(
        < DayItem day={day} daysUntil={i} />
      )
      }
      return daysItems
    }
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#FFF176",
  },
  listtitle: {
    textAlign: 'center',
    color: '#2c3e50',
    fontSize:18,
  },
});

AppRegistry.registerComponent('rn1', () => rn1);
