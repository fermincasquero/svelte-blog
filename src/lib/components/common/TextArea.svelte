<script lang="ts">
	import { validators, Hint } from 'svelte-use-form';
	import type { Validator } from 'svelte-use-form';

	export let label: string;
	export let name: string;
	let validatorFunctions: Validator[];
	export { validatorFunctions as validators };
</script>

<div class={$$props.class}>
	<label for={name}>{label}</label>
	<textarea class="w-full" {name} {...$$restProps} use:validators={validatorFunctions} />
	<slot>
		<Hint for={name} on="error" let:value>Error occured</Hint>
	</slot>
</div>
