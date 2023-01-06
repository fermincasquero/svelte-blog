<script lang="ts">
	import { onMount } from 'svelte';

	import { auth } from '$lib/store';
	import { getAuth } from '$lib/apis/auth';
	import Navbar from '$lib/components/Navbar/index.svelte';

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

<div>
	<Navbar />
	<slot />
</div>
