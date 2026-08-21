# Validação do GitHub Pages

## Estado observado

O repositório público e a branch `gh-pages` foram criados, e o GitHub Pages está ativo em `https://profmatheusrosa.github.io/matheus-rosa-curriculo/`. A primeira e a segunda verificações públicas exibiram a tela 404 interna da aplicação, embora o arquivo inicial estivesse sendo servido. Isso confirma que o problema está na interpretação da rota do aplicativo React no subcaminho público, e não na ativação do GitHub Pages.

## Validação após correção

Após configurar o roteador com a base do Vite, atualizar a branch `gh-pages` e acessar o endereço com um parâmetro de versão, o currículo carregou corretamente no GitHub Pages. A página pública exibiu o conteúdo completo do currículo, incluindo cabeçalho, experiências, formação, competências e idiomas.

## Atualização de idiomas

A publicação da revisão visual de idiomas foi processada no commit `3f391a3`. A página pública continuou a carregar corretamente após a atualização.

## Validação do seletor bilíngue

A versão com o controle PT / EN foi conferida em desktop e em um viewport móvel de 375 px. O seletor permaneceu visível, a folha A4 preservou sua leitura documental e os metadados técnicos e o selo MR continuaram legíveis em telas compactas.

## Publicação bilíngue

A distribuição com a versão PT / EN foi enviada à branch `gh-pages` no commit `bd91521`. A primeira consulta por navegador ainda mostrou uma página em cache, mas a compilação do GitHub Pages concluiu com sucesso nesse commit. A resposta pública e o pacote JavaScript publicados foram conferidos diretamente: eles referenciam os novos assets e contêm a lógica `resume-language` e o conteúdo “PROFESSIONAL RESUME”.
