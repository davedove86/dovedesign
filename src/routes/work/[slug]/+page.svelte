<script>
  import projects from '../../data/projectData';
  let currentProjectIndex = 0;
</script>

<svelte:head>
  <title
    >{projects[0].name} | Dove Design Ltd | Real Client Success Stories</title
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
  <div class="container">
    <h1>{projects[1].name}</h1>
  </div>
</section>

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
