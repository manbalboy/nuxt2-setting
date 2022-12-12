export const state = () => ({
  visible: false,
});

export const getters = {
  getVisible(state) {
    return state.visible;
  },
};

export const mutations = {
  setVisible(state, value) {
    state.visible = value;
  },
};

export const actions = {};
