
// 访问前缀
let baseUrl = ''

class Model {
	//定义接口
	api(opts = {}) {
		
		baseUrl = import.meta.env.VITE_BASE_URL
		
		// 监听网络链接
		uni.onNetworkStatusChange((res) => {
			if (!res.isConnected) {
				uni.showToast({
					title: '网络连接不可用！',
					icon: 'none'
				});
			}
			return false
		});
		
		// 定义参数对象，不设置默认 get
		if (!opts.method) opts.method = 'get'
		// 自定义访问前缀
		if (opts.domain) baseUrl = opts.domain
		
		// 定义 header
		let header = {}
		
		// 是否需要传 token，true 不需要传 token，false 需要传 token
		if(opts.auth){
			// token
			let token, authorize = ''
			
			// 获取本地缓存的 token
			if (uni.getStorageSync('Authorization')) authorize = uni.getStorageSync('Authorization')
			
			header = {
				Authorization: authorize,
				'Content-Type': 'application/json; charset=UTF-8'
			}
		}
		
		// 正常接口请求
		return new Promise((resolve, reject) => {
			uni.request({
				url: baseUrl + opts.url,
				data: opts.data,
				method: opts.method,
				header: header,
				success: res => {
					if (res.statusCode === 200) {
						// token失效
						if (res.data.code === 401) {
							if("true" == import.meta.env.VITE_QW_LOGIN){
								uni.clearStorageSync();
								window.location.href = import.meta.env.VITE_QW_REDIRECT_URL;
							}else{
								uni.showModal({
									title: '提示',
									content: '登录过期，请重新登录',
									success: function(res) {
										// 确定
										if (res.confirm) {
											uni.redirectTo({
												url: '/pages/login/login'
											});
											uni.clearStorageSync();
										}
									}
								});
								resolve(res.data);
							}
						} else if (res.data) {
							resolve(res.data);
							
						} else {
							uni.showToast({
								title: res.data.returnMessage,
								icon: 'none',
								duration: 1500
							});
							reject(res.data);
							
						}
					}
				},
				fail: () => {
					console.log('请求失败,请稍候重试');
					uni.hideLoading();
					uni.showToast({
						title: '系统异常',
						icon: 'none',
						duration: 1500
					});
				}
			});
		})
	}

	get(options = {}) {
		options.method = 'GET'
		return this.api(options)
	}
	post(options = {}) {
		options.method = 'POST'
		return this.api(options)
	}
	put(options = {}) {
		options.method = 'PUT'
		return this.api(options)
	}
	delete(options = {}) {
		options.method = 'DELETE'
		return this.api(options)
	}
}

export default Model
