import { reqUser } from '@/api/student/index';
const state = {
    user: {},
};
const actions = {
    async getUser({ commit }) {
        let res = await reqUser();
        console.log(res);
        if (res.data.code == 200) {
            commit('GETUSER', res.data.userInfo);
        }
    }
};
const mutations = {
    GETUSER(state, value) {
        state.user = value;
    }
};
const getters = {
    name(state){
        return state.user.name;
    }
};

export default {
    state,
    actions,
    mutations,
    getters,
}