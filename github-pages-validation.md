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

## Ajuste do cabeçalho

O cabeçalho compacto foi conferido em desktop e em viewport de 375 px. O cargo passou a começar mais próximo do cabeçalho corrido, e “Matheus Rosa” foi mantido em uma única linha, sem itálico, sem comprometer a leitura em telas menores.

## Assinatura em duas linhas

A assinatura foi conferida em desktop e em viewport de 375 px após o retorno de “Rosa” à segunda linha. O aumento de escala reforçou a presença do nome, e os metadados de perfil continuaram legíveis sem sobreposição.

## Descrições profissionais revisadas

As versões em português e inglês foram conferidas na composição A4 após a ampliação das descrições de experiência. O conteúdo completo permaneceu contido na página, com as experiências legíveis e sem sobreposição de blocos.

## Correções manuais de conteúdo

As versões em português e inglês foram verificadas após as correções solicitadas para a experiência na Universidade de Brasília, a migração de sistemas legados na Lakes Environmental e a síntese do perfil profissional. Os textos mantiveram legibilidade e a composição permaneceu integralmente contida na página A4.
