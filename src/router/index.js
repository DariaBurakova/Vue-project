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
                children:[
                    {
                        path: ':category',
                        component: AddPaymentForm,
                        children:[
                            {
                            path: '?value=value',
                            component: AddPaymentForm,
                        },
                        ]
                    },

                ]
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