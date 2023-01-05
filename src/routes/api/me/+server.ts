import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { BACKEND_URL } from '$env/static/private';
import Axios from 'axios';

export const GET: RequestHandler = async ({ cookies }) => {
	const token = cookies.get('token');

	if (!token) return new Response('Unauthorized', { status: 401 });

	try {
		const { data } = await Axios.get(`${BACKEND_URL}/api/me`, {
			headers: { Authorization: `Bearer ${token}` }
		});

		return json(data);
	} catch (e) {
		throw e;
	}
};
