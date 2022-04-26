import{_ as t,o as e,c,F as o,b as a,d as n,e as s}from"./app.0702af34.js";const p={},l=a('<figure><img src="https://img.ukx.cn/abcdocker/2022/04/23/d6783959484c0/d6783959484c0.jpg" alt=""><figcaption>Vue3 Composition API\u5982\u4F55\u66FF\u6362Vue Mixins</figcaption></figure><h1 id="vue3\u57FA\u672C\u5B9E\u8DF5-\u901A\u4FE1-\u6307\u4EE4-ref-reactive-setup" tabindex="-1"><a class="header-anchor" href="#vue3\u57FA\u672C\u5B9E\u8DF5-\u901A\u4FE1-\u6307\u4EE4-ref-reactive-setup">\xB6</a> <span class="prefix"></span><span class="content" id="vue3\u57FA\u672C\u5B9E\u8DF5-\u901A\u4FE1-\u6307\u4EE4-ref-reactive-setup"><a class="header-anchor" href="#vue3\u57FA\u672C\u5B9E\u8DF5-\u901A\u4FE1-\u6307\u4EE4-ref-reactive-setup" aria-hidden="true">#</a> Vue3\u57FA\u672C\u5B9E\u8DF5-\u901A\u4FE1/\u6307\u4EE4/ref&amp;reactive/setup</span><span class="suffix"></span></h1><h2 id="vue3\u5B50\u7EC4\u4EF6\u8C03\u7528\u7236\u7EC4\u4EF6\u7684\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#vue3\u5B50\u7EC4\u4EF6\u8C03\u7528\u7236\u7EC4\u4EF6\u7684\u65B9\u6CD5">\xB6</a> <span class="prefix"></span><span class="content" id="vue3\u5B50\u7EC4\u4EF6\u8C03\u7528\u7236\u7EC4\u4EF6\u7684\u65B9\u6CD5"><a class="header-anchor" href="#vue3\u5B50\u7EC4\u4EF6\u8C03\u7528\u7236\u7EC4\u4EF6\u7684\u65B9\u6CD5" aria-hidden="true">#</a> VUE3\u5B50\u7EC4\u4EF6\u8C03\u7528\u7236\u7EC4\u4EF6\u7684\u65B9\u6CD5</span><span class="suffix"></span></h2><h3 id="v-bind-\u6307\u4EE4\u7B80\u5199\u4E3A" tabindex="-1"><a class="header-anchor" href="#v-bind-\u6307\u4EE4\u7B80\u5199\u4E3A">\xB6</a> <span class="prefix"></span><span class="content" id="v-bind-\u6307\u4EE4\u7B80\u5199\u4E3A"><a class="header-anchor" href="#v-bind-\u6307\u4EE4\u7B80\u5199\u4E3A" aria-hidden="true">#</a> v-bind (\u6307\u4EE4\u7B80\u5199\u4E3A<code>:</code>)</span><span class="suffix"></span></h3><p>\u7236\u7EC4\u4EF6</p>',5),i=n("div",{class:"language-tsx ext-tsx line-numbers-mode"},[n("pre",{class:"language-tsx"},[n("code",null,[s(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("navBar")]),s("  "),n("span",{class:"token attr-name"},":onClickRight"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onClickRight"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("navBar")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
 `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token function-variable function"},"onClickRight"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"\u4F60\u597D"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      onClickRight`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1651016433299-4408"},"\u590D\u5236\u6210\u529F"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":` <navBar  :onClickRight="onClickRight"></navBar>

setup() {
 let onClickRight = () => {
      console.log("\u4F60\u597D");
    };
    return {
      onClickRight,
    };

  },
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1651016433299-4408","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"\u590D\u5236\u5931\u8D25",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"\u590D\u5236")])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br")])],-1),u=n("p",null,"\u5B50\u7EC4\u4EF6",-1),r=n("div",{class:"language-tsx ext-tsx line-numbers-mode"},[n("pre",{class:"language-tsx"},[n("code",null,[n("span",{class:"token operator"},"<"),s("van"),n("span",{class:"token operator"},"-"),s("nav"),n("span",{class:"token operator"},"-"),s("bar  "),n("span",{class:"token decorator"},[n("span",{class:"token at operator"},"@"),n("span",{class:"token function"},"click")]),n("span",{class:"token operator"},"-"),s("right"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"onClickRight"'),s(),n("span",{class:"token operator"},"/"),n("span",{class:"token operator"},">"),s(`

props`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    onClickRight`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      type`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"Function"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token function-variable function"},"default"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token builtin"},"Function"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`


`),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),s("props"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(" emit"),n("span",{class:"token punctuation"},","),s(" attrs"),n("span",{class:"token punctuation"},","),s(" slots "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token punctuation"},"{"),s(" onClickRight "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"toRefs"),n("span",{class:"token punctuation"},"("),s("props"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// \u8BA9props\u4E0B\u7684count\u4FDD\u6301\u6D3B\u6027"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1651016433307-86698"},"\u590D\u5236\u6210\u529F"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`<van-nav-bar  @click-right="onClickRight" />

props: {
    onClickRight: {
      type: Function,
      default: () => {
        return Function;
      },
    },
  },


setup(props, { emit, attrs, slots }) {
    let { onClickRight } = toRefs(props); // \u8BA9props\u4E0B\u7684count\u4FDD\u6301\u6D3B\u6027
  },
};
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1651016433307-86698","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"\u590D\u5236\u5931\u8D25",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"\u590D\u5236")])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br")])],-1),k=a('<h3 id="v-on-\u6307\u4EE4\u7B80\u5199\u4E3A" tabindex="-1"><a class="header-anchor" href="#v-on-\u6307\u4EE4\u7B80\u5199\u4E3A">\xB6</a> <span class="prefix"></span><span class="content" id="v-on-\u6307\u4EE4\u7B80\u5199\u4E3A"><a class="header-anchor" href="#v-on-\u6307\u4EE4\u7B80\u5199\u4E3A" aria-hidden="true">#</a> v-on (\u6307\u4EE4\u7B80\u5199\u4E3A<code>@</code>)</span><span class="suffix"></span></h3><p>\u7236\u7EC4\u4EF6</p>',2),d=n("div",{class:"language-vue ext-vue line-numbers-mode"},[n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
	`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("MapFeatures")]),s(`
      `),n("span",{class:"token attr-name"},"@getGeolocation"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("getGeolocation"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"getGeolocation"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
		console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'call..'"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      getGeolocation`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1651016433308-68300"},"\u590D\u5236\u6210\u529F"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`<template>
	<MapFeatures
      @getGeolocation="getGeolocation"
    />
</template>

<script>
setup() {
    const getGeolocation = () => {
		console.log('call..')
    }
    return {
      getGeolocation,
    }
}
<\/script>
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1651016433308-68300","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"\u590D\u5236\u5931\u8D25",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"\u590D\u5236")])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br")])],-1),m=n("p",null,"\u5B50\u7EC4\u4EF6\u5199\u6CD51",-1),b=n("div",{class:"language-vue ext-vue line-numbers-mode"},[n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token comment"},"<!-- Geolocation -->"),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(`
      `),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("$emit("),n("span",{class:"token punctuation"},"'"),s("getGeolocation"),n("span",{class:"token punctuation"},"'"),s(")"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("4399"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"MapfeaturesVue"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"props"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1651016433309-1976"},"\u590D\u5236\u6210\u529F"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`<template>
  <div>
    <!-- Geolocation -->
    <div
      @click="$emit('getGeolocation')"
    >
        <p>4399</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MapfeaturesVue",
  props: [],
}
<\/script>
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1651016433309-1976","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"\u590D\u5236\u5931\u8D25",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"\u590D\u5236")])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br")])],-1),g=n("p",null,"\u5B50\u7EC4\u4EF6\u5199\u6CD52",-1),y=n("div",{class:"language-vue ext-vue line-numbers-mode"},[n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token comment"},"<!-- Geolocation -->"),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(`
      `),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("getGeolocation"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("4399"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"MapfeaturesVue"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"props"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("props"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(" emit "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"getGeolocation"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"result"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      	`),n("span",{class:"token function"},"emit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"plotResult"'),n("span",{class:"token punctuation"},","),s(" result"),n("span",{class:"token punctuation"},"."),s("geometry"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
      
      `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(" getGeolocation "),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1651016433310-11292"},"\u590D\u5236\u6210\u529F"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`<template>
  <div>
    <!-- Geolocation -->
    <div
      @click="getGeolocation"
    >
        <p>4399</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MapfeaturesVue",
  props: [],
  setup(props, { emit }) {
      const getGeolocation = (result) => {
      	emit("plotResult", result.geometry)
      }
      
      return { getGeolocation }
  }
}
<\/script>
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1651016433310-11292","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"\u590D\u5236\u5931\u8D25",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"\u590D\u5236")])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br")])],-1),f=a('<h3 id="v-on-\u4E0E\u7F16\u8BD1\u5668\u5B8F" tabindex="-1"><a class="header-anchor" href="#v-on-\u4E0E\u7F16\u8BD1\u5668\u5B8F">\xB6</a> <span class="prefix"></span><span class="content" id="v-on-\u4E0E\u7F16\u8BD1\u5668\u5B8F"><a class="header-anchor" href="#v-on-\u4E0E\u7F16\u8BD1\u5668\u5B8F" aria-hidden="true">#</a> v-on \u4E0E\u7F16\u8BD1\u5668\u5B8F</span><span class="suffix"></span></h3><p>\u53EA\u9700\u8981\u5728\u5B50\u7EC4\u4EF6\u6539\u52A8</p>',2),h=n("div",{class:"language-vue ext-vue line-numbers-mode"},[n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token comment"},"<!-- Geolocation -->"),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(`
      `),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("emitMMM("),n("span",{class:"token punctuation"},"'"),s("getGeolocation"),n("span",{class:"token punctuation"},"'"),s(")"),n("span",{class:"token punctuation"},'"')]),s(`
         `),n("span",{class:"token attr-name"},"<p"),n("span",{class:"token punctuation"},">")]),s("4399"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
    >
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token function"},"defineProps"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"geoErrorMsg"),n("span",{class:"token operator"},":"),s(" Boolean"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(" emitMMMMM "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"defineEmits"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"closeGeoError"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1651016433311-65576"},"\u590D\u5236\u6210\u529F"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`<template>
  <div>
    <!-- Geolocation -->
    <div
      @click="emitMMM('getGeolocation')"
         <p>4399</p>
    >
  </div>
