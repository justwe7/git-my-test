import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// mergea -- merge-b修改
function fooBranchA (param) {
  const objB = {
    a: 1,
    b: 2,
    c: 3
  }
  for (const key in objB) {
    console.log('merge-b')
    if (Object.hasOwnProperty.call(objB, key)) {
      const eleNew = objB[key];
      console.log(eleNew)
    }
  }
  console.log(objB)
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
