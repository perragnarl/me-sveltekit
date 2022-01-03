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
	timeline: `
		{
			timelineItems(orderBy: from_DESC) {
			title
			subtitle
			from
			until
			}
		}
	`
};

export default queries;
