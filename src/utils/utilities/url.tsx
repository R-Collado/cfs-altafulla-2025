export const getTeamByUrl = (url: string) => {
	const urlParts = url.split('/');
	const teamName = urlParts[3];
	return teamName;
};
