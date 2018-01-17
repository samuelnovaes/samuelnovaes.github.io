import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import routes from './routes.js'
import 'vuetify/dist/vuetify.css'

let router = new VueRouter({
	routes
})

Vue.use(VueRouter)

Vue.use(Vuetify, {
	theme: {
		primary: '#008888',
		secondary: '#004040'
	}
})

let vm = new Vue({
	el: '#app',
	router,
	render: h => h(App)
})
