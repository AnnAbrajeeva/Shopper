<template>
   <div id="notfound">
		<div class="notfound">
			<div class="notfound-404">
				<h1>Oops!</h1>
			</div>
			<h2>{{ $t('error.notFound') }}</h2>
			<p>{{ $t('error.errorText') }}</p>
			<nuxt-link :to="localePath('/')">{{ $t('error.errorLink') }}</nuxt-link>
		</div>
	</div>
</template>

<script>
export default {
    middleware: ["auth-check"],
}
</script>