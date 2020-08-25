/**
 * Check is color to string
 *
 * ref: https://www.regexpal.com/97509
 * ref2: https://stackoverflow.com/a/48485007
 * @param color string
 * @return color is string
 */
// eslint-disable-next-line import/prefer-default-export
export const isColor = (color: string): color is string => {
  const regex = /^(#([\da-f]{8})|#([\da-f]{3}){1,2}|(rgb|hsl)a\((\d{1,3}%?,\s?){3}(1|0?\.\d+)\)|(rgb|hsl)\(\d{1,3}%?(,\s?\d{1,3}%?){2}\))$/
  const colorStr = color.trim()
  if (!regex.test(colorStr)) {
    const option = new Option().style
    option.color = colorStr
    return option.color === colorStr
  }
  return true
}
