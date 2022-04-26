import{_ as r,r as i,o,c,d as n,a as t,F as l,b as e,e as s}from"./app.0702af34.js";const u={},d=e('<h1 id="react-hooks\u903B\u8F91\u590D\u7528-\u591A\u79CD\u5B9E\u73B0\u6BD4\u8F83" tabindex="-1"><a class="header-anchor" href="#react-hooks\u903B\u8F91\u590D\u7528-\u591A\u79CD\u5B9E\u73B0\u6BD4\u8F83">\xB6</a> <span class="prefix"></span><span class="content" id="react-hooks\u903B\u8F91\u590D\u7528-\u591A\u79CD\u5B9E\u73B0\u6BD4\u8F83"><a class="header-anchor" href="#react-hooks\u903B\u8F91\u590D\u7528-\u591A\u79CD\u5B9E\u73B0\u6BD4\u8F83" aria-hidden="true">#</a> React-Hooks\u903B\u8F91\u590D\u7528-\u591A\u79CD\u5B9E\u73B0\u6BD4\u8F83</span><span class="suffix"></span></h1><p><strong>KEY: To reuse stateful logic in react\uFF0C sharing non-visual logic\uFF0C \u521B\u5EFA\u4E0E\u4EFB\u4F55UI\u5206\u79BB\u7684\u81EA\u5B9A\u4E49Hook</strong></p><p>\u590D\u5236\u7C98\u8D34\u662F\u6700\u7C97\u66B4\u7684\u590D\u7528\u884C\u4E3A\uFF0C\u5176\u4ED6\u4E24\u79CD\u6BD4\u8F83\u4E0D\u884C\u7684\u590D\u7528\u4E3A\uFF1A</p><ol><li>\u4F7F\u7528\u9AD8\u9636\u7EC4\u4EF6</li><li>\u4F7F\u7528<code>Render Prop</code></li></ol><p>\u4EE5\u4E0B\u7684\u4F8B\u5B50\u662F\u60AC\u505C\u6DFB\u52A0Tooltip\u7684\u5B9E\u73B0\uFF1A</p><ol><li>\u5728HOC\u548CRender Prop\u7684\u4F8B\u5B50\u4E2D\uFF0C\u4E24\u4E2A\u4E8B\u4EF6\u5DF2\u7ECF\u88AB\u590D\u7528\u3002 <ul><li>\u4F46\u662F\u4ED6\u4EEC\u7684<strong>\u7F3A\u9677</strong>\u5728\u4E8E\uFF0C\u5F00\u53D1\u8005\u5C06\u88AB\u8FEB\u4FEE\u6539DOM\u7ED3\u6784\u3002</li></ul></li><li>React\u903B\u8F91\u590D\u7528\u8F83\u4F73\u5B9E\u8DF5\uFF1A<strong>Tradeoffs\u6982\u5FF5</strong></li></ol><h2 id="\u590D\u5236\u7C98\u8D34" tabindex="-1"><a class="header-anchor" href="#\u590D\u5236\u7C98\u8D34">\xB6</a> <span class="prefix"></span><span class="content" id="\u590D\u5236\u7C98\u8D34"><a class="header-anchor" href="#\u590D\u5236\u7C98\u8D34" aria-hidden="true">#</a> \u590D\u5236\u7C98\u8D34</span><span class="suffix"></span></h2><p>\u590D\u5236\u7C98\u8D34\u4EE3\u7801\u5B9E\u73B0</p>',8),b=n("div",{class:"language-react ext-react line-numbers-mode"},[n("pre",{class:"language-react"},[n("code",null,`// Copy/Pasting
//Info.js
function Info({ id, size }) {
    const [hovering, setHovering] = React.useState(false)

    const mouseOver = () => setHovering(true)
    const mouseOut = () => setHovering(false)
    
    return (<div>
        <>
            {hovering === true ?
                <Tooltip id={id}></Tooltip> : null}
            <svg
                onMouseOver={mouseOver}
                onMouseOut={mouseOut}
                width={size}
            ><path></path></svg>
        </>
    </div>)
}
//TrendChart.js
function TrendChart({ id, size }) {
    const [hovering, setHovering] = React.useState(false)

    const mouseOver = () => setHovering(true)
    const mouseOut = () => setHovering(false)
    
    return (<div>
        <>
            {hovering === true ?
                <Tooltip id={id}></Tooltip> : null}
            <div
                className="balabala..."
                onMouseOver={mouseOver}
                onMouseOut={mouseOut}
                width={size}></div>
        </>
    </div>)
}
//DailyChart.js
function DailyChart({ id, size }) {
    const [hovering, setHovering] = React.useState(false)

    const mouseOver = () => setHovering(true)
    const mouseOut = () => setHovering(false)
    
    return (<div>
        <>
            {hovering === true ?
                <Tooltip id={id}></Tooltip> : null}
            <div
                className="cilacila..."
                onMouseOver={mouseOver}
                onMouseOut={mouseOut}
                width={size}></div>
        </>
    </div>)
}
`),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1651016433259-66921"},"\u590D\u5236\u6210\u529F"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`// Copy/Pasting
//Info.js
function Info({ id, size }) {
    const [hovering, setHovering] = React.useState(false)

    const mouseOver = () => setHovering(true)
    const mouseOut = () => setHovering(false)
    
    return (<div>
        <>
            {hovering === true ?
                <Tooltip id={id}></Tooltip> : null}
            <svg
                onMouseOver={mouseOver}
                onMouseOut={mouseOut}
                width={size}
            ><path></path></svg>
        </>
    </div>)
}
//TrendChart.js
function TrendChart({ id, size }) {
    const [hovering, setHovering] = React.useState(false)

    const mouseOver = () => setHovering(true)
    const mouseOut = () => setHovering(false)
    
    return (<div>
        <>
            {hovering === true ?
                <Tooltip id={id}></Tooltip> : null}
            <div
                className="balabala..."
                onMouseOver={mouseOver}
                onMouseOut={mouseOut}
                width={size}></div>
        </>
    </div>)
}
//DailyChart.js
function DailyChart({ id, size }) {
    const [hovering, setHovering] = React.useState(false)

    const mouseOver = () => setHovering(true)
    const mouseOut = () => setHovering(false)
    
    return (<div>
        <>
            {hovering === true ?
                <Tooltip id={id}></Tooltip> : null}
            <div
                className="cilacila..."
                onMouseOver={mouseOver}
                onMouseOut={mouseOut}
                width={size}></div>
        </>
    </div>)
}
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1651016433259-66921","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"\u590D\u5236\u5931\u8D25",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"\u590D\u5236")])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br"),n("span",{class:"line-number"},"37"),n("br"),n("span",{class:"line-number"},"38"),n("br"),n("span",{class:"line-number"},"39"),n("br"),n("span",{class:"line-number"},"40"),n("br"),n("span",{class:"line-number"},"41"),n("br"),n("span",{class:"line-number"},"42"),n("br"),n("span",{class:"line-number"},"43"),n("br"),n("span",{class:"line-number"},"44"),n("br"),n("span",{class:"line-number"},"45"),n("br"),n("span",{class:"line-number"},"46"),n("br"),n("span",{class:"line-number"},"47"),n("br"),n("span",{class:"line-number"},"48"),n("br"),n("span",{class:"line-number"},"49"),n("br"),n("span",{class:"line-number"},"50"),n("br"),n("span",{class:"line-number"},"51"),n("br"),n("span",{class:"line-number"},"52"),n("br"),n("span",{class:"line-number"},"53"),n("br"),n("span",{class:"line-number"},"54"),n("br"),n("span",{class:"line-number"},"55"),n("br"),n("span",{class:"line-number"},"56"),n("br"),n("span",{class:"line-number"},"57"),n("br"),n("span",{class:"line-number"},"58"),n("br")])],-1),p=e('<h2 id="\u4F7F\u7528\u9AD8\u9636\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u9AD8\u9636\u7EC4\u4EF6">\xB6</a> <span class="prefix"></span><span class="content" id="\u4F7F\u7528\u9AD8\u9636\u7EC4\u4EF6"><a class="header-anchor" href="#\u4F7F\u7528\u9AD8\u9636\u7EC4\u4EF6" aria-hidden="true">#</a> \u4F7F\u7528\u9AD8\u9636\u7EC4\u4EF6</span><span class="suffix"></span></h2><p>\u4F7F\u7528HOC\uFF0C\u63A5\u53D7<code>arguments</code>\u3002</p>',2),m=n("div",{class:"language-react ext-react line-numbers-mode"},[n("pre",{class:"language-react"},[n("code",null,`// HOC
function WithHover(Component) {
    return function (props) {
        const [hovering, setHovering] = React.useState(false)

        const mouseOver = () => setHovering(true)
        const mouseOut = () => setHovering(false)
        return (
            <div
                onMouseOver={mouseOver}
                onMouseOut={mouseOut}>
                {hovering === true ?
                    <Tooltip id={id}></Tooltip> : null}
                <Component {...props} hovering={hovering}></Component>
            </div>
        )
    }
}

//\u8C03\u7528
const InfoWithHover = withHover(Info)
const TrendChartWithHover = withHover(TrendChart)
const DailyChartWithHover = withHover(DailyChart)
function Info(hovering) {
    return (<>
        {hovering === true ?
            <Tooltip id={id}></Tooltip> : null}
        <svg></svg>
    </>)
}
function TrendChart(hovering) {
    return (<>
        {hovering === true ?
            <Tooltip id={id}></Tooltip> : null}
        <div className="balabala..."></div>
    </>)
}
function DailyChart(hovering) {
    return (<>
        {hovering === true ?
            <Tooltip id={id}></Tooltip> : null}
        <div className="cilacila..."></div>
    </>)
}
`),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1651016433259-64038"},"\u590D\u5236\u6210\u529F"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`// HOC
function WithHover(Component) {
    return function (props) {
        const [hovering, setHovering] = React.useState(false)

        const mouseOver = () => setHovering(true)
        const mouseOut = () => setHovering(false)
        return (
            <div
                onMouseOver={mouseOver}
                onMouseOut={mouseOut}>
                {hovering === true ?
                    <Tooltip id={id}></Tooltip> : null}
                <Component {...props} hovering={hovering}></Component>
            </div>
        )
    }
}

//\u8C03\u7528
const InfoWithHover = withHover(Info)
const TrendChartWithHover = withHover(TrendChart)
const DailyChartWithHover = withHover(DailyChart)
function Info(hovering) {
    return (<>
        {hovering === true ?
            <Tooltip id={id}></Tooltip> : null}
        <svg></svg>
    </>)
}
function TrendChart(hovering) {
    return (<>
        {hovering === true ?
            <Tooltip id={id}></Tooltip> : null}
        <div className="balabala..."></div>
    </>)
}
function DailyChart(hovering) {
    return (<>
        {hovering === true ?
            <Tooltip id={id}></Tooltip> : null}
        <div className="cilacila..."></div>
    </>)
}
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1651016433259-64038","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"\u590D\u5236\u5931\u8D25",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"\u590D\u5236")])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br"),n("span",{class:"line-number"},"37"),n("br"),n("span",{class:"line-number"},"38"),n("br"),n("span",{class:"line-number"},"39"),n("br"),n("span",{class:"line-number"},"40"),n("br"),n("span",{class:"line-number"},"41"),n("br"),n("span",{class:"line-number"},"42"),n("br"),n("span",{class:"line-number"},"43"),n("br"),n("span",{class:"line-number"},"44"),n("br")])],-1),h=e('<h2 id="\u4F7F\u7528render-props" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528render-props">\xB6</a> <span class="prefix"></span><span class="content" id="\u4F7F\u7528render-props"><a class="header-anchor" href="#\u4F7F\u7528render-props" aria-hidden="true">#</a> \u4F7F\u7528<code>Render Props</code></span><span class="suffix"></span></h2><p>\u4F7F\u7528\u516C\u5171\u7EC4\u4EF6\uFF0C\u5E76\u5411\u516C\u5171\u7EC4\u4EF6\u4F20\u9012render\u65B9\u6CD5\u3002</p>',2),v=n("div",{class:"language-react ext-react line-numbers-mode"},[n("pre",{class:"language-react"},[n("code",null,`// Render Props
function Hover({ render }) {
    const [hovering, setHovering] = React.useState(false)

    const mouseOver = () => setHovering(true)
    const mouseOut = () => setHovering(false)

    return (
        <div onMouseOver={mouseOver}
            onMouseOut={mouseOut}>
            {render(hovering)}
        </div>
    )
}

