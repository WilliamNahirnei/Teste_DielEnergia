<template>
  <div>
    <div>
      <h1> Bem vindo ao Agenda </h1>
      <h4>Aqui você pode agendar suas tarefas com os dados:</h4>
      <ul>
        <li>
          Nome da tarefa (Obrigatorio)
        </li>
        <li>
          Descrição da tarefa da tarefa (Opcional)
        </li>
        <li>
          Data e horario de inicio(Obrigatorio)
        </li>
        <li>
          Data e horario de fim(Obrigatorio)
        </li>
        <li>
          Status(Somente editavel)
        </li>
      </ul>
    </div>
    <div>
      <h1>Funcionamento</h1>
      <h6>Aqui você pode vizualizar editar e exlcuir suas tarefas pela aba Tarefas</h6>
      <h6>Você pode cadastrar novas Tarefas pela aba Nova Tarefa</h6>
      <h6>Apesar das funcionalidades cuidado, as tarefas não verificam se já existe algo agendado no horario escolhido</h6>
      <h6>Não existem mensagem de aviso ao usuario na interface</h6>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home-Page',
    components: {
      
    }
  }
</script>

<style>

</style>
