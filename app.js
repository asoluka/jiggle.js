const state = reative({ message: "Hello World" });

function renderApp() {
  render("#container", `<h1>${state.message}</h1>`);
}
renderApp();

setTimeout(() => {
  state.message = "Hello Universe";
}, 5000);
