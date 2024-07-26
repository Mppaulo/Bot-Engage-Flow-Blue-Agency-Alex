import { initialStage } from './stages/0.js';
import { perguntarNomeStage } from './stages/1.js';
import { serviceStage } from './stages/2.js';
import { serviceDetailStage } from './stages/3.js';
import { budgetStage } from './stages/4.js';
import { faqStage, faqSelectionStage } from './stages/5.js';
import { consultorStage, consultorFinalStage } from './stages/6.js';
import { encerrarAtendimentoStage } from './stages/7.js';
import { storage } from './storage.js';

export const stages = {
  '0': { descricao: 'Welcome', stage: initialStage },
  '1': { descricao: 'Perguntar Nome', stage: perguntarNomeStage },
  '2': { descricao: 'Services', stage: serviceStage },
  '3': { descricao: 'Service Detail', stage: serviceDetailStage },
  '4': { descricao: 'Budget', stage: budgetStage },
  '5': { descricao: 'FAQ', stage: faqStage },
  '5.1': { descricao: 'FAQ Selection', stage: faqSelectionStage },
  '6': { descricao: 'Consultor', stage: consultorStage },
  '6.1': { descricao: 'Consultor Final', stage: consultorFinalStage },
  '7': { descricao: 'Encerrar Atendimento', stage: encerrarAtendimentoStage },
};

export const STAGES = {
  INICIAL: '0',
  PERGUNTAR_NOME: '1',
  SERVICOS: '2',
  DETALHE_SERVICO: '3',
  ORCAMENTO: '4',
  FAQ: '5',
  FAQ_SELECTION: '5.1',
  CONSULTOR: '6',
  CONSULTOR_FINAL: '6.1',
  ENCERRAR_ATENDIMENTO: '7',
};

export function getStage({ from }) {
  return storage[from]?.stage || STAGES.INICIAL;
}
