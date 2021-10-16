import {createStore} from 'vuex'
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
var ls = new SecureLS({ isCompression: false });


export const store = createStore({
	state(){
		return{
			count:10,
			name:"jono"
		}
	}, 
	 plugins: [
    createPersistedState({
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key),
      },
    }),
  ],
	mutations:{
		tambah(state){
			state.count++
		}
	}
})