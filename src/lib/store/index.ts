import { writable } from 'svelte/store';
import type { AuthState } from './types';

export const auth = writable<AuthState>({ authenticated: false });
