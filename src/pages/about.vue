<template>
	<v-container fluid>
		<v-card raised>
			<v-layout row wrap>
				<v-flex xs12 sm4 md3 lg2>
					<v-card-media src="/public/img/avatar.jpg" height="100%" class="hidden-xs-only"></v-card-media>
					<v-card-media src="/public/img/avatar.jpg" height="200px" class="hidden-sm-and-up"></v-card-media>
				</v-flex>
				<v-flex xs12 sm8 md9 lg10>
					<v-card-title>
						<div class="headline">{{name}}</div>
					</v-card-title>
					<v-container>
						<p v-html="desc"></p>
						<v-divider></v-divider>
						<v-list ripple>
							<v-list-tile :href="social.facebook" target="_blank">
								<v-list-tile-avatar>
									<v-icon>mdi-facebook</v-icon>
								</v-list-tile-avatar>
								<v-list-tile-title>Facebook</v-list-tile-title>
							</v-list-tile>
							<v-list-tile :href="social.github" target="_blank">
								<v-list-tile-avatar>
									<v-icon>mdi-github-circle</v-icon>
								</v-list-tile-avatar>
								<v-list-tile-title>GitHub</v-list-tile-title>
							</v-list-tile>
							<v-list-tile :href="`mailto://${social.email}`">
								<v-list-tile-avatar>
									<v-icon>mdi-email</v-icon>
								</v-list-tile-avatar>
								<v-list-tile-title>{{social.email}}</v-list-tile-title>
							</v-list-tile>
							<v-list-tile :href="`tel://${social.phone}`">
								<v-list-tile-avatar>
									<v-icon>mdi-phone</v-icon>
								</v-list-tile-avatar>
								<v-list-tile-title>{{social.phone}}</v-list-tile-title>
							</v-list-tile>
						</v-list>
					</v-container>
				</v-flex>
			</v-layout>
		</v-card>
	</v-container>
</template>

<script>
	export default {
		data: () => ({
			name: 'Samuel Novaes Sena',
			desc: `
				Tenho ${idade(30, 12, 1996)} anos de idade.<br>
				Curso Licenciatura em Computação no Instituto Federal de Brasília.<br>
				Possuo experiência em desenvolvimento web Full Stack e aplicações multiplataforma (mobile e desktop).
			`,
			social: {
				facebook: 'https://www.facebook.com/samuel.n.sena',
				github: 'https://github.com/samuelnovaes',
				email: 'samuel.novaes.96@gmail.com',
				phone: '(61) 3540-1566'
			}
		})
	}

	function idade(d, m, y){
		let D = new Date()
		let cY = D.getFullYear()
		let cM = D.getMonth() + 1
		let cD = D.getDate()
		let age = cY - y
		if(cM < m || cM == m && cD < d){
			age--
		}
		return age
	}
</script>
