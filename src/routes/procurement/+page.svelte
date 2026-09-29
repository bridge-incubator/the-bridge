<script lang="ts">
	import EmailContact from '$lib/components/EmailContact.svelte';

	type Vehicle = {
		name: string;
		issuer: string;
		description: string;
		details: string[];
		link: { href: string; label: string };
	};

	const vehicles: Vehicle[] = [
		{
			name: 'Colorado Digital Maturity Professional Services',
			issuer: "Governor's Office of Information Technology (OIT)",
			description:
				'A statewide contract that pairs skilled digital service experts with state and local governments to assess current capabilities, implement modern digital solutions, and build lasting internal capacity. Any governmental unit in Colorado can buy through DMPS at no additional cost or fee. That includes state agencies, cities, counties, public utilities, school districts, and public colleges and universities.',
			details: [
				'Digital maturity enhancement: product management, human-centered design, customer experience, data science, and development, plus capability assessments and strategy grounded in the Colorado Digital Government Strategic Plan',
				'Experts at emerging, associate, and advanced levels work alongside your staff, not as staff augmentation, so skills stay with your team',
				'Your team sets the scope of work and places its own purchase order; there is no new competitive procurement to run'
			],
			link: {
				href: 'https://oit.colorado.gov/engage-with-us/buy-it-products-services/enterprise-agreements',
				label: 'OIT enterprise agreements'
			}
		},
		{
			name: 'Pennsylvania Agile Digital Development Services ITQ',
			issuer: 'Department of General Services (DGS)',
			description:
				'An Invitation to Qualify (ITQ) contract that pre-qualifies vendors to do digital service work for Commonwealth agencies, with the goal of making digital experiences for Pennsylvanians simple, seamless, and secure. Work is fixed price and deliverables based, not staff augmentation.',
			details: [
				'Service categories span discovery, design, development, QA and testing, accessibility, DevSecOps, project management, deployment, capacity building, and data',
				'Under $100,000, an agency program area can select a qualified contractor directly; larger scopes go out as a Request for Quotes',
				'Each agency program area can use the ITQ for up to $2 million per year'
			],
			link: {
				href: 'https://www.pa.gov/agencies/dgs/submit-proposals-and-bids-for-commonwealth-projects/itq-documents',
				label: 'DGS ITQ documents'
			}
		}
	];
</script>

<svelte:head>
	<title>Procurement Options | The Bridge</title>
	<meta
		name="description"
		content="Contract vehicles government teams in Colorado and Pennsylvania can use to work with The Bridge."
	/>
</svelte:head>

<main>
	<section
		class="min-h-[70vh] w-full preset-filled-primary-500 bg-[url(https://imagedelivery.net/KssI4mUfPYbQYyGEXZ6Jlg/bf6ed939-5991-4d76-e824-6b870a7b5a00/2500)] bg-cover bg-center bg-blend-multiply"
	>
		<div class="mx-auto flex min-h-[70vh] justify-start xl:container">
			<div
				class="flex w-full flex-col justify-center bg-primary-50-950/80 p-8 text-primary-contrast-50-950 backdrop-blur-sm sm:w-xl md:w-2xl"
			>
				<h1 class="text-4xl font-light md:text-6xl">
					Work with The Bridge through a path that fits your agency.
				</h1>
				<p class="mt-8 text-xl font-light md:text-2xl">
					Existing state contract vehicles let agencies start work faster, without a new competitive
					procurement. We'll help your team find the most practical route for an engagement.
				</p>
			</div>
		</div>
	</section>

	<section class="bg-surface-50-950 px-8 py-20 text-surface-950-50">
		<div class="mx-auto max-w-6xl">
			<div class="grid gap-4 md:grid-cols-2">
				{#each vehicles as vehicle}
					<article class="flex flex-col border border-surface-300-700 bg-surface-100-900 p-6">
						<h2 class="text-2xl font-semibold">{vehicle.name}</h2>
						<p class="mt-2 font-mono text-sm text-surface-600-400">{vehicle.issuer}</p>
						<p class="mt-4 text-lg font-light">{vehicle.description}</p>
						<ul class="mt-4 list-disc space-y-2 pl-5 text-base font-light">
							{#each vehicle.details as detail}
								<li>{detail}</li>
							{/each}
						</ul>
						<a
							href={vehicle.link.href}
							class="mt-8 font-mono text-sm text-primary-500 uppercase underline"
							target="_blank"
							rel="noopener noreferrer">{vehicle.link.label}</a
						>
					</article>
				{/each}
			</div>
		</div>
	</section>

	<section class="preset-filled-secondary-500 px-8 py-20 text-secondary-contrast-50-950">
		<div
			class="mx-auto flex max-w-6xl flex-col justify-between gap-8 text-black md:flex-row md:items-end"
		>
			<div class="max-w-3xl">
				<p class="font-mono text-lg uppercase">Start a conversation</p>
				<h2 class="mt-4 text-3xl font-light md:text-4xl">
					Not sure which procurement vehicle applies?
				</h2>
				<p class="mt-4 text-xl font-light">
					Outside Colorado or Pennsylvania? Tell us about your project and we'll work through the
					options with you.
				</p>
			</div>
			<EmailContact
				subject="Procurement inquiry"
				class="btn preset-filled-secondary-950-50 btn-lg font-bold uppercase"
			/>
		</div>
	</section>
</main>
