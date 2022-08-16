// 导入类
import Model from '@/common/http.js'

//继承类的方法
class Login extends Model {
	constructor(baseUrl) {
		super(baseUrl)
		this.baseUrl = baseUrl
	}

	// 账号密码登录
	login(options) {
		options.url = `/login`
		return this.post(options)
	}
}

const login = new Login()
export default login
