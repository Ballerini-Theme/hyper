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

const colors = {
  backgroundColor: "#261C1E",
  cursorColor: "#A45A49",
  foregroundColor: "#FFF2E7",
  cursorAccentColor: "#2F2325",
  selectionColor: "#583c38",
  borderColor: "#8E646B",
  black: "#EFC764",
  green: "#67E480",
  red: "#E94554",
  comment: "#8E646B",
};
