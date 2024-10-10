<script>
	import projects from '../../data/projectData';
</script>

<svelte:head>
	<title>Dove Design Ltd | Durham Police & Crime Commissioner</title>
	<meta
		name="description"
		content="This page showcases the Durham Police & Crime Commissioner website that was build to help the service to offer services to help support people in the community."
	/>
</svelte:head>

<section>
	<div class="container project-container">
		<img src={projects[0].heroImage} alt="Durham PCC Logo" />
		<h1 class="project-heading">{projects[0].name}</h1>
		<p class="project-description">{projects[0].overview}</p>
		<p class="project-description">{projects[0].overviewTwo}</p>
		<a href={projects[0].website} target="_blank" rel="noopener noreferrer">Visit the Website</a>
	</div>
</section>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 1240px;
	}

	img {
		margin-bottom: 2rem;
	}
	p {
		margin-bottom: 1rem;
	}

	a {
		margin-top: 1rem;
		color: var(--accent-blue);
		text-decoration: underline;
	}
</style>
