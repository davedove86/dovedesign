<script>
	import Contact from './Contact.svelte';
	import Testimonials from './Testimonials.svelte';
	export let title = 'Dove Design Ltd | Home';
	export let description =
		'Test At Dove Design, we specialise in creating visually appealing and highly functional websites that help businesses succeed online.';
	// export let image = "https://example.com/your-logo.png”;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>

<header>
	<div class="container">
		<div class="home-hero">
			<div class="home-hero-text">
				<h1>Transforming businesses with <span>stunning websites</span></h1>
				<p>
					At Dove Design, we specialise in creating visually appealing and highly functional
					websites that help businesses succeed online. Our team of experts combines design and
					technology to deliver exceptional user experiences.
				</p>
				<div class="button-wrap">
					<a class="button" href="/contact">Contact Us</a>
					<a class="is-secondary" href="/work">Our Work</a>
				</div>
			</div>
			<img src="/images/home-hero.png" alt="Dove Design Portfolio screenshots" />
		</div>
	</div>
</header>

<section>
	<div class="container">
		<div class="grid-col-2">
			<div class="home-hero-text">
				<p class="section-kicker">How can we help</p>
				<h2>Experts in Web <span>Design</span> & Web <span>Development</span></h2>
				<p>
					At Dove Design, we offer a range of services to help businesses succeed online. Our team
					of experts specialises in design, development, and maintenance, ensuring that your website
					is visually stunning, user-friendly, and always up to date.
				</p>
				<p>
					Whether you need a brand new website or want to enhance your existing one, we have the
					skills and expertise to deliver exceptional results.
				</p>
				<div class="home-hero-icon-grid">
					<div class="icon-item-wrapper">
						<img src="/images/design.svg" alt="paint pallette" />
						<h3>Web Design</h3>
						<p>
							Our team of skilled designers transforms your ideas into visually stunning,
							user-friendly websites that not only meet but exceed your expectations.
						</p>
					</div>
					<div class="icon-item-wrapper">
						<img src="/images/responsive.svg" alt="responsive web design" />
						<h3>Web Development</h3>
						<p>
							We bring your website to life with custom development solutions that are tailored to
							your business needs and objectives.
						</p>
					</div>
					<div class="icon-item-wrapper">
						<img src="/images/hosting.svg" alt="hosting websites" />
						<h3>Website Hosting</h3>
						<p>
							Enjoy the fastest, most scalable hosting technology for your business powered by super
							fast web services.
						</p>
					</div>
					<div class="icon-item-wrapper">
						<img src="/images/medal.svg" alt="blue medal" />
						<h3>Training</h3>
						<p>
							We offer virtual training sessions to your staff on how to update the website with
							video tutorials.
						</p>
					</div>
				</div>
				<a class="button" href="/contact">Contact us</a>
			</div>
			<!-- Change image to not Webflow -->
			<img class="grid-image" src="/images/section-image.webp" alt="Flowga studios screenshots" />
		</div>
	</div>
</section>

<section>
	<div class="container">
		<div class="grid-col-2">
			<div>
				<p class="section-kicker">Why Dove Design</p>
				<h2>Unlock the potential of the web for your <span>business</span></h2>
			</div>
			<p>
				Webflow is a powerful tool that empowers businesses to create stunning and functional
				websites without the need for coding. With its intuitive interface and robust features,
				Webflow streamlines the web design process and allows businesses to focus on what they do
				best.
			</p>
		</div>
		<div class="grid-col-3">
			<div>
				<img src="/images/tick.svg" alt="tick" />
				<h3>Empowered control</h3>
				<p>
					With Webflow, clients can make updates and edits to their websites without relying on
					developers. This hands-on approach saves time and money, putting you in charge of your
					digital presence.
				</p>
			</div>
			<div>
				<img src="/images/tick.svg" alt="tick" />
				<h3>Responsive websites</h3>
				<p>
					Webflow ensures your website looks stunning and functions seamlessly on all devices.
					Mobile users will have a smooth and engaging experience.
				</p>
			</div>
			<div>
				<img src="/images/tick.svg" alt="tick" />
				<h3>Lightning-fast hosting</h3>
				<p>
					Powered by Amazon Web Services with 100+ server sites globally, content is delivered in
					milliseconds.
				</p>
			</div>
			<div>
				<img src="/images/tick.svg" alt="tick" />
				<h3>Search engine visibility</h3>
				<p>
					Webflow incorporates SEO best practices, ensuring your website ranks well on search
					engines. This translates to increased organic traffic and potential customers.
				</p>
			</div>
			<div>
				<img src="/images/tick.svg" alt="tick" />
				<h3>Top grade security</h3>
				<p>
					Comes with SSL and two-factor authentication out of the box. You can also password protect
					individual pages.
				</p>
			</div>
			<div>
				<img src="/images/tick.svg" alt="tick" />
				<h3>First class support</h3>
				<p>
					Webflow's responsive support team is ready to assist with any questions or issues. You'll
					have peace of mind knowing there's a dedicated team to help you achieve your website
					goals.
				</p>
			</div>
		</div>
		<a class="button" href="/contact">Contact us</a>
	</div>
</section>

<section class="cta-full-width">
	<div class="banner-overlay" />
	<div class="container z-index">
		<h2>Web Design Experts</h2>
		<p>Empower Your Online Identity with Tailored Design Magic</p>
		<a href="/work">
			<button class="is-secondary">View Our Work</button>
		</a>
	</div>
</section>

<Testimonials />

<Contact />

<style>
	header {
		overflow: hidden;
		height: 100vh;
		max-height: 800px;
	}

	.home-hero {
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: center;
	}

	.home-hero-text {
		max-width: 600px;
	}
	.home-hero-text p {
		margin-bottom: 1rem;
	}

	header img {
		height: 100%;
		width: 100%;
		overflow: hidden;
	}

	.button-wrap {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-top: 3rem;
	}

	.button-wrap a {
		margin-top: 0;
	}
	.grid-image {
		width: 100%;
		max-width: 635px;
	}

	.home-hero-icon-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 1rem;
		margin: 3rem 0;
	}
	.icon-item-wrapper img {
		height: 50px;
		width: 50px;
		margin-bottom: 1rem;
	}

	.grid-col-3 div img {
		margin-bottom: 1rem;
	}

	.grid-col-3 div h3 {
		font-size: 2rem;
	}

	.cta-full-width {
		background-image: url(/images/cta-banner.jpg);
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		width: 100%;
		height: 420px;
		text-align: center;
		color: var(--white);
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.banner-overlay {
		background-color: rgba(47, 101, 229, 0.9);
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
	}

	.z-index {
		z-index: 10;
	}

	.is-secondary {
		margin-top: 2rem;
	}

	@media screen and (max-width: 961px) {
		.home-hero {
			display: flex;
			flex-direction: column;
			gap: 3rem;
		}
		header img {
			position: static;
			left: 550px;
			top: 50px;
			height: 100%;
			width: 100%;
		}
		.home-hero-icon-grid {
			display: flex;
			flex-direction: column;
		}
	}
</style>
