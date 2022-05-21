# <div align = center> ON15-TET-S8-API-I </div>

<div align = "center">
    <p>
        Turma Online Todas em Tech - Back-end | Semana 8: Introdução à API: <b>  GET + POST </b>.
    </p>
</div>

<br>

# Introdução

<div align = "justify">
    <p>
         HTTP é um protocolo responsável pela comunicação de websites. Um website, ao ser acessado, recebe esse protocolo. Esse protocolo possui métodos, que também podem ser chamados de verbos. O protocolo baseado no modelo Client/Server, possui pedidos (requests) e respostas (responses) e é através desses requests e responses que a comunicação acontece. Os métodos HTTP, que definem qual ação acontecerá, são: <b>GET, POST, PUT, PATCH</b> e <b> DELETE</b>.
    </p>
</div>

<br>

# Sobre o Projeto

<div align = "justify">
    <p>
        Durante a semana 8 do curso <a href="https://reprograma.com.br/" target="_blank"> <b style='color:purple'>{reprograma}</b></a>, foi desenvolvida uma <b> Web API</b> de <a href = "https://github.com/BrunaCelestino/ON15-TET-S8-API-I/blob/BrunaCelestino/servidor-paraolar/data/filmes.json" target="_blank"> filmes </a> e <a href = "https://github.com/BrunaCelestino/ON15-TET-S8-API-I/blob/BrunaCelestino/servidor-paraolar/data/series.json" target="_blank">séries</a>. O intuito dessa semana foi que as alunas aprendessem sobre os métodos <b>GET</b> e <b>POST</b>.
    </p>
</div>

<br>

<div align = "center">

|          GET          |          POST           |
| :-------------------: | :---------------------: |
|          Ler          |          Criar          |
| adiciona dados ao URI | adiciona dados ao corpo |

</div>

<br>

<div align = "justify">
    <p> 
        Como meio de aprimoramento, desenvolvi também o método <b>DELETE</b> (excluir), que remove um recurso específico.
    </p>
</div>

<div align = "justify">
    Para a criação de uma API RESTful simples, foi desenvolvido um <a href = "https://github.com/BrunaCelestino/ON15-TET-S8-API-I/blob/BrunaCelestino/servidor-paraolar/server.js" target="_blank"> servidor </a> simples com as seguintes rotas:
</div>

<br>

<div align = "center">

|  Método  |                  Rota                   |        Descrição         |
| :------: | :-------------------------------------: | :----------------------: |
|  `GET`   |             localhost:8099/             |   Mensagem de entrada    |
|  `GET`   |         localhost:8099/filmes/          | Lista de todos os filmes |
|  `GET`   |         localhost:8099/series/          | Lista de todas as séries |
|  `GET`   |    localhost:8099/filmes/buscar/:id     |   Buscar filme por ID    |
|  `GET`   |    localhost:8099/series/buscar/:id     |   Buscar série por ID    |
|  `GET`   | localhost:8099/filmes/buscarNome?title= |  Buscar filme por nome   |
|  `GET`   | localhost:8099/series/buscarNome?title= |  Buscar série por nome   |
|  `POST`  |     localhost:8099/filmes/cadastrar     |   Cadastrar novo filme   |
|  `POST`  |     localhost:8099/series/cadastrar     |   Cadastrar nova série   |
| `DELETE` |    localhost:8099/filmes/remover/:id    |   Deletar filme por ID   |
| `DELETE` |    localhost:8099/series/remover/:id    |   Deletar série por ID   |

</div>

<br>
<div align = "justify">
    <p>
         Com essa web API é possível consultar uma lista de filmes e séries onde, através do método GET, se recebe uma mensagem inicial e onde, através dele, também é possível fazer busca por todos os filmes e séries, busca por ID e busca por nome. Através do método POST é possível fazer o cadastramento de novos filmes e séries e, através do método DELETE, é possível deletar um filme ou série, buscando pelo ID.
    </p>
</div>

<br>
<br>
<div align = "justify">

# Dependências

<div align = "justify">
    <p>
        Para que fosse possível a execução desse projeto, foi necessária a utilização de algumas dependências, descritas a seguir:
    </p>
