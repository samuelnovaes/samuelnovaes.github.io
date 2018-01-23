<template>
	<v-app>
		<v-jumbotron height="auto" src="/public/img/cover.jpg" gradient="to top, rgba(0, 0, 0, .7), rgba(0, 128, 128, .7)" dark>
			<v-container fill-height>
				<v-layout column align-center>
					<v-avatar size="200px" class="mt-5 mb-1">
						<img src="/public/img/avatar.jpg">
					</v-avatar>
					<div class="display-1 mb-5">{{name}}</div>
				</v-layout>
			</v-container>
		</v-jumbotron>
		<v-toolbar color="primary" dark class="elevation-0">
			<v-toolbar-side-icon class="hidden-sm-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
			<v-toolbar-title>{{$route.name}}</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-toolbar-items class="hidden-xs-only">
				<v-btn flat to="/about">Sobre</v-btn>
				<v-btn flat to="/curriculum">Currículo</v-btn>
				<v-btn flat to="/projects">Projetos</v-btn>
				<v-btn flat to="/certificates">Certificados</v-btn>
			</v-toolbar-items>
		</v-toolbar>
		<v-content>
			<router-view></router-view>
		</v-content>
		<v-bottom-sheet v-model="drawer">
			<v-list>
				<v-list-tile ripple to="/about" @click="drawer = false">
					<v-list-tile-title>Sobre</v-list-tile-title>
				</v-list-tile>
				<v-list-tile ripple to="/curriculum" @click="drawer = false">
					<v-list-tile-title>Currículo</v-list-tile-title>
				</v-list-tile>
				<v-list-tile ripple to="/projects" @click="drawer = false">
					<v-list-tile-title>Projetos</v-list-tile-title>
				</v-list-tile>
				<v-list-tile ripple to="/certificates" @click="drawer = false">
					<v-list-tile-title>Certificados</v-list-tile-title>
				</v-list-tile>
			</v-list>
		</v-bottom-sheet>
		<v-footer>
			<v-spacer></v-spacer>
			&copy; Samuel Novaes {{year}}
			<v-spacer></v-spacer>
		</v-footer>
	</v-app>
</template>

<script>
export default {
	data: () => ({
		drawer: false,
		name: 'Samuel Novaes'
	}),
	computed: {
		width(){
			return innerWidth
		},
		year(){
			return new Date().getFullYear()
		}
	}
}
</script>
