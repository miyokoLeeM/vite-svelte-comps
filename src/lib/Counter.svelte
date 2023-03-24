<svelte:options tag="my-custom-counter"/>

<script>
  let count = 0
  export let url;
  $: url ?  fetch(url)
  .then(response => response.json())
  .then(data => console.log(data)) : null
  const increment = () => {
    count += 1
  }
  $: if (count > 10) {
    alert('不能超过10次')
    count = 10
  }
</script>

<button on:click={increment}>
  count is {count} {url}
</button>

<style>
  button {
    color: aqua;
    font-size: 20px;
    font-weight: 500;
    padding: 8px 12px;
    border: 1px solid #ddd;
    margin: auto;
  }
</style>