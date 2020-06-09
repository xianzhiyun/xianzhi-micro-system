import Vue from 'vue'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import Element from 'element-ui'
import './styles/element-variables.scss'
import enLang from 'element-ui/lib/locale/lang/en'// 如果使用中文语言包请默认支持，无需额外引入，请删除该依赖

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import { constantRoutes } from './router'

import './icons' // icon

Vue.use(Element, {
  size: Cookies.get('size') || 'medium', // set element-ui default size
  locale: enLang // 如果使用中文，无需设置，请删除
})
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import './public-path'
import Router from 'vue-router'
console.log(window.__POWERED_BY_QIANKUN__)
Vue.config.productionTip = false
let instance = null
let router = null

function render() {
  router = new Router({
    base: window.__POWERED_BY_QIANKUN__ ? '/client' : '/',
    mode: 'history', // require service support
    routes: constantRoutes
  })

  instance = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
  })
}

// 独立运行时，直接挂载应用
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {
  console.log('VueMicroApp bootstraped')
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
  console.log('VueMicroApp mount', props)
  render(props)
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount() {
  console.log('VueMicroApp unmount')
  instance.$destroy()
  instance = null
  router = null
}

