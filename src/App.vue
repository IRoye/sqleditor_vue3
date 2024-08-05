<!--
 * @Description: vue3 SQL编辑器
 * @Author: yuyi
 * @Date: 2024-08-05 23:02:29
 * @LastEditors: yuyi
 * @LastEditTime: 2024-08-06 00:13:51
-->
<template>
	<div class="layout">
		<el-card style="width: 50%;">
			<codemirror v-model="sqlCommand" :extensions="extensions" :autofocus="true" placeholder="请输入SQL" />
		</el-card>
	</div>
</template>

<script>
import { SQL } from '@/constants/sql.js'
import { sql } from '@codemirror/lang-sql'
import { Codemirror } from 'vue-codemirror'
import { oneDark } from '@codemirror/theme-one-dark'
export default {
	name: 'SQLEditor',
	components: {
		Codemirror
	},
	data() {
		return {
			sqlCommand: SQL,
			extensions: [sql(), oneDark]
		};
	},
	methods: {
	}
};
</script>
<style lang="scss">
.cm-editor {
	width: 100%;
	height: 460px;
}

.cm-focused {
	outline: none !important;
}
</style>
