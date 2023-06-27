<template>
  <header>
    <h1>{{ taskStore.name }}</h1>
  </header>
  <TaskList :tasks="taskStore.tasks" :favs="taskStore.fav" :totalCount="taskStore.totalCount" :favCount="taskStore.favCount" />
</template>

<script>
import TaskList from './components/TaskList.vue';
import { useTaskStore } from './store/TaskStore';

export default {
  name: 'App',
  components: {
    TaskList
  },
  setup(){
    const taskStore = useTaskStore();
    console.log(taskStore.totalCount, taskStore.favCount)

    return { taskStore }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
