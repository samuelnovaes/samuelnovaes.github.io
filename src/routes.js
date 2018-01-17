import about from './pages/about.vue'
import curriculum from './pages/curriculum.vue'
import projects from './pages/projects.vue'
import certificates from './pages/certificates.vue'

export default [
	{path: '/', redirect: '/about'},
	{path: '/about', component: about, name: 'Sobre'},
	{path: '/curriculum', component: curriculum, name: 'Currículo'},
	{path: '/projects', component: projects, name: 'Projetos'},
	{path: '/certificates', component: certificates, name: 'Certificados'}
]
