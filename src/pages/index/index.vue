<template>
	<view class="content">
		<van-button type="primary" @click="updateTitle()">{{ title }}</van-button>
		<test :text="title"></test>
	</view>
</template>

<script setup>
	import {
		ref, getCurrentInstance 
	} from 'vue'
	import login from '@/api/login.js'
	
	// 通过代理调用全局方法
	// const { proxy } = getCurrentInstance();
	
	// console.log('start')
	// console.log(proxy.$utils.getQueryVariable('id'))
	// console.log('end')

	const title = ref('登录')

	const updateTitle = () => {
		if (title.value == '登录') {
			title.value = '注销'
		} else {
			title.value = '登录'
		}
	}
	
	let opt = {
		data: {
			"username": "117990",
			"password": "yxdk8888"
		},
		auth: false
	}
	
	login.login(opt).then(res => {
		console.log(res)
	})
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
