<script lang="ts">
	import type { PageData } from "./$types";


    export let data: PageData;

    const { metadata, post: Post} = data;
</script>

<article>
    <Post/>
</article>