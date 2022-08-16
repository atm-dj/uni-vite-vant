import {
	defineConfig
} from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import Components from 'unplugin-vue-components/vite';
import {
	VantResolver
} from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		proxy: {
			"/api": {
				target: "http://localhost:8082",
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ""),
			},
		},
	},
	plugins: [
		uni(),
		Components({
			resolvers: [VantResolver()],
		}),
	],
})
