<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg?url';
	import faviconDark from '$lib/assets/favicon-dark.svg?url';
	import BridgeLogo from '$lib/assets/the_bridge_logo.svg?component';
	import BridgeShare from '$lib/assets/bridge-share.jpg';

	let { children } = $props();
</script>

<svelte:head>
	<title>The Bridge - Digital Solutions for Nonprofits and Government</title>
	<meta
		name="description"
		content="The Bridge partners with nonprofits and government to build human-centered software that improves public services."
	/>
	<link rel="icon" href={favicon} />
	<link rel="icon" href={favicon} media="(prefers-color-scheme: light)" />
	<link rel="icon" href={faviconDark} media="(prefers-color-scheme: dark)" />
	<!-- OpenGraph tags -->
	<meta
		property="og:title"
		content="The Bridge - Digital Solutions for Nonprofits and Government"
	/>
	<meta
		property="og:description"
		content="The Bridge partners with nonprofits and government to build human-centered software that improves public services."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://bridgecivictech.org/" />
	<meta property="og:image" content={BridgeShare} />
	<!-- Twitter Card tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta
		name="twitter:title"
		content="The Bridge - Digital Solutions for Nonprofits and Government"
	/>
	<meta
		name="twitter:description"
		content="The Bridge partners with nonprofits and government to build human-centered software that improves public services."
	/>
	<meta name="twitter:image" content={BridgeShare} />
</svelte:head>

{@render children?.()}

<footer class="container mx-auto flex flex-col space-y-12 px-8 py-16">
	<BridgeLogo class="w-40 fill-current"></BridgeLogo>

	<div class="grid space-y-8 font-mono md:grid-cols-2 md:space-y-0 md:space-x-8 md:text-xl">
		<div class="">
			The Bridge is a new incubator and accelerator for building mission-driven startups,
			nonprofits, and scalable infrastructure for the public.
		</div>
		<div class="">
			Built by technologists who were recently doing this work at 18F, USDS, and TTS in the Federal
			Government.
		</div>
	</div>

	<div class=" text-surface-600-400 uppercase">© The Bridge 2025</div>
</footer>
