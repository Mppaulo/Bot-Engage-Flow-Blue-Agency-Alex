import { VenomBot } from '../venom.js'
import { menu } from '../menu.js'
import { storage } from '../storage.js'
import { STAGES } from './index.js'

export const stageTwo = {
  async exec(params) {
    const message = params.message.trim()
    const isMsgValid = /[1|2|3|4|5|#|*]/.test(message)

    let msg =
      '❌ *Digite uma opção válida, por favor.* \n⚠️ ```APENAS UMA OPÇÃO POR VEZ``` ⚠️'

    if (isMsgValid) {
      if (['#', '*'].includes(message)) {
        const option = options[message]()
        msg = option.message
        storage[params.from].stage = option.nextStage
      } else {
        msg =
          `✅ *${menu[message].description}* adicionado com sucesso! \n\n` +
          '```Digite outra opção```: \n\n' +
          '\n-----------------------------------\n#️⃣ - ```ESCOLHER ESTRRATEGIAS``` \n*️⃣ - ```CANCELAR ```'
        storage[params.from].itens.push(menu[message])
      }

      if (storage[params.from].stage === STAGES.INICIAL) {
        storage[params.from].itens = []
      }
    }

    await VenomBot.getInstance().sendText({ to: params.from, message: msg })
  },
}

const options = {
  '*': () => {
    const message =
      '🔴 Solicitação *CANCELADa* com sucesso. \n\n ```Volte Sempre!```'

    return {
      message,
      nextStage: STAGES.INICIAL,
    }
  },
  '#': () => {
    const message =
      '🗺️ Agora, informe o *E-mail*. \n ( ```EX: contato@engageflow.sgop``` ) \n\n ' +
      '\n-----------------------------------\n*️⃣ - ```CANCELAR solicitação```'

    return {
      message,
      nextStage: STAGES.RESUMO,
    }
  },
}
