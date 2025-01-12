import chalk from "chalk"
import qr from "qrcode-terminal"


async function handler(err, result) {
  if (err) {
    console.log(`error on application: ${err}`)
    return
  }

  const isSmall = result.type == 2;
  qr.generate(result.link, { small: isSmall }, (qrcode) => {
    console.log(chalk.green("\n✅ QR CODE gerado com sucesso.\n"))
    console.log(qrcode)
  })


}

export default handler