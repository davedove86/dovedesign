<script>
  import projects from '../../data/projectData';
</script>

<svelte:head>
  <title
    >Durham Constabulary Jet & Ben | Dove Design Ltd | Real Client Success
    Stories</title
  >
  <meta
    name="description"
    content="This page showcases the Jet & Ben website that was developed for the Durham Police’s Safety Dogs as they visit educational settings and other community engagement events."
  />
  <meta property="og:image" content="/images/open-graph.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Dove Design Ltd" />
  <meta property="og:image:type" content="image/jpeg" />
  <meta property="og:image:secure_url" content="/images/open-graph.jpg" />
</svelte:head>

<section>
  <div class="container project-container">
    <img src={projects[2].heroImage} alt="Durham PCC Logo" />
    <h1 class="project-heading">{projects[2].name}</h1>
    <h2>Overview</h2>
    <p class="project-description">
      {projects[2].overview}
    </p>
    <h2>What We Did</h2>
    <p class="project-description">{projects[2].whatWeDid}</p>
    <h2>The Outcome</h2>
    <p class="project-description">{projects[2].outcome}</p>
    <a href={projects[2].website} target="_blank" rel="noopener noreferrer"
      ><button>Visit the website</button></a
    >
  </div>
</section>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1240px;
  }

  h2 {
    margin-top: 2rem;
  }

  img {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 1rem;
    white-space: pre-line;
  }
</style>
