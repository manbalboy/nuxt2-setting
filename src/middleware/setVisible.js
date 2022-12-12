export default function (context) {
  // Add the userAgent property to the context
  // debugger;

  console.log('>>>>>>>>>', context.store.state.visible);

  context.store.commit('setVisible', false);
}
