<script>
	import { required, useForm } from 'svelte-use-form';

	import Input from '$lib/components/common/Input.svelte';
	import TextArea from '$lib/components/common/TextArea.svelte';
	import { enhance } from '$app/forms';

	const form = useForm();
</script>

<div class="flex-col">
	<form use:form use:enhance method="post">
		<h3 class="my-4">Create a new post</h3>

		<div class="paper">
			<Input class="flex flex-col space-y-2" label="Title" name="title" validators={[required]} />
		</div>

		<div class="paper">
			<TextArea
				class="flex flex-col space-y-2 h-60 resize-none"
				label="Content"
				name="content"
				validators={[required]}
			/>

			<div class="flex flex-row justify-end space-x-2 mt-4">
				<button class="btn-error w-24">Cancel</button>
				<button class="btn-primary w-24" type="submit">Save</button>
			</div>
		</div>
	</form>
</div>