</template>

<script setup>
defineProps({
  geoErrorMsg: Boolean,
})
const emitMMMMM = defineEmits(["closeGeoError"])
<\/script>
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1651016433311-65576","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"\u590D\u5236\u5931\u8D25",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"\u590D\u5236")])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br")])],-1),v=a('<h2 id="vue3\u7236\u7EC4\u4EF6\u8C03\u7528\u5B50\u7EC4\u4EF6\u4E2D\u7684\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#vue3\u7236\u7EC4\u4EF6\u8C03\u7528\u5B50\u7EC4\u4EF6\u4E2D\u7684\u65B9\u6CD5">\xB6</a> <span class="prefix"></span><span class="content" id="vue3\u7236\u7EC4\u4EF6\u8C03\u7528\u5B50\u7EC4\u4EF6\u4E2D\u7684\u65B9\u6CD5"><a class="header-anchor" href="#vue3\u7236\u7EC4\u4EF6\u8C03\u7528\u5B50\u7EC4\u4EF6\u4E2D\u7684\u65B9\u6CD5" aria-hidden="true">#</a> vue3\u7236\u7EC4\u4EF6\u8C03\u7528\u5B50\u7EC4\u4EF6\u4E2D\u7684\u65B9\u6CD5</span><span class="suffix"></span></h2><p><strong>\u7236\u7EC4\u4EF6</strong> ParentComponents.vue</p>',2),x=n("div",{class:"language-vue ext-vue line-numbers-mode"},[n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token comment"},"<!-- 1. \u5728\u5B50\u7EC4\u4EF6\u4E0A\u7ED1\u5B9Aref -->"),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("children-component")]),s(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("getChildList"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("children-component")]),n("span",{class:"token punctuation"},">")]),s(`
...
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
  `),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`
  `),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"setup"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// 2\u3001\u7236\u7EC4\u4EF6\u4E2D\u5B9A\u4E49\u548Cref\u540C\u540D\u7684\u53D8\u91CF"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" getChildList "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token function"},"onMounted"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// 4\u3001\u8C03\u7528\u5B50\u7EC4\u4EF6\u4E2D\u7684getList()\u65B9\u6CD5"),s(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("getChildList"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getList"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// 3\u3001return\u51FA\u53BB"),s(`
        getChildList
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1651016433312-30852"},"\u590D\u5236\u6210\u529F"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`<!-- 1. \u5728\u5B50\u7EC4\u4EF6\u4E0A\u7ED1\u5B9Aref -->
<children-component ref="getChildList"></children-component>
...
<script>
  import { ref } from 'vue'
  export default {
    setup () {
      // 2\u3001\u7236\u7EC4\u4EF6\u4E2D\u5B9A\u4E49\u548Cref\u540C\u540D\u7684\u53D8\u91CF
      const getChildList = ref(null)
      onMounted (() => {
        // 4\u3001\u8C03\u7528\u5B50\u7EC4\u4EF6\u4E2D\u7684getList()\u65B9\u6CD5
        console.log(getChildList.value.getList())
      })
      return {
        // 3\u3001return\u51FA\u53BB
        getChildList
      }
    }
  })

