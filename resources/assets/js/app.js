
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';

window.Vue.use(VueRouter);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import StudentList from './components/StudentList';
import StudentCreate from './components/StudentCreate';
import StudentEdit from './components/StudentEdit';

const routes = [
    {
        path: '/',
        component: StudentList,
        name: 'studentList'
    },
    {
        path: '/create',
        component: StudentCreate,
        name: 'studentCreate'
    },
    {
        path: '/edit/:id',
        component: StudentEdit,
        name: 'studentEdit'
    }
];

const router = new VueRouter({ routes, mode: 'history' });

const app = new Vue({ router }).$mount('#app');
