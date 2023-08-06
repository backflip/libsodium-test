import MyPlugin from "../../index.js";

const plugin = new MyPlugin();

await (async () => {
  const output = await plugin.myMethod();

  document.querySelector("#output").innerHTML = output;
})();
