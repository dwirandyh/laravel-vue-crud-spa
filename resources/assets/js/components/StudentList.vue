<template>
    <div>
        <div class="form-group">
            <router-link :to="{ path: '/create' }" class="btn btn-success">Create New</router-link>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading">Student List</div>
            <div class="panel-body">
                <table class="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="student, index in students">
                            <td>{{ student.id }}</td>
                            <td>{{ student.name }}</td>
                            <td>{{ student.address }}</td>
                            <td>{{ student.email }}</td>
                            <td>
                                <router-link :to="{ path: '/edit' + '/' + student.id }" class="btn btn-xs btn-warning">Edit</router-link>
                                <a href="#" class="btn btn-xs btn-danger" v-on:click="deleteEntry(student.id, index)">
                                    Delete
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                students: []
            }
        },
        mounted() {
            var app = this;
            axios.get('/api/student')
                .then(function (res){
                    app.students = res.data;
                })
                .catch(function (res){
                    alert('Could not load students');
                });
        },
        methods: {
            deleteEntry(id, index){
                if (confirm('Do you really want to delete it?')){
                    var app = this;
                    axios.delete('/api/student/' + id)
                        .then(function (res){
                            app.students.splice(index, 1);
                        })
                        .catch(function (res){
                            alert('Could not delete company');
                        });
                }
            }
        }
    }
</script>

<style scoped>

</style>