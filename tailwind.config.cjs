const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				'fira-mono': ['"Fira Mono"'],
				poppins: ['"Poppins"']
			},
			colors: {
				beige: 'rgba(255, 252, 245, 1)',
				coral: 'rgba(243, 129, 129, 1)',
				charcoal: 'rgba(48, 48, 48, 1)',
				'pale-yellow': '#F9E8AB',
				'pale-red': '#F2BFBF',
				'pale-green': '#E6EDD2',
				'soft-grey': '#F7F6F9'
			}
		}
	},

	plugins: []
};

module.exports = config;
