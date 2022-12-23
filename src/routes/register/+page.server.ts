import { invalid } from '@sveltejs/kit';
import type { Actions } from './$types';
import { BACKEND_URL } from '$env/static/private';
import Axios from 'axios';

export const actions: Actions = {
	default: async ({ request, setHeaders }) => {
		const data = await request.formData();

		const username = data.get('username') as string;
		const password = data.get('password') as string;
		const email = data.get('email') as string;

		try {
			const { data } = await Axios.post(`${BACKEND_URL}/api/register`, {
				password,
				email,
				username
			});

			return data;
		} catch (e: any) {
			if (e.response && e.response.status === 400) {
				return invalid(400, e.response.data.error);
			}

			throw e;
		}
	}
};
