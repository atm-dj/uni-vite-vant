import {
	createSSRApp
} from "vue";

import App from "./App.vue";

import { Button } from 'vant';

export function createApp() {
	const app = createSSRApp(App);
	
	app.use(Button)
	
	return {
		app,
	};
}
