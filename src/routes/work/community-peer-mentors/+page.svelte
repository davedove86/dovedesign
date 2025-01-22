<script>
  import projects from '../../data/projectData';
  let currentProjectIndex = 0;
</script>

<svelte:head>
  <title
    >{projects[3].name} | Dove Design Ltd | Real Client Success Stories</title
  >
  <meta name="description" content={projects[3].overview} />
  <meta
    property="og:image"
    content="https://dovedesign.io/images/open-graph.jpg"
  />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Dove Design Ltd" />
  <meta property="og:image:type" content="image/jpeg" />
  <meta
    property="og:image:secure_url"
    content="https://dovedesign.io/images/open-graph.jpg"
  />
</svelte:head>

<section>
  <div class="container project-container">
    <img src={projects[3].heroImage} alt="Durham PCC Logo" />
    <h1 class="project-heading">{projects[3].name}</h1>
    <div class="tags-wrapper">
      {#each projects[3].tags as tag}
        <div class="tags">
          <p>{tag}</p>
        </div>
      {/each}
    </div>
    <div class="client-wrapper">
      <div class="client-item">
        <h3>Client</h3>
        <p>{projects[3].clientName}</p>
      </div>
      <div class="client-item">
        <h3>Website</h3>
        <a href="https://www.durham-pcc.gov.uk" target="_blank"
          >{projects[3].website}</a
        >
      </div>
      <div class="client-item">
        <h3>Date</h3>
        <p>{projects[3].date}</p>
      </div>
    </div>
    <h2>Overview</h2>
    <p class="project-description">
      {projects[3].overview}
    </p>
    <h2>What We Did</h2>
    <p class="project-description">{projects[3].whatWeDid}</p>
    <h2>The Outcome</h2>
    <p class="project-description">{projects[3].outcome}</p>
  </div>
</section>

<!-- Testimonial -->
<section>
  <div class="container">
    <div class="testimonial-wrapper">
      <h3>{projects[3].testimonialQuote}</h3>
      <img
        style="max-width: 200px;"
        src={projects[3].crest}
        alt={projects[3].clientName}
      />
      <p>{projects[3].testimonialName}</p>
      <p style="font-weight: 400;">
        {projects[3].testimonialTitle}
      </p>
    </div>
  </div>
</section>

<!-- <section>
  <div class="center">
    <h2>Next Project</h2>
    <p>Want to see another of our recent projects</p>
  </div>
  {#each projects as project, index}
    {#if index !== currentProjectIndex}
      <div class="grid-col-2">
        <div>
          <img
            class="portfolio-image"
            src={project.image}
            alt="{project.name} website"
          />
        </div>
        <div>
          <h2>{project.name}</h2>
          <div class="tags-wrapper">
            {#each project.tags as tag}
              <div class="tags">
                <p>{tag}</p>
              </div>
            {/each}
          </div>
          <p>{project.kicker}</p>
        </div>
      </div>
    {/if}
  {/each}
</section> -->

<!-- TODO Add random project using JS -->

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1240px;
  }

  .tags-wrapper {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
  .tags p {
    background-color: #eee;
    color: var(--accent-blue);
    padding: 0.5rem 1rem;
    border-radius: 5px;
  }

  .client-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 2rem;
    gap: 3rem;
    width: 100%;
  }

  .client-item {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  h1 {
    text-align: center;
  }

  img {
    margin-bottom: 2rem;
  }
  h2 {
    margin-top: 2rem;
  }
  p {
    margin-bottom: 1rem;
    white-space: pre-line;
  }

  a {
    color: var(--accent-blue);
  }

  .testimonial-wrapper {
    text-align: center;
    max-width: 800px;
  }

  .testimonial-wrapper h3 {
    font-size: 1.25rem;
    line-height: 1.6;
  }

  .testimonial-wrapper img {
    margin-top: 1rem;
  }

  .testimonial-wrapper p {
    font-weight: bold;
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    .client-wrapper {
      flex-direction: column;
      gap: 1rem;
    }

    h2 {
      margin-top: 1rem;
    }
  }
</style>
