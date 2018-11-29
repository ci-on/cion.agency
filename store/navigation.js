export const state = () => {
  return {
    timeoutIds: [],
    autoNavIsEnabled: false,
  }
}

export const getters = {}

const mutations = {
  setTimeoutId(state, timeoutId) {
    state.timeoutIds.push(timeoutId)
  },

  clearTimeoutIds(state) {
    state.timeoutIds.forEach(timeoutId => {
      clearTimeout(timeoutId)
    })
    state.timeoutIds = []
  },

  enableAutoNav(state) {
    state.autoNavIsEnabled = true
  },

  disableAutoNav(state) {
    state.autoNavIsEnabled = false
  },
}

export const actions = {}

export default {
  state,
  getters,
  actions,
  mutations,
}
