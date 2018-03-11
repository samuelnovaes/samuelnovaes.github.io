import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import routes from './routes.js'
import colors from 'vuetify/es5/util/colors'
import 'vuetify/dist/vuetify.css'

let router = new VueRouter({
	routes
})

Vue.use(VueRouter)

Vue.use(Vuetify, {
	theme: {
		primary: colors.cyan.darken4,
		secondary: colors.grey.lighten3
	}
})

let vm = new Vue({
	el: '#app',
	router,
	render: h => h(App)
})
