import { BACKEND_URL } from '$env/static/private';
import type { Actions } from '@sveltejs/kit';
import Axios from 'axios';

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const newPost = await request.formData();

		const title = newPost.get('title');
		const content = newPost.get('content');

		const token = cookies.get('token');

		try {
			const { data } = await Axios.post(
				`${BACKEND_URL}/api/posts`,
				{ title, content },
				{ headers: { Authorization: `Bearer ${token}` } }
			);

			return data;
		} catch (e) {
			throw e;
		}
	}
};
