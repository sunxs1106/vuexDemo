<template>
  <div class="hello">
    <button @click="changeSeen">显示P</button>
    <p v-if="seen" v-html="text" style="height: 20px; border: 1px solid #f00"></p>
    <p>Original message: "{{ message }}"</p>
    <p>Computed reversed message: "{{ reversedMessage }}"</p>
    <input type="text" v-model="Msg" placeholder="替换上面的message的内容">
    <button @click="changeMsg">修改msg</button>
    <br>
    <input type="text" v-model="firstName" style="margin-right: 20px;">
    <input type="text" v-model="lastName" style="margin-right: 20px;">
    <input type="text" v-model="fullName">
    <br><br>
    <input type="text" v-model="question">
    <p>{{answer}}</p>
    <div @click="toTest">跳转test</div>
  </div>
</template>

<script>
import axios from "axios";
import {mapState, mapMutations} from 'vuex';
// import store from '../store';
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      Msg: "",
      text: "傻大姐啊含税单价",
      seen: false,
      message: "hello",
      // fullName: "foo bar",
      firstName: "foo",
      lastName: "bar",
      question: "",
      answer: "I cannot give you an answer until you ask a question!"
    };
  },
  methods: {
    ...mapMutations(['updateMessage']),
    changeSeen() {
      this.text += "哈哈";
      this.seen = !this.seen;
    },
    changeMsg() {
      this.message = this.Msg;
    },
    toTest(){
      this.$store.commit('updateMessage', {isActive: !this.isActive});
      this.$router.push('test');
    },
    // getAnswer() {
    //   // `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
    //   // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
    //   // AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
    //   // `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
    //   // 请参考：https://lodash.com/docs#debounce
    //   getAnswer: _.debounce(
    //     function() {
    //       if (this.question.indexOf("?") === -1) {
    //         this.answer = "Questions usually contain a question mark. ;-)";
    //         return;
    //       }
    //       this.answer = "Thinking...";
    //       var vm = this;
    //       axios
    //         .get("https://yesno.wtf/api")
    //         .then(function(response) {
    //           vm.answer = _.capitalize(response.data.answer);
    //         })
    //         .catch(function(error) {
    //           vm.answer = "Error! Could not reach the API. " + error;
    //         });
    //     },
    //     // 这是我们为判定用户停止输入等待的毫秒数
    //     500
    //   );
    // }
  },
  watch: {
    question(newQuestion) {
      this.answer = "Waiting for you to stop typing...";
      this.getAnswer();
    }
  },
  computed: {
    ...mapState(['isActive']),
    // 计算属性的 getter
    reversedMessage() {
      // `this` 指向 vm 实例
      return this.message
        .split("")
        .reverse()
        .join("");
    },
    fullName: {
      get() {
        return this.firstName + " " + this.lastName;
      },
      set(newValue) {
        var names = newValue.split(" ");
        this.firstName = names[0];
        this.lastName = names[1];
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
