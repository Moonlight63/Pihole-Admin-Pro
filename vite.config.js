/* eslint-disable import/no-duplicates */
import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Legacy from '@vitejs/plugin-legacy'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import PurgeIcons from 'vite-plugin-purge-icons'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import ViteCompression from 'vite-plugin-compression'
import Inspect from 'vite-plugin-inspect'
import { minifyHtml } from 'vite-plugin-html'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.DEPLOY_ENV === 'GH_PAGES' ? '/pihole-admin-pro/' : '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    Vue({
      reactivityTransform: true
    }),
    Legacy({
      targets: ['defaults', 'not IE 11']
    }),
    // https://github.com/antfu/unplugin-vue-components
    Components({
      dts: 'src/components.d.ts'
    }),
    PurgeIcons(),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: ['vue', 'vue-router'],
      dts: 'src/auto-imports.d.ts'
    }),
    // https://github.com/hannoeru/vite-plugin-pages
    Pages(),
    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),
    // https://github.com/vbenjs/vite-plugin-compression
    ViteCompression({
      verbose: true,
      algorithm: 'brotliCompress', // ['gzip','brotliCompress' ,'deflate','deflateRaw']
      deleteOriginFile: true,
      disable: true
    }),
    minifyHtml(),
    // https://github.com/antfu/vite-plugin-inspect
    Inspect({
      // change this to enable inspect for debugging
      enabled: true
    })
  ],
  preview: {
    port: 8080
  },
  server: {
    port: 8080,
    fs: {
      strict: true
    }
  },
  optimizeDeps: {
    include: ['vue', 'vue-router']
  },
  build: {
    // generate manifest.json in outDir
    manifest: true,
    rollupOptions: {}
  }
})
