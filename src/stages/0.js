import { storage } from '../storage.js';
import { VenomBot } from '../venom.js';
import { STAGES } from '../stages.js';

export const initialStage = {
  async exec({ from }) {
    if (!storage[from]) {
      storage[from] = {
        stage: STAGES.PERGUNTAR_NOME,
        service: null,
        contact: {},
      };
    } else {
      storage[from].stage = STAGES.PERGUNTAR_NOME;
    }

    const venombot = await VenomBot.getInstance();

    const message = `
👋 Olá, bem-vindo à *Agência Digital Turbo*!

Eu sou a Mia, sua *assistente virtual*. 
Para começarmos, por favor, informe seu nome:
    `;
    await venombot.sendText(from, message);
  },
};
