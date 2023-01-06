import type { IUser } from 'src/types/user';

export type AuthState = {
	authenticated: boolean;
	user?: IUser;
};
