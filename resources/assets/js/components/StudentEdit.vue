<template>
    <div>
        <div class="form-group">
            <router-link :to="{ path: '/' }" class="btn btn-primary">Back Button</router-link>
        </div>

        <div class="card">
            <div class="card-body">
                <div class="card-title">Add New Student</div>
                <form v-on:submit="saveForm()">
                    <div class="form-group">
                        <div class="col-xs-12 form-group">
                            <label class="control-label">Name</label>
                            <input type="text" v-model="student.name" class="form-control">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-xs-12 form-group">
                            <label class="control-label">Address</label>
                            <input type="text" v-model="student.address" class="form-control">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-xs-12 form-group">
                            <label class="control-label">Email</label>
                            <input type="text" v-model="student.email" class="form-control">
                        </div>
                    </div>
                    <button class="btn btn-primary">Edit</button>
                    <button type="reset" class="btn btn-danger">Reset</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                studentId: null,
                student: {
                    name: '',
                    address: '',
                    email: '',
                }
            }
        },
        mounted(){
            let app = this;
            let id = app.$route.params.id;
            app.studentId = id;
            axios.get('/api/student/' + id)
                .then(function (res){
                    app.student = res.data;
                })
                .catch(function() {
                    alert('could not load your student data')
                });
        },
        methods: {
            saveForm() {
                event.preventDefault();
                var app = this;
                var editStudent = app.student;
                axios.patch( '/api/student/' + app.studentId, editStudent)
                    .then(function (res) {
                        app.$router.push({path: '/'})
                    })
                    .catch(function (res) {
                        console.log(res);
                        alert('could not edit student');
                    });
            }
        }
    }
</script>

<style scoped>

</style>