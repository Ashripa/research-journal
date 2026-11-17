<script setup lang="ts">
const props = withDefaults(defineProps<{
	href: string
	icon?: string | false
}>(), {
	icon: undefined,
})

const icon = computed(() => props.icon ?? getDomainIcon(props.href))
const attrs = useAttrs()
const tip = computed(() => ({
	content: isExtLink(props.href) ? getDomain(props.href) : safelyDecodeUriComponent(props.href),
	inlinePositioning: true,
	...('data-footnote-ref' in attrs
		? {
				onShow(instance: { setContent: (content: string) => void }) {
					const note = document.getElementById(safelyDecodeUriComponent(props.href.slice(1)))
					if (!note)
						return
					const copy = note.cloneNode(true) as HTMLElement
					copy.querySelectorAll('[data-footnote-backref]').forEach(link => link.remove())
					instance.setContent(copy.textContent?.trim() || '')
				},
			}
		: {}),
}))
</script>

<template>
<UtilLink v-tip="tip" class="z-link" :to="href">
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
</style>