</div>

<br>

<h2>Módulos:</h2>

<div align = "justify">
    <ul>
        <li>
            <a href = "https://www.npmjs.com/package/express" target="_blank">Express </a> - framework para aplicativo da web do Node.js;
        </li>
        <br>
        <li>
            <a href = "https://www.npmjs.com/package/nodemon" target="_blank">Nodemon </a> - ajuda no desenvolvimento de sistemas com o Node. js reiniciando automaticamente o servidor;
        </li>
        <br>
        <li>
            <a href = "https://www.npmjs.com/package/cors" target="_blank">Cors </a> - permite que um site acesse recursos de outro site mesmo estando em domínios diferentes.
        </li>
        <br>
    </ul>
</div>

<h2>Arquivos:</h2>

<div align = "justify">
    <ul>
        <li>
            <a href = "https://github.com/BrunaCelestino/ON15-TET-S8-API-I/blob/BrunaCelestino/servidor-paraolar/package-lock.json" target="_blank">package-lock.json </a> - especifica a versão e suas dependências;
        </li>
        <br>
        <li>
            <a href = "https://github.com/BrunaCelestino/ON15-TET-S8-API-I/blob/BrunaCelestino/servidor-paraolar/package.json" target="_blank">package.json </a> - arquivo de configuração utilizado para estipular e configurar dependências;
        </li>
        <br>
        <li>
            <a href = "https://github.com/BrunaCelestino/ON15-TET-S8-API-I/blob/BrunaCelestino/servidor-paraolar/.gitignore" target="_blank">.gitignore </a> - arquivo que lista quais arquivos ou pastas o Git deve ignorar.
        </li>
        <br>
    </ul>
</div>

<br>


# Instalação

1. Entre na pasta onde você deseja clonar o repositório. Abra o **git** nela e siga os seguintes passos: 

    ```bash
    
    $ git clone https://github.com/BrunaCelestino/ON15-TET-S8-API-I.git
    $ cd servidor-paraolar/
    $ npm install
    $ npm start
    ```
<br>

<div align = "justify">
    <ul>
        <li> 
            Utilizando "<b>git clone</b>", você clonará este repositório na sua máquina;
        </li>
        <li> 
            Utilizando "<b>cd servidor-paraolar/</b>", você entrará na pasta do servidor;
        </li>
        <li> 
            Utilizando "<b>npm install</b>", você instalará todas as dependências necessárias; 
        </li>
        <li> 
            Utilizando "<b>npm start</b>", você iniciará o servidor; 
        </li>
        <li> 
            Importe a coleção para teste deste servidor clicando <a href = "https://www.getpostman.com/collections/28fe8d47b9cc408d30eb"> aqui</a>!
        </li>
        <li> 
            Copie o link acima e, no Postman, clique em <b>Import</b> -> <b> Link</b> (cole o link) -> <b>Continue</b> -> <b>Import</b>.
        </li>
    </ul>
</div>

<br>




# Referências

<div align = "center">

|                          Título                           |                                                              Link                                                               |
| :-------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: |
|                     API - GET & POST                      |https://github.com/reprograma/ON15-TET-S8-API-I/blob/main/material/API%20GET.pdf                         |
| HTTP: GET e POST - Conheça as diferenças entre os métodos |https://www.alura.com.br/artigos/diferencas-entre-get-e-post                                   |
|        Diferença entre o método GET e POST em HTML        |https://pt.gadget-info.com/difference-between-get                                        |
|      Dependências de produção vs. de desenvolvimento      | https://tapmorales.gitbooks.io/workflow-front-end/content/turbinando-o-node/dependencias-de-producao-vs-de-desenvolvimento.html |
|                       Package.json                        |https://tapmorales.gitbooks.io/workflow-front-end/content/turbinando-o-node/package-json.html                  |
|                Métodos de requisição HTTP                 |https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods                                    |
|                          express                          |https://www.npmjs.com/package/express                                              |
|                           cors                            |https://www.npmjs.com/package/cors                                                |
|                          nodemon                          |https://www.npmjs.com/package/nodemon           |

</div>
















