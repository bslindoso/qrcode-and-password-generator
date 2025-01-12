import chalk from "chalk";
import { pinkHex } from "../../color-conts.mjs";

async function createPassword() {
  console.log(chalk.hex(pinkHex)("paassword"))
}

export default createPassword