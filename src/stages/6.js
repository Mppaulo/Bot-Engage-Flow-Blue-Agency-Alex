import { VenomBot } from '../venom.js';
import { storage } from '../storage.js';
import { STAGES } from '../stages.js';

export const consultorStage = {
  async exec({ from }) {
    const venombot = await VenomBot.getInstance();

    const message = `
🔔 *Falar com um Consultor*:

Por favor, informe seu nome e e-mail para que possamos agendar um horário com um de nossos consultores:
    `;
    await venombot.sendText(from, message);
  },
};

export const consultorFinalStage = {
  async exec({ from, message }) {
    const venombot = await VenomBot.getInstance();

    storage[from].contact = {
      name: message.trim().split(' ')[0],
      email: message.trim().split(' ')[1],
    };
    
    const responseMessage = `
Obrigado ${storage[from].contact.name}, entraremos em contato através do e-mail ${storage[from].contact.email} para agendar um horário com um de nossos consultores.
    `;
    await venombot.sendText(from, responseMessage);
    storage[from].stage = STAGES.ENCERRAR_ATENDIMENTO;
  },
};
