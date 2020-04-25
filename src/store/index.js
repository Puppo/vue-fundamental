import Vue from 'vue';
import Vuex from 'vuex';

import robotModule from './modules/robots';
import usersModule from './modules/users';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    foo: 'root-foo',
  },
  modules: {
    robots: robotModule,
    users: usersModule,
  },
  getters: {
    foo(state) {
      return state.foo;
    },
  },
});
