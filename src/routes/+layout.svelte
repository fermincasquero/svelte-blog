<script lang="ts">
	import { getAuth } from '../apis/auth';
	import { onMount } from 'svelte';
	import { auth } from 'src/store';
	import '../app.css';

	onMount(() => {
		getAuth()
			.then(({ data }) => {
				auth.set({ authenticated: true, user: data });
			})
			.catch((e) => {
				console.log(e);
			});
	});
</script>

<slot />
