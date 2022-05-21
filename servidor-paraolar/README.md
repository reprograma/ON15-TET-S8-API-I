# <div align = center> ON15-TET-S8-API-I </div>

<div align = "center">
<p>Turma Online Todas em Tech - Back-end | Semana 8: Introdução à API: <b>  GET + POST </b>.
</div>

<br>

# Introdução

<div align = "justify">
<p>HTTP é um protocolo responsável pela comunicação de websites. Um website, ao ser acessado, recebe esse protocolo. Esse protocolo possui métodos, que também podem ser chamados de verbos. O protocolo baseado no modelo Client/Server, possui pedidos (requests) e respostas (responses) e é através desses requests e responses que a comunicação acontece. Os métodos HTTP, que definem que ação acontecerá, são: <b>GET, POST, PUT, PATCH</b> e <b> DELETE</b>.</p>
</div>

<br>

# Sobre o Projeto

<div align = "justify">
Durante a semana 8 do curso <a href="https://reprograma.com.br/"> <b style='color:purple'>{reprograma}</b></a>, foi desenvolvida uma <b> Web API</b> de <a href = "https://github.com/BrunaCelestino/ON15-TET-S8-API-I/blob/BrunaCelestino/servidor-paraolar/data/filmes.json"> filmes </a> e <a href = "https://github.com/BrunaCelestino/ON15-TET-S8-API-I/blob/BrunaCelestino/servidor-paraolar/data/series.json">séries</a>. O intuito dessa semana foi que as alunas aprendessem sobre os métodos <b>GET</b> e <b>POST</b>.
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
<p> Como meio aprimoramento, desenvolvi também o método <b>DELETE</b> (excluir), que remove um recurso específico.
</div>

<div align = "justify">
Para a criação de uma API RESTful simples, foi desenvolvido um <a href = "https://github.com/BrunaCelestino/ON15-TET-S8-API-I/blob/BrunaCelestino/servidor-paraolar/server.js"> servidor </a> simples com as seguintes rotas:
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

# Dependências

<div align = "justify">
<p>Para que fosse possível a execução desse projeto, foi necessária a utilização de algumas dependências, descritas a seguir:</p>
</div>
<br>
<h2>Módulos:</h2>
<div align = "justify">
<ul>
<li>
<a href = "https://www.npmjs.com/package/express">Express </a> - framework para aplicativo da web do Node.js;
</li>
<br>
<li>
<a href = "https://www.npmjs.com/package/nodemon">Nodemon </a> - ajuda no desenvolvimento de sistemas com o Node. js reiniciando automaticamente o servidor;
</li>
<br>
<li>
<a href = "https://www.npmjs.com/package/cors">Cors </a> - permite que um site acesse recursos de outro site mesmo estando em domínios diferentes.
</li>
<br>
</ul>
</div>

<h2>Arquivos:</h2>

<div align = "justify">
<ul>
<li>
<a href = "https://github.com/BrunaCelestino/ON15-TET-S8-API-I/blob/BrunaCelestino/servidor-paraolar/package-lock.json">package-lock.json </a> - especifica a versão e suas dependências;
</li>
<br>
<li>
<a href = "https://github.com/BrunaCelestino/ON15-TET-S8-API-I/blob/BrunaCelestino/servidor-paraolar/package.json">package.json </a> - arquivo de configuração utilizado para estipular e configurar dependências.;
</li>
<br>
<li>
<a href = "https://github.com/BrunaCelestino/ON15-TET-S8-API-I/blob/BrunaCelestino/servidor-paraolar/.gitignore">.gitignore </a> - arquivo que lista quais arquivos ou pastas o Git deve ignorar.
</li>
<br>
</ul>
</div>
</div>
