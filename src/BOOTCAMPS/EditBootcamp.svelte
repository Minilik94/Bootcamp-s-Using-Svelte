<script>
  import { createEventDispatcher } from "svelte";
  import TextInput from "../UI/TextInput.svelte";
  import Button from "../UI/Button.svelte";
  import Modal from '../UI/Modal.svelte'
  import { isEmpty, isValidEmail } from '../helpers/validation'

    let title = "";
    let titleValid = false
    let subtitle = "";
    let subtitleValid = false
    let imageUrl = "";
    let imageUrlValid = false
    let description = "";
    let descriptionValid = false
    let address = "";
    let addressValid = false
    let email = "";
    let emailValid = false
    let formIsValid = false

    const dispatch = createEventDispatcher()

    $:titleValid = !isEmpty(title)
    $:subtitleValid = !isEmpty(subtitle)
    $:imageUrlValid = !isEmpty(imageUrl)
    $:descriptionValid = !isEmpty(description)
    $:addressValid = !isEmpty(address)
    $:emailValid = !isValidEmail(email)
    $:formIsValid = titleValid && subtitleValid && imageUrlValid
    descriptionValid&& addressValid&&emailValid

    function submitForm(){
        dispatch('save', {
            title: title,
            subtitle: subtitle,
            imageUrl: imageUrl,
            description: description,
            address: address,
            email: email
        })
    }

    function cancel(){
      dispatch('cancel')
    }
</script>

<style>
    form {
    width: 100%;
    
  }
</style>

<Modal title="Create Bootcamps" on:cancel>
<form on:submit|preventDefault={submitForm}>
  <TextInput
    label="Title"
    id="title"
    valid={titleValid}
    validityMessage=" Please enter a valid title"
    value={title}
    on:input={(event) => (title = event.target.value)}
  />
  <TextInput
    label="Subtitle"
    id="subtitle"
    valid={subtitleValid}
    validityMessage=" Please enter a valid subtitle"
    value={subtitle}
    on:input={(event) => (subtitle = event.target.value)}
  />
  <TextInput
    label="ImageUrl"
    id="imageUrl"
    valid={imageUrlValid}
    validityMessage=" Please enter a valid imageUrl"
    value={imageUrl}
    on:input={(event) => (imageUrl = event.target.value)}
  />
  <TextInput
    label="Address"
    id="address"
    valid={addressValid}
    validityMessage=" Please enter a valid address"
    value={address}
    on:input={(event) => (address = event.target.value)}
  />
  <TextInput
    label="E-mail"
    id="email"
    valid={emailValid}
    validityMessage=" Please enter a valid email"
    type="email"
    value={email}
    on:input={(event) => (email = event.target.value)}
  />
  <TextInput
    controlType="textarea"
    label="Description"
    valid={descriptionValid}
    validityMessage=" Please enter a valid description"
    id="description"
    rows="3"
    value={description}
    on:input={(event) => (description = event.target.value)}
    />
    <!-- <div class="form-control">
      <label for="title">Title</label>
			<input type="text" id ="title" bind:value={title}>
		</div>
		<div class="form-control">
			<label for="subtitle">Subtitle</label>
			<input type="text" id="subtitle" bind:value={subtitle}>
		</div>
		<div class="form-control">
			<label for="imageUrl">ImageUrl</label>
			<input type="text" id="imageurl" bind:value={imageUrl}>
		</div> -->
  <!-- <div class="form-control">
			<label for="address">Address</label>
			<input type="text" id="address" bind:value={address}>
		</div>
		<div class="form-control">
			<label for="email">E-mail</label>
			<input type="email" id="email" bind:value={email}>
		</div> -->
  <!-- <div class="form-control">
			<label for="description">Description</label>
			<textarea rows="3" id="description" bind:value={description}/>
		</div> -->
  <!-- <button type="submit">Create</button> -->
</form>
<div slot="footer"> 
  
  <Button type="button" on:click={submitForm} disabled = {!formIsValid}>Save</Button>
  
  <Button type="button" mode="outline" on:click={cancel}>Cancel</Button>
</div>
</Modal>