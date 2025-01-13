import chalk from "chalk";
import { pinkHex } from "../../color-conts.mjs";
import handler from "./handler.js";

async function createPassword() {
  const password = await handler()
  console.log(chalk.hex(pinkHex)(password))
}

export default createPassword