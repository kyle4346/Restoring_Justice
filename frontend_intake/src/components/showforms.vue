<template> <!-- -------------Everything here is now deprecated... Please look at the summary repot.vue and forms.vue instead-------->
    <div class="row">
        <div class="col-md-12">
            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Case ID</th>
                        <th>Client</th>
                        <th>Start Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="form in forms" :key="form._id">
                        <td>{{ form.First }}</td>
                        <td>{{ form.Last_Name }}</td>
                        <td>{{ form.Case_ID }}</td>
                        <td>{{ form.Client }}</td>
                        <td>{{ form.Start_Date }}</td>
                        <td>
                            <router-link :to="{name: 'edit', params: { id: form._id }}" class="btn btn-success">Edit
                            </router-link>
                        <button @click.prevent="deletecase(form._id)" class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        data() {
            return {
                forms: []
            }
        },
        // this is using created hook 
        created() {
            let apiURL = 'http://localhost:3000/forms';
            axios.get(apiURL).then(res => {
                this.forms = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
            deletecase(id){
                console.log(id)
                let apiURL = `http://localhost:3000/forms/${id}`;
                let indexOfArrayItem = this.forms.findIndex(i => i._id === id);

                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.forms.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }
        }
    }
</script>



<style>
    .btn-success {
        margin-right: 10px;
    }
</style>