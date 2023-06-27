<template lang="">
    <div class="form-check-inline">
        <button type="button" class="badge rounded-pill text-bg-danger" @click="taskStore.deleteTask(task.id)">Delete</button>
        <button type="button" class="badge rounded-pill text-bg-success" @click="taskStore.toggleFav(task.id)">Favorite</button>        
    </div>
</template>
<script>
    import { useTaskStore } from '../store/TaskStore';
export default {
    props: ['task'],
    setup(){
        const taskStore = useTaskStore();

        return { taskStore }
    }
    
}
</script>
<style>
    
</style>