export const state = () => {
  return {
    sidebarOpen: false,
  }
}

export const getters = {
  sidebarOpen: state => state.sidebarOpen,
}

export const actions = {
  toggleSidebar({ commit, state }) {
    commit('TOGGLE_SIDEBAR', state)
  },
}

const mutations = {
  TOGGLE_SIDEBAR: state => {
    state.sidebarOpen = !state.sidebarOpen
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
