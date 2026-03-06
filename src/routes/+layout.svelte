<script lang="ts">
	import Header from "$lib/components/Layout/Header.svelte";
	import Footer from "$lib/components/Layout/Footer.svelte";
	import "../routes/layout.css";

</script>



<Header />
	<slot />
<Footer />