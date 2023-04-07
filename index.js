const colors = require("./colors");

module.exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    cursorColor: colors.cursorColor,
    cursorAccentColor: colors.cursorAccentColor,
    foregroundColor: colors.foregroundColor,
    backgroundColor: colors.backgroundColor,
    selectionColor: colors.selectionColor,
    borderColor: colors.borderColor,
    fontWeightBold: "normal",
    colors: {
      black: colors.cursorColor,
      red: colors.red,
      green: colors.foregroundColor,
      yellow: "#ffca85",
      blue: "#61ffca",
      magenta: colors.comment,
      cyan: colors.foregroundColor,
      white: colors.foregroundColor,
      lightBlack: "#4d4d4d",
      lightRed: "#ffca85",
      lightGreen: colors.comment,
      lightYellow: "#ffca85",
      lightBlue: colors.black,
      lightMagenta: colors.comment,
      lightCyan: "#61ffca",
      lightWhite: colors.foregroundColor,
    },
  });
};
