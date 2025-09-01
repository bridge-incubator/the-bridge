<script lang="ts">
	import BridgeLogo from '$lib/assets/the_bridge_logo.svg?component';
	import MinneapolisFoundationLogo from '$lib/assets/minneapolis-foundation.svg?component';
</script>

<main>
	<section id="home" class="flex w-full items-center justify-center py-[20vh]">
		<BridgeLogo class="max-h-[33vh] max-w-[66vw] fill-current"></BridgeLogo>
	</section>

	<section
		id="whatwedo"
		class="mb-2 min-h-[95vh] w-full preset-filled-primary-500 bg-[url(https://imagedelivery.net/KssI4mUfPYbQYyGEXZ6Jlg/bf6ed939-5991-4d76-e824-6b870a7b5a00/2500)] bg-cover bg-center bg-blend-multiply"
	>
		<div class="mx-auto flex justify-start xl:container">
			<div
				class="justify-content flex min-h-[95vh] w-full flex-col justify-center bg-primary-50-950/80 p-8 text-left text-primary-contrast-50-950 backdrop-blur-sm sm:w-xl md:w-2xl"
			>
				<h1 class="mb-6 font-mono text-lg text-primary-950-50 uppercase">What we do</h1>
				<p class="text-2xl font-light md:text-3xl">
					<span class="font-semibold">The Bridge works with nonprofits and government agencies</span
					>
					to improve the delivery of public services through a combination of human-centered design,
					agile development, collaboration, and coaching.
				</p>
			</div>
		</div>
	</section>

	<section
		id="whoweare"
		class="mb-2 min-h-[95vh] w-full preset-filled-secondary-500 bg-[url(https://imagedelivery.net/KssI4mUfPYbQYyGEXZ6Jlg/465fe801-a382-49e9-64ee-4041b2598c00/2500)] bg-cover bg-center bg-blend-multiply"
	>
		<div class="mx-auto flex justify-end xl:container">
			<div
				class="justify-content flex min-h-[95vh] w-full flex-col justify-center bg-secondary-50-950/80 p-8 text-left text-secondary-contrast-50-950 backdrop-blur-sm sm:w-xl md:w-2xl"
			>
				<h1 class="mb-6 font-mono text-lg text-secondary-950-50 uppercase">Who we are</h1>
				<p class="text-2xl font-light md:text-3xl">
					We are a collective of former public servants with a track record of successfully tackling
					complex problems and improving government systems. <span class="font-semibold"
						>Our consultants are available to work on initiatives funded through donations, grants,
						or fee-for-service engagements.</span
					>
				</p>
				<a
					class="mt-8"
					href="https://docs.google.com/forms/d/e/1FAIpQLSeMA6M_RllGHeKJKAei-9lVFJhia2eXcm-kqekc3MhaJlO62g/viewform"
					><button
						type="button"
						class=" btn preset-filled-secondary-950-50 btn-lg font-bold uppercase"
						>Partner with us</button
					></a
				>
			</div>
		</div>
	</section>

	<section
		id="workwithus"
		class="mb-2 min-h-[95vh] w-full preset-filled-tertiary-500 bg-[url(https://imagedelivery.net/KssI4mUfPYbQYyGEXZ6Jlg/4ce6f99e-5d6d-4465-6dc9-26fe35f12a00/2500)] bg-cover bg-center bg-blend-multiply"
	>
		<div class="mx-auto flex justify-start xl:container">
			<div
				class="justify-content flex min-h-[95vh] w-full flex-col justify-center bg-tertiary-50-950/80 p-8 text-left text-tertiary-contrast-50-950 backdrop-blur-sm sm:w-xl md:w-2xl"
			>
				<h1 class="mb-6 font-mono text-lg text-tertiary-950-50 uppercase">Work with us</h1>
				<p class=" text-2xl font-light md:text-3xl">
					<span class="font-semibold"
						>The Bridge is seeking bold ideas for high-impact projects.</span
					> If you have a venture that addresses a public need, we want to hear from you! We'll work
					with you to take your vision from concept to reality, providing the support, funding, and connections
					needed to launch it.
				</p>
				<a
					class=" mt-8"
					href="https://docs.google.com/forms/d/e/1FAIpQLSfRPBHfnBJGY8MaIhkjH8mwjvsvFe4aB0D4_tcxOQ2_5YaRQQ/viewform"
					><button
						type="button"
						class="btn preset-filled-tertiary-950-50 btn-lg font-bold uppercase"
						>Get in touch</button
					></a
				>
			</div>
		</div>
	</section>

	<section
		id="donate"
		class="mb-2 min-h-[95vh] w-full preset-filled-primary-500 bg-[url(https://imagedelivery.net/KssI4mUfPYbQYyGEXZ6Jlg/bf6ed939-5991-4d76-e824-6b870a7b5a00/2500)] bg-cover bg-center bg-blend-multiply"
	>
		<div class="mx-auto flex justify-end xl:container">
			<div
				class="justify-content flex min-h-[95vh] w-full flex-col justify-center bg-primary-50-950/80 p-8 text-left text-primary-contrast-50-950 backdrop-blur-sm sm:w-xl md:w-2xl"
			>
				<h1 class="mb-6 font-mono text-lg text-primary-950-50 uppercase">Support us</h1>
				<div class="mb-6 max-w-80 text-[#EB2121] dark:text-[#ffffff]">
					<MinneapolisFoundationLogo class="fill-current"></MinneapolisFoundationLogo>
				</div>
				<p class="text-2xl font-light md:text-3xl">
					The Bridge is made possible via fiscal sponsorship from The Minneapolis Foundation.
					<span class=" text-2xl font-semibold md:text-3xl"
						>Donate to The Bridge to support our work.</span
					>
				</p>
				<a
					class="mt-8"
					href="https://tmf.iphiview.com/tmf/DonatetoAnotherFund/OnlineDonation/tabid/384/dispatch/contribution_id$591478_hash$ffd44d0f6400c0690dbeaf92feb241c2eeff736e/Default.aspx"
					><button type="button" class="btn preset-filled-primary-950-50 btn-lg font-bold uppercase"
						>Donate</button
					></a
				>
			</div>
		</div>
	</section>
</main>
