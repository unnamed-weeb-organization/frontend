export enum Role {
	Unverified = "Unverified",
	User = "User",
	Contributor = "Contributor",
	Moderator = "Moderator",
	Admin = "Admin",
}

export const isRoleHigherThan = (expectedHigher: Role, expectedLower: Role): boolean => {
	const roles = Object.values(Role);
	const higherIndex = roles.indexOf(expectedHigher);
	const lowerIndex = roles.indexOf(expectedLower);
	return higherIndex > lowerIndex;
};
