import { storage } from '../storage.js';
import { VenomBot } from '../venom.js';
import { STAGES } from '../stages.js';

export const perguntarNomeStage = {
  async exec({ from, message }) {
    const venombot = await VenomBot.getInstance();

    // Captura o nome do usuário
    storage[from].contact.name = message.trim();
    // Atualiza o estágio para Serviços
    storage[from].stage = STAGES.SERVICOS;

    const responseMessage = `
Obrigado, ${storage[from].contact.name}! Como posso te ajudar hoje? 😊
-----------------------------------
1️⃣ - VER SERVIÇOS
2️⃣ - ORÇAMENTO
3️⃣ - DÚVIDAS FREQUENTES
0️⃣ - FALAR COM UM CONSULTOR
    `;
    await venombot.sendText(from, responseMessage);
  },
};
