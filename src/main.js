/*
 * @Description: 
 * @Author: yuyi
 * @Date: 2024-08-05 23:02:29
 * @LastEditors: yuyi
 * @LastEditTime: 2024-08-06 00:06:36
 */
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')