//\u9700\u4F20\u9012render\u65B9\u6CD5
const InfoWithHover = <Hover render={(hovering) => <Info hovering={hovering} />}></Hover>
const TrendChartWithHover = <Hover render={(hovering) => <TrendChart hovering={hovering} />}></Hover>
const DailyChartWithHover = <Hover render={(hovering) => <DailyChart hovering={hovering} />}></Hover>
function Info(hovering) {
    return (<>
        {hovering === true ?
            <Tooltip id={id}></Tooltip> : null}
        <svg></svg>
    </>)
}
function TrendChart(hovering) {
    return (<>
        {hovering === true ?
            <Tooltip id={id}></Tooltip> : null}
        <div className="balabala..."></div>
    </>)
}
function DailyChart(hovering) {
    return (<>
        {hovering === true ?
            <Tooltip id={id}></Tooltip> : null}
        <div className="cilacila..."></div>
    </>)
}
`),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1651016433261-76828"},"\u590D\u5236\u6210\u529F"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`// Render Props
function Hover({ render }) {
    const [hovering, setHovering] = React.useState(false)

    const mouseOver = () => setHovering(true)
    const mouseOut = () => setHovering(false)

    return (
        <div onMouseOver={mouseOver}
            onMouseOut={mouseOut}>
            {render(hovering)}
        </div>
    )
}

