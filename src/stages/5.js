import { VenomBot } from '../venom.js';
import { storage } from '../storage.js';
import { STAGES } from '../stages.js';

export const faqStage = {
  async exec({ from, message }) {
    const venombot = await VenomBot.getInstance();

    if (message.trim() === '0') {
      storage[from].stage = STAGES.ENCERRAR_ATENDIMENTO;
      await encerrarAtendimentoStage.exec({ from });
      return;
    }

    const responseMessage = `
❓ *Dúvidas Frequentes*:

1️⃣ - Como funciona o processo de criação de sites?
2️⃣ - Quais são as formas de pagamento aceitas?
3️⃣ - Quanto tempo leva para ver resultados de SEO?
4️⃣ - Como medir o sucesso das campanhas de publicidade?
0️⃣ - Encerrar atendimento

Por favor, selecione a opção desejada:
    `;
    await venombot.sendText(from, responseMessage);

    if (message.trim() !== '0') {
      storage[from].stage = STAGES.FAQ_SELECTION;
    }
  },
};

export const faqSelectionStage = {
  async exec({ from, message }) {
    const venombot = await VenomBot.getInstance();

    let responseMessage;

    switch (message.trim()) {
      case '1':
        responseMessage = 'O processo de criação de sites envolve...';
        break;
      case '2':
        responseMessage = 'Aceitamos as seguintes formas de pagamento...';
        break;
      case '3':
        responseMessage = 'O tempo para ver resultados de SEO varia...';
        break;
      case '4':
        responseMessage = 'Para medir o sucesso das campanhas de publicidade...';
        break;
      default:
        responseMessage = 'Opção inválida. Por favor, selecione uma opção válida.';
        break;
    }

    await venombot.sendText(from, responseMessage);
    storage[from].stage = STAGES.FAQ;
  },
};
