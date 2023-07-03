<template lang="">
    <div>
        <Form @submit="onSubmit" :validation-schema="rulesForm">
            <label for="email">email</label>
            <Field class="form-control" name="email" type="email" />
            <ErrorMessage name="email" />

            <label for="name">name</label>
            <Field class="form-control" name="name" type="name" />
            <ErrorMessage name="name" />

            <button class="btn btn-sm btn-primary" type="submit">Add</button>
        </Form>
    </div>
</template>
<script>
import { Form, Field, ErrorMessage } from 'vee-validate';
import { object, string } from 'yup';

export default {
    components: {
        Form,
        Field,
        ErrorMessage
    },
    data() {
        return {
            rulesForm: {}
        }
    },
    created() {
        this.rulesForm = object({
            name: string().min(6).required(),
            email: string().email().required()
        })
    }
}
</script>
<style>
    
</style>