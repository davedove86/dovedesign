<script>
  import projects from '../data/projectData';
  import Testimonials from '../Testimonials.svelte';
</script>

<svelte:head>
  <title
    >Our Web Design Portfolio | Dove Design Ltd | Creative Website Projects &
    Success Stories</title
  >
  <meta
    name="description"
    content="Explore the web design portfolio of Dove Design Ltd, featuring cutting-edge websites for diverse industries. From e-commerce to corporate sites, see how we deliver outstanding digital experiences."
  />
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
    <h1>Our Work</h1>
    <div class="work-wrapper" />
    {#each projects as project}
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
          <a href={project.link} rel="noopener noreferrer">
            <button>View Project</button>
          </a>
        </div>
      </div>
    {/each}
  </div>
</section>

<Testimonials />

<style>
  .work-wrapper {
    margin: 2rem 0;
  }

  .grid-col-2 {
    margin: 3rem 0;
    padding-bottom: 3rem;
    border-bottom: 0.5px solid var(--black-blue);
  }

  h2 {
    font-size: 2rem;
  }

  .portfolio-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .tags-wrapper {
    display: flex;
    flex-direction: row;
    margin: 1rem 0;
  }
  .tags {
    color: var(--accent-blue);
    background-color: var(--grey);
    padding: 4px 8px;
    margin-right: 0.5rem;
    font-weight: 800;
    border-radius: 4px;
  }

  button {
    margin: 2rem 0;
  }
</style>
