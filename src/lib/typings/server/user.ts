export enum Role {
	User,
	Contributor,
	Moderator,
	Admin ,
}

export function getRoleName(role: Role): string {
	switch (role) {
		case Role.Admin:
			return "Admin";
		case Role.Moderator:
			return "Moderator";
		case Role.Contributor:
			return "Contributor";
		case Role.User:
			return "User";
	}
}

export function getHigherOrderRole(roles: Role[]): Role {
	return roles.reduce((a, b) => (a > b ? a : b));
}