import createApp from './app.js'

let {router,app} = createApp();

router.onReady(()=>{
	app.$mount('#app')
})