import prompt from "prompt"
import mainPrompt from "./prompts/prompt-main.js"
import createQRCode from "./services/qr-code/create.js";
import chalk from "chalk";
import { orangeHex } from "./color-conts.mjs"
import { generateHeader } from "../utils/utils.mjs"


(async function main() {

  generateHeader(
    chalk.hex(orangeHex).bold("ESCOLHA A FERRAMENTA"),
    chalk.hex(orangeHex).bold("="),
    30
  )


  prompt.get(mainPrompt, async (err, choice) => {
    if (choice.select == 1) await createQRCode()
    if (choice.select == 2) console.log("Escolheu PAASSWORD")
  })
})();