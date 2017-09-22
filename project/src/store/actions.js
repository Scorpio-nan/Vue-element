import { GET_NEW_COUNT } from './mutation_types';

export default {
	changeCount:function({commit},newcouunt){
		commit(GET_NEW_COUNT,newcouunt)
	}
}




