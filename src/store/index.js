import { createStore } from "vuex";

const store=createStore({
    state(){
        return{
            conut:0
        }
    },
    getters:{
        getConut(state){
            return state.conut
        }
    },
    mutations:{
        increment(state,data){
            state.conut=data
        }
    }
})
export default store