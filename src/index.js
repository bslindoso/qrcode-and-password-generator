import prompt from "prompt"
import mainPrompt from "./prompts/prompt-main.js"
import createQRCode from "./services/qr-code/create.js";
import createPassword from "./services/password/create.js";
import chalk from "chalk";
import { orangeHex } from "./color-conts.mjs"
import { generateHeader } from "../utils/utils.mjs"


(async function main() {

  generateHeader(
    chalk.hex(orangeHex)("ESCOLHA A FERRAMENTA"),
    chalk.hex(orangeHex)("\\"),
    30
  )


  prompt.get(mainPrompt, async (err, result) => {
    if (result.select == 1) await createQRCode()
    if (result.select == 2) await createPassword()
  })
})();