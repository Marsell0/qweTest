<script>
	import { link } from 'svelte-spa-router'
	import { DefaultService } from '../../client'
  
	let res
	function getGet(){
		res = DefaultService.simpleGetSimpleGetGet()
		console.log(res)
	}
</script>

<div>
	<header class="header"></header>
	<button on:click={getGet}>{res}</button>
</div>
