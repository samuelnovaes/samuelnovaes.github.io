<template>
	<v-container fluid grid-list-lg>
		<v-layout row wrap>
			<v-flex xs12 sm6 md4 lg3 d-flex v-for="(project, i) in projects" :key="i">
				<v-card raised>
					<v-card-title>
						<div class="headline">{{project.title}}</div>
					</v-card-title>
					<v-container>
						<p v-html="project.desc"></p>
						<v-divider></v-divider><br>
						<p>
							<b>Integrantes</b>
							<v-list>
								<v-list-tile v-for="(member, i) in project.members" :key="i" ripple :href="members[member].link" target="_blank">
									<v-list-tile-avatar>
										<img :src="members[member].avatar" v-if="members[member].avatar">
										<v-avatar :style="{backgroundColor: getColor(members[member].name[0])}" size="40" v-else>
											<span class="white--text headline">{{members[member].name[0]}}</span>
										</v-avatar>
									</v-list-tile-avatar>
									<v-list-tile-title>{{members[member].name}}</v-list-tile-title>
								</v-list-tile>
							</v-list>
						</p>
						<v-divider></v-divider><br>
						<v-btn outline color="primary" v-if="project.git" :href="project.git" target="_blank">
							<v-icon>mdi-github-circle</v-icon>
						</v-btn>
						<v-btn outline color="primary" v-if="project.site" :href="project.site" target="_blank">
							<v-icon>mdi-web</v-icon>
						</v-btn>
						<br><br>
						<v-divider></v-divider><br>
						<v-chip v-for="(tag, i) in project.tags" :key="i">{{tag}}</v-chip>
					</v-container>
				</v-card>
			</v-flex>
		</v-layout>
		<v-btn outline color="primary" :href="repositories" target="_blank">Mais projetos</v-btn>
	</v-container>
</template>

<script>
export default {
	data: () => ({
		repositories: 'https://github.com/samuelnovaes?tab=repositories',
		members: {
			samuel: {
				avatar: '/public/img/members/samuelnovaes.jpg',
				name: 'Samuel Novaes Sena',
				link: 'http://samuelnovaes.ml'
			},
			ximenes: {
				avatar: '/public/img/members/luizximenes.png',
				name: 'Luiz Eduardo Ximenes Neto',
				link: 'http://ximenes.tk'
			},
			eduardo: {
				avatar: '/public/img/members/eduardoalves.jpg',
				name: 'Eduardo Alves',
				link: 'https://www.facebook.com/EduardoAlveSilva'
			}
		},
		projects: [
			{
				title: 'Semana de Ciencia e Tecnologia',
				desc: 'Site do evento Semana de Ciencia e Tecnologia (SC&T), sediado pelo Instituto Federal de Brasília campus Taguatinga nos dias 12, 13 e 14 de junho de 2017. Evento que reuniu palestras, oficinas, workshops, rodas de conversas, exposições, protótipos de produtos e etc.',
				git: 'https://github.com/ximenes130/semanacienciaetecnologia',
				site: 'https://ximenes130.github.io/semanacienciaetecnologia',
				members: ['samuel', 'ximenes'],
				tags: ['Web', 'Vue', 'JavaScript']
			},
			{
				title: 'Labkids',
				desc: 'Site do Grupo de pesquisa LabKids, grupo que objetiva o ensino de Ciencia da Computação, Robótica e Fisica. (Dev in progress)',
				git: false,
				site: 'http://labkids.bsb.br/',
				members: ['samuel', 'ximenes'],
				tags: ['Web', 'JavaScript']
			},
			{
				title: 'Megaloft',
				desc: 'Site desenvolvido para o compartilhamento fácil de arquivos dentro do Instituto Federal de Brasilia.',
				git: false,
				site: 'http://megaloft.net',
				members: ['samuel'],
				tags: ['Web', 'Cloud']
			},
			{
				title: 'Play Torrent',
				desc: 'Aplicativo desktop para streamming de vídeo e audio em torrent.',
				git: 'https://github.com/samuelnovaes/play-torrent',
				site: false,
				members: ['samuel', 'eduardo'],
				tags: ['Desktop', 'Audio', 'Video']
			}
		]
	}),
	methods: {
		getColor(letter){
			let colors = ["#1abc9c", "#16a085", "#f1c40f", "#f39c12", "#2ecc71", "#27ae60", "#e67e22", "#d35400", "#3498db", "#2980b9", "#e74c3c", "#c0392b", "#9b59b6", "#8e44ad", "#bdc3c7", "#34495e", "#2c3e50", "#95a5a6", "#7f8c8d", "#ec87bf", "#d870ad", "#f69785", "#9ba37e", "#b49255", "#b49255", "#a94136"]
			let position = letter.toUpperCase().charCodeAt(0) - 65
			return colors[position]
		}
	}
}
</script>
