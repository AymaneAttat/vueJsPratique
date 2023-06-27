<template>
  <header>
    <h1>{{ taskStore.name }}</h1>
  </header>
  <TaskList :tasks="taskStore.tasks" :favs="taskStore.fav" :totalCount="taskStore.totalCount" :favCount="taskStore.favCount" />
</template>

<script>
// @ is an alias to /src
import TaskList from '@/components/TaskList.vue';
import { useTaskStore } from '@/store/TaskStore';

export default {
  name: 'HomeView',
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
