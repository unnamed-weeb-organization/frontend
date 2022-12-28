export const getFormattedTime = (time: number) => {
	const minutes = Math.floor(time / 60);
	const seconds = Math.floor(time - minutes * 60);
	return `${minutes}:${seconds}`;
};

export const getFormattedDate = (date: Date) => {
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();

	return `${year}-${month}-${day}`;
}