//\u9700\u4F20\u9012render\u65B9\u6CD5
const InfoWithHover = <Hover render={(hovering) => <Info hovering={hovering} />}></Hover>
const TrendChartWithHover = <Hover render={(hovering) => <TrendChart hovering={hovering} />}></Hover>
const DailyChartWithHover = <Hover render={(hovering) => <DailyChart hovering={hovering} />}></Hover>
function Info(hovering) {
    return (<>
        {hovering === true ?
            <Tooltip id={id}></Tooltip> : null}
        <svg></svg>
    </>)
}
function TrendChart(hovering) {
    return (<>
        {hovering === true ?
            <Tooltip id={id}></Tooltip> : null}
        <div className="balabala..."></div>
    </>)
}
function DailyChart(hovering) {
    return (<>
        {hovering === true ?
            <Tooltip id={id}></Tooltip> : null}
        <div className="cilacila..."></div>
    </>)
}
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1651016433261-76828","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"\u590D\u5236\u5931\u8D25",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"\u590D\u5236")])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br"),n("span",{class:"line-number"},"37"),n("br"),n("span",{class:"line-number"},"38"),n("br"),n("span",{class:"line-number"},"39"),n("br"),n("span",{class:"line-number"},"40"),n("br")])],-1),f=e('<h2 id="\u81EA\u5B9A\u4E49hook" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49hook">\xB6</a> <span class="prefix"></span><span class="content" id="\u81EA\u5B9A\u4E49hook"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49hook" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49Hook</span><span class="suffix"></span></h2><ul><li><p>\u5B83\u4E0D\u4E0E\u4EFB\u4F55UI\u8026\u5408\uFF0C\u53EF\u4EE5\u8FD4\u56DE\u4EFB\u4F55\u5B83\u60F3\u8981\u7684\u4E1C\u897F\u3002</p><ul><li>DOM\u6811\u7ED3\u6784\u4E0D\u518D\u9700\u8981\u6DFB\u52A0 <strong>\u4E0D\u5FC5\u8981\u7684\u5305\u88C5\u7EC4\u4EF6</strong></li></ul></li><li><p>\u6211\u4EEC\u5E0C\u671B<code>useHover</code>\u7684\u6D88\u8D39\u8005\u6709\u4E24\u6761\u6570\u636E\uFF0C<code>the hovering state</code> &amp; \u8981\u6DFB\u52A0\u60AC\u505C\u72B6\u6001\u7684DOM\u8282\u70B9\u7684\u5C5E\u6027\u3002</p></li></ul>',2),g=n("div",{class:"language-react ext-react line-numbers-mode"},[n("pre",{class:"language-react"},[n("code",null,`// Custom Hook
const useHover = (initialValue) => {
    const [hovering, setHovering] = useHover(!!initialValue)
    const mouseOver = () => setHovering(true)
    const mouseOut = () => setHovering(false)
    const attrs = {
        onMouseOver: mouseOver,
        onMouseOut: mouseOut
    }
    return [hovering, attrs]
}

