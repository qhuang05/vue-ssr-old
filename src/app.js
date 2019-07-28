import Vue from 'vue'
import createRouter from './router'
import App from './App.vue'

export default (context)=>{
	let router = createRouter();
	let app = new Vue({
		router,
		components: {App},
		template: '<App />'
	});
	return {router, app}
}