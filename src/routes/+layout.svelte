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
			Built by technologists formerly at 18F and the Technology Transformation Service (TTS) in the Federal
			Government.
		</div>
	</div>

	<div class="flex items-center space-x-4">
		<a
			href="https://bsky.app/profile/bridgecivictech.bsky.social"
			target="_blank"
			rel="me"
			aria-label="Bluesky profile"
			class="hover:opacity-80"
		>
			<svg
				role="img"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				class="inline-block h-6 w-6 align-middle"
				><title>@bridgecivictech.bsky.social</title><path
					fill="currentColor"
					d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z"
				/></svg
			>
		</a>
		<a
			href="https://www.linkedin.com/company/the-bridge-civic-tech"
			target="_blank"
			rel="me"
			aria-label="LinkedIn profile"
			class="hover:opacity-80"
		>
			<svg 
				role="img"
				viewBox="0 0 16 16"
				xmlns="http://www.w3.org/2000/svg"
				class="inline-block h-6 w-6 align-middle"
				><title>The Bridge Civic Tech LinkedIn</title><path 
					fill="currentColor"
					d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
				/></svg
			>
		</a>

	</div>

	<div class=" text-surface-600-400 uppercase">© The Bridge 2025</div>
</footer>
