<template>
    <form class="container" @submit.prevent="handleSubmit"> 
        <input class="form-control" type="text" placeholder="I need to..." v-model="newTask">
        <button type="submit" class="btn btn-primary">Add</button>
    </form>
</template>
<script>
    import { useTaskStore } from '../store/TaskStore.js';
    import { ref } from 'vue';

export default {
    setup(){
        //data
        const taskStore = useTaskStore();

        const newTask = ref('');

        //methods
        const handleSubmit = () => {
            if(newTask.value.length > 0){
                taskStore.addTask({
                    title: newTask.value,
                    isFav: false,
                    id: Math.floor(Math.random() * 10000)
                })
                newTask.value = ''
            }
        }
    
        return { taskStore, newTask, handleSubmit }
    }
}
</script>
<style>
    
</style>