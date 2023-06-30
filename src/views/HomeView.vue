<template>
  <header>
    <h1>{{ taskStore.name }}</h1>
  </header>
  <TaskList :tasks="taskStore.tasks" :favs="taskStore.fav" :totalCount="taskStore.totalCount" :favCount="taskStore.favCount" />
  <hr>
  <TranslateDemoWithoutI18n />
</template>

<script>
// @ is an alias to /src
import TaskList from '@/components/TaskList.vue';
import TranslateDemoWithoutI18n from '@/components/Translate.vue';
import { useTaskStore } from '@/store/TaskStore';

export default {
  name: 'HomeView',
  components: {
    TaskList,
    TranslateDemoWithoutI18n
  },
  setup(){
    const taskStore = useTaskStore();
    console.log(taskStore.totalCount, taskStore.favCount)

    return { taskStore }
  }
}
</script>
