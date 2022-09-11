/**
 * 获取 url 参数
 * 示例：获取id值 getQueryVariable('id')
 * 
 * @param {Object} variable
 */
function getQueryVariable(variable) {
	const urls = window.location.href.split('?')
	if(urls.length < 2 || urls[1].length == 0){
		return (false);
	}
	const query = urls[1];
	const vars = query.split("&");
	for (let i = 0; i < vars.length; i++) {
		const pair = vars[i].split("=");
		if (pair[0] == variable) {
			return pair[1];
		}
	}
	return (false);
}

export default {
	getQueryVariable
}
