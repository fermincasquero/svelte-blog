<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { auth } from '$lib/store';

	auth.subscribe((value) => {
		if (!value.authenticated) {
			if (browser) goto('/login');
		}
	});
</script>

<div class="container mt-4">
	<slot />
</div>
