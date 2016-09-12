
var liststyle = style();

style = () => {
  return {
    color: this.color(),
    fontWeight: this.fontWeight(),
    fontSize: this.props.fontSize(),
    lineHeight: this.props.lineHeight()
  },
color = () => {
  var opacity = 1 / this.props.daysUntil;
  return "rgba (0, 0, 0, " + opacity + ")";
},
fontWeight = () => {
  var weight = 7 - this.props.daysUntil;
  return weight * 100;
},
fontSize = ()  => {
  return 60 - 6 * this.props.daysUntil;
},
lineHeight = ()  => {
  return 70 - 4 * this.props.daysUntil;
}
};

module.exports = liststyle;
