const queries = {
	skills: `
		{
			listItems(where: { itemType: skill }) {
				name
				icon
				background
				asterisk
			}
		}
	`,
	languages: `
		{
			listItems(where: { itemType: language }) {
				name
				icon
				background
				asterisk
			}
		}
	`,
	posts: `
		{
			posts {
				title
				body
				createdAt
				slug
			}
		}
	`,
	post: `
		{
			post(where: {slug: ""}) {
			title
			body
			createdAt
			}
		}
	`
};

export default queries;
