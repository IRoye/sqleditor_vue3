<!--
 * @Description: vue3 SQL编辑器
 * @Author: yuyi
 * @Date: 2024-08-05 23:02:29
 * @LastEditors: yuyi
 * @LastEditTime: 2024-08-08 23:51:43
-->
<template>
	<div class="layout">
		<sql-editor :command="SQLCommand" />
	</div>
</template>

<script>
import { SQL } from '@/constants/sql.js'
import SqlEditor from '@/components/SqlEditor/index.vue'
export default {
	name: 'SQLEditor',
	components: {
		SqlEditor
	},
	data() {
		return {
			SQLCommand: SQL
		}
	}
};
</script>
<style lang="scss">
.cm-focused {
	outline: none !important;
}
</style>
