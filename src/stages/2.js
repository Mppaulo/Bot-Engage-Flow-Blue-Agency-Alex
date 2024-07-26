import { VenomBot } from '../venom.js';
import { storage } from '../storage.js';
import { STAGES } from '../stages.js';

export const serviceStage = {
  async exec({ from, message }) {
    const venombot = await VenomBot.getInstance();

    let responseMessage;

    switch (message.trim()) {
      case '1':
        responseMessage = `
🚀 *Nossos Serviços*:

1️⃣ - Criação de Sites
2️⃣ - Gestão de Redes Sociais
3️⃣ - SEO (Otimização para Motores de Busca)
4️⃣ - Campanhas de Publicidade Online
5️⃣ - Marketing de Conteúdo

Por favor, selecione o serviço que você tem interesse:
        `;
        storage[from].stage = STAGES.DETALHE_SERVICO;
        break;
      case '2':
        responseMessage = `
💰 *Solicitação de Orçamento*:

Para solicitar um orçamento, por favor, informe os detalhes do serviço que você precisa e seu e-mail para contato:
        `;
        storage[from].stage = STAGES.ORCAMENTO;
        break;
      case '3':
        responseMessage = `
❓ *Dúvidas Frequentes*:

1️⃣ - Como funciona o processo de criação de sites?
2️⃣ - Quais são as formas de pagamento aceitas?
3️⃣ - Quanto tempo leva para ver resultados de SEO?
4️⃣ - Como medir o sucesso das campanhas de publicidade?
0️⃣ - Encerrar atendimento

Por favor, selecione a opção desejada:
        `;
        storage[from].stage = STAGES.FAQ;
        break;
      case '0':
        responseMessage = `
🔔 *Falar com um Consultor*:

Por favor, informe seu nome e e-mail para que possamos agendar um horário com um de nossos consultores:
        `;
        storage[from].stage = STAGES.CONSULTOR;
        break;
      default:
        responseMessage = 'Opção inválida. Por favor, selecione uma opção válida.';
        break;
    }

    await venombot.sendText(from, responseMessage);
  },
};
