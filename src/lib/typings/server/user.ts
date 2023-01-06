export interface User {
	id: string;
	name: string;
	roles: Role[];
}

export enum Role {
	User = "User",
	Verified = "Verified",
	Contributor = "Contributor",
	Moderator = "Moderator",
	Admin = "Admin"
}

export const getHigherOrderRole = (roles: Role[]): Role => {
	const roleObject = Object.keys(Role);

	return roles.reduce((acc, role) =>
		roleObject.indexOf(role) > roleObject.indexOf(acc) ? role : acc
	);
};

export const isRoleHigherThan = (role: Role, otherRole: Role): boolean =>
	Object.keys(Role).indexOf(role) > Object.keys(Role).indexOf(otherRole);
