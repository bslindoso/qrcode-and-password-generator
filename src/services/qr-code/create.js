import prompt from "prompt";
import promptQRCode from "../../prompts/prompt-qrcode.js";
import handler from "./handler.js";



async function createQRCode() {
  prompt.get(promptQRCode, handler)
}

export default createQRCode