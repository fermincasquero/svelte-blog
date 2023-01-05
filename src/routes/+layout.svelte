<script lang="ts">
	import { onMount } from 'svelte';

	import { auth } from '$lib/store';
	import { getAuth } from '$lib/apis/auth';

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
