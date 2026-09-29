<script lang="ts">
	import { onMount } from 'svelte';

	// The address is assembled in the browser so it never appears in the prerendered HTML,
	// which keeps it away from simple scrapers that harvest mailto links.
	let {
		user = 'team',
		domain = 'bridgecivictech.org',
		subject = '',
		label = 'Contact The Bridge',
		class: className = ''
	}: {
		user?: string;
		domain?: string;
		subject?: string;
		label?: string;
		class?: string;
	} = $props();

	let address = $state('');

	onMount(() => {
		address = `${user}@${domain}`;
	});

	const href = $derived(
		address
			? `mailto:${address}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`
			: undefined
	);
</script>

<div class="flex shrink-0 flex-col items-start gap-2 md:items-end">
	<a {href} class={className}>{label}</a>
	<p class="font-mono text-sm">
		{#if address}
			{address}
		{:else}
			{user} [at] {domain}
		{/if}
	</p>
</div>
