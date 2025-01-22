<script>
  import faqData from '../data/faqData';
</script>

<svelte:head>
  <title
    >Web Design FAQs | Dove Design Ltd | Answers to Common Website Design
    Questions</title
  >
  <meta
    name="description"
    content="Got questions about web design? Visit Dove Design Ltd's FAQ page for answers to the most common questions about our process, pricing, timeline, and more."
  />
  <meta property="og:image" content="../../open-graph.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Dove Design Ltd" />
  <meta property="og:image:type" content="image/jpeg" />
  <meta property="og:image:secure_url" content="../../open-graph.jpg" />
</svelte:head>

<section>
  <div class="container">
    <h1>FAQs</h1>
    <div class="grid-col-2" />
    {#each faqData as faqs}
      <div class="grid-col-2">
        <div class="faq-wrap">
          <h2>{faqs.question}</h2>
          <p>{faqs.answer}</p>
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .grid-col-2 {
    display: flex;
    max-width: 800px;
    margin: 0 auto;
  }
  h1 {
    margin-bottom: 2rem;
  }
  .faq-wrap {
    margin-bottom: 2rem;
  }
  .faq-wrap h2 {
    margin-bottom: 1rem;
    font-size: 2rem;
  }

  .faq-wrap p {
    margin-bottom: 2rem;
  }
</style>
