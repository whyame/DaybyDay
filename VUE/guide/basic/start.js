var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: '页面加载于 ' + new Date().toLocaleString()
      }
})

var app3 = new Vue({
    el: '#app-3',
    data:{
        seen:false,
    }
})


var appfor = new Vue({
    el: '#app-for',
    data: {
      array: [
        { text: '学习 JavaScript' },
        { text: '学习 Vue' },
        { text: '整个牛项目' }
      ]
    }
  })

var appinput = new Vue({
    el: '#app-5',
    data:{
        message: 'Press Button to Change',
    },
    methods: {
        reverseMessage: function () {
          this.message = this.message.split('').reverse().join('')
        }
    }
})

var getUsername = new Vue({
    el: '#user-name',
    data: {
        neirong: 'Pless Input Ur Name',
    }
})