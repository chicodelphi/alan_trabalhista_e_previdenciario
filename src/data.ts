export interface TriagePrefill {
  accidentType?: string;
  salary?: number;
  estimatedMonthly?: number;
  estimatedRetroactive?: number;
  yearsSinceAlta?: number;
  currentStatus?: string;
}

/**
 * Dados institucionais do escritório.
 *
 * ATENÇÃO — antes de publicar, substitua os campos marcados com TODO pelos
 * dados reais de contato do escritório. Os valores atuais são provisórios.
 */
export const LAWYER_INFO = {
  fullName: "Dr. Alan Jantsch",
  shortName: "Dr. Alan Jantsch",
  initials: "AJ",
  oab: "OAB/SC 73.129",
  // TODO: substituir pelo número real de WhatsApp (formato 55 + DDD + número)
  whatsappNumber: "5548999999999",
  // TODO: substituir pelo e-mail real do escritório
  email: "contato@alanjantsch.adv.br",
  states: ["DF", "SC", "AM", "RS", "SP"],
  statesLabel: "DF • SC • AM • RS • SP",
  statesSentence:
    "Distrito Federal, Santa Catarina, Amazonas, Rio Grande do Sul e São Paulo",
  // Versão já flexionada, para uso depois de verbos como "atua"
  statesSentenceInflected:
    "no Distrito Federal, em Santa Catarina, no Amazonas, no Rio Grande do Sul e em São Paulo",
  statesShortSentence: "DF, SC, AM, RS e SP",
  location: "Atuação no DF, SC, AM, RS e SP • Atendimento 100% digital",
};

export const STATES_DETAIL = [
  {
    uf: "DF",
    name: "Distrito Federal",
    note: "Justiça Federal e Tribunais Superiores em Brasília",
  },
  {
    uf: "SC",
    name: "Santa Catarina",
    note: "Sede da inscrição — OAB/SC 73.129",
  },
  {
    uf: "AM",
    name: "Amazonas",
    note: "Justiça Federal e do Trabalho na Região Norte",
  },
  {
    uf: "RS",
    name: "Rio Grande do Sul",
    note: "Varas previdenciárias e acidentárias",
  },
  {
    uf: "SP",
    name: "São Paulo",
    note: "Maior polo industrial e acidentário do país",
  },
];

export function buildWhatsAppUrl(customMessage?: string): string {
  const defaultMsg =
    "Olá, Dr. Alan Jantsch! Vim pelo site e gostaria de avaliar meu direito a Auxílio-Acidente / Indenização por Acidente.";
  const encoded = encodeURIComponent(customMessage || defaultMsg);
  return `https://wa.me/${LAWYER_INFO.whatsappNumber}?text=${encoded}`;
}

export const JURISDICTIONS_LIST = [
  "Auxílio-Acidente (Art. 86 Lei 8.213/91)",
  "Acidentes de Trabalho & Doenças Ocupacionais",
  "Atuação no Distrito Federal (DF)",
  "Atuação em Santa Catarina (SC)",
  "Atuação no Amazonas (AM)",
  "Atuação no Rio Grande do Sul (RS)",
  "Atuação em São Paulo (SP)",
  "Justiça Federal & Justiça do Trabalho",
  "Seguros de Vida em Grupo & Acidentes Pessoais",
  "Seguro Obrigatório & Responsabilidade Civil",
  "Revisão de Alta Médica & Negativas do INSS",
];

export interface SpecialtyItem {
  id: string;
  badge: string;
  title: string;
  legalBasis: string;
  summary: string;
  highlights: string[];
  featured: boolean;
  ctaLabel: string;
  whatsappContext: string;
}

