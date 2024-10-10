<script>
	import projects from '../../data/projectData';
</script>

<svelte:head>
	<title>Dove Design Ltd | Community Peer Mentors</title>
	<meta
		name="description"
		content="This page showcases the Community Peer Mentors website that was developed for the Durham Police & Crime Commissioner to help support people in the community."
	/>
</svelte:head>

<section>
	<div class="container project-container">
		<img src={projects[3].heroImage} alt="Durham PCC Logo" />
		<h1 class="project-heading">{projects[3].name}</h1>
		<p class="project-description">{projects[3].overview}</p>
		<p class="project-description">{projects[3].overviewTwo}</p>
		<a href={projects[3].website} target="_blank" rel="noopener noreferrer">Visit the Website</a>
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
