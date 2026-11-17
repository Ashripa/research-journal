<script setup lang="ts">
const props = defineProps<{ target: string, number: string }>()
const activeNote = useState<string | null>('active-paper-note', () => null)
const open = computed(() => activeNote.value === props.target)
const content = ref('')
const trigger = useTemplateRef<HTMLAnchorElement>('trigger')
const panel = useTemplateRef<HTMLSpanElement>('panel')
function show() {
	content.value = document.getElementById(props.target)?.querySelector('.note-body')?.innerHTML || ''
	activeNote.value = content.value ? props.target : null
}
function hide() {
	if (open.value)
		activeNote.value = null
}
function pin(event: MouseEvent) {
	show()
	if (content.value) {
		event.preventDefault()
		nextTick(() => panel.value?.focus())
	}
}
function escape(event: KeyboardEvent) {
	if (event.key === 'Escape' && open.value) {
		event.preventDefault()
		hide()
		trigger.value?.focus()
	}
}
function outside(event: MouseEvent) {
	if (!panel.value?.contains(event.target as Node) && !trigger.value?.contains(event.target as Node))
		hide()
}
onMounted(() => {
	document.addEventListener('keydown', escape)
	document.addEventListener('click', outside)
})
onBeforeUnmount(() => {
	document.removeEventListener('keydown', escape)
	document.removeEventListener('click', outside)
})
</script>

<template>
<span class="paper-note">
	<a :id="`ref-${target}`" ref="trigger" :href="`#${target}`" :aria-label="`查看注释 ${number}`" aria-haspopup="dialog" :aria-expanded="open" :aria-controls="`popup-${target}`" @mouseenter="show" @click="pin">［{{ number }}］</a>
	<span v-if="open" :id="`popup-${target}`" ref="panel" class="note-panel" role="dialog" :aria-label="`注释 ${number}`" tabindex="-1" @mouseenter="show">
		<span class="note-toolbar"><strong>注释 {{ number }}</strong><button type="button" aria-label="关闭注释" @click="hide">关闭</button></span>
		<!-- Content comes only from the authored, rendered endnote on this page. -->
		<span class="note-content" v-html="content" />
		<a :href="`#${target}`" @click="hide">查看文末注释 ↗</a>
	</span>
</span>
</template>

<style scoped>
.paper-note > a {
	font-size: 0.8em;
	vertical-align: super;
	white-space: nowrap;
}
.note-panel {
	position: fixed;
	overflow: auto;
	inset-inline: max(1rem, calc((100vw - 40rem) / 2));
	bottom: 1.5rem;
	max-height: 55vh;
	padding: 1rem 1.25rem;
	border: 1px solid var(--c-border);
	border-radius: 0.75rem;
	box-shadow: 0 8px 40px #0003;
	background: var(--c-bg-1, #FFF);
	font-size: 1rem;
	line-height: 1.75;
	color: var(--c-text-1);
	z-index: 100;
}
.note-toolbar {
	display: flex;
	justify-content: space-between;
	gap: 1rem;
}
.note-toolbar button {
	padding: 0.25rem 0.75rem;
	cursor: pointer;
}
.note-content { display: block; }
.note-content :deep(a), .note-panel > a {
	text-decoration: underline;
	color: var(--c-primary);
}
</style>
