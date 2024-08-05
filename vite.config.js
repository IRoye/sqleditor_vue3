/*
 * @Description: 
 * @Author: yuyi
 * @Date: 2024-08-05 23:02:29
 * @LastEditors: yuyi
 * @LastEditTime: 2024-08-05 23:58:50
 */
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
})
