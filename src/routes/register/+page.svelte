<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';

	import Input from '$lib/components/common/Input.svelte';

	import { useForm, required, Hint, email } from 'svelte-use-form';

	const form = useForm();
</script>

<form
	class="w-full"
	use:form
	use:enhance={() => {
		return async ({ result }) => {
			if (result.type === 'success') {
				goto('/login');
			}
		};
	}}
	method="POST"
>
	<div class="flex justify-center">
		<div class="paper w-1/2  md:w-1/3 flex flex-col gap-3 items-center">
			<h3>Register</h3>

			<Input class="w-full" label="Username*" name="username" validators={[required]}>
				<Hint for="username" on="required">
					<span class="error">Username is required.</span>
				</Hint>
			</Input>

			<Input class="w-full" label="Email*" name="email" validators={[required, email]}>
				<Hint for="email" on="required">
					<span class="error">Email is required.</span>
				</Hint>

				<Hint for="email" on="email">
					<span class="error">Not a valid email.</span>
				</Hint>
			</Input>

			<Input
				class="w-full"
				label="Password*"
				name="password"
				type="password"
				validators={[required]}
			>
				<Hint for="password" on="required">
					<span class="error"> Password is Required. </span>
				</Hint>
			</Input>

			<button class="btn-primary w-full" type="submit">Submit</button>
		</div>
	</div>
</form>
