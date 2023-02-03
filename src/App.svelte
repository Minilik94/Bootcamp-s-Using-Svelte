<script>
  import Header from "./UI/Header.svelte";
  import BootcampGrid from "./BOOTCAMPS/BootcampGrid.svelte";
  import Button from "./UI/Button.svelte";
  import EditBootcamp from "./BOOTCAMPS/EditBootcamp.svelte";
  


   let bootcamps = JSON.parse(localStorage.getItem('bootcamps'))  || [
    
    {
      id: "m1",
      title: "Web Development Bootcamp",
      subtitle: "Learn to build web sites in just a minute",
      description:
        "We will learn everything you need to know about web development",
      imageUrl: "https://tinyurl.com/yk32t878",
      address: "Mountain View, 94043 CA",
      contactEmail: "frontend@development.com",
      isFavorite: false,
    },
    {
      id: "m2",
      title: "Fullstack Development Bootcamp",
      subtitle: "Learn to build web sites in just a minute",
      description:
        "We will learn everything you need to know about web development. The backend the frontend just EVERYTHING",
      imageUrl: "https://tinyurl.com/32tr376x",
      address: "Mountain View, 94043 CA",
      contactEmail: "backend@development.com",
      isFavorite: false,
    },
  ];

  let editMode = null;

  function addBootcamp(event) {
    let newBootcamp = {
      id: Math.random().toString(),
      title: event.detail.title,
      subtitle: event.detail.subtitle,
      imageUrl: event.detail.imageUrl,
      address: event.detail.address,
      description: event.detail.description,
      contactEmail: event.detail.email,
    };

    
    bootcamps = [newBootcamp, ...bootcamps];
    localStorage.setItem('bootcamps', JSON.stringify(bootcamps))
    editMode = null
  }

  function cancelEdit(){
    editMode = null
  }

  function toggleFavorite(event) {
    const id = event.detail;
    const updatedBootcamp = { ...bootcamps.find((b) => b.id === id) };
    updatedBootcamp.isFavorite = !updatedBootcamp.isFavorite;
    const bootcampIndex = bootcamps.findIndex((b) => b.id === id);
    const updatedBootcamps = [...bootcamps];
    updatedBootcamps[bootcampIndex] = updatedBootcamp;
    bootcamps = updatedBootcamps;
  }

  function deleteBootcamp(event){
    const id = event.detail
    bootcamps = bootcamps.filter((b) => b.id !== id)
    localStorage.setItem('bootcamps', JSON.stringify(bootcamps))
  }
</script>

<Header />
<main>
  <div class="bootcamp-controls">
    <Button on:click={() => (editMode = "add")} >New Bootcamp</Button>
  </div>
  {#if editMode === "add"}
    <EditBootcamp on:save={addBootcamp} on:cancel={cancelEdit}/>
  {/if}
  <BootcampGrid {bootcamps} on:toggleFavorite={toggleFavorite} on:deleteBootcamp={deleteBootcamp}/>
</main>

<style>
  main {
    margin-top: 5rem;
  }
  .bootcamp-controls {
    margin: 1rem;
  }
</style>
