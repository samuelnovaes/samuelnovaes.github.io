<template>
	<v-container fluid grid-list-lg>
		<v-layout row wrap>
			<v-flex xs12>
				<v-btn outline color="primary" :href="cv" target="_blank"><v-icon>mdi-download</v-icon> PDF</v-btn>
				<v-btn outline color="primary" :href="lattes" target="_blank">Lattes</v-btn>
			</v-flex>
			<v-flex xs12 sm6 md4 lg3 d-flex v-for="(section, i) in sections" :key="i">
				<v-card raised>
					<v-card-title>
						<div class="headline">{{section.title}}</div>
					</v-card-title>
					<v-container>
						<div v-for="(item, i) in section.items" :key="i">
							<b>{{item.name}}</b><br>
							{{item.desc}}
							<div v-if="i != section.items.length - 1">
								<v-divider></v-divider><br>
							</div>
						</div>
					</v-container>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {
	data: () => ({
		cv: '/public/pdf/cv.pdf',
		lattes: 'http://lattes.cnpq.br/6279453397485729',
		sections: [
			{
				title: 'Tecnologias',
				items: [
					{
						name: 'Linguagens/Plataformas/Frameworks',
						desc: 'HTML, CSS, JavaScript, Web Design Responsivo, Node.js, Express, Cordova, Electron, Vue.js, Vuetify, PHP, Bash, SQL'
					},
					{
						name: 'Sistemas Operacionais',
						desc: 'Windows, Linux'
					},
					{
						name: 'SGBDs',
						desc: 'MySQL, PostgreSQL, SQLite, RethinkDB, NanoSQL'
					},
					{
						name: 'IoT',
						desc: 'Arduino, Raspberry Pi'
					}
				]
			},
			{
				title: 'Experiências proficionais',
				items: [
					{
						name: 'Desenvolvedor Web',
						desc: 'TSD Tecnologia | 2015 - 2015'
					}
				]
			},
			{
				title: 'Formação',
				items: [
					{
						name: 'Ensino Fundamental',
						desc: 'CED Incra 09 - Ceilândia - DF | 2003 - 2011'
					},
					{
						name: 'Ensino Médio',
						desc: 'CED Incra 08 - Brazlândia - DF | 2012 - 2014'
					},
					{
						name: 'Licenciatura em Ciência da Computação',
						desc: 'IFB Campus Taguatinga | 2015 - Agora'
					}
				]
			},
			{
				title: 'Formação Complementar',
				items: [
					{
						name: 'Computação Gráfica',
						desc: 'SAGA | 2013 - 2016'
					},
					{
						name: 'Microsoft Students to Business',
						desc: 'SENAI | 2015'
					},
					{
						name: 'HTML5 - Introdução ao Front End',
						desc: 'TIM Tec | 2016'
					},
					{
						name: 'Design de Interfaces com CSS3',
						desc: 'TIM Tec | 2016'
					},
					{
						name: 'JavaScript: Conceitos e Bibliotecas',
						desc: 'TIM Tec | 2016'
					},
					{
						name: 'Competências Empreendedoras',
						desc: 'IFES | 2017 - Agora'
					}
				]
			},
			{
				title: 'Idiomas',
				items: [
					{
						name: 'Postuguês',
						desc: 'Fluente'
					},
					{
						name: 'Inglês',
						desc: 'Intermediário'
					},
					{
						name: 'Espanhol',
						desc: 'Básico'
					},
					{
						name: 'Libras',
						desc: 'Básico'
					}
				]
			}
		]
	})
}
</script>
