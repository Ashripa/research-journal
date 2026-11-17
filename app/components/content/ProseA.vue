<script setup lang="ts">
import type { Instance, Props } from 'tippy.js'

const props = withDefaults(defineProps<{
	href: string
	icon?: string | false
}>(), {
	icon: undefined,
})

const icon = computed(() => props.icon ?? getDomainIcon(props.href))
const attrs = useAttrs()
const isFootnote = computed(() => 'data-footnote-ref' in attrs)
let activeTip: Instance | undefined
let focusPreview = false
function escapePreview(event: KeyboardEvent) {
	if (event.key === 'Escape' && activeTip?.state.isVisible) {
		event.preventDefault()
		activeTip.reference instanceof HTMLElement && activeTip.reference.focus()
		activeTip.hide()
	}
}
function openFootnote(event: MouseEvent) {
	if (!isFootnote.value)
		return
	const instance = (event.currentTarget as HTMLElement & { _tippy?: Instance })._tippy
	if (!instance)
		return // Keep the native endnote link as a no-JavaScript fallback.
	event.preventDefault()
	focusPreview = true
	instance.show()
	nextTick(() => instance.popper.focus())
}
const tip = computed<Partial<Props>>(() => isFootnote.value
	? {
			content: '',
			interactive: true,
			role: 'dialog',
			trigger: 'mouseenter focus click',
			hideOnClick: false,
			appendTo: () => document.body,
			maxWidth: 'min(32rem, calc(100vw - 2rem))',
			onShow(instance) {
				const note = document.getElementById(safelyDecodeUriComponent(props.href.slice(1)))
				if (!note)
					return false
				const preview = document.createElement('div')
				preview.className = 'footnote-preview'
				preview.innerHTML = note.innerHTML
				preview.querySelectorAll('[data-footnote-backref]').forEach(link => link.remove())
				preview.querySelectorAll('[id]').forEach(element => element.removeAttribute('id'))
				const jump = document.createElement('a')
				jump.href = props.href
				jump.textContent = '查看文末注释 ↗'
				jump.addEventListener('click', () => instance.hide())
				preview.append(jump)
				instance.setContent(preview)
				instance.popper.tabIndex = -1
				instance.popper.querySelector('[role=dialog]')?.setAttribute('aria-label', '注释预览')
				activeTip = instance
				document.addEventListener('keydown', escapePreview)
			},
			onShown(instance) {
				if (focusPreview)
					instance.popper.focus()
				focusPreview = false
			},
			onHide() {
				document.removeEventListener('keydown', escapePreview)
				activeTip = undefined
			},
			onClickOutside(instance) {
				instance.hide()
			},
		}
	: {
			content: isExtLink(props.href) ? getDomain(props.href) : safelyDecodeUriComponent(props.href),
			inlinePositioning: true,
		})
onBeforeUnmount(() => document.removeEventListener('keydown', escapePreview))
</script>

<template>
<UtilLink v-tip="tip" class="z-link" :to="href" @click="openFootnote">
	<Icon v-if="icon" class="domain-icon" :name="icon" />
	<slot />
</UtilLink>
</template>

<style scoped>
.z-link[href] {
	margin: -0.1em -0.2em;
	padding: 0.1em 0.2em;
	background: linear-gradient(var(--c-primary-soft), var(--c-primary-soft)) no-repeat center bottom / 100% 0.1em;
	color: var(--c-primary);
	transition: all 0.2s;

	&:hover {
		border-radius: 0.3em;
		background-size: 100% 100%;
	}

	.domain-icon {
		margin-inline-end: 0.1em;
	}
}
/* Reuse the theme bubble; only constrain long endnote content. */
:global(.footnote-preview) {
	overflow: auto;
	overflow-wrap: anywhere;
	max-height: min(50vh, 24rem);
	overscroll-behavior: contain;
}
:global(.footnote-preview a) {
	text-decoration: underline;
	color: var(--c-primary);
}
:global(.footnote-preview > a:last-child) {
	display: block;
	margin-top: 0.5em;
}
</style>
