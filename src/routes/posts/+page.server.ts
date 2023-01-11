import type { PageServerLoad } from './$types';

import Axios from 'axios';
import { BACKEND_URL } from '$env/static/private';
import type { IPost } from 'src/types/post';

export const load: PageServerLoad<{ posts: IPost[] }> = async () => {
	try {
		const { data } = await Axios.get<IPost[]>(`${BACKEND_URL}/api/posts`);

		return { posts: data };
	} catch (e) {
		throw e;
	}
};
