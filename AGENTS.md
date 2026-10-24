# Poker Kill
Responda ao usuário em português. Leia README.md e docs/DESIGN.md antes de alterar regras.
Preserve a interface e os comportamentos válidos do protótipo importado. Não substitua o jogo por uma demonstração de decisões.
Texas Hold'em No-Limit realista: seis lugares, blinds, ordem correta, aumentos mínimos, all-ins curtos sem reabrir ação, pots paralelos, desempate e conservação de fichas por mão. Reentrada entre mãos é uma regra narrativa separada.
Câmera fixa em primeira pessoa. Cartas privadas só aparecem durante consulta, inclusive teclado; ocultar ao soltar, cancelar, sair ou perder foco.
Cinco bots com personalidades e memória sem acesso às cartas privadas adversárias; três vidas, menor propensão a blefar com poucas vidas.
Motor, avaliação, pots, bots, narrativa e interface devem permanecer separados. Não adicionar dependências sem necessidade.
Execute npm test e teste inicialização e uma mão completa no navegador antes de entregar alterações de jogabilidade. Acrescente regressões para bugs de regras.
Nunca anuncie teste, publicação ou etapa narrativa completa sem verificação. Não force push nem sobrescreva trabalho existente.
