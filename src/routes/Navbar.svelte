<script>
	import Logo from '/images/nav/logo-only.svg';
</script>

<nav>
	<div class="container">
		<div class="navbar-flex">
			<a href="/">
				<img src={Logo} alt="Dove Design Ltd Logo" />
			</a>
			<div class="nav-items">
				<ul>
					<a href="/work">
						<li>Our Work</li>
					</a>
					<a href="/faq">
						<li>FAQs</li>
					</a>
					<a href="/contact">
						<li>Contact</li>
					</a>
					<!-- <a href="https://calendly.com/dovedesign/30min">
						<button>Schedule a call</button>
					</a> -->
				</ul>
			</div>
		</div>
	</div>
</nav>

<style>
	nav {
		width: 100%;
		background-color: var(--white);
		padding: 1rem 0;
		box-shadow: var(--box-shadow);
	}

	.navbar-flex {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}

	.navbar-flex img {
		width: 63px;
	}

	.nav-items ul {
		display: flex;
		align-items: center;
		list-style-type: none;
	}

	.nav-items ul a {
		text-decoration: none;
	}

	.nav-items ul a li {
		color: var(--black);
		padding: 0.5rem 1rem;
	}

	/* TODO create burger menu rather than open menu */
	@media (max-width: 760px) {
		.navbar-flex {
			flex-direction: column;
			gap: 1rem;
		}

		.nav-items ul {
			flex-wrap: wrap;
			justify-content: center;
		}
	}
</style>
