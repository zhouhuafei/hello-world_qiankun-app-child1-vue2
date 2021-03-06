import './public-path'
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './router'
import store from './store'
import ElementUI from 'element-ui'

Vue.use(ElementUI, { size: 'small' })

Vue.config.productionTip = false

let router = null
let instance = null

function render (props = {}) {
  const { container } = props
  router = new VueRouter({
    // base: process.env.BASE_URL,
    base: window.__POWERED_BY_QIANKUN__ ? '/child1' : '/',
    mode: 'history',
    routes
  })

  instance = new Vue({
    router,
    store,
    render: (h) => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app')
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

// 微前端 - 主子应用通信 - 加if是因为qiankun的v3版本会移除这个api
function storeTest (props) {
  console.log(`主应用通过props传给子应用${props.name}的mainStore：`, props.mainStore)
  if (props.onGlobalStateChange) {
    props.onGlobalStateChange((value, prev) => {
      console.log(`在子应用${props.name}中打印变更前的状态：`, prev)
      console.log(`在子应用${props.name}中打印变更后的状态：`, value)
    }, true) // true表示会立即执行一次回调
  }
  if (props.setGlobalState) {
    props.setGlobalState({ a: 111, b: 222 })
  }
  if (props.onGlobalStateChange) {
    Vue.prototype.$onGlobalStateChange = props.onGlobalStateChange
  }
  if (props.setGlobalState) {
    Vue.prototype.$setGlobalState = props.setGlobalState
  }
}

export async function bootstrap () {
  console.log('%c%s', 'color: green;', '[vue] vue app bootstraped')
}

export async function mount (props) {
  console.log('[vue] props from main framework', props)

  render(props)
  storeTest(props)
}

export async function unmount () {
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
  router = null
}
