import { VenomBot } from './venom.js';
import { stages, STAGES, getStage } from './stages.js';
import { storage } from './storage.js';

const main = async () => {
  try {
    const venombot = await VenomBot.getInstance();

    venombot.onMessage(async (message) => {
      if (message.isGroupMsg) return;

      const from = message.from;

      if (!storage[from]) {
        storage[from] = {
          stage: STAGES.INICIAL,
          service: null,
          contact: {},
        };
      }

      const currentStage = getStage({ from });
      console.log(`Usuário ${from} está no estágio ${currentStage}`);

      if (!stages[currentStage]) {
        console.error(`Erro: estágio ${currentStage} não encontrado para o usuário ${from}`);
        return;
      }

      try {
        await stages[currentStage].stage.exec({
          from: message.from,
          message: message.body,
        });
      } catch (error) {
        console.error(`Erro ao executar estágio ${currentStage} para o usuário ${from}:`, error);
      }
    });
  } catch (error) {
    console.error(error);
  }
};

main();
