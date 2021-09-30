const state = {
    paymentsList: [],
    categoryList: [],
}
const mutations= {
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
}
const actions = {
    fetchData(list,num) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    page1: [
                        { "id": 1, "date": "20.03.2020", "category": "Food", "value": 169 },
                        { "id": 2, "date": "21.03.2020", "category": "Navigation", "value": 50 },
                        { "id": 3, "date": "22.03.2020", "category": "Sport", "value": 450 },
                        { "id": 4, "date": "23.03.2020", "category": "Entertaiment", "value": 969 },
                        { "id": 5, "date": "24.03.2020", "category": "Education", "value": 1500 },
                        { "id": 6, "date": "25.03.2020", "category": "Food", "value": 200 }

                    ],
                    page2: [
                        { "id": 7, "date": "26.03.2020", "category": "Food", "value": 105 },
                        { "id": 8, "date": "27.03.2020", "category": "Clothes", "value": 2700 },
                        { "id": 9, "date": "28.03.2020", "category": "Recreation", "value": 4568 }
                    ],
                } )
            }, 1000)
        })
            .then(res => {
                if(num===1){
               list.commit('setPaymentsListData',res.page1)
                }
                if(num===2){
                    list.commit('setPaymentsListData',res.page2)
                }
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

}
const getters= {
    getPaymentsList(state){
    return state.paymentsList
},
    getCategoryList(state){
        return state.categoryList
    },
}
export default {
    state,
    mutations,
    getters,
    actions
}

