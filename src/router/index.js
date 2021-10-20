import Vue from "vue";
import Router from "vue-router";
import Page404 from "../pages/Page404";
import StartPage from "../pages/StartPage";

import Calculator from "../components/Calculator";
import AddPaymentForm from "../components/AddPaymentForm";
import MainPage from "../pages/MainPage";


Vue.use(Router)

export default new Router({
    mode:'history',
routes:[
    {   path:'/',
        name:'MainPage',
        component:MainPage,
        children:[
            {  path:'/Home',
                name:'StartPage',
                component: StartPage

            },
            {
                path: '/FormPage',
                name: 'FormPage',
                component: AddPaymentForm,

            },

            {
                path: '/Food?value=:value',
                name: 'food',
                component: AddPaymentForm,

            },
            {
                path: '/Food',
                name: 'food',
                component:AddPaymentForm,

            },
            {
                path: '/Transport?value=:value',
                name: 'transport',
                component:AddPaymentForm,

            },
            {
                path: '/Transport',
                name: 'transport',
                component: AddPaymentForm,

            },
            {
                path: '/Entertainment?value=:value',
                name: 'entertainment',
                component: AddPaymentForm,

            },
            {
                path: '/Entertainment',
                name: 'entertainment',
                component: AddPaymentForm,

            },

            {
                path:'/Calculator',
                name:'Calculator',
                component:Calculator
            },
        ]
    },

    {
        path: '*',
        name: 'NotFound',
        component: Page404
    },


]
})