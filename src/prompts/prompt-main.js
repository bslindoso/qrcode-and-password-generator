import chalk from "chalk"
import { orangeHex } from "../color-conts.mjs"

const mainPrompt = [
  {
    name: "select",
    description: chalk.hex(orangeHex).bold("Escolha a ferramenta:\n\n(1) QRCODE\n(2) PASSWORD"),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic("Escolha apenas entre 1 e 2"),
    require: true,
  }
]

export default mainPrompt