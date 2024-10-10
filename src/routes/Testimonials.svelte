<script>
	import testimonialData from './data/testimonialData';
</script>

<section>
	<div class="container">
		<h2>Happy Clients</h2>
		<p>Hear what our clients have to say about our Webflow services</p>
		<div class="grid-col-2 testimonials">
			{#each testimonialData as testimonial}
				<div>
					<div class="star-wrap">
						<img src="/images/star.svg" alt="blue star" />
						<img src="/images/star.svg" alt="blue star" />
						<img src="/images/star.svg" alt="blue star" />
						<img src="/images/star.svg" alt="blue star" />
						<img src="/images/star.svg" alt="blue star" />
					</div>
					<p>{testimonial.quote}</p>
					<div class="testimonial-item">
						<img src={testimonial.crest} alt="Community Peer Mentors Logo" />
						<div class="testimonial-text">
							<p class="bold">{testimonial.name}</p>
							<p>{testimonial.title}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.testimonials {
		margin: 2rem 0 0 0;
	}

	.testimonial-item {
		display: flex;
		gap: 1rem;
		margin: 2rem 0;
	}

	.testimonial-item .bold {
		font-weight: 700;
	}

	.testimonial-item img {
		width: 56px;
		height: 56px;
	}

	.star-wrap {
		margin: 2rem 0;
	}

	.star-wrap img {
		width: 24px;
	}
</style>
