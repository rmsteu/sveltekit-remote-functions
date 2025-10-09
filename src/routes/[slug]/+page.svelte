<script lang="ts">
</script>

<div class="content">
	<div>
		<article>
			<h1>Title</h1>
			<div>Content</div>
		</article>

		<button class="outline">❤️ 0</button>

		<div class="comments">
			<h2>Comments</h2>

			{#each [] as { author, comment }}
				<div class="comment">
					<h6>author</h6>
					<p>comment</p>
				</div>
			{:else}
				<p>No comments</p>
			{/each}

			<h2>Leave a comment</h2>

			<form>
				<label>
					Name
					<input type="text" name="author" value="Anonymous" />
				</label>

				<label>
					Comment
					<textarea name="comment"></textarea>
				</label>

				<input type="hidden" value="id" />

				<button type="submit">Post comment</button>
			</form>
		</div>
	</div>

	<div>
		<h2>More Svelte</h2>
		<ul>
			{#each [] as post}
				<li>
					<a href="/slug" class="capitalize">Title</a>
				</li>
			{/each}
		</ul>
	</div>
</div>
