import{_ as e,o as t,c as o,F as c,b as a,d as n,e as s}from"./app.0702af34.js";const l={},p=a('<h2 id="\u94FE\u8868" tabindex="-1"><a class="header-anchor" href="#\u94FE\u8868">\xB6</a> <span class="prefix"></span><span class="content" id="\u94FE\u8868"><a class="header-anchor" href="#\u94FE\u8868" aria-hidden="true">#</a> \u94FE\u8868</span><span class="suffix"></span></h2><h3 id="\u7EC4\u6210" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u6210">\xB6</a> <span class="prefix"></span><span class="content" id="\u7EC4\u6210"><a class="header-anchor" href="#\u7EC4\u6210" aria-hidden="true">#</a> \u7EC4\u6210</span><span class="suffix"></span></h3><p>\u94FE\u8868\u5C01\u88C5\u7EC4\u6210\uFF1A</p><p>head\u5F15\u7528-&gt; \u82E5\u5E72<strong>\u8282\u70B9</strong> -&gt; ...</p><p>head\u5F15\u7528 &lt;=&gt; \u82E5\u5E72\u8282\u70B9 &lt;=&gt;tail\u5F15\u7528</p><p>\u8282\u70B9\u5C01\u88C5\u7EC4\u6210:</p><ul><li>next\u6307\u9488</li><li>data\u8282\u70B9\u6570\u636E</li><li>prev\u6307\u9488[optional]</li></ul><p>\u94FE\u8868\u7684\u65B9\u6CD5\uFF1A</p><p>\u589E\u52A0\uFF0C\u63D2\u5165\uFF0C\u4FEE\u6539\uFF1B\u67E5\u8BE2\u5F97\u5230\u5143\u7D20\uFF1B\u67E5\u8BE2\u6839\u636E\u67D0\u4E2A\u503C\u5F97\u5230\u5143\u7D20\u6240\u5904\u7684\u94FE\u8868\u4E0B\u6807position\uFF1B\u6839\u636E\u5143\u7D20\u7684data\u5220\u9664\uFF1B\u6839\u636E\u94FE\u8868\u7684\u4E0B\u6807position\u5220\u9664</p><h3 id="\u94FE\u8868\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u94FE\u8868\u5B9E\u73B0">\xB6</a> <span class="prefix"></span><span class="content" id="\u94FE\u8868\u5B9E\u73B0"><a class="header-anchor" href="#\u94FE\u8868\u5B9E\u73B0" aria-hidden="true">#</a> \u94FE\u8868\u5B9E\u73B0</span><span class="suffix"></span></h3><h4 id="append-insert-get-indexof" tabindex="-1"><a class="header-anchor" href="#append-insert-get-indexof">\xB6</a> <span class="prefix"></span><span class="content" id="append-insert-get-indexof"><a class="header-anchor" href="#append-insert-get-indexof" aria-hidden="true">#</a> append, insert, get, indexOf</span><span class="suffix"></span></h4>',11),r=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"//append, insert, get, indexOf"),s(`
`),n("span",{class:"token comment"},"//\u5355\u5411\u94FE\u8868"),s(`
`),n("span",{class:"token keyword"},"const"),s(" log "),n("span",{class:"token operator"},"="),s(" console"),n("span",{class:"token punctuation"},"."),s(`log
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Node"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"constructor"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"data"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("data "),n("span",{class:"token operator"},"="),s(` data
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"LinkedList"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"//\u5C5E\u6027"),s(`
  head `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),s(`
  length `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),s(`
  
  `),n("span",{class:"token comment"},"//\u4E00\u3001\u5B9E\u73B0append \u65B9\u6CD5"),s(`
    `),n("span",{class:"token comment"},"//1.\u521B\u5EFA\u65B0\u8282\u70B9"),s(`
    `),n("span",{class:"token comment"},"//2.\u6DFB\u52A0\u65B0\u8282\u70B9"),s(`
      `),n("span",{class:"token comment"},"//\u2460\u8282\u70B9\u6570\u7B49\u4E8E1"),s(`
      `),n("span",{class:"token comment"},"//\u2461\u8282\u70B9\u6570\u5927\u4E8E1"),s(`
    `),n("span",{class:"token comment"},"//3.\u4FEE\u6539\u5355\u5411\u94FE\u8868\u5C5E\u6027-\u957F\u5EA6"),s(`
  `),n("span",{class:"token function-variable function"},"append"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"data"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" newNode "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Node"),n("span",{class:"token punctuation"},"("),s("data"),n("span",{class:"token punctuation"},")"),s(`
    
    `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("head "),n("span",{class:"token operator"},"="),s(` newNode
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"let"),s(" current "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s(`head
      `),n("span",{class:"token keyword"},"while"),n("span",{class:"token punctuation"},"("),s("current"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        current `),n("span",{class:"token operator"},"="),s(" current"),n("span",{class:"token punctuation"},"."),s(`next
      `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token comment"},"//\u5FAA\u73AF\u540E\uFF0Ccurrent\u4E3A\u6700\u540E\u4E00\u4E2A\u8282\u70B9"),s(`
      current`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(` newNode
    `),n("span",{class:"token punctuation"},"}"),s(`
    
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"1"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" current "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s(`head
    `),n("span",{class:"token keyword"},"let"),s(" listString "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"''"),s(`
    `),n("span",{class:"token keyword"},"while"),n("span",{class:"token punctuation"},"("),s("current"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      listString `),n("span",{class:"token operator"},"+="),s(" current"),n("span",{class:"token punctuation"},"."),s("data "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token string"},"' '"),s(`
      current `),n("span",{class:"token operator"},"="),s(" current"),n("span",{class:"token punctuation"},"."),s(`next
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token comment"},"//\u5FAA\u73AF\u540E\uFF0Ccurrent\u4E3A\u6700\u540E\u4E00\u4E2A\u8282\u70B9"),s(`
    `),n("span",{class:"token keyword"},"return"),s(` listString
    
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token comment"},"//\u4E8C\u3001insert"),s(`
  `),n("span",{class:"token function"},"insert"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("position"),n("span",{class:"token punctuation"},","),s(" data")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    
    `),n("span",{class:"token comment"},"//1. position\u8D8A\u754C"),s(`
    `),n("span",{class:"token comment"},"//2. \u521B\u5EFA\u8282\u70B9"),s(`
    `),n("span",{class:"token comment"},"//3. \u63D2\u5165\u65B0\u8282\u70B9"),s(`
      `),n("span",{class:"token comment"},"//\u2460 \u65B0\u8282\u70B9position=0"),s(`
      `),n("span",{class:"token comment"},"//\u2461 \u65B0\u8282\u70B9position>0"),s(`
    
    `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),s("position "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},"||"),s(" position "),n("span",{class:"token operator"},">"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"failed!!"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" newNode "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Node"),n("span",{class:"token punctuation"},"("),s("data"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),s("position "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"//\u2460"),s(`
      newNode`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s(`head
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("head "),n("span",{class:"token operator"},"="),s(` newNode

      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"1"),s(`
      `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token comment"},"//\u2461"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" index "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" previous "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" current "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s(`head
    
    `),n("span",{class:"token keyword"},"while"),n("span",{class:"token punctuation"},"("),s("index"),n("span",{class:"token operator"},"++"),s(),n("span",{class:"token operator"},"<"),s(" position"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      previous `),n("span",{class:"token operator"},"="),s(` current
      current `),n("span",{class:"token operator"},"="),s(" current"),n("span",{class:"token punctuation"},"."),s(`next
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token comment"},"//\u5FAA\u73AF\u7ED3\u675F\u540E \u65B0\u8282\u70B9\u5E94\u8BE5\u88ABcurrent\u7684\u6307\u5411\u548Cprevious\u7684\u6307\u5411\uFF0C\u5939\u4F4F"),s(`
    newNode`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(` current
    previous`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(` newNode
`),n("span",{class:"token comment"},"//     log(current,previous)"),s(`
    
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"1"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),s(`
    
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token comment"},"//\u4E09\u3001get"),s(`
  `),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),s("position"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),s("position "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},"||"),s(" position "),n("span",{class:"token operator"},">="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"null"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" index "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" current "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s(`head
    `),n("span",{class:"token keyword"},"while"),n("span",{class:"token punctuation"},"("),s("index"),n("span",{class:"token operator"},"++"),s(),n("span",{class:"token operator"},"<"),s(" position"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      current `),n("span",{class:"token operator"},"="),s(" current"),n("span",{class:"token punctuation"},"."),s(`next
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" current"),n("span",{class:"token punctuation"},"."),s(`data
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token comment"},"//\u56DB\u3001indexOf\u65B9\u6CD5 \u7ED9data\u8FD4\u56DE\u4E0B\u6807\u503C"),s(`
  `),n("span",{class:"token function"},"indexOf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"data"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" current "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s(`head
    `),n("span",{class:"token keyword"},"let"),s(" index "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),s(`
`),n("span",{class:"token comment"},"//     while(index++ < this.length) <-- \u9519\u8BEF\u5199\u6CD5"),s(`
    `),n("span",{class:"token keyword"},"while"),n("span",{class:"token punctuation"},"("),s("current"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),s("current"),n("span",{class:"token punctuation"},"."),s("data "),n("span",{class:"token operator"},"==="),s(" data"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(` index
      `),n("span",{class:"token punctuation"},"}"),s(`
      current `),n("span",{class:"token operator"},"="),s(" current"),n("span",{class:"token punctuation"},"."),s(`next
      index `),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"1"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"//append"),s(`
`),n("span",{class:"token keyword"},"let"),s(" linkedList "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"LinkedList"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
linkedList`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'aaa'"),n("span",{class:"token punctuation"},")"),s(`
linkedList`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'bbb'"),n("span",{class:"token punctuation"},")"),s(`
linkedList`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'ccc'"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token comment"},"// log(linkedList)"),s(`
linkedList`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"insert"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'ddd'"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("linkedList"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"\u4F4D\u7F6E1\u7684\u5143\u7D20\u4E3A"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(" linkedList"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"aaa\u7684\u4F4D\u7F6E\u4E0B\u6807\u662F"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s("linkedList"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"indexOf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'aaa'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1651016432819-76853"},"\u590D\u5236\u6210\u529F"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`//append, insert, get, indexOf
//\u5355\u5411\u94FE\u8868
const log = console.log
class Node {
  constructor(data){
    this.data = data
    this.next = null
  }
}
class LinkedList {
  //\u5C5E\u6027
  head = null
  length = 0
  
  //\u4E00\u3001\u5B9E\u73B0append \u65B9\u6CD5
    //1.\u521B\u5EFA\u65B0\u8282\u70B9
    //2.\u6DFB\u52A0\u65B0\u8282\u70B9
      //\u2460\u8282\u70B9\u6570\u7B49\u4E8E1
      //\u2461\u8282\u70B9\u6570\u5927\u4E8E1
    //3.\u4FEE\u6539\u5355\u5411\u94FE\u8868\u5C5E\u6027-\u957F\u5EA6
  append = (data) => {
    let newNode = new Node(data)
    
    if(this.length === 0) {
      this.head = newNode
    }else {
      let current = this.head
      while(current.next) {
        current = current.next
      }
      //\u5FAA\u73AF\u540E\uFF0Ccurrent\u4E3A\u6700\u540E\u4E00\u4E2A\u8282\u70B9
      current.next = newNode
    }
    
    this.length += 1
  }
  toString(){
    let current = this.head
    let listString = ''
    while(current) {
      listString += current.data + ' '
      current = current.next
    }
    //\u5FAA\u73AF\u540E\uFF0Ccurrent\u4E3A\u6700\u540E\u4E00\u4E2A\u8282\u70B9
    return listString
    
  }

  //\u4E8C\u3001insert
  insert(position, data) {
    
    //1. position\u8D8A\u754C
    //2. \u521B\u5EFA\u8282\u70B9
    //3. \u63D2\u5165\u65B0\u8282\u70B9
      //\u2460 \u65B0\u8282\u70B9position=0
      //\u2461 \u65B0\u8282\u70B9position>0
    
    if(position < 0 || position > this.length) {
      log(\`failed!!\`)
      return false
    }
    let newNode = new Node(data)
    if(position === 0) {
      //\u2460
      newNode.next = this.head
      this.head = newNode

      this.length += 1
      return true
    }
    //\u2461
    let index = 0
    let previous = null
    let current = this.head
    
    while(index++ < position) {
      previous = current
      current = current.next
    }
    //\u5FAA\u73AF\u7ED3\u675F\u540E \u65B0\u8282\u70B9\u5E94\u8BE5\u88ABcurrent\u7684\u6307\u5411\u548Cprevious\u7684\u6307\u5411\uFF0C\u5939\u4F4F
    newNode.next = current
    previous.next = newNode
//     log(current,previous)
    
    this.length += 1
    return true
    
  }

  //\u4E09\u3001get
  get(position){
    if(position < 0 || position >= this.length) return null
    let index = 0
    let current = this.head
    while(index++ < position) {
      current = current.next
    }
    return current.data
  }

  //\u56DB\u3001indexOf\u65B9\u6CD5 \u7ED9data\u8FD4\u56DE\u4E0B\u6807\u503C
  indexOf(data) {
    let current = this.head
    let index = 0
//     while(index++ < this.length) <-- \u9519\u8BEF\u5199\u6CD5
    while(current) {
      if(current.data === data) {
        return index
      }
      current = current.next
      index += 1
    }
    return -1
  }
}

//append
let linkedList = new LinkedList()
linkedList.append('aaa')
linkedList.append('bbb')
linkedList.append('ccc')
// log(linkedList)
linkedList.insert(0, 'ddd')
log(linkedList.toString())
log(\`\u4F4D\u7F6E1\u7684\u5143\u7D20\u4E3A\`, linkedList.get(1))
log(\`aaa\u7684\u4F4D\u7F6E\u4E0B\u6807\u662F\`,linkedList.indexOf('aaa'))
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1651016432819-76853","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"\u590D\u5236\u5931\u8D25",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"\u590D\u5236")])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br"),n("span",{class:"line-number"},"37"),n("br"),n("span",{class:"line-number"},"38"),n("br"),n("span",{class:"line-number"},"39"),n("br"),n("span",{class:"line-number"},"40"),n("br"),n("span",{class:"line-number"},"41"),n("br"),n("span",{class:"line-number"},"42"),n("br"),n("span",{class:"line-number"},"43"),n("br"),n("span",{class:"line-number"},"44"),n("br"),n("span",{class:"line-number"},"45"),n("br"),n("span",{class:"line-number"},"46"),n("br"),n("span",{class:"line-number"},"47"),n("br"),n("span",{class:"line-number"},"48"),n("br"),n("span",{class:"line-number"},"49"),n("br"),n("span",{class:"line-number"},"50"),n("br"),n("span",{class:"line-number"},"51"),n("br"),n("span",{class:"line-number"},"52"),n("br"),n("span",{class:"line-number"},"53"),n("br"),n("span",{class:"line-number"},"54"),n("br"),n("span",{class:"line-number"},"55"),n("br"),n("span",{class:"line-number"},"56"),n("br"),n("span",{class:"line-number"},"57"),n("br"),n("span",{class:"line-number"},"58"),n("br"),n("span",{class:"line-number"},"59"),n("br"),n("span",{class:"line-number"},"60"),n("br"),n("span",{class:"line-number"},"61"),n("br"),n("span",{class:"line-number"},"62"),n("br"),n("span",{class:"line-number"},"63"),n("br"),n("span",{class:"line-number"},"64"),n("br"),n("span",{class:"line-number"},"65"),n("br"),n("span",{class:"line-number"},"66"),n("br"),n("span",{class:"line-number"},"67"),n("br"),n("span",{class:"line-number"},"68"),n("br"),n("span",{class:"line-number"},"69"),n("br"),n("span",{class:"line-number"},"70"),n("br"),n("span",{class:"line-number"},"71"),n("br"),n("span",{class:"line-number"},"72"),n("br"),n("span",{class:"line-number"},"73"),n("br"),n("span",{class:"line-number"},"74"),n("br"),n("span",{class:"line-number"},"75"),n("br"),n("span",{class:"line-number"},"76"),n("br"),n("span",{class:"line-number"},"77"),n("br"),n("span",{class:"line-number"},"78"),n("br"),n("span",{class:"line-number"},"79"),n("br"),n("span",{class:"line-number"},"80"),n("br"),n("span",{class:"line-number"},"81"),n("br"),n("span",{class:"line-number"},"82"),n("br"),n("span",{class:"line-number"},"83"),n("br"),n("span",{class:"line-number"},"84"),n("br"),n("span",{class:"line-number"},"85"),n("br"),n("span",{class:"line-number"},"86"),n("br"),n("span",{class:"line-number"},"87"),n("br"),n("span",{class:"line-number"},"88"),n("br"),n("span",{class:"line-number"},"89"),n("br"),n("span",{class:"line-number"},"90"),n("br"),n("span",{class:"line-number"},"91"),n("br"),n("span",{class:"line-number"},"92"),n("br"),n("span",{class:"line-number"},"93"),n("br"),n("span",{class:"line-number"},"94"),n("br"),n("span",{class:"line-number"},"95"),n("br"),n("span",{class:"line-number"},"96"),n("br"),n("span",{class:"line-number"},"97"),n("br"),n("span",{class:"line-number"},"98"),n("br"),n("span",{class:"line-number"},"99"),n("br"),n("span",{class:"line-number"},"100"),n("br"),n("span",{class:"line-number"},"101"),n("br"),n("span",{class:"line-number"},"102"),n("br"),n("span",{class:"line-number"},"103"),n("br"),n("span",{class:"line-number"},"104"),n("br"),n("span",{class:"line-number"},"105"),n("br"),n("span",{class:"line-number"},"106"),n("br"),n("span",{class:"line-number"},"107"),n("br"),n("span",{class:"line-number"},"108"),n("br"),n("span",{class:"line-number"},"109"),n("br"),n("span",{class:"line-number"},"110"),n("br"),n("span",{class:"line-number"},"111"),n("br"),n("span",{class:"line-number"},"112"),n("br"),n("span",{class:"line-number"},"113"),n("br"),n("span",{class:"line-number"},"114"),n("br"),n("span",{class:"line-number"},"115"),n("br"),n("span",{class:"line-number"},"116"),n("br"),n("span",{class:"line-number"},"117"),n("br"),n("span",{class:"line-number"},"118"),n("br"),n("span",{class:"line-number"},"119"),n("br"),n("span",{class:"line-number"},"120"),n("br"),n("span",{class:"line-number"},"121"),n("br"),n("span",{class:"line-number"},"122"),n("br"),n("span",{class:"line-number"},"123"),n("br"),n("span",{class:"line-number"},"124"),n("br"),n("span",{class:"line-number"},"125"),n("br"),n("span",{class:"line-number"},"126"),n("br")])],-1),i=a('<h4 id="update-removeat-remove" tabindex="-1"><a class="header-anchor" href="#update-removeat-remove">\xB6</a> <span class="prefix"></span><span class="content" id="update-removeat-remove"><a class="header-anchor" href="#update-removeat-remove" aria-hidden="true">#</a> update, removeAt, remove</span><span class="suffix"></span></h4><ul><li>update(position, newData)</li><li>removeAt(position)</li><li>remove(element)</li></ul>',2),u=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"//update(position, newData). removeAt(position), remove(element)"),s(`
`),n("span",{class:"token comment"},"//\u5355\u5411\u94FE\u8868"),s(`
`),n("span",{class:"token keyword"},"const"),s(" log "),n("span",{class:"token operator"},"="),s(" console"),n("span",{class:"token punctuation"},"."),s(`log
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Node"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"constructor"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"data"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("data "),n("span",{class:"token operator"},"="),s(` data
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"LinkedList"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"//\u5C5E\u6027"),s(`
  head `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),s(`
  length `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),s(`
  
  `),n("span",{class:"token comment"},"//\u4E94\u3001update"),s(`
  `),n("span",{class:"token function"},"update"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("position"),n("span",{class:"token punctuation"},","),s(" newData")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),s("position "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},"||"),s(" position "),n("span",{class:"token operator"},">="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" current "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s(`head
    `),n("span",{class:"token keyword"},"let"),s(" index "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),s(`
    `),n("span",{class:"token keyword"},"while"),n("span",{class:"token punctuation"},"("),s("index"),n("span",{class:"token operator"},"++"),s(),n("span",{class:"token operator"},"<"),s(" position"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      current `),n("span",{class:"token operator"},"="),s(" current"),n("span",{class:"token punctuation"},"."),s(`next
    `),n("span",{class:"token punctuation"},"}"),s(`
    current`),n("span",{class:"token punctuation"},"."),s("data "),n("span",{class:"token operator"},"="),s(` newData
    `),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("current"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token comment"},"//\u516D\u3001removeAt(position)"),s(`
  `),n("span",{class:"token function"},"removeAt"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"position"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),s("position "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},"||"),s(" position "),n("span",{class:"token operator"},">="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"null"),s(`
    `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),s("position "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("head "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("head"),n("span",{class:"token punctuation"},"."),s(`next
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"-="),s(),n("span",{class:"token number"},"1"),s(`
      `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" current "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s(`head
    `),n("span",{class:"token keyword"},"let"),s(" previous "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" index "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),s(`
    `),n("span",{class:"token keyword"},"while"),n("span",{class:"token punctuation"},"("),s("index"),n("span",{class:"token operator"},"++"),s(),n("span",{class:"token operator"},"<"),s(" position"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      previous `),n("span",{class:"token operator"},"="),s(` current
      current `),n("span",{class:"token operator"},"="),s(" current"),n("span",{class:"token punctuation"},"."),s(`next
    `),n("span",{class:"token punctuation"},"}"),s(`
    previous`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" current"),n("span",{class:"token punctuation"},"."),s(`next
`),n("span",{class:"token comment"},"//     delete current"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"-="),s(),n("span",{class:"token number"},"1"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token comment"},"//\u4E03\u3001 remove(data)"),s(`
  `),n("span",{class:"token function"},"remove"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"data"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"removeAt"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"indexOf"),n("span",{class:"token punctuation"},"("),s("data"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token comment"},"//     let current = this.head"),s(`
`),n("span",{class:"token comment"},"//     let previous = null"),s(`
`),n("span",{class:"token comment"},"//     let isRemoved = false"),s(`
`),n("span",{class:"token comment"},"//     while(current) {"),s(`
`),n("span",{class:"token comment"},"//       if(current.data === data) {"),s(`
`),n("span",{class:"token comment"},"//         if(!previous) {"),s(`
`),n("span",{class:"token comment"},"//           this.head = this.head.next"),s(`
`),n("span",{class:"token comment"},"//         }else {"),s(`
`),n("span",{class:"token comment"},"//         previous.next = current.next"),s(`
`),n("span",{class:"token comment"},"//         }"),s(`
`),n("span",{class:"token comment"},"//         isRemoved = true"),s(`
`),n("span",{class:"token comment"},"//       }"),s(`
`),n("span",{class:"token comment"},"//       previous = current"),s(`
`),n("span",{class:"token comment"},"//       current = current.next"),s(`
`),n("span",{class:"token comment"},"//     }"),s(`
`),n("span",{class:"token comment"},"//     if(!isRemoved) return -1"),s(`
`),n("span",{class:"token comment"},"//     return true"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"//append"),s(`
`),n("span",{class:"token keyword"},"let"),s(" linkedList "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"LinkedList"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
linkedList`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'aaa'"),n("span",{class:"token punctuation"},")"),s(`
linkedList`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'bbb'"),n("span",{class:"token punctuation"},")"),s(`
linkedList`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'ccc'"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token comment"},"// log(linkedList)"),s(`
linkedList`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"insert"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'ddd'"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("linkedList"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token comment"},"// log(`\u4F4D\u7F6E1\u7684\u5143\u7D20\u4E3A`, linkedList.get(1))"),s(`
`),n("span",{class:"token comment"},"// log(`aaa\u7684\u4F4D\u7F6E\u4E0B\u6807\u662F`,linkedList.indexOf('aaa'))"),s(`
`),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("linkedList"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"update"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'mmm'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("linkedList"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token comment"},"// log(linkedList.removeAt(0))"),s(`
`),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("linkedList"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"remove"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'mmm'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("linkedList"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1651016432825-18430"},"\u590D\u5236\u6210\u529F"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`//update(position, newData). removeAt(position), remove(element)
//\u5355\u5411\u94FE\u8868
const log = console.log
class Node {
  constructor(data){
    this.data = data
    this.next = null
  }
}
class LinkedList {
  //\u5C5E\u6027
  head = null
  length = 0
  
  //\u4E94\u3001update
  update(position, newData) {
    if(position < 0 || position >= this.length) return false
    let current = this.head
    let index = 0
    while(index++ < position) {
      current = current.next
    }
    current.data = newData
    log(current)
    return true
  }

  //\u516D\u3001removeAt(position)
  removeAt(position) {
    if(position < 0 || position >= this.length) return null
    if(position === 0) {
      this.head = this.head.next
      this.length -= 1
      return true
    }
    let current = this.head
    let previous = null
    let index = 0
    while(index++ < position) {
      previous = current
      current = current.next
    }
    previous.next = current.next
//     delete current
    this.length -= 1
    return true
  }

  //\u4E03\u3001 remove(data)
  remove(data) {
    return this.removeAt(this.indexOf(data))
//     let current = this.head
//     let previous = null
//     let isRemoved = false
//     while(current) {
//       if(current.data === data) {
//         if(!previous) {
//           this.head = this.head.next
//         }else {
//         previous.next = current.next
//         }
//         isRemoved = true
//       }
//       previous = current
//       current = current.next
//     }
//     if(!isRemoved) return -1
//     return true
  }
}

//append
let linkedList = new LinkedList()
linkedList.append('aaa')
linkedList.append('bbb')
linkedList.append('ccc')
// log(linkedList)
linkedList.insert(0, 'ddd')
log(linkedList.toString())
// log(\`\u4F4D\u7F6E1\u7684\u5143\u7D20\u4E3A\`, linkedList.get(1))
// log(\`aaa\u7684\u4F4D\u7F6E\u4E0B\u6807\u662F\`,linkedList.indexOf('aaa'))
log(linkedList.update(3, 'mmm'))
log(linkedList.toString())
// log(linkedList.removeAt(0))
log(linkedList.remove('mmm'))
log(linkedList.toString())
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1651016432825-18430","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"\u590D\u5236\u5931\u8D25",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"\u590D\u5236")])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br"),n("span",{class:"line-number"},"37"),n("br"),n("span",{class:"line-number"},"38"),n("br"),n("span",{class:"line-number"},"39"),n("br"),n("span",{class:"line-number"},"40"),n("br"),n("span",{class:"line-number"},"41"),n("br"),n("span",{class:"line-number"},"42"),n("br"),n("span",{class:"line-number"},"43"),n("br"),n("span",{class:"line-number"},"44"),n("br"),n("span",{class:"line-number"},"45"),n("br"),n("span",{class:"line-number"},"46"),n("br"),n("span",{class:"line-number"},"47"),n("br"),n("span",{class:"line-number"},"48"),n("br"),n("span",{class:"line-number"},"49"),n("br"),n("span",{class:"line-number"},"50"),n("br"),n("span",{class:"line-number"},"51"),n("br"),n("span",{class:"line-number"},"52"),n("br"),n("span",{class:"line-number"},"53"),n("br"),n("span",{class:"line-number"},"54"),n("br"),n("span",{class:"line-number"},"55"),n("br"),n("span",{class:"line-number"},"56"),n("br"),n("span",{class:"line-number"},"57"),n("br"),n("span",{class:"line-number"},"58"),n("br"),n("span",{class:"line-number"},"59"),n("br"),n("span",{class:"line-number"},"60"),n("br"),n("span",{class:"line-number"},"61"),n("br"),n("span",{class:"line-number"},"62"),n("br"),n("span",{class:"line-number"},"63"),n("br"),n("span",{class:"line-number"},"64"),n("br"),n("span",{class:"line-number"},"65"),n("br"),n("span",{class:"line-number"},"66"),n("br"),n("span",{class:"line-number"},"67"),n("br"),n("span",{class:"line-number"},"68"),n("br"),n("span",{class:"line-number"},"69"),n("br"),n("span",{class:"line-number"},"70"),n("br"),n("span",{class:"line-number"},"71"),n("br"),n("span",{class:"line-number"},"72"),n("br"),n("span",{class:"line-number"},"73"),n("br"),n("span",{class:"line-number"},"74"),n("br"),n("span",{class:"line-number"},"75"),n("br"),n("span",{class:"line-number"},"76"),n("br"),n("span",{class:"line-number"},"77"),n("br"),n("span",{class:"line-number"},"78"),n("br"),n("span",{class:"line-number"},"79"),n("br"),n("span",{class:"line-number"},"80"),n("br"),n("span",{class:"line-number"},"81"),n("br"),n("span",{class:"line-number"},"82"),n("br"),n("span",{class:"line-number"},"83"),n("br"),n("span",{class:"line-number"},"84"),n("br"),n("span",{class:"line-number"},"85"),n("br"),n("span",{class:"line-number"},"86"),n("br")])],-1),k=a('<h3 id="\u53CC\u5411\u94FE\u8868\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u53CC\u5411\u94FE\u8868\u5B9E\u73B0">\xB6</a> <span class="prefix"></span><span class="content" id="\u53CC\u5411\u94FE\u8868\u5B9E\u73B0"><a class="header-anchor" href="#\u53CC\u5411\u94FE\u8868\u5B9E\u73B0" aria-hidden="true">#</a> \u53CC\u5411\u94FE\u8868\u5B9E\u73B0</span><span class="suffix"></span></h3><p>\u5B9E\u73B0<code>append</code>, <code>insert(position, data)</code></p>',2),d=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// \u53CC\u5411\u94FE\u8868"),s(`
`),n("span",{class:"token keyword"},"const"),s(" log "),n("span",{class:"token operator"},"="),s(" console"),n("span",{class:"token punctuation"},"."),s(`log
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"DoublyNode"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"constructor"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"data"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("data "),n("span",{class:"token operator"},"="),s(` data
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("prev "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"DoublyLinkedList"),s(),n("span",{class:"token punctuation"},"{"),s(`
  head `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),s(`
  tail `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),s(`
  length `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),s(`
  
  `),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"data"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" newNode "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"DoublyNode"),n("span",{class:"token punctuation"},"("),s("data"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("head "),n("span",{class:"token operator"},"="),s(` newNode
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("tail "),n("span",{class:"token operator"},"="),s(` newNode
    `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
      newNode`),n("span",{class:"token punctuation"},"."),s("prev "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s(`tail
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("tail"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(` newNode
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("tail "),n("span",{class:"token operator"},"="),s(` newNode
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"1"),s(`
    `),n("span",{class:"token keyword"},"return"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token function"},"insert"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("position"),n("span",{class:"token punctuation"},","),s(" data")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("position "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},"||"),s(" position "),n("span",{class:"token operator"},">"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
    
    `),n("span",{class:"token keyword"},"let"),s(" newNode "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"DoublyNode"),n("span",{class:"token punctuation"},"("),s("data"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),s("position "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("head "),n("span",{class:"token operator"},"="),s(` newNode
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("tail "),n("span",{class:"token operator"},"="),s(` newNode
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
        newNode`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s(`head
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("head"),n("span",{class:"token punctuation"},"."),s("prev "),n("span",{class:"token operator"},"="),s(` newNode
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("head "),n("span",{class:"token operator"},"="),s(` newNode
      `),n("span",{class:"token punctuation"},"}"),s(`
      
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),s("position "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("tail"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(` newNode
      newNode`),n("span",{class:"token punctuation"},"."),s("prev "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s(`tail
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("tail "),n("span",{class:"token operator"},"="),s(` newNode
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"let"),s(" targetIndex "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),s(`
      `),n("span",{class:"token keyword"},"let"),s(" currentNode "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("head"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token keyword"},"let"),s(" previousNode "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token keyword"},"while"),n("span",{class:"token punctuation"},"("),s("targetIndex"),n("span",{class:"token operator"},"++"),s(),n("span",{class:"token operator"},"<"),s(" position"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        previousNode `),n("span",{class:"token operator"},"="),s(` currentNode
        currentNode `),n("span",{class:"token operator"},"="),s(" currentNode"),n("span",{class:"token punctuation"},"."),s(`next
      `),n("span",{class:"token punctuation"},"}"),s(`
      newNode`),n("span",{class:"token punctuation"},"."),s("prev "),n("span",{class:"token operator"},"="),s(` previousNode
      newNode`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(` currentNode
      currentNode`),n("span",{class:"token punctuation"},"."),s("prev "),n("span",{class:"token operator"},"="),s(` newNode
      previousNode`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(` newNode
    `),n("span",{class:"token punctuation"},"}"),s(`
    
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"1"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"const"),s(" dl "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"DoublyLinkedList"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
dl`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"4399"),n("span",{class:"token punctuation"},")"),s(`
dl`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"8000"),n("span",{class:"token punctuation"},")"),s(`
dl`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"insert"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},'"7k7k"'),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("dl"),n("span",{class:"token punctuation"},")"),s(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1651016432829-7229"},"\u590D\u5236\u6210\u529F"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`// \u53CC\u5411\u94FE\u8868
const log = console.log
class DoublyNode {
  constructor(data){
    this.data = data
    this.prev = null
    this.next = null
  }
}
class DoublyLinkedList {
  head = null
  tail = null
  length = 0
  
  append(data) {
    let newNode = new DoublyNode(data)
    if(this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.prev = this.tail
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length += 1
    return
  }
  insert(position, data) {
    if (position < 0 || position > this.length) return false;
    
    let newNode = new DoublyNode(data)
    if(position === 0) {
      if(this.length === 0) {
        this.head = newNode
        this.tail = newNode
      }else {
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
      }
      
    }else if(position === this.length){
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }else {
      let targetIndex = 0
      let currentNode = this.head;
      let previousNode = null;
      while(targetIndex++ < position) {
        previousNode = currentNode
        currentNode = currentNode.next
      }
      newNode.prev = previousNode
      newNode.next = currentNode
      currentNode.prev = newNode
      previousNode.next = newNode
    }
    
    this.length += 1
    return true
  }
}
const dl = new DoublyLinkedList()
dl.append(4399)
dl.append(8000)
dl.insert(1,"7k7k")
log(dl)
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1651016432829-7229","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"\u590D\u5236\u5931\u8D25",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"\u590D\u5236")])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br"),n("span",{class:"line-number"},"37"),n("br"),n("span",{class:"line-number"},"38"),n("br"),n("span",{class:"line-number"},"39"),n("br"),n("span",{class:"line-number"},"40"),n("br"),n("span",{class:"line-number"},"41"),n("br"),n("span",{class:"line-number"},"42"),n("br"),n("span",{class:"line-number"},"43"),n("br"),n("span",{class:"line-number"},"44"),n("br"),n("span",{class:"line-number"},"45"),n("br"),n("span",{class:"line-number"},"46"),n("br"),n("span",{class:"line-number"},"47"),n("br"),n("span",{class:"line-number"},"48"),n("br"),n("span",{class:"line-number"},"49"),n("br"),n("span",{class:"line-number"},"50"),n("br"),n("span",{class:"line-number"},"51"),n("br"),n("span",{class:"line-number"},"52"),n("br"),n("span",{class:"line-number"},"53"),n("br"),n("span",{class:"line-number"},"54"),n("br"),n("span",{class:"line-number"},"55"),n("br"),n("span",{class:"line-number"},"56"),n("br"),n("span",{class:"line-number"},"57"),n("br"),n("span",{class:"line-number"},"58"),n("br"),n("span",{class:"line-number"},"59"),n("br"),n("span",{class:"line-number"},"60"),n("br"),n("span",{class:"line-number"},"61"),n("br"),n("span",{class:"line-number"},"62"),n("br"),n("span",{class:"line-number"},"63"),n("br"),n("span",{class:"line-number"},"64"),n("br"),n("span",{class:"line-number"},"65"),n("br"),n("span",{class:"line-number"},"66"),n("br"),n("span",{class:"line-number"},"67"),n("br"),n("span",{class:"line-number"},"68"),n("br")])],-1);function b(m,h){return t(),o(c,null,[p,r,i,u,k,d],64)}var y=e(l,[["render",b]]);export{y as default};
