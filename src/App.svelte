<script>
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'
  import { DefaultService } from '../src/client'
  import { OpenAPI } from '../src/client'
  
	let res, res_text, resP, token
  let files
  // simple_get
	async function getGet(){
		res = await DefaultService.simpleGetSimpleGetGet(OpenAPI)
		console.log(res['simple'])
    res_text = res['simple']
	}
  // token
  async function getToken(){
    resP = await DefaultService.loginForAccessTokenTokenPost({
      username: 'johndoe',
      password: 'secret'
    })
    token = resP['access_token']
    OpenAPI.HEADERS = {
      'Authorization': 'Bearer ' + token
    }
    console.log(resP)
    console.log(OpenAPI.HEADERS)
  }
  // with_query_param/{param}
  async function withQueryParam(){
    res = await DefaultService.withQueryParamWithQueryParamParamGet(2)
    console.log(`withQueryParam:`)
    console.log(res)
  }
  // with_payload
  async function withPayload(){
    res = await DefaultService.withPayloadWithPayloadGet({
      name: 'oleg',
      age: 7
    })
    console.log('withPayload')
    console.log(res)
  }
  // post_with_payload
  async function postWithPayload(){
    res = await DefaultService.postWithPayloadpostWithPayloadPost({
      name: 'oleg',
      age: 7
    })
    console.log('postWithPayload')
    console.log(res)
  }
  // upload_file
  async function uploadFile(){
    let formData = new FormData()
    formData.append('file', files[0])
    res = await DefaultService.createUploadFileUploadFilePost(formData)
    console.log('uploadFile')
    console.log(res)
  }
  // login
  async function login(){
    res = await DefaultService.loginLoginPost({
      username: 'john',
      password: 'secret'
    })
    console.log(`Login: ${res['username']}`)
  }
  // users/me
  async function getUser(){
    res = await DefaultService.readUsersMeUsersMeGet(OpenAPI)
    console.log(`Users:`)
    console.log(res)
  }
</script>

<main>
  <div>
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
      <img src={viteLogo} class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1>Vite + Svelte</h1>

  <div class="card">
    <Counter />
    <button on:click={getGet}>{res_text}</button>
    <button on:click={getToken}>getToken</button>
    <button on:click={login}> Login</button>
    <button on:click={getUser}>Users</button>
    <button on:click={withQueryParam}>withQueryParam</button>
    <button on:click={withPayload}>with_payload</button>
    <button on:click={postWithPayload}>post_with_payload</button>
    <form>
      <input type="file" bind:files>
      <button on:click={uploadFile} type="submit" value="отправить">
    </form>
    {#if files}
	    <p>
		  {files[0].name}
	    </p>
    {/if}
  </div>

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">
    Click on the Vite and Svelte logos to learn more
  </p>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
