<script setup lang="ts">
defineProps<{ id: string, number: string }>()
</script>

<template>
<section :id="id" class="paper-endnote" tabindex="-1" :aria-label="`注释 ${number}`">
	<span class="note-number">［{{ number }}］</span>
	<div class="note-body">
		<slot />
	</div>
	<a :href="`#ref-${id}`" class="note-back" :aria-label="`返回注释 ${number} 的引用`">↩</a>
</section>
</template>

<style scoped>
.paper-endnote {
	margin-block: 1.25rem;
	scroll-margin-top: 6rem;
}
.note-number { font-weight: 700; }
.note-body { display: inline; }
.note-back { margin-inline-start: 0.5em; }
</style>
