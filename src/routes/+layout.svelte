<script>
	import Navbar from './Navbar.svelte';
	import Footer from './Footer.svelte';
	import './styles.css';
</script>

<Navbar />

<main>
	<slot />
</main>

<Footer />
