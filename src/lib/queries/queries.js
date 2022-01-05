import { gql } from 'graphql-request';

export function getResume() {
	return gql`
		{
			about: abouts {
				body {
					html
				}
			}
			skills: listItems(where: { itemType: skill }) {
				name
				icon
				background
				asterisk
			}
			languages: listItems(where: { itemType: language }) {
				name
				icon
				background
				asterisk
			}
			methods: listItems(where: { itemType: method }) {
				name
				icon
				background
				asterisk
			}
			interests: listItems(where: { itemType: interest }) {
				name
				icon
				background
				asterisk
			}
			timeline: timelineItems(orderBy: from_DESC) {
				title
				subtitle
				from
				until
			}
		}
	`;
}

export function getPosts() {
	return gql`
		{
			posts(orderBy: createdAt_DESC) {
				title
				intro
				createdAt
				slug
			}
		}
	`;
}

export function getPost(slug) {
	return gql`
		{
			post(where: {slug: "${slug}"}) {
				title
				createdAt
				body {
					html
				}
			}
		}
	`;
}