<\/script>
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1651016433312-30852","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"\u590D\u5236\u5931\u8D25",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"\u590D\u5236")])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br")])],-1),C=n("p",null,[n("strong",null,"\u5B50\u7EC4\u4EF6")],-1),_=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"setup"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// \u65B9\u6CD5"),s(`
        `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"getList"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
            console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u5B50\u7EC4\u4EF6\u4E2D\u7684\u65B9\u6CD5'"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
            getList
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1651016433313-38182"},"\u590D\u5236\u6210\u529F"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`export default {
    setup () {
        // \u65B9\u6CD5
        const getList = () => {
            console.log('\u5B50\u7EC4\u4EF6\u4E2D\u7684\u65B9\u6CD5')
        }
        return {
            getList
        }
    }
}
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1651016433313-38182","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"\u590D\u5236\u5931\u8D25",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"\u590D\u5236")])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br")])],-1),w=a('<h2 id="\u5FAA\u73AF\u8868\u793Alist-item" tabindex="-1"><a class="header-anchor" href="#\u5FAA\u73AF\u8868\u793Alist-item">\xB6</a> <span class="prefix"></span><span class="content" id="\u5FAA\u73AF\u8868\u793Alist-item"><a class="header-anchor" href="#\u5FAA\u73AF\u8868\u793Alist-item" aria-hidden="true">#</a> \u5FAA\u73AF\u8868\u793Alist-item</span><span class="suffix"></span></h2><p>\u6570\u636E\u7ED3\u6784:</p><figure><img src="https://img.ukx.cn/abcdocker/2022/04/21/33a6addc766fe/33a6addc766fe.png" alt=""><figcaption>image-20220421163952769</figcaption></figure><p>v-for\u6307\u4EE4\uFF1A</p>',4),j=n("div",{class:"language-vue ext-vue line-numbers-mode"},[n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("h-[200px] overflow-scroll bg-white rounded-md"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(`
             `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("px-4 py-2 flex gap-x-2 cursor-pointer hover:bg-slate-600 hover:text-white"),n("span",{class:"token punctuation"},'"')]),s(`
             `),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("(result, index) in searchData"),n("span",{class:"token punctuation"},'"')]),s(`
             `),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("index"),n("span",{class:"token punctuation"},'"')]),s(`
             `),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("i")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fas fa-map-marker-alt"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("i")]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("text-[12px]"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("{{ result.place_name }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1651016433314-55133"},"\u590D\u5236\u6210\u529F"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`<template>
    <div class="h-[200px] overflow-scroll bg-white rounded-md">
        <div
             class="px-4 py-2 flex gap-x-2 cursor-pointer hover:bg-slate-600 hover:text-white"
             v-for="(result, index) in searchData"
             :key="index"
             >
            <i class="fas fa-map-marker-alt"></i>
            <p class="text-[12px]">{{ result.place_name }}</p>
        </div>
    </div>
