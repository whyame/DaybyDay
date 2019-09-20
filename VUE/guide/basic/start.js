//import axios form "https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"

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

// Computed Setter
var csetter = new Vue({
  el: '#computed-nice',
  data: {
    firstName:'Chander',
    lastName:'Wang'
  },
  computed: {
    fullName: {
      // getter
      get: function () {
        return this.firstName + ' ' + this.lastName
      },
      // setter
      set: function (newValue) {
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  }
})

// 因为 AJAX 库和通用工具的生态已经相当丰富，Vue 核心代码没有重复
// 提供这些功能以保持精简。这也可以让你自由选择自己更熟悉的工具。




var watchExampleVM = new Vue({
  el: '#watch-example',
  data: {
    question: '',
    answer: 'I cannot give you an answer until you ask a question!'
  },
  watch: {
    // 如果 `question` 发生改变，这个函数就会运行
    question: function (newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.debouncedGetAnswer()
    }
  },
  created: function () {
    // `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
    // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
    // AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
    // `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
    // 请参考：https://lodash.com/docs#debounce
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
  },
  methods: {
    getAnswer: function () {
      if (this.question.indexOf('?') === -1) {
        this.answer = 'Questions usually contain a question mark. ;-)'
        return
      }
      this.answer = 'Thinking...'
      var vm = this
      axios.get('https://yesno.wtf/api')
        .then(function (response) {
          vm.answer = _.capitalize(response.data.answer)
        })
        .catch(function (error) {
          vm.answer = 'Error! Could not reach the API. ' + error
        })
    }
  }
})
  