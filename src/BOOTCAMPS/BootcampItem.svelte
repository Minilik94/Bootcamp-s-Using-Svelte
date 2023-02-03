<script>
    import { createEventDispatcher } from "svelte";
    import Button from "../UI/Button.svelte";
    import Badge from "../UI/Badge.svelte";
    
    const dispatch = createEventDispatcher()

    export let id
    export let title
    export let subtitle
    export let description
    export let imageUrl
    export let address
    export let email
    export let isFav


</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
    article{
        margin: 1rem;
        box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.6);
        border-radius: 4px;
        background: #fff;
    }
    header,.content,footer{
        padding: 1rem;
    }
    .image{
        width: 100%;
        height: 14rem;
    }
    .image img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    h1{
        font-family: 'Poppins', sans-serif;
        font-size: 1.25rem;
        margin: 0.5rem 0;
    }
    h2{
        font-weight: lighter;
    }
    /* h1.is-favorite{
        background: #01a129;
        color: #000;
        padding: 0 0.5rem;
        border-radius: 5px; 
    }*/
    p{
        font-size: 1.25rem;
        margin: 0;
    }
   
</style>

<article>
    <header>
        <h1>{title}
            {#if isFav}
            <Badge>FAVORITE</Badge>
            {/if}
        </h1>
        <h2>{subtitle}</h2>
        <p>{address}</p>
    </header>
    <div class="image">
        <img src="{imageUrl}" alt="{title}">
    </div>
    <div class="content">
        <p>{description}</p>
    </div>
    <footer>
        <!-- <a href="mailto={email}">Contact</a> -->
        <!-- <button>Show Details</button> -->
        <!-- <button>Favorite</button> -->
        <Button href="mailto={email}">Contact</Button>
        <Button 
        mode = "outline" 
        color = {isFav ? null : 'success'}
        type = "button" 
        on:click={() => dispatch('toggleFavorite', id)}
        >{isFav ? 'Unfavorite' : 'Favorite'}</Button>
        <Button type="button">Show Details</Button>
        <Button type="button" on:click={() => dispatch('deleteBootcamp', id)}>Delete</Button>
    </footer>
</article>