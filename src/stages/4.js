import { VenomBot } from '../venom.js';
import { storage } from '../storage.js';
import { STAGES } from '../stages.js';

export const budgetStage = {
  async exec({ from, message }) {
    const venombot = await VenomBot.getInstance();

    // Simulação de orçamento recebido
    storage[from].budget = message.trim();

    const responseMessage = `
Obrigado! Vamos enviar um orçamento detalhado para o e-mail fornecido.

Deseja mais alguma informação?
1️⃣ - VER SERVIÇOS
2️⃣ - ORÇAMENTO
3️⃣ - DÚVIDAS FREQUENTES
0️⃣ - FALAR COM UM CONSULTOR
    `;
    await venombot.sendText(from, responseMessage);
    storage[from].stage = STAGES.SERVICOS;
  },
};
