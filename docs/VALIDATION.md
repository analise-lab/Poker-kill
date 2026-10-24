# Validação — 24/10/2026

- 10 testes automatizados passaram via Node test runner: ranking, wheel, dois trincas, kickers, três all-ins, side pots, dinheiro de folds, devolução de excesso, empate e ficha ímpar, aumentos mínimos, all-in curto, reabertura cumulativa, memória e risco dos bots. Conservação de fichas verificada em 79 configurações de contribuição.
- Navegador Edge via Playwright: entrar na mesa, seis lugares, revelar ao pressionar e ocultar ao soltar, completar uma mão com check/call, próxima mão e reinício. Nenhum pageerror. Captura mobile 390 × 844.
- Essas verificações não equivalem a auditoria completa de todas as regras nem campanha concluída. Fluxo de vidas e todas as sequências heads-up ainda merecem testes integrados dedicados.
- ZIP original: SHA256 F13CFD3BD75F2FBBE143180456191CA04BD54ACA161F130B8938259945141B34.
- A tela inicial do ZIP já continha a classe hidden com !important. Não foi possível comprovar a causa histórica do travamento; a versão importada foi testada via HTTP e adicionou tratamento explícito de erro ao iniciar.
- GitHub Pages preparado para acionamento manual; publicação ativa depende da configuração Pages no repositório.
