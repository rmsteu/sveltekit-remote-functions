<script lang="ts">
</script>

<h1>🔥 Latest posts</h1>

<div class="posts">
	{#each [] as post}
		<article>
			<a href="/slug" class="capitalize">Title</a>
		</article>
	{:else}
		<p>No posts found</p>
	{/each}
</div>
