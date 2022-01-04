export default function formattedDate (dateToFormat) {
	let date = new Date(dateToFormat);
	return date.toLocaleDateString('sv-SE');
};