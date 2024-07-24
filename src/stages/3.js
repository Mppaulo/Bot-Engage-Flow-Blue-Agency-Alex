import { VenomBot } from '../venom.js'
import { storage } from '../storage.js'
import { STAGES } from './index.js'

export const stageThree = {
  async exec({ from, message }) {
    storage[from].address = message
    storage[from].stage = STAGES.PEDIDO

    let msg = 'Solicitação *CANCELADA* com sucesso. \n Volte Sempre!'
    if (message === '*') {
      storage[from].stage = STAGES.INICIAL
    } else {
      const itens = storage[from].itens
      const desserts = itens.map((item) => item.description).join(', ')

      const total = storage[from].itens.length

      msg =
        `🗒️ *RESUMO DA SOLICITAÇÃO*: \n\n🧁 SOLUÇÕES SOLICITADAS: *${desserts}* \n📍 E-mail: *${message}* \n⏳ Tempo de entrega: *a combinar*. \n\n` +
        '🔊 *Como especialistas, sabemos que um serviço personalizado faz a diferença. Imagine um serviço adaptado às suas necessidades! \n\n✨ Conte-nos mais sobre o que você precisa e qualquer outra informação importante.*'
    }

    await VenomBot.getInstance().sendText({ to: from, message: msg })

     //return '✅ *Prontinho, pedido feito!* \n\nAgora, se você ainda não sabe o valor da taxa de entrega para sua região, vou te passar para um atendente para que ele verique o valor da *taxa de entrega*. \n\n⏳ *Aguarde um instante*.'
  },
}
