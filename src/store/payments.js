import Vue from 'vue'

const state = {
    paymentsList: [],
    categoryList: [],
    activeList:[],
    flag:false,
    changeItem:{}

}
const mutations= {
    setActiveListData(state,payload){
        state.activeList=payload.slice(0,5)
    },
    setPaymentsListData(state, payload) {
        state.paymentsList = payload
    },
    addDataToPaymentsList(state, payload) {
        state.paymentsList.push(payload)
    },
    setCategories(state,payload){
        if (!Array.isArray(payload)) {
            payload = [payload]
        }
        state.categoryList.push(...payload)
    },
    ChangePage(state,payload){
        const startNum = payload * 5
        const lastNum = startNum + 5
        state.activeList=state.paymentsList.slice(startNum, lastNum)
    },
    setChangeItem (state, item) {
        Vue.set(state, 'changeItem', item)
    },
    setFlag(state,payload){
        if(payload!==undefined){
            state.flag=payload
        }else{
            state.flag=!state.flag
        }
    }
}
const actions = {
    fetchData({commit}){
        return new Promise((resolve)=>{
           setTimeout(()=>{
               resolve(
                   [{ "id": 1, "date": "20.03.2020", "category": "Food", "value": 169 },
               { "id": 2, "date": "21.03.2020", "category": "Navigation", "value": 50 },
               { "id": 3, "date": "22.03.2020", "category": "Sport", "value": 450 },
               { "id": 4, "date": "23.03.2020", "category": "Entertaiment", "value": 969 },
               { "id": 5, "date": "24.03.2020", "category": "Education", "value": 1500 },
               { "id": 6, "date": "25.03.2020", "category": "Food", "value": 200 },
               { "id": 7, "date": "26.03.2020", "category": "Food", "value": 105 },
               { "id": 8, "date": "27.03.2020", "category": "Clothes", "value": 2700 },
               { "id": 9, "date": "28.03.2020", "category": "Recreation", "value": 4568 }
                       ]
               )
           },1000)

        })
            .then(res=>{
            commit('setPaymentsListData',res)
                commit('setActiveListData',res)

        })

    },
    loadCategories ({ commit }){
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(['Food', 'Transport', 'Education', 'Entertainment','Clothes','Recreation'])
            }, 1000)
        })
            .then(res => {
                commit('setCategories', res)
            })
    },
    removeItem({commit,state},item){
        const list=state.paymentsList.filter(el=>el.id!==item.id)
        commit('setActiveListData',list)
        commit('setPaymentsListData',list)

    },
    }
const getters= {
    getActiveList(state){
        return state.activeList
    },
    getPaymentsList(state){
    return state.paymentsList
},
    getCategoryList(state){
        return state.categoryList
    },
}
export default {
    namespaced:true,
    state,
    mutations,
    getters,
    actions
}

