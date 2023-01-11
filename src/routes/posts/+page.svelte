<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="w-full flex flex-row">
	<div class="flex flex-1" />
	<div><a href="/posts/new">Create Post</a></div>
</div>

<div class="w-full">
	{#each data.posts as post}
		<h6>{post.title}</h6>

		<div>{post.content}</div>
	{/each}
</div>
