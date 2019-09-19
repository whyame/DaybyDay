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

//VUE componet 
Vue.component('todo-item', {              // define tag
  props: ['obj'],                        // difine props
  template: '<li>{{ obj.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: '奶酪' },
      { id: 2, text: '蔬菜' },
      { id: 1, text: '随便其它什么人吃的东西' } //for循环顺序按照数组顺序，不受id影响
    ]
  }
})

//数据交互，与只读

var freezedate = {
  foo: 'cdata'
}

Object.freeze(freezedate)

var appfreeze = new Vue({
  el: '#app-freeze',
  data: freezedate
})

//Lifecycle hook
new Vue({
  data: {
    a: 1
  },
  created: function () {
    // `this` 指向 vm 实例
    console.log('a is: ' + this.a)
  }
})
// => "a is: 1"

new Vue({
  el: '#example1',
  data: function () {
    return {
      rawHtml: '<span style="color: red">This should be red.</span>'
    }
  }
})

var APPcompute = new Vue({
  el:  '#computeapp',
  data: {
    neirong:'Hello world!'
  },
  computed: {
    reversedMessage: function(){
      return this.neirong.split('').reverse().join('')
    }
  }
})

  