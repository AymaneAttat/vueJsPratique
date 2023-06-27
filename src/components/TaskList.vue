<template>
    <!-- start New task form -->
    <TaskForm />
    <!-- End New task form -->
    <hr><br>
    <ul class="nav">
        <button class="nav-item" @click="filter = 'all'">
          <a class="nav-link">Active</a>
        </button>
        <button class="nav-item" @click="filter = 'fav'">
          <a class="nav-link">Fav tasks</a>
        </button>
    </ul>
    <div class="container d-flex flex-row">
        <div class="col list-group" v-if="filter === 'all'">
            
            <p>You have <span class="badge rounded-pill text-bg-primary">{{ totalCount }}</span></p>
            <div v-for="(task, index) in tasks" :key="index"> <!--  class=" col-md-6 " -->
                <p class="list-group-item d-flex justify-content-between align-items-center">{{task.title}}</p>
                <TaskDetails :task="task" />
            </div>
        </div>
        <div class="col list-group" v-if="filter === 'fav'">
            <p>You have <span class="badge rounded-pill text-bg-primary">{{ favCount }}</span></p>
            <div v-for="(task, index) in favs" :key="index"> <!--  class="row col-md-6" -->
                <p class="list-group-item d-flex justify-content-between align-items-center">{{task.title}}</p>         
            </div>
        </div>
    </div>
</template>
<script>
    import TaskForm from './TaskForm.vue';
    import TaskDetails from './TaskDetails.vue'
    import { ref } from 'vue';

export default {
    props: ['tasks', 'favs', 'totalCount', 'favCount'],
    components: {
        TaskForm,
        TaskDetails
    },
    setup(){
        const filter = ref('all');

        return { filter }
    }
}
</script>
<style>
    
</style>