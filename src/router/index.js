import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'

Vue.use(Router)

export default ()=>{
	return new Router({
	  routes: [
	    {
	      path: '/',
	      name: 'home',
	      component: Home
	    },
	    {
	      path: '/about',
	      name: 'about',
	      component: About
	    }
	  ]
	})
}