</template>
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1651016433314-55133","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"\u590D\u5236\u5931\u8D25",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"\u590D\u5236")])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br")])],-1),M=a('<p>\u6548\u679C\uFF1A</p><figure><img src="https://img.ukx.cn/abcdocker/2022/04/21/3e96a90b39d5a/3e96a90b39d5a.png" alt=""><figcaption>\u6548\u679C</figcaption></figure><h2 id="v-if\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#v-if\u6307\u4EE4">\xB6</a> <span class="prefix"></span><span class="content" id="v-if\u6307\u4EE4"><a class="header-anchor" href="#v-if\u6307\u4EE4" aria-hidden="true">#</a> v-if\u6307\u4EE4</span><span class="suffix"></span></h2><p>v-if -&gt; Loading</p><p>v-else-if -&gt; Boundary</p><p>v-else -&gt; Target</p><h2 id="vue3\u4E2D\u5B9A\u4E49\u53D8\u91CF-ref\u3001reactive\u3001torefs\u7279\u6027\u8BE6\u89E3" tabindex="-1"><a class="header-anchor" href="#vue3\u4E2D\u5B9A\u4E49\u53D8\u91CF-ref\u3001reactive\u3001torefs\u7279\u6027\u8BE6\u89E3">\xB6</a> <span class="prefix"></span><span class="content" id="vue3\u4E2D\u5B9A\u4E49\u53D8\u91CF-ref\u3001reactive\u3001torefs\u7279\u6027\u8BE6\u89E3"><a class="header-anchor" href="#vue3\u4E2D\u5B9A\u4E49\u53D8\u91CF-ref\u3001reactive\u3001torefs\u7279\u6027\u8BE6\u89E3" aria-hidden="true">#</a> vue3\u4E2D\u5B9A\u4E49\u53D8\u91CF,ref\u3001reactive\u3001toRefs\u7279\u6027\u8BE6\u89E3</span><span class="suffix"></span></h2><h4 id="_1-ref-\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_1-ref-\u51FD\u6570">\xB6</a> <span class="prefix"></span><span class="content" id="_1-ref-\u51FD\u6570"><a class="header-anchor" href="#_1-ref-\u51FD\u6570" aria-hidden="true">#</a> 1.ref() \u51FD\u6570</span><span class="suffix"></span></h4><p><strong>\u7528\u6765\u5B9A\u4E49\u54CD\u5E94\u5F0F\u53D8\u91CF\u3002</strong></p><p>ref() \u51FD\u6570\u7528\u6765<strong>\u6839\u636E\u7ED9\u5B9A\u7684\u503C\u521B\u5EFA\u4E00\u4E2A\u54CD\u5E94\u5F0F\u7684\u6570\u636E\u5BF9\u8C61</strong>\uFF0C\u4F20\u5165\u7684\u4E3A\u57FA\u672C\u6570\u636E\u7C7B\u578B\uFF0C\u4F8B\u5982\u5B57\u7B26\u4E32\u3001\u6570\u5B57\u3001boolean \u7B49,\u8FD4\u56DE\u503C\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u8FD9\u4E2A\u5BF9\u8C61\u4E0A\u53EA\u5305\u542B\u4E00\u4E2A value \u5C5E\u6027</p><p>ref\u5B9A\u4E49\u7684\u53D8\u91CF\uFF0C\u6539\u53D8\u503C\u8981.value,\u800C\u4E14\u5728template\u4E2D\u4E0D\u7528\u5199.value</p>',11),$=n("div",{class:"language-vue ext-vue line-numbers-mode"},[n("pre",{class:"language-vue"},[n("code",null,[s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
	`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s("{{msg}}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
	`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("changeMsg()"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("\u4FEE\u6539msg"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("button")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s("reactive"),n("span",{class:"token punctuation"},","),s("ref"),n("span",{class:"token punctuation"},","),s("toRefs"),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token comment"},"//\u5B9A\u4E49"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" msg "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u4F60\u597D'"),n("span",{class:"token punctuation"},")"),s(` 
    `),n("span",{class:"token comment"},"//\u4FEE\u6539"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"changeMsg"),s(),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"=>"),n("span",{class:"token punctuation"},"{"),s(`
      msg`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),n("span",{class:"token string"},"'msg\u88AB\u6539\u4E86'"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token comment"},"//\u5BFC\u51FA"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(` 
     msg`),n("span",{class:"token punctuation"},","),s(`
     changeMsg
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1651016433314-64212"},"\u590D\u5236\u6210\u529F"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`
<template>
	<div>{{msg}}</div>
	<button @click="changeMsg()">\u4FEE\u6539msg</button>
</template>

<script>
import {reactive,ref,toRefs} from 'vue'
export default {
    setup() {
	//\u5B9A\u4E49
    const msg = ref('\u4F60\u597D') 
    //\u4FEE\u6539
    const changeMsg =()=>{
      msg.value ='msg\u88AB\u6539\u4E86'
    }
    //\u5BFC\u51FA
    return { 
     msg,
     changeMsg
    }
  }
}
<\/script>
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1651016433314-64212","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"\u590D\u5236\u5931\u8D25",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"\u590D\u5236")])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br")])],-1),E=a('<h4 id="_2\u3001reactive-\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_2\u3001reactive-\u51FD\u6570">\xB6</a> <span class="prefix"></span><span class="content" id="_2\u3001reactive-\u51FD\u6570"><a class="header-anchor" href="#_2\u3001reactive-\u51FD\u6570" aria-hidden="true">#</a> 2\u3001reactive() \u51FD\u6570</span><span class="suffix"></span></h4><p><strong>reactive\u51FD\u6570\u4F20\u5165\u7684\u4E3A\u5F15\u7528\u7C7B\u578B\uFF0C\u4F8B\u5982\u6570\u7EC4\u3001\u5BF9\u8C61\u7B49</strong>\uFF0C\u4F46\u4E0D\u80FD\u4EE3\u7406\u57FA\u672C\u7C7B\u578B\u503C,\u8FD4\u56DE\u4E00\u4E2A\u54CD\u5E94\u5F0F\u7684\u6570\u636E\u5BF9\u8C61, \u60F3\u8981\u4F7F\u7528\u521B\u5EFA\u7684\u54CD\u5E94\u5F0F\u6570\u636E\u4E5F\u5F88\u7B80\u5355\uFF0C\u521B\u5EFA\u51FA\u6765\u4E4B\u540E\uFF0C\u5728setup\u4E2Dreturn\u51FA\u53BB\uFF0C\u76F4\u63A5\u5728template\u4E2D\u8C03\u7528\u5373\u53EF\u3002</p>',2),R=n("div",{class:"language-vue ext-vue line-numbers-mode"},[n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
	`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s("{{state.msg}}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
	`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("changeMsg()"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("\u4FEE\u6539msg"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("button")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" reactive"),n("span",{class:"token punctuation"},","),s(" ref"),n("span",{class:"token punctuation"},","),s(" toRefs "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"//\u5B9A\u4E49"),s(`
        `),n("span",{class:"token keyword"},"const"),s(" state "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"msg"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u4F60\u597D'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"msg2"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'hello'"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token comment"},"//\u4FEE\u6539"),s(`
        `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"changeMsg"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
            state`),n("span",{class:"token punctuation"},"."),s("msg "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'msg\u88AB\u6539\u4E86'"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token comment"},"//\u5BFC\u51FA"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
            state`),n("span",{class:"token punctuation"},","),s(`
            changeMsg
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1651016433315-56871"},"\u590D\u5236\u6210\u529F"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`<template>
	<div>{{state.msg}}</div>
	<button @click="changeMsg()">\u4FEE\u6539msg</button>
</template>
<script>
import { reactive, ref, toRefs } from 'vue'
export default {
    setup() {
        //\u5B9A\u4E49
        const state = reactive({
            msg: '\u4F60\u597D',
            msg2:'hello'
        })
        //\u4FEE\u6539
        const changeMsg = () => {
            state.msg = 'msg\u88AB\u6539\u4E86'
        }
        //\u5BFC\u51FA
        return {
            state,
            changeMsg
        }
    }
}
<\/script>
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1651016433315-56871","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"\u590D\u5236\u5931\u8D25",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"\u590D\u5236")])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br")])],-1),N=a('<h3 id="_3\u3001torefs-\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_3\u3001torefs-\u51FD\u6570">\xB6</a> <span class="prefix"></span><span class="content" id="_3\u3001torefs-\u51FD\u6570"><a class="header-anchor" href="#_3\u3001torefs-\u51FD\u6570" aria-hidden="true">#</a> 3\u3001toRefs() \u51FD\u6570</span><span class="suffix"></span></h3><p>toRefs() \u51FD\u6570\u53EF\u4EE5\u5C06 reactive() \u521B\u5EFA\u51FA\u6765\u7684\u54CD\u5E94\u5F0F\u5BF9\u8C61\uFF0C\u8F6C\u6362\u4E3A\u666E\u901A\u7684\u5BF9\u8C61\uFF0C\u76F8\u5F53\u4E8E\u53D8\u6210\u4E00\u4E2A\u4E2A\u7684ref(),\u7C7B\u4F3C\u4F7F\u7528\u62D3\u5C55\u7528\u7B97\u7B26\u2026\u7684\u65B9\u6CD5\u8FD4\u56DE\u6570\u636Edata \u4F7F\u7528toRefs\u548Creactive()\u533A\u522B\u5728\u4E8E\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528msg\u5C5E\u6027,\u4E0D\u7528state.</p>',2),G=n("div",{class:"language-vue ext-vue line-numbers-mode"},[n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s("{{msg}}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("changeMsg()"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("\u4FEE\u6539msg"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("button")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" reactive"),n("span",{class:"token punctuation"},","),s(" ref"),n("span",{class:"token punctuation"},","),s(" toRefs "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"//\u5B9A\u4E49"),s(`
        `),n("span",{class:"token keyword"},"const"),s(" state "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"msg"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u4F60\u597D'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"msg2"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'hello'"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token comment"},"//\u4FEE\u6539"),s(`
        `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"changeMsg"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
            state`),n("span",{class:"token punctuation"},"."),s("msg "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'msg\u88AB\u6539\u4E86'"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token comment"},"//\u5BFC\u51FA"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token operator"},"..."),n("span",{class:"token function"},"toRefs"),n("span",{class:"token punctuation"},"("),s("state"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
            changeMsg
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1651016433315-68170"},"\u590D\u5236\u6210\u529F"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`<template>
<div>{{msg}}</div>
<button @click="changeMsg()">\u4FEE\u6539msg</button>
</template>
<script>
import { reactive, ref, toRefs } from 'vue'
export default {
    setup() {
        //\u5B9A\u4E49
        const state = reactive({
            msg: '\u4F60\u597D',
            msg2:'hello'
        })
        //\u4FEE\u6539
        const changeMsg = () => {
            state.msg = 'msg\u88AB\u6539\u4E86'
        }
        //\u5BFC\u51FA
        return {
            ...toRefs(state),
            changeMsg
        }
    }
}
<\/script>
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1651016433315-68170","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"\u590D\u5236\u5931\u8D25",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"\u590D\u5236")])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br")])],-1);function T(I,B){return e(),c(o,null,[l,i,u,r,k,d,m,b,g,y,f,h,v,x,C,_,w,j,M,$,E,R,N,G],64)}var L=t(p,[["render",T]]);export{L as default};
