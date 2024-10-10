<footer>
	<div class="container">
		<div class="footer-grid">
			<a href="/"><img src="/images/footer-logo.svg" alt="Dove Design Logo" /></a>
			<div>
				<ul>
					<a href="/">
						<li>Home</li>
					</a>
					<a href="/work">
						<li>Our Work</li>
					</a>
					<a href="/faq">
						<li>FAQs</li>
					</a>
					<a href="/contact">
						<li>Contact</li>
					</a>
				</ul>
			</div>
			<a href="https://www.linkedin.com/company/dovedesignweb/" target="_blank"
				><img src="/images/linkedin-footer.svg" alt="" /></a
			>
		</div>
		<div class="center-align-grid">
			<p>&copy;<span id="currentYear">2024</span> Dove Design Ltd</p>
			<a href="/" target="_blank"><p>Privacy Policy</p></a>
			<a href="/" target="_blank">Cookies Policy</a>
		</div>
	</div>
</footer>

<style>
	footer {
		background-color: var(--black-blue);
		margin-top: auto;
	}

	.footer-grid {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 3rem 0;
	}

	.center-align-grid {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 3rem 0;
	}

	a,
	p {
		text-decoration: none;
		color: var(--white);
		margin: 0 1.5rem;
	}

	ul {
		display: flex;
		gap: 1.5rem;
	}

	ul a {
		text-decoration: none;
		color: var(--white);
		list-style: none;
	}

	a img {
		height: 24px;
	}

	@media screen and (max-width: 600px) {
		.footer-grid {
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}

		ul {
			display: block;
			text-align: center;
			margin: 1rem 0;
		}

		ul a li {
			margin: 1rem 0;
		}
	}
</style>
