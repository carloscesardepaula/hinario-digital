# Hinário Digital — GitHub Pages / PWA

Este projeto mantém a última interface do Hinário Digital (teclado numérico, seleção de hinário por botões, pesquisa recolhida, edição no canto inferior direito, exportação HTML e backup JSON) e adiciona instalação como PWA e consulta offline.

## Publicar

1. Envie **o conteúdo desta pasta** para a raiz do repositório no GitHub, preservando a pasta `icons`.
2. No GitHub, abra **Settings → Pages → Build and deployment**.
3. Em **Source**, escolha **Deploy from a branch**; selecione a branch `main` e a pasta `/(root)`; clique em **Save**.
4. Aguarde a publicação e abra o endereço indicado em **Settings → Pages** (normalmente `https://USUARIO.github.io/REPOSITORIO/`).
5. No iPhone, abra o link pelo **Safari** e use **Compartilhar → Adicionar à Tela de Início**. No Android, use a opção de instalar/adicionar à tela inicial do navegador.
6. Abra o hinário uma vez **com internet**, aguarde o carregamento e então teste em modo avião. O primeiro acesso requer internet.

## Publicar uma nova versão

Substitua `index.html` pela nova versão do hinário (mantendo a linha de registro do `sw.js` e as tags do manifesto) e altere o valor de `CACHE_VERSION` em `sw.js` para forçar a renovação do cache. Após reconectar, a nova versão será buscada; talvez seja necessário fechar e abrir o app novamente.

## Edições e backups

- As edições feitas no navegador ficam **somente naquele dispositivo/navegador** e **não são enviadas ao GitHub**.
- **Antes de publicar uma nova base de hinos, faça Backup JSON** em cada dispositivo que contenha alterações. A versão atual do editor usa uma chave de armazenamento associada à base original; trocar a base pode impedir que as edições locais antigas sejam carregadas automaticamente.
- Para distribuir alterações a todos, use **Exportar HTML** no editor e publique o conteúdo exportado como `index.html`, preservando o manifesto e o registro do Service Worker. Alternativamente, atualize a base do projeto e faça novo deploy.
- O HTML exportado é autônomo e não depende de internet; o modo PWA depende dos arquivos auxiliares e de hospedagem HTTPS.

## Observação

A transcrição textual dos cânticos foi extraída automaticamente dos PDFs e pode exigir revisão de títulos, estrofes e coros.