export const SPECIALTIES_DATA: SpecialtyItem[] = [
  {
    id: "auxilio-acidente",
    badge: "FOCO PRINCIPAL • BENEFÍCIO INDENIZATÓRIO INSS",
    title: "Auxílio-Acidente (Receba Trabalhando até Aposentar)",
    legalBasis: "Art. 86 da Lei 8.213/91 • Tema 862 STJ • Súmula 47 TNU",
    summary:
      "Benefício mensal pago pelo INSS ao segurado que sofreu acidente de QUALQUER natureza (no trabalho, no trânsito ou em casa) e ficou com sequela permanente — ainda que mínima — que exija maior esforço ou reduza sua capacidade habitual.",
    highlights: [
      "Pago todo mês + 13º salário até o dia da sua aposentadoria (e soma no cálculo futuro da aposentadoria)",
      "Você PODE continuar trabalhando normalmente de carteira assinada (CLT) sem perder o benefício",
      "A ação é contra o INSS — sua empresa atual NÃO é processada nem notificada para demissão",
      "Direito aos valores atrasados dos últimos 5 anos contados da cessação do auxílio-doença",
    ],
    featured: true,
    ctaLabel: "Avaliar Direito ao Auxílio-Acidente",
    whatsappContext:
      "Olá Dr. Alan! Quero verificar se minha sequela dá direito ao Auxílio-Acidente no INSS.",
  },
  {
    id: "acidente-trabalho",
    badge: "FOCO PRINCIPAL • JUSTIÇA DO TRABALHO",
    title: "Acidente de Trabalho, Trajeto & Doença Ocupacional",
    legalBasis: "Arts. 19 a 21 da Lei 8.213/91 • Art. 7º, XXVIII da CF/88",
    summary:
      "Atuação firme e estratégica na defesa do trabalhador vítima de acidente típico em máquinas/obras, acidente no trajeto casa-trabalho ou doenças desenvolvidas pela função (coluna, ombro/manguito rotador, LER/DORT, perda auditiva e burnout).",
    highlights: [
      "Indenização por Danos Morais, Danos Materiais e Danos Estéticos (cicatrizes, amputações ou assimetrias)",
      "Pensão Mensal Vitalícia ou em parcela única proporcional à redução da capacidade de trabalho",
      "Garantia de Estabilidade Provisória de 12 meses no emprego (ou indenização substitutiva integral)",
      "Cumulável 100% com o Auxílio-Acidente pago pelo INSS (recebimento simultâneo das duas fontes)",
    ],
    featured: true,
    ctaLabel: "Analisar Indenização Trabalhista",
    whatsappContext:
      "Olá Dr. Alan! Sofri um acidente de trabalho / doença ocupacional e gostaria de analisar meus direitos.",
  },
  {
    id: "seguros-obrigatorios",
    badge: "APÓLICES & COBERTURAS SECURITÁRIAS",
    title: "Seguro Obrigatório, Vida em Grupo & Acidentes Pessoais",
    legalBasis: "Código Civil Arts. 757 e ss. • Súmula 475 STJ",
    summary:
      "Muitos trabalhadores desconhecem que possuem seguro de vida/invalidez incluído na convenção coletiva do sindicato, desconto em folha ou financiamento bancário. Cobramos judicialmente indenizações negadas ou pagas a menor.",
    highlights: [
      "Cobrança de IPA (Invalidez Permanente Total ou Parcial por Acidente) e IFPD em apólices coletivas empresariais",
      "Revisão de indenizações tarifadas a menor pelas seguradoras e Seguro Obrigatório de Trânsito",
      "Prazo prescricional específico — análise imediata de apólices e holerites sem custo inicial",
    ],
    featured: false,
    ctaLabel: "Verificar Apólices e Seguros",
    whatsappContext:
      "Olá Dr. Alan! Gostaria de verificar se tenho direito a indenização de Seguro Obrigatório ou Seguro de Vida/Acidentes.",
  },
  {
    id: "responsabilidade-civil",
    badge: "REPARAÇÃO INTEGRAL DE DANOS",
    title: "Responsabilidade Civil em Acidentes Graves",
    legalBasis: "Arts. 186, 927, 949 e 950 do Código Civil",
    summary:
      "Reparação civil completa contra causadores de acidentes de trânsito, transportadoras, concessionárias de rodovias, terceirizadas ou estabelecimentos quando há culpa ou atividade de risco.",
    highlights: [
      "Ressarcimento integral de despesas médicas, cirurgias, fisioterapia, próteses e lucros cessantes",
      "Pensionamento civil vitalício para acidentados autônomos, motoristas de app, MEIs e profissionais liberais",
      "Indenização em ricochete e pensão aos dependentes em casos de acidentes fatais",
    ],
    featured: false,
    ctaLabel: "Consultar Reparação Civil",
    whatsappContext:
      "Olá Dr. Alan! Sofri um acidente grave com terceiros e quero avaliar ação de Responsabilidade Civil.",
  },
];

