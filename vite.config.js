/* eslint-disable import/no-duplicates */
import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Legacy from '@vitejs/plugin-legacy'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import ViteCompression from 'vite-plugin-compression'

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
      dts: 'src/components.d.ts',
      directoryAsNamespace: false,
      resolvers: [IconsResolver()]
    }),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: ['vue', 'vue-router'],
      dts: 'src/auto-imports.d.ts'
    }),
    // https://github.com/antfu/unplugin-icons
    Icons({
      autoInstall: true
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
