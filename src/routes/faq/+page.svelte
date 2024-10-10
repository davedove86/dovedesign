<script>
	import faqData from '../data/faqData';
</script>

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
