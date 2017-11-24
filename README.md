# Reactjs e Atomic Design na prática

Código utilizado no vídeo tutorial realacionado ao assunto.

* [Vídeo Tutorial](https://youtu.be/XGPRyL7TXsk)
* [Artigo sobre Atomic Design](https://blog.novatics.com.br/reactjs-e-atomic-design-na-pr%C3%A1tica-5a6e23b8b25)

## Instalação e execução

```
npm install
npm start
```

O código foi gerado com `create-react-app`, para saber mais sobre a instalação via `cli` do react, [veja esse link](https://reactjs.org/docs/installation.html).

## Arquitetura

```
src |- atoms
    |  |-  input
    |  |-  button
    |
    |- molecules
    |  |-  navbar-menu
    |  |-  search-keyword
    |
    |- organisms
    |  |-  header
    |
    |- pages
    |  |-  home
    |  |-  kanban
    |  |-  atomic
    |
    |- templates
    |  |-  main
```
