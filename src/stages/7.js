import { VenomBot } from '../venom.js';

export const encerrarAtendimentoStage = {
  async exec({ from }) {
    const venombot = await VenomBot.getInstance();

    const message = `
🔚 *Encerrando Atendimento*:

Obrigado pelo seu contato. Se precisar de mais alguma coisa, estarei por aqui! Tenha um ótimo dia! 😊
    `;
    await venombot.sendText(from, message);
  },
};
