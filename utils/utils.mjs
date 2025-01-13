/**
 * Generates a header with a centered text and a line of the specified character.
 * @param {string} text - The text to be displayed in the header.
 * @param {string} [char='-'] - The character to be used for the line. Defaults to '-'.
 * @param {number} [width=50] - The width of the header. Defaults to 50.
 * @returns {void}
 */
function generateHeader(text, char = '-', width = 50) {
  const line = char.repeat(width)
  const paddedText = text.padStart((width + text.length) / 2).padEnd(width)
  console.log(`\n` + line)
  console.log(paddedText)
  console.log(line)
}

export default generateHeader