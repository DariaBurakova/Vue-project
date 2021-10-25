

export default {
install(Vue){
    if (this.installed) {
        return
    }

    this.installed = true

    Vue.prototype.$modal ={
        EventBus:new Vue(),
        show (settings) {
            this.EventBus.$emit('shown',{...settings})

        },
        hide () {
            this.EventBus.$emit('hide')
        },

    }
}
}
