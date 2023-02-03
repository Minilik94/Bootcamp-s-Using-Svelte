<script>
  export let type = "button"
  export let href = null
  export let mode = null
  export let color = null
  export let disabled = false
</script>

{#if href}
  <a {href}>
    <slot />
  </a>
{:else}
  <button class="{mode} {color}" {type} {disabled} on:click>
    <slot />
  </button>
{/if}

<style>
  button,
  a {
    /* border: 1px solid #6b8c6d; */
    background: #00cc66;
    padding: 0.5rem 1rem;
    color: #000;
    border-radius: 5px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.26);
    cursor: pointer;
    text-decoration: none;
  }
  button:hover,
  button:active,
  a:hover,
  a:active {
    background: #00cc00;
    border-color: #00cc00;
    box-shadow: 1px 1px 8px rgba(77, 51, 51, 0.26);
  }

  button:disabled,
  button:disabled:hover,
  button:disabled:active {
    background: #ccc;
    border-color: #ccc;
    color: #959595;
    box-shadow: none;
    cursor: not-allowed;
  }

  .success {
    background: #01a129;
    border-color: #01a129;
  }

  .success:hover,
  .success:active {
    background: #00cc00;
    border-color: #1ac745;
  }

  .outline {
    background: #00cc66;
    color: #000;
    box-shadow: none;
  }

  .outline:hover,
  .outline:active {
    background: #00cc00;
    box-shadow: none;
    color: #000;
  }

  .outline:disabled,
  .outline:disabled:hover,
  .outline:disabled:active {
    background: transparent;
    color: #ccc;
  }

  .outline.success {
    border-color: #01a129;
    color: #000;
  }

  .outline.success:hover,
  .outline.success:active {
    background: #01a129;
  }
</style>
