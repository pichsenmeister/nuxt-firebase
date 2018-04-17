const functions = require('firebase-functions')
const { Nuxt } = require('nuxt')
const express = require('express')

// Nuxt.js config
const config = {
	dev: false,
	buildDir: 'nuxt',
	build: {
		publicPath: '/assets/'
	}
}
const nuxt = new Nuxt(config)
const app = express()

// render all requests with nuxt 
const handleAppRequest = (req, res) => {
	res.set('Cache-Control', 'public, max-age=150, s-maxage=150')
	return new Promise((resolve, reject) => {
		nuxt.render(req, res, promise => {
			promise.then(resolve).catch(reject)
		})
	})
}

app.use(handleAppRequest)
exports.app = functions.https.onRequest(app)



