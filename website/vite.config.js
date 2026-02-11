import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ command }) => {
    const config = {
        build: {
            outDir: 'dist',
        },
        plugins: [
            tailwindcss(),
        ]
        // Add other common config here (like plugins)
    }

    if (command !== 'serve') {
        // In development, we want the site at the root (localhost:5173/)
        config.base = '/EssexGardensTrust/'
    }

    return config
})