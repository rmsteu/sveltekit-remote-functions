<script lang="ts">
	let { children } = $props()
</script>

<section class="dashboard">
	<aside>
		<div class="heading">
			<h2>🪶 Posts</h2>
			<a href="/admin/create" role="button">+Create</a>
		</div>

		<ul>
			{#each [] as post}
				<li>
					<a href="/admin/edit/slug" class="truncate-text capitalize">Title</a>
				</li>
			{/each}
		</ul>
	</aside>

	<div>
		{@render children?.()}
	</div>
</section>
