import { GET_NEW_COUNT } from './mutation_types';
export default {
	[GET_NEW_COUNT](state,res){
		state.count = res;
	}
}


