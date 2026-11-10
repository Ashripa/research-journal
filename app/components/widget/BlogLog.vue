<script setup lang="ts">
const { timeEstablished } = useAppConfig()
const blogLog = [{ label: timeEstablished, value: '建立研究日志，添加示例与写作模板' }]
</script>

<template>
<BlogWidget card title="更新日志">
	<ZDlGroup size="large" :items="blogLog" />
</BlogWidget>
</template>
