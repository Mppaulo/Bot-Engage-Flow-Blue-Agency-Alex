import { VenomBot } from '../venom.js';
import { storage } from '../storage.js';
import { STAGES } from '../stages.js';

export const serviceDetailStage = {
  async exec({ from, message }) {
    const venombot = await VenomBot.getInstance();

    const responseMessage = `
🔍 *Detalhes dos Serviços*:

- Criação de Sites: Desenvolvimento de sites responsivos e otimizados.
- Gestão de Redes Sociais: Gerenciamento completo das suas redes sociais.
- SEO: Otimização para motores de busca para aumentar sua visibilidade online.
- Campanhas de Publicidade Online: Criação e gestão de campanhas de marketing digital.
- Marketing de Conteúdo: Estratégias de conteúdo para engajar seu público.

Digite o número correspondente ao serviço para mais detalhes:
    `;
    await venombot.sendText(from, responseMessage);
    storage[from].stage = STAGES.DETALHE_SERVICO;
  },
};
