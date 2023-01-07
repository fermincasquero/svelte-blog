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
				auth.set({ authenticated: false });
			});
	});
</script>

<Navbar />

<div class="w-full flex justify-center">
	<slot />
</div>
