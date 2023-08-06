# Demo for possible libsodium.js plugin development setup

Based on https://abyssdomain.expert/@filippo/110809044251822098.

## Setup

Install dependencies using a recent Node.js version: `npm install`

## Node demo

Running `node demo/node/demo-node.js` will log the output of `MyPlugin.myMethod`.

## Browser demo

Running `npm run dev` will use [Vite](https://vitejs.dev) to start a dev server on http://localhost:5173. The demo page will render the output of `MyPlugin.myMethod`.
