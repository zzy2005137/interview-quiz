<template>
  <div class="question-card">
    <div class="progress">
      <el-row justify="center">
        <el-col :span="18"
          ><el-progress :percentage="progress * 10" :show-text="false"
        /></el-col>
      </el-row>
      <el-row>
        <el-col class="text">{{ progress }} / 10</el-col>
      </el-row>
    </div>
    <!-- 改成支持 md 文档解析 -->
    <div class="card">
      <h2>{{ questions[cur].question }}</h2>
      <p class="answer" :class="{ 'show-answer': showAnswer }">
        {{ questions[cur].answer }}
      </p>
      <button v-show="showButton" @click="show" class="show-btn">
        显示答案
      </button>
    </div>

    <div class="choice">
      <!-- button 样式待修改，子集写一个 -->
      <el-button size="large" type="primary" @click="next">模糊</el-button>
      <el-button size="large" type="success" @click="next">掌握</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuesationCard",
  data() {
    return {
      progress: 1,
      showAnswer: false,
      showButton: true,
      cur: 0,
      questions: [
        {
          question: "什么是DOM ？ 什么是 BOM ？",
          answer:
            "DOM 指的是文档对象模型，它是操作文档的编程接口，它把文档当做一个对象来对待，这个对象主要定义了处理网页内容的方法和接口。任何HTML文档或XML文档都可以用DOM表示为一个由节点构成的层级结构。BOM 指的是浏览器对象模型，它提供了与网页无关的浏览器功能对象，对象主要定义了与浏览器进行交互的法和接口BOM的核心是 window 对象。它有双重身份，既是通过 js 访问浏览器窗口的一个接口，又是一个Global（全局）对象。",
        },
        {
          question: "异步编程的实现方法？",
          answer: `- 早期使用的回调函数的方式
                  缺点是，多个回调函数嵌套的时候代码会变得很复杂，难以维护
                  - Promise 的方式
                  ES6 之后使用 Promise 的方式可以将嵌套的回调函数作为链式调用。但是使用这种方法，有时会造成多个 then 的链式调用，可能会造成代码的语义不够明确。
                  - 使用 async -wait`,
        },
        {
          question: "什么是DOM ？ 什么是 BOM ？",
          answer:
            "DOM 指的是文档对象模型，它是操作文档的编程接口，它把文档当做一个对象来对待，这个对象主要定义了处理网页内容的方法和接口。任何HTML文档或XML文档都可以用DOM表示为一个由节点构成的层级结构。BOM 指的是浏览器对象模型，它提供了与网页无关的浏览器功能对象，对象主要定义了与浏览器进行交互的法和接口BOM的核心是 window 对象。它有双重身份，既是通过 js 访问浏览器窗口的一个接口，又是一个Global（全局）对象。",
        },
        {
          question: "异步编程的实现方法？",
          answer: `- 早期使用的回调函数的方式
                  缺点是，多个回调函数嵌套的时候代码会变得很复杂，难以维护
                  - Promise 的方式
                  ES6 之后使用 Promise 的方式可以将嵌套的回调函数作为链式调用。但是使用这种方法，有时会造成多个 then 的链式调用，可能会造成代码的语义不够明确。
                  - 使用 async -wait`,
        },
        {
          question: "什么是DOM ？ 什么是 BOM ？",
          answer:
            "DOM 指的是文档对象模型，它是操作文档的编程接口，它把文档当做一个对象来对待，这个对象主要定义了处理网页内容的方法和接口。任何HTML文档或XML文档都可以用DOM表示为一个由节点构成的层级结构。BOM 指的是浏览器对象模型，它提供了与网页无关的浏览器功能对象，对象主要定义了与浏览器进行交互的法和接口BOM的核心是 window 对象。它有双重身份，既是通过 js 访问浏览器窗口的一个接口，又是一个Global（全局）对象。",
        },
        {
          question: "异步编程的实现方法？",
          answer: `- 早期使用的回调函数的方式
                  缺点是，多个回调函数嵌套的时候代码会变得很复杂，难以维护
                  - Promise 的方式
                  ES6 之后使用 Promise 的方式可以将嵌套的回调函数作为链式调用。但是使用这种方法，有时会造成多个 then 的链式调用，可能会造成代码的语义不够明确。
                  - 使用 async -wait`,
        },
        {
          question: "什么是DOM ？ 什么是 BOM ？",
          answer:
            "DOM 指的是文档对象模型，它是操作文档的编程接口，它把文档当做一个对象来对待，这个对象主要定义了处理网页内容的方法和接口。任何HTML文档或XML文档都可以用DOM表示为一个由节点构成的层级结构。BOM 指的是浏览器对象模型，它提供了与网页无关的浏览器功能对象，对象主要定义了与浏览器进行交互的法和接口BOM的核心是 window 对象。它有双重身份，既是通过 js 访问浏览器窗口的一个接口，又是一个Global（全局）对象。",
        },
        {
          question: "异步编程的实现方法？",
          answer: `- 早期使用的回调函数的方式
                  缺点是，多个回调函数嵌套的时候代码会变得很复杂，难以维护
                  - Promise 的方式
                  ES6 之后使用 Promise 的方式可以将嵌套的回调函数作为链式调用。但是使用这种方法，有时会造成多个 then 的链式调用，可能会造成代码的语义不够明确。
                  - 使用 async -wait`,
        },
        {
          question: "什么是DOM ？ 什么是 BOM ？",
          answer:
            "DOM 指的是文档对象模型，它是操作文档的编程接口，它把文档当做一个对象来对待，这个对象主要定义了处理网页内容的方法和接口。任何HTML文档或XML文档都可以用DOM表示为一个由节点构成的层级结构。BOM 指的是浏览器对象模型，它提供了与网页无关的浏览器功能对象，对象主要定义了与浏览器进行交互的法和接口BOM的核心是 window 对象。它有双重身份，既是通过 js 访问浏览器窗口的一个接口，又是一个Global（全局）对象。",
        },
        {
          question: "异步编程的实现方法？",
          answer: `- 早期使用的回调函数的方式
                  缺点是，多个回调函数嵌套的时候代码会变得很复杂，难以维护
                  - Promise 的方式
                  ES6 之后使用 Promise 的方式可以将嵌套的回调函数作为链式调用。但是使用这种方法，有时会造成多个 then 的链式调用，可能会造成代码的语义不够明确。
                  - 使用 async -wait`,
        },
      ],
    };
  },
  methods: {
    add() {
      this.progress = (this.progress + 10) % 100;
    },
    show() {
      this.showAnswer = !this.showAnswer;
      this.showButton = !this.showButton;
    },
    next() {
      this.cur++;
      this.progress++;
      if (this.showAnswer) {
        this.show();
      }
    },
  },
};
</script>

<style scoped>
.question-card {
  width: 60vw;
}
/* .question-card div {
  margin-bottom: 2rem;
} */
.card {
  box-shadow: 10px 10px 30px 0 rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  border: none;
  overflow: hidden;
  background: #fff;
  cursor: normal;
  transition: all 0.2;
  padding: 1rem;
}

/* 进度 */

.progress .el-row {
  margin-bottom: 2rem;
}
.progress .text {
  font-size: 1.2rem;
}

/* 问题 */
.answer {
  padding: 0 3rem 1rem 3rem;
  font-size: 1.1rem;
  line-height: 1.5em;
  opacity: 0;
}

.show-answer {
  opacity: 1;
}
.card {
  position: relative;
}

.show-btn {
  width: 10rem;
  height: 4rem;
  border: none;
  border-radius: 10px;
  /* background-color: skyblue; */
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  font-size: 1.5rem;
  cursor: pointer;
}

.show-btn:hover {
  background-color: rgb(212, 210, 210);
}

.choice {
  margin-top: 2rem;
}
</style>
