<template>
	<v-container fluid>
		<v-list>
			<v-list-tile v-for="(certificate, i) in certificates" :key="i" ripple :href="certificate.file" target="_blank">
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
					name: 'Campus Party Brasil 2018 - Campus Future',
					file: '/public/doc/certificates/cpbr2018.pdf'
				},
				{
					name: 'Campus Party Brasília 2017',
					file: '/public/doc/certificates/cpbsb2017.pdf'
				},
				{
					name: 'FLISOL DF 2017',
					file: '/public/doc/certificates/flisol.pdf'
				},
				{
					name: 'FLISOL DF 2017 - Palestrante',
					file: '/public/doc/certificates/flisol-palestrante.pdf'
				},
				{
					name: 'Projeto Hermes - Hackathon CPBSB 2017',
					file: '/public/doc/certificates/hermes.pdf'
				},
				{
					name: '1ª Semana da Computação - IFB',
					file: '/public/doc/certificates/scomp1.pdf'
				},
				{
					name: '2ª Semana da Computação - IFB (Ouvinte)',
					file: '/public/doc/certificates/scomp2.pdf'
				},
				{
					name: '2ª Semana da Computação - IFB (Voluntário)',
					file: '/public/doc/certificates/scomp2-voluntario.jpg'
				},
				{
					name: 'TIM Tec | HTML5 - Introdução ao Front End',
					file: '/public/doc/certificates/timtec-html.pdf'
				},
				{
					name: 'TIM Tec | Design de Interfaces com CSS3',
					file: '/public/doc/certificates/timtec-css.pdf'
				},
				{
					name: 'Tim Tec | JavaScript: Conceitos e Bibliotecas',
					file: '/public/doc/certificates/timtec-js.pdf'
				},
				{
					name: '1º Circuito de Ciências das Escolas Públicas do DF',
					file: '/public/doc/certificates/ciencias.jpg'
				},
				{
					name: 'Certificado de Conclusão do Ensino Médio',
					file: '/public/doc/certificates/ensinomedio.jpg'
				},
				{
					name: 'Mensão Honrosa OBMEP 2012',
					file: '/public/doc/certificates/obmep2012.jpg'
				},
				{
					name: 'Mensão Honrosa OBMEP 2014',
					file: '/public/doc/certificates/obmep2014.jpg'
				},
				{
					name: 'Mensão Honrosa OBMEP 2014 (Secretaria de Educação)',
					file: '/public/doc/certificates/obmep2014-secretaria.jpg'
				},
				{
					name: 'Microsoft Students to Business 1/2015 (Microsoft)',
					file: '/public/doc/certificates/s2b.jpg'
				},
				{
					name: 'Microsoft Students to Business 1/2015 (Senai)',
					file: '/public/doc/certificates/s2b-senai.jpg'
				},
				{
					name: 'Computação Gráfica - SAGA',
					file: '/public/doc/certificates/saga.jpg'
				},
				{
					name: 'Curso Lógica de Programação - Softblue',
					file: '/public/doc/certificates/logica-softblue.pdf'
				}
			]
		})
	}
</script>
