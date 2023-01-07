<script lang="ts">
	import { auth } from '$lib/store';
	import type { AuthState } from '$lib/store/types';

	let authState: AuthState;

	auth.subscribe((value) => {
		authState = value;
	});
</script>

<div class="w-full static top-0 h-16 shadow-lg flex flex-row items-center px-8">
	<div class="flex-1">
		<a href="/posts">Posts</a>
	</div>
	<div>
		{#if authState.authenticated}
			<a href="/profile">{authState.user?.username}</a>
		{:else}
			<a href="/login">Sign In</a>
		{/if}
	</div>
</div>
