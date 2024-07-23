import { storage } from '../storage.js'
import { VenomBot } from '../venom.js'
import { STAGES } from './index.js'

export const initialStage = {
  async exec({ from }) {
    storage[from].stage = STAGES.MENU

    const venombot = await VenomBot.getInstance()

    const message = `
      👋 Olá, como vai?
      Eu sou Toth, o *assistente virtual* da ${venombot.getSessionName}.
      *Posso te ajudar?* 🙋‍♂️
      -----------------------------------
      1️⃣ - Estrátegias Digitais 🚀
      2️⃣ - Agendar com Especialista💡
      0️⃣ - Consultoria Gratutita 👨🏻‍💻
    `
    await venombot.sendText({ to: from, message })
  },
}
