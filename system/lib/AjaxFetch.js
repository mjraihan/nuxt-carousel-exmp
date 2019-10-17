import Config from '../../Config'
class AjaxFetch {

	constructor() {

		this.setConfig = {}
		this.mainConfig = Config
	}

	fetchConfig() {
		this.setConfig = {
			method: 'POST', // *GET, POST, PUT, DELETE, etc.
			mode: 'cors', // no-cors, *cors, same-origin
			cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
			credentials: 'omit', // include, *same-origin, omit
			headers: {
				'Content-Type': 'application/json'
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
			redirect: 'follow', // manual, *follow, error
			referrer: 'no-referrer', // no-referrer, *client
			body: {} // body data type must match "Content-Type" header
		}
	}

	mergeFetch() {
		this.fetchConfig()
		let fetchConfig = this.setConfig
		let newHeaders = Object.assign({}, fetchConfig.headers, this.mainConfig.fetch.headers)
		this.mainConfig.fetch.headers = newHeaders
		this.setConfig = Object.assign({}, fetchConfig, this.mainConfig.fetch)
	}


	queryString(paramObject) {
		var esc = encodeURIComponent;
		var query = Object.keys(paramObject)
			.map(k => esc(k) + '=' + esc(paramObject[k]))
			.join('&');
		return query;
	}
	fetch(method = '', url = '', data = '') {
		let t = this;
		this.mergeFetch()
		this.setConfig.method = method;
		this.setConfig.body = JSON.stringify(data);
		if (method == 'get' || method == 'GET') {
			delete this.setConfig.body
			let getData = data == '' ? '' : '?' + this.queryString(data)
			url = url + getData
		}

		// Default options are marked with *
		// console.log(this.setConfig)
		const response = fetch(url, this.setConfig)
			.then(response => response.json())

		// .catch((error) => {
		// 	return t.output(false, error)
		// });
		this.setConfig = {}
		return response; // parses JSON response into native JavaScript objects

	}

	output(status, data = '') {
		return {
			status: status,
			data: data,
		}
	}

	getConfig() {
		this.mergeFetch()
		return this
	}

}


export default new AjaxFetch()