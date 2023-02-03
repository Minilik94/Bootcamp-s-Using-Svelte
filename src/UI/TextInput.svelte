<script>
  export let controlType=null
  export let id=null
  export let rows=null
  export let label=null
  export let value=null
  export let type = 'text'
  export let valid = true
  export let validityMessage = ''

  let touched = false
</script>

<style>
    input,textarea{
        display:block;
        width: 100%;
        font: inherit;
        border: none;
        border-bottom: 2px solid lightgreen;
        border-radius: 3px 3px 0  0;
        background: #fff;
        padding: 0.15rem 0.25rem;
    }
    input:focus,
  textarea:focus {
    border-color: #2e6d1e;
    outline: none;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    width: 100%;
  }

  .form-control {
    padding: 0.5rem 0;
    width: 100%;
    margin: 0.25rem 0;
  }

  .invalid{
    border-color: red;
    background: rgb(160, 121, 121);
  }
  .error-message{
    color: red;
    margin: 0.25rem 0;
  }
</style>

<div class="form-control">
  <label for="{id}">{label}</label>
  {#if controlType === "textarea"}
    <textarea class:invalid={!valid && touched} {rows} {id} {value} on:input on:blur={() => touched = true}/>
  {:else}
    <input class:invalid={!valid && touched} {type} {id} {value} on:input on:blur={() => touched = true}/>
  {/if}
  {#if validityMessage && !valid && touched}
  <p class="error-message">{validityMessage}</p>
  {/if}
</div>
