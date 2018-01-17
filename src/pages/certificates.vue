<template>
	<v-container fluid>
		<v-list>
			<v-list-tile v-for="(certificate, i) in certificates" :key="i" ripple :href="certificate.file">
				<v-list-tile-avatar>
					<v-icon>mdi-download</v-icon>
				</v-list-tile-avatar>
				<v-list-tile-title>{{certificate.name}}</v-list-tile-title>
			</v-list-tile>
		</v-list>
	</v-container>
</template>

<script>
	export default {
		data: () => ({
			certificates: [
				{
					name: 'Campus Party Brasília 2017',
					file: '/public/pdf/certificates/cpbsb2017.pdf'
				},
				{
					name: 'FLISOL DF 2017',
					file: '/public/pdf/certificates/flisol.pdf'
				},
				{
					name: 'FLISOL DF 2017 - Palestrante',
					file: '/public/pdf/certificates/flisol-palestrante.pdf'
				},
				{
					name: 'Projeto Hermes - Hackathon CPBSB 2017',
					file: '/public/pdf/certificates/hermes.pdf'
				},
				{
					name: 'I Semana da Computação - IFB',
					file: '/public/pdf/certificates/scomp1.pdf'
				},
				{
					name: 'II Semana da Computação - IFB',
					file: '/public/pdf/certificates/scomp2.pdf'
				},
				{
					name: 'TIM Tec | HTML5 - Introdução ao Front End',
					file: '/public/pdf/certificates/timtec-html.pdf'
				},
				{
					name: 'TIM Tec | Design de Interfaces com CSS3',
					file: '/public/pdf/certificates/timtec-css.pdf'
				},
				{
					name: 'Tim Tec | JavaScript: Conceitos e Bibliotecas',
					file: '/public/pdf/certificates/timtec-js.pdf'
				}
			]
		})
	}
</script>
