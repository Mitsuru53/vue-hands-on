'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
require('dotenv').config()

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  apiKey: JSON.stringify(process.env.VUE_API_KEY),
  authDomain: JSON.stringify(process.env.VUE_AUTH_DOMAIN),
  databaseURL: JSON.stringify(process.env.VUE_DATABASE_URL),
  projectId: JSON.stringify(process.env.VUE_PROJECT_ID),
  storageBucket: JSON.stringify(process.env.VUE_STORAGE_BUCKET),
  messagingSenderId: JSON.stringify(process.env.VUE_MESSAGING_SENDER_ID)
})