// UI
function Info() {
    const [hovering, attrs] = useHover(false)
    return (
        <>
            {hovering ? <Tooltip /> : null}
            < svg {...attrs} />
        </>
    )
}
function TrendChart() {
    const [hovering, attrs] = useHover(false)
    return (
        <>
            {hovering ? <Tooltip /> : null}
            <div className="balabala..." {...attrs}></div>
        </>
    )
}
function DailyChart() {
    const [hovering, attrs] = useHover(false)
    return (
        <>
            {hovering ? <Tooltip /> : null}
            <div className="cilacila..." {...attrs}></div>
        </>
    )
}
`),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1651016433261-86647"},"\u590D\u5236\u6210\u529F"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`// Custom Hook
const useHover = (initialValue) => {
    const [hovering, setHovering] = useHover(!!initialValue)
    const mouseOver = () => setHovering(true)
    const mouseOut = () => setHovering(false)
    const attrs = {
        onMouseOver: mouseOver,
        onMouseOut: mouseOut
    }
    return [hovering, attrs]
}

// UI
function Info() {
    const [hovering, attrs] = useHover(false)
    return (
        <>
            {hovering ? <Tooltip /> : null}
            < svg {...attrs} />
        </>
    )
}
function TrendChart() {
    const [hovering, attrs] = useHover(false)
    return (
        <>
            {hovering ? <Tooltip /> : null}
            <div className="balabala..." {...attrs}></div>
        </>
    )
}
function DailyChart() {
    const [hovering, attrs] = useHover(false)
    return (
        <>
            {hovering ? <Tooltip /> : null}
            <div className="cilacila..." {...attrs}></div>
        </>
    )
}
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1651016433261-86647","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"\u590D\u5236\u5931\u8D25",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"\u590D\u5236")])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br"),n("span",{class:"line-number"},"37"),n("br"),n("span",{class:"line-number"},"38"),n("br"),n("span",{class:"line-number"},"39"),n("br"),n("span",{class:"line-number"},"40"),n("br")])],-1),y=e('<h3 id="\u6BD4\u8F83\u5C0F\u7ED3-\u4E00\u4E9B\u7B80\u5355hook" tabindex="-1"><a class="header-anchor" href="#\u6BD4\u8F83\u5C0F\u7ED3-\u4E00\u4E9B\u7B80\u5355hook">\xB6</a> <span class="prefix"></span><span class="content" id="\u6BD4\u8F83\u5C0F\u7ED3-\u4E00\u4E9B\u7B80\u5355hook"><a class="header-anchor" href="#\u6BD4\u8F83\u5C0F\u7ED3-\u4E00\u4E9B\u7B80\u5355hook" aria-hidden="true">#</a> \u6BD4\u8F83\u5C0F\u7ED3 &amp;\u4E00\u4E9B\u7B80\u5355hook</span><span class="suffix"></span></h3><h4 id="\u6BD4\u8F83\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u6BD4\u8F83\u5C0F\u7ED3">\xB6</a> <span class="prefix"></span><span class="content" id="\u6BD4\u8F83\u5C0F\u7ED3"><a class="header-anchor" href="#\u6BD4\u8F83\u5C0F\u7ED3" aria-hidden="true">#</a> \u6BD4\u8F83\u5C0F\u7ED3</span><span class="suffix"></span></h4><p>\u4F9D\u56FE\u6BD4\u8F83\u53EF\u89C1\uFF0C\u5F00\u53D1\u8005\u4F7F\u7528\u66F4\u591A\u7684\u81EA\u5B9A\u4E49Hook\uFF0C\u80FD\u591F\u5F88\u597D\u7B80\u5316DOM\u6811\u7ED3\u6784\uFF1A</p><figure><img src="https://img.ukx.cn/abcdocker/2022/04/25/58386b9fb06f4/58386b9fb06f4.png" alt=""><figcaption>image-20220425180341585</figcaption></figure><h4 id="\u7B80\u5355hook" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355hook">\xB6</a> <span class="prefix"></span><span class="content" id="\u7B80\u5355hook"><a class="header-anchor" href="#\u7B80\u5355hook" aria-hidden="true">#</a> \u7B80\u5355hook:</span><span class="suffix"></span></h4><h5 id="usetimeout" tabindex="-1"><a class="header-anchor" href="#usetimeout">\xB6</a> <span class="prefix"></span><span class="content" id="usetimeout"><a class="header-anchor" href="#usetimeout" aria-hidden="true">#</a> <code>useTimeout</code></span><span class="suffix"></span></h5><p>IF your timer is ready ? say yes or no.</p><figure><img src="https://img.ukx.cn/abcdocker/2022/04/25/5361ec9bf0461/5361ec9bf0461.png" alt=""><figcaption>image-20220425180749362</figcaption></figure><h5 id="usesetstate" tabindex="-1"><a class="header-anchor" href="#usesetstate">\xB6</a> <span class="prefix"></span><span class="content" id="usesetstate"><a class="header-anchor" href="#usesetstate" aria-hidden="true">#</a> <code>useSetState</code></span><span class="suffix"></span></h5><p>\u5B9E\u73B0\u53E4\u8001\u7684setState\u3002</p><figure><img src="https://img.ukx.cn/abcdocker/2022/04/25/a7f1907ecfac1/a7f1907ecfac1.png" alt=""><figcaption>image-20220425180945003</figcaption></figure><h5 id="usestatecallback" tabindex="-1"><a class="header-anchor" href="#usestatecallback">\xB6</a> <span class="prefix"></span><span class="content" id="usestatecallback"><a class="header-anchor" href="#usestatecallback" aria-hidden="true">#</a> useStateCallback</span><span class="suffix"></span></h5><p>(\u60F3\u8D77\u4E86\u53E4\u8001\u7684setState\u662F\u6709\u4E00\u4E2Acallback\u7684\uFF0Cstackoverflow\u662F\u8FD9\u6837\u89E3\u51B3\u7684\uFF1A</p>',13),C={href:"https://stackoverflow.com/questions/56247433/how-to-use-setstate-callback-on-react-hooks",target:"_blank",rel:"noopener noreferrer"},k=s("reactjs - How to use "),H=n("code",null,"setState",-1),x=s(" callback on react hooks - Stack Overflow"),O={href:"https://stackoverflow.com/questions/54954091/how-to-use-callback-with-usestate-hook-in-react/61842546#61842546",target:"_blank",rel:"noopener noreferrer"},T=s("reactjs - How to use callback with useState hook in react - Stack Overflow"),_=n("p",null,[n("strong",null,"Usage")],-1),S=n("div",{class:"language-react ext-react line-numbers-mode"},[n("pre",{class:"language-react"},[n("code",null,`const App = () => {
  const [state, setState] = useStateCallback(0); // same API as useState

  const handleClick = () => {
    setState(
      prev => prev + 1,
      // second argument is callback, \`s\` being the *updated* state
      s => console.log("I am called after setState, state:", s)
    );
  };

  return <button onClick={handleClick}>Increment</button>;
}
`),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1651016433262-53377"},"\u590D\u5236\u6210\u529F"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`const App = () => {
  const [state, setState] = useStateCallback(0); // same API as useState

  const handleClick = () => {
    setState(
      prev => prev + 1,
      // second argument is callback, \`s\` being the *updated* state
      s => console.log("I am called after setState, state:", s)
    );
  };

  return <button onClick={handleClick}>Increment</button>;
}
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1651016433262-53377","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"\u590D\u5236\u5931\u8D25",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"\u590D\u5236")])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br")])],-1),I=n("p",null,[n("strong",null,[n("code",null,"useStateCallback")])],-1),w=n("div",{class:"language-react ext-react line-numbers-mode"},[n("pre",{class:"language-react"},[n("code",null,`function useStateCallback(initialState) {
  const [state, setState] = useState(initialState);
  const cbRef = useRef(null); // init mutable ref container for callbacks

  const setStateCallback = useCallback((state, cb) => {
    cbRef.current = cb; // store current, passed callback in ref
    setState(state);
  }, []); // keep object reference stable, exactly like \`useState\`

  useEffect(() => {
    // cb.current is \`null\` on initial render, 
    // so we only invoke callback on state *updates*
    if (cbRef.current) {
      cbRef.current(state);
      cbRef.current = null; // reset callback after execution
    }
  }, [state]);

  return [state, setStateCallback];
}
`),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1651016433263-41323"},"\u590D\u5236\u6210\u529F"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`function useStateCallback(initialState) {
  const [state, setState] = useState(initialState);
  const cbRef = useRef(null); // init mutable ref container for callbacks

  const setStateCallback = useCallback((state, cb) => {
    cbRef.current = cb; // store current, passed callback in ref
    setState(state);
  }, []); // keep object reference stable, exactly like \`useState\`

  useEffect(() => {
    // cb.current is \`null\` on initial render, 
    // so we only invoke callback on state *updates*
    if (cbRef.current) {
      cbRef.current(state);
      cbRef.current = null; // reset callback after execution
    }
  }, [state]);

  return [state, setStateCallback];
}
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1651016433263-41323","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"\u590D\u5236\u5931\u8D25",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"\u590D\u5236")])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br")])],-1),N=s("Further info: "),R={href:"https://reactjs.org/docs/hooks-faq.html#is-there-something-like-instance-variables",target:"_blank",rel:"noopener noreferrer"},j=s("React Hooks FAQ: Is there something like instance variables?"),D=e('<h5 id="uselocalstorage" tabindex="-1"><a class="header-anchor" href="#uselocalstorage">\xB6</a> <span class="prefix"></span><span class="content" id="uselocalstorage"><a class="header-anchor" href="#uselocalstorage" aria-hidden="true">#</a> useLocalStorage</span><span class="suffix"></span></h5><figure><img src="https://img.ukx.cn/abcdocker/2022/04/25/c53a3b4274fb9/c53a3b4274fb9.png" alt=""><figcaption>image-20220425191412134</figcaption></figure><h4 id="\u6700\u540E\u3002" tabindex="-1"><a class="header-anchor" href="#\u6700\u540E\u3002">\xB6</a> <span class="prefix"></span><span class="content" id="\u6700\u540E\u3002"><a class="header-anchor" href="#\u6700\u540E\u3002" aria-hidden="true">#</a> \u6700\u540E\u3002</span><span class="suffix"></span></h4><figure><img src="https://img.ukx.cn/abcdocker/2022/04/25/945925c5c1bee/945925c5c1bee.png" alt=""><figcaption>image-20220425192128330</figcaption></figure>',4);function M(E,$){const a=i("ExternalLinkIcon");return o(),c(l,null,[d,b,p,m,h,v,f,g,y,n("ul",null,[n("li",null,[n("p",null,[n("a",C,[k,H,x,t(a)])])]),n("li",null,[n("p",null,[n("a",O,[T,t(a)])])])]),_,S,I,w,n("p",null,[N,n("a",R,[j,t(a)])]),D],64)}var W=r(u,[["render",M]]);export{W as default};
