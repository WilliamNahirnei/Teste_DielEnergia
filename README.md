# Teste_DielEnergia
# Para Rodar siga os passos abaixo
# 1° PASSO: BAIXAR O REPOSITORIO.
# 2° PASSO: CRIE O BANCO DE DADO UTILIZANDO O CODIGO CONTIDO NO ARQUIVO CreateDatabase.sql.
# 3° PASSO: ENTRE NA PASTA api E RODE O COMANDO PARA INSTALAR AS DEPENDENCIAS (npm install ou yarn install).
# 4° PASSO: ENTRE NA PASTA frontend E RODE O COMANDO PARA INSTALAR AS DEPENDENCIAS (npm install ou yarn install).
# 5° PASSO: NA PASTA api E frontend EXISTE 1 ARQUIVO .ENV COM AS CONFIGURAÇÕES BASICAS DO SERVIDOR, COMO PORTA, ACESSO AO BANCO DADOS, CASO QUEIRA FAZER ALGUMA MODIFICAÇÃO NA CONFIGURAÇÃO INICIAL ALTERE ELES.
# 6° PARA RODAR ENTER NA PASTA api E RODE O COMANDO npm run dev APOS ISSO ENTRE NA PASTA frontend E RODE O COMANDO npm run serve 


# SOBRE O SISTEMA:
  O sistema foi desenvolvido utilizando um backend em node.js, com as principais bibliotecas express, para o gerenciamento das requições, knex para acesso ao banco de dados, e uma lib de validação dos parametros da requisição.
  O frontend foi desenvolvido utilizando Vue.Js em sua versão 2 com o VueBoostrap para incrementar os componentes, o frontend se coneca com a api do backend para o controle das tarefas.
  O sistema foi desenvolvido baseado em uma arquitetura mvc, o backend principalmente foi alterado para funcionar com uma arquitetura de camadas, onde cada camada é responsavel por alguma função.
   A camada de validação estabelece a validade dos dados da requisição.
   A camada de controler é responsavel por acionar a camada de serviço, e injetar o codigo da resposta, conteudo etc.
   A camada de Service é responsavel por toda a lógica das operações, onde realiza algumas validações mais complexas, acioda os preparadores de dados, cria objetos etc.
   A cada de preparação é responsavel por pegar os dados da requisição e preparar eles para serem usados, seja formatando, alterando o nome, separando juntando etc.
   A camada repositorio é responsavel por realizar operações no banco de dados.
   A camada model ficou responsavel por servir como modelo de dados a serem devolvidos para o frontend.
  O frontend foi desenvolvido de uma forma simples, baseado em componentes separados, e serviços para acesso ao banco de dados.
# Defeitos
  Devido ao tempo disponivel para o desenvolvimento, não foi possivel implementar todos os requisitos e uma grande quantidade de validações.
  Sendo possivel de implementar validações para Não permitir que tarefas fosse marmazenadas no mesmo periodo de tempo.
  Valçidações no frontend, e tambem mensagens de aviso de oque esta ocorrendo, como por exemplo, cadastrado com sucesso, erro ao cadastrar, etc.
  Tambem poderia ter sido melhorado a parte visual, sendo uma ideia de separar as tarefas por dia, exibindo um card com os dados da data, dia mes, ano, e ao lado a lista de tarefas do dia com o restante dos dados. 
   
