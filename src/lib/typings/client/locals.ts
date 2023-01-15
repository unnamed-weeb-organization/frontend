/*
 * Should only include types used by `App.Locals` and `App.Session`.
 */
import type { Role } from "$lib/typings/server/user";

/**
 * User data shared within `App.Locals`
 */
export interface LocalsUser {
	ulid: string;
	access_level: Role;
}

export interface LocalStorageUser {
	ulid: string;
	role: Role;
	username: string;
	createdAt: number;
}

/**
 * Data stored within an encoded JWT session token.
 */
export interface SessionJWTData {
	iat: number;
	exp: number;
	access_level: Role;
	ulid: string;
}
