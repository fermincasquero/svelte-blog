import type { Actions } from './$types';
import { BACKEND_URL } from '$env/static/private';
import Axios from 'axios';

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();

		const username = data.get('username') as string;
		const password = data.get('password') as string;

		try {
			const { data } = await Axios.post(`${BACKEND_URL}/api/login`, { username, password });

			cookies.set('token', data.token);
			return data;
		} catch (e) {
			throw e;
		}
	}
};
