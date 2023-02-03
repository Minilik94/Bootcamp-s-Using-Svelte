<script>
    import BootcampItem from "./BootcampItem.svelte";

    export let bootcamps
</script>

<style>
    #bootcamps{
        display: grid;
        grid-template-columns: repeat(2,1fr);
    }
    @media (max-width: 750px){
        #bootcamps{
            grid-template-columns: repeat(1, 1fr);
        }
    }
</style>

<section id="bootcamps">
    {#each bootcamps as bootcamp}
    <BootcampItem 
    title={bootcamp.title}
    subtitle ={bootcamp.subtitle}
    imageUrl={bootcamp.imageUrl}
    description={bootcamp.description}
    address={bootcamp.address}
    email={bootcamp.contactEmail}
    isFav={bootcamp.isFavorite}
    id={bootcamp.id}
    on:toggleFavorite
    on:deleteBootcamp/>
    {/each}
    </section>