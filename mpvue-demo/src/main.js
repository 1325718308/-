import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
const app = new Vue(App)
app.$mount()

export default {
    config: {
        pages: [],
        window: {
            backgroundTextStyle: "light",
            navigationBarBackgroundColor: "#ea5429",
            navigationBarTitleText: "蜗牛图书",
            navigationBarTextStyle: "light"
        },
        tabBar: {
            selectedColor: '#EA5149',
            list: [
              {
                pagePath: 'pages/me/main',
                text: '我',
                iconPath: 'static/img/me.png',
                selectedIconPath: 'static/img/me-active.png'
              },
              {
                pagePath: 'pages/me/main',
                text: '我',
                iconPath: 'static/img/me.png',
                selectedIconPath: 'static/img/me-active.png'
              }
      
            ]
        }
    }
}