import MyPlugin from "../../index.js";

await (async () => {
  const plugin = new MyPlugin();

  const output = await plugin.myMethod();

  console.log({ output });
})();
