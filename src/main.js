import {
	createSSRApp
} from "vue";

import App from "./App.vue";

import utils from '@/common/utils.js'

import test from '@/components/test.vue'

import { Button } from 'vant';

export function createApp() {
	const app = createSSRApp(App);
	
	app.config.globalProperties.$utils = utils
	
	app.use(Button)
	
	app.component('test', test)
	
	return {
		app,
	};
}
