<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title" style="font-family: 'Alibaba PuHuiTi B';">{{ title }}</text>
			<text class="title">{{ title }}</text>
		</view>

		<van-button @click="login()">vant</van-button>
	</view>
</template>

<script>
	import login from '@/api/login';
	
	export default {
		data() {
			return {
				title: 'Hello',
			}
		},
		onLoad() {},
		methods: {
			login() {
				let opts = {
					data: {
						username: 'admin',
						password: 'admin123'
					},
					// 需要验证权限
					noAuth: true
				};
			
				login.login(opts).then(res => {
					console.log(res)
				});
			}
		},
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
