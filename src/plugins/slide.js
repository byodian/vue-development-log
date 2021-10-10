import AppSlide from '@/components/AppSlide.vue'
export default {
  install (Vue, options) {
    Vue.mixin({
      beforeCreate () {
        const flag = this.$options.showSlideImage
        if (flag) {
          // eslint-disable-next-line no-new
          const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
              const slidesList = []
              for (let i = 1; i <= 7; i++) {
                slidesList.push(require(`@/assets/slide${i}.jpg`))
              }

              resolve(slidesList)
            }, 200)
          })

          promise.then(data => {
            this._slides = data
          })

          // 将 _slides 注册为响应式对象
          // https://github.com/vuejs/vue-router/blob/dev/src/install.js
          // https://github.com/vuejs/vue/blob/0368ba4f37ef1ef28eb785261ab76a68f7fa03dd/src/core/observer/index.js#L135
          Vue.util.defineReactive(this, '_slides', this._slides)
        }
      }
    })

    Vue.component(AppSlide.name, AppSlide)

    Object.defineProperty(Vue.prototype, '$slides', {
      get () { return this._slides }
    })
  }
}
