import type { IUser } from 'src/types/user';
import { writable } from 'svelte/store';

type AuthState = {
	authenticated: boolean;
	user?: IUser;
};

export const auth = writable<AuthState>({ authenticated: false });
