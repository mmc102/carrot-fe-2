const { withStoreConfig } = require("./store-config")
const store = require("./store.config.json")

module.exports = withStoreConfig({
  features: store.features,
  reactStrictMode: true,
  images: {
	  domains: ["192.168.1.201","http://192.168.1.201:9001","https://127.0.0.1:9001",],
  },
})

console.log("next.config.js", JSON.stringify(module.exports, null, 2))
