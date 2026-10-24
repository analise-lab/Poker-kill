# Poker Kill
Protótipo estático de Texas Hold'em No-Limit narrativo. Valores fictícios.

## Executar
Node.js 22 ou superior. Sem dependências: `npm start`, abrir http://127.0.0.1:4173. Testes: `npm test`.
Servir via HTTP; módulos não devem ser abertos por file://.

## Estrutura
src/game.js: controlador de mesa e interface herdados; evaluator.js: ranking; betting.js: validação de aumentos; pots.js: distribuição; bots.js: memória e risco; story.js: textos. docs/DESIGN.md registra decisões e limites.

## GitHub Pages
Workflow manual de publicação preparado. No GitHub: Settings → Pages → Source: GitHub Actions, então executar Publish Pages. CI testa cada push/PR. A preparação não confirma publicação ativa.

## Estado
Importado do ZIP original, sem reconstruir a interface. Inicialização protegida contra falhas, cartas ocultadas ao perder foco, regras corrigidas e testes de regressão. Campanha e visual final permanecem em desenvolvimento.
