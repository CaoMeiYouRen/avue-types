import { defineConfig } from 'tsup'

export default defineConfig({
    entry: ['src/index.ts'],
    format: ['cjs', 'esm'],
    splitting: false,
    sourcemap: true,
    clean: true,
    dts: true,
    minify: false,
    // external: [],
    // noExternal: [/(.*)/], // 将依赖打包到一个文件中
    // bundle: true,
})