export interface TestimonialItem {
  name: string;
  roleAndCity: string;
  caseTag: string;
  quote: string;
  outcomeHighlight: string;
}

/**
 * TODO (OBRIGATÓRIO ANTES DE PUBLICAR): substituir por depoimentos reais, com
 * autorização expressa e por escrito dos clientes, em conformidade com o
 * Provimento nº 205/2021 do Conselho Federal da OAB. Os textos abaixo são
 * apenas exemplos de preenchimento da seção.
 */
export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    name: "Marcos Vinícius R.",
    roleAndCity: "Operador de Máquinas CNC • Joinville/SC",
    caseTag: "Auxílio-Acidente + Indenização Trabalhista",
    quote:
      "Perdi parte do movimento de dois dedos na prensa em 2021. O INSS cortou meu auxílio-doença e voltei a trabalhar achando que não tinha mais nada a receber. O Dr. Alan garantiu meu Auxílio-Acidente mensal até aposentar mais 3 anos de atrasados, além da indenização da empresa.",
    outcomeHighlight: "Benefício implantado + 38 meses retroativos",
  },
  {
    name: "Cláudia Helena S.",
    roleAndCity: "Auxiliar de Produção em Frigorífico • Chapecó/SC",
    caseTag: "Doença Ocupacional no Ombro (Manguito Rotador)",
    quote:
      "Trabalhei 9 anos no corte e desenvolvi lesão crônica no ombro direito. Fui muito bem orientada em todas as etapas pelo WhatsApp, sem precisar viajar. Na perícia federal eu já sabia exatamente quais exames levar. Mudou a tranquilidade da minha família.",
    outcomeHighlight: "Auxílio-Acidente vitalício até aposentadoria",
  },
  {
    name: "Rogério Aparecido M.",
    roleAndCity: "Motoboy / Entregador CLT • Guarulhos/SP",
    caseTag: "Acidente de Trajeto (Moto) + Seguro Coletivo",
    quote:
      "Quebrei a tíbia e coloquei pino metálico num acidente voltando da entrega. Continuei trabalhando mancando um pouco. Com a equipe do Dr. Alan Jantsch, conquistei o Auxílio-Acidente todo mês no INSS e ainda acionamos o seguro coletivo que eu nem sabia que existia.",
    outcomeHighlight: "Dupla indenização: INSS mensal + Apólice IPA",
  },
  {
    name: "Antônio Carlos B.",
    roleAndCity: "Montador de Estruturas Metálicas • Brasília/DF",
    caseTag: "Queda em Altura • Lesão na Coluna Lombar",
    quote:
      "Eu tinha medo de entrar na Justiça e ficar marcado. O Dr. Alan explicou com total clareza que o pedido do Auxílio-Acidente era direto contra o INSS. Continuei no meu emprego normalmente e hoje recebo metade do meu benefício todo mês direto na conta.",
    outcomeHighlight: "Recebendo mensalmente sem sair do emprego",
  },
  {
    name: "Luciana Ferreira D.",
    roleAndCity: "Técnica de Enfermagem • Manaus/AM",
    caseTag: "Acidente Doméstico (Queda) com Sequela no Punho",
    quote:
      "Eu achava que só acidente dentro do hospital dava direito. Sofri uma queda em casa, coloquei placa no punho e perdi força de pinça. Como eu contribuía para o INSS, o Dr. Alan comprovou meu direito ao Auxílio-Acidente com perfeição.",
    outcomeHighlight: "Acidente fora do trabalho reconhecido na Justiça",
  },
  {
    name: "José Roberto N.",
    roleAndCity: "Motorista Carreteiro • Porto Alegre/RS",
    caseTag: "Colisão Rodoviária • Responsabilidade Civil + INSS",
    quote:
      "Atendimento de altíssimo nível. Mesmo com toda a correria da estrada, o acompanhamento das ações foi rápido e transparente, sempre pelo celular. Dá para sentir o preparo técnico de quem atua com acidentes todos os dias.",
    outcomeHighlight: "Pensão mensal + Auxílio-Acidente concedidos",
  },
];

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const FAQ_DATA: FaqItem[] = [
  {
    category: "Auxílio-Acidente & Emprego",
    question:
      "Posso receber o Auxílio-Acidente e continuar trabalhando de carteira assinada?",
    answer:
      "SIM! Essa é a principal vantagem do Auxílio-Acidente (Art. 86 da Lei 8.213/91). Por ter natureza estritamente indenizatória, ele NÃO impede você de trabalhar. Você continua exercendo sua profissão normalmente (na mesma empresa ou em qualquer outra), recebe seu salário integral e, somado a ele, recebe mensalmente o Auxílio-Acidente do INSS (inclusive 13º anual) até se aposentar.",
  },
  {
    category: "Relação com a Empresa",
    question:
      "Minha empresa será processada ou sabida se eu pedir o Auxílio-Acidente?",
    answer:
      "NÃO. Na ação de concessão de Auxílio-Acidente, o réu é exclusivamente o INSS (Instituto Nacional do Seguro Social), tramitando na Justiça Federal ou Vara de Acidentes. Seu empregador atual não é réu nesse processo, garantindo total segurança para quem deseja manter seu vínculo de trabalho sem atritos.",
  },
  {
    category: "Acidentes Fora do Trabalho",
    question: "Sofri acidente de moto, carro, jogando futebol ou em casa. Tenho direito?",
    answer:
      "SIM! A lei garante o Auxílio-Acidente para acidentes de QUALQUER NATUREZA — seja acidente de trabalho, acidente de trânsito no fim de semana, queda doméstica ou lazer — bastando que na data do acidente você estivesse na qualidade de segurado do INSS (CLT, avulso, doméstico, especial/rural ou no período de graça) e tenha ficado com redução permanente de capacidade.",
  },
  {
    category: "Grau da Sequela",
    question:
      "Preciso estar inválido ou com sequela grave para ter direito ao Auxílio-Acidente?",
    answer:
      "NÃO! Pelo Tema Repetitivo 416 do STJ, o nível do dano — ainda que MÍNIMO — dá direito ao benefício de 50% do salário de benefício, desde que comprovado pela perícia que você precisa fazer maior esforço para realizar suas tarefas habituais ou teve redução de mobilidade/força (ex: pino/placa cirúrgica, perda parcial de movimento em dedo, punho, ombro, joelho, tornozelo, hérnia/coluna ou perda auditiva).",
  },
  {
    category: "Prazos e Atrasados",
    question: "Meu acidente aconteceu há 3, 5 ou 8 anos. Já perdi meu direito?",
    answer:
      "O fundo de direito à concessão do benefício previdenciário NÃO prescreve! Mesmo que você tenha recebido alta do INSS há vários anos e voltado a trabalhar sem pedir nada, ainda podemos ingressar com a ação para implantar o pagamento mensal daqui para frente e cobrar todos os valores atrasados dos últimos 5 anos corrigidos com juros.",
  },
  {
    category: "Abrangência do Atendimento",
    question: "Em quais estados o escritório atua e como funciona a perícia médica?",
    answer:
      "O Dr. Alan Jantsch (OAB/SC 73.129) atua no Distrito Federal, em Santa Catarina, no Amazonas, no Rio Grande do Sul e em São Paulo. Como os processos judiciais e previdenciários são 100% eletrônicos, sua ação é protocolada diretamente na Justiça Federal ou do Trabalho da sua cidade/região dentro dessas unidades da federação. Você envia a documentação pelo celular (WhatsApp) e comparece apenas à perícia médica oficial perto da sua residência, após orientação detalhada da nossa equipe.",
  },
  {
    category: "Honorários Advocatícios",
    question: "Preciso pagar algum valor adiantado para iniciar meu processo?",
    answer:
      "Na imensa maioria dos casos de Auxílio-Acidente e Acidentes de Trabalho, atuamos na modalidade de honorários de êxito (ad exitum): você NÃO desembolsa honorários adiantados para protocolar a ação, pagando o percentual contratual acordado somente ao final do processo, caso ganhe e quando efetivamente levantar seus valores, sempre respeitando rigorosamente os parâmetros éticos da Tabela da OAB.",
  },
];
