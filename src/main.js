import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// mergea
function fooBranchA (param) {
  const obj = {
    a: 1,
    b: 2,
    c: 3
  }
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      const element = obj[key];
      console.log(element)
    }
  }
  console.log(obj)
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
