<script lang="ts">
	import { enhance } from '$app/forms';
	import { useForm, required, Hint } from 'svelte-use-form';
	import Input from '../../components/Input.svelte';

	const form = useForm();
</script>

<form use:form use:enhance method="POST">
	<div class="flex justify-center">
		<div class="paper w-1/2  md:w-1/3 flex flex-col gap-3 items-center">
			<h3>Login</h3>

			<Input class="w-full" label="Username*" name="username" validators={[required]}>
				<Hint for="username" on="required" let:value>
					<span class="error">Username is required.</span>
				</Hint>
			</Input>

			<Input class="w-full" label="Password*" name="password" validators={[required]}>
				<Hint for="password" on="required" let:value>
					<span class="error"> Password is Required. </span>
				</Hint>
			</Input>

			<button class="btn-primary w-full" type="submit">Submit</button>
		</div>
	</div>
</form>
