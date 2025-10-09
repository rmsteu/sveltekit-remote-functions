<script lang="ts">
	const post = { id: 1, title: 'placeholder', slug: 'placeholder', content: 'placeholder' }
</script>

<h1>Update post</h1>

<form>
	<label>
		Title
		<input type="text" name="title" value={post.title} />
	</label>

	<label>
		Slug
		<input name="slug" value={post.slug} />
	</label>

	<label>
		Content
		<textarea name="content" value={post.content}></textarea>
	</label>

	<input type="hidden" value={post.id} />

	<button type="submit">Update</button>
	<button>Delete</button>
</form>
