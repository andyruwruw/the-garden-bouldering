// Packages
import {
  ActionTree,
  GetterTree,
  Module,
  MutationTree,
} from 'vuex';

// Local Imports
import router from '../../router';

/*
  Navigation Module

  In order to maintain the Vuex store as the center of logic, and keep
  the components soley as methods of displaying the data, all components
  will use the navigation module to route to various pages
  The navigation module will manage the current page and provide getters
  to turn on and off various styles.
*/

// State interface
export interface NavigationState {
  /**
   * Id of currently displayed page.
   */
  currentPage: string;
}

// Default state
export const defaultState = (): NavigationState => ({
  currentPage: '',
});

// Module state
const moduleState: NavigationState = defaultState();

// Module getters
const getters: GetterTree<NavigationState, any> = {
};

// Module mutations
const mutations: MutationTree<NavigationState> = {
  /**
   * Sets value of current page.
   *
   * @param {NavigationState} state Module state.
   * @param {string} page Page name.
   */
  setCurrentPage(
    state: NavigationState,
    page: string,
  ): void {
    state.currentPage = page;
  },
};

// Module actions
const actions: ActionTree<NavigationState, any> = {
  /**
   * On each page change, update the current page.
   *
   * @param {ActionContext<NavigationState, any>} context Vuex action context.
   * @param {Record<string, string>} payload Incoming payload.
   * @param {string} payload.name Name of the new page.
   */
  handlePageLoad(
    { commit },
    { name },
  ): void {
    commit('setCurrentPage', name);
  },

  /**
   * Checks if user is logged in, and reroutes to landing if not.
   *
   * @param {ActionContext<NavigationState, any>} context Vuex action context.
   */
  requiresLogin({
    rootGetters,
    dispatch,
  }): void {
    try {
      if (!rootGetters['user/isLoggedIn']) {
        router.push('/');
      }
    } catch (error) {
      dispatch('goTo404');
    }
  },

  /**
   * Routes the user to Login page.
   *
   * @param {ActionContext<NavigationState, any>} context Vuex action context.
   */
  goToLogin({
    dispatch,
    rootGetters,
    state,
  }): void {
    try {
      if (state.currentPage !== 'login' && !rootGetters['user/isLoggedIn']) {
        router.push('/login');
      }
    } catch (error) {
      dispatch('goTo404');
    }
  },

  /**
   * Routes the user to Home page.
   *
   * @param {ActionContext<NavigationState, any>} context Vuex action context.
   */
  goToHome({
    dispatch,
    state,
  }): void {
    try {
      if (state.currentPage !== 'home') {
        router.push('/home');
      }
    } catch (error) {
      dispatch('goTo404');
    }
  },

  /**
   * Routes the user to Landing page.
   *
   * @param {ActionContext<NavigationState, any>} context Vuex action context.
   */
  goToLanding({
    dispatch,
    state,
  }): void {
    try {
      if (state.currentPage !== 'landing') {
        router.push('/');
      }
    } catch (error) {
      dispatch('goTo404');
    }
  },

  /**
   * Routes the user to a Profile page.
   *
   * @param {ActionContext<NavigationState, any>} context Vuex action context.
   * @param {Record<string, number>} payload Incoming payload.
   * @param {number} payload.id ID of the user.
   */
  goToProfile(
    {
      dispatch,
      state,
    },
    { id },
  ): void {
    try {
      if (state.currentPage !== 'user') {
        router.push(`/profile/${id}`);
      }
    } catch (error) {
      dispatch('goTo404');
    }
  },

  /**
   * Routes the user to error page.
   */
  goTo404({ state }) {
    if (state.currentPage !== '404') {
      router.push('/404');
    }
  },
};

// Module
const navigation: Module<NavigationState, Record<string, any>> = {
  namespaced: true,
  state: moduleState,
  getters,
  mutations,
  actions,
};

export default navigation;
