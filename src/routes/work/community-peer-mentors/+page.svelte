<script>
  import projects from "../../data/projectData";
</script>

<svelte:head>
  <title
    >Community Peer Mentors | Dove Design Ltd | Real Client Success Stories</title
  >
  <meta
    name="description"
    content="This page showcases the Community Peer Mentors website that was developed for the Durham Police & Crime Commissioner to help support people in the community."
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
    <img src={projects[3].heroImage} alt="Durham PCC Logo" />
    <h1 class="project-heading">{projects[3].name}</h1>
    <h2>Overview</h2>
    <p class="project-description">
      {projects[3].overview}
    </p>
    <h2>What We Did</h2>
    <p class="project-description">{projects[3].whatWeDid}</p>
    <h2>The Outcome</h2>
    <p class="project-description">{projects[3].outcome}</p>
    <a href={projects[3].website} target="_blank" rel="noopener noreferrer"
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
