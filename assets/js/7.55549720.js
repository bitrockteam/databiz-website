(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{174:function(t,e,r){},178:function(t,e,r){"use strict";var n={computed:{items:function(){return this.$themeConfig.nav||[]}}},a=r(6),i=Object(a.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"topbar"},[r("div",{staticClass:"wrapper"},[t._m(0),t._v(" "),r("nav",[r("ul",t._l(t.items,function(e){return r("li",[r("a",{attrs:{href:e.link}},[t._v(t._s(e.text))])])}),0)]),t._v(" "),t._m(1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("figure",[e("a",{attrs:{href:"/"}},[e("img",{attrs:{src:"/logos/DatabizLogo.svg",alt:"Databiz Group"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"hamburger hamburger--spin",attrs:{type:"button"}},[e("span",{staticClass:"hamburger-box"},[e("span",{staticClass:"hamburger-inner"})])])}],!1,null,null,null);e.a=i.exports},179:function(t,e,r){"use strict";var n={props:{intro:{type:Object,default:function(){return{title:"",tagline:""}}},cta:{type:Object,default:function(){return{link:"",text:""}}}},mounted:function(){r.e(5).then(r.t.bind(null,200,7)).then(function(t){return particlesJS.load("particles","/particles.json")})}},a=r(6),i=Object(a.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{attrs:{id:"hero"}},[r("div",{attrs:{id:"particles"}}),t._v(" "),r("div",{staticClass:"wrapper"},[r("article",[r("header",[r("div",{staticClass:"claim"},[r("h2",[t._v(t._s(t.intro.title))]),t._v(" "),r("h3",[t._v(t._s(t.intro.tagline))])]),t._v(" "),r("a",{staticClass:"cta",attrs:{href:t.cta.link}},[t._v("\n          "+t._s(t.cta.text)+"\n        ")])]),t._v(" "),t._m(0)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("figure",[e("img",{attrs:{src:"/logos/HeroBubbles.svg",alt:"Databiz Group"}})])}],!1,null,null,null);e.a=i.exports},186:function(t,e,r){"use strict";var n=r(174);r.n(n).a},203:function(t,e,r){"use strict";r.r(e);r(180);var n=r(178),a=r(179),i=r(173),s=r.n(i),l={props:{data:{type:Array}},mounted:function(){window&&(window.jQuery=s.a,r.e(3).then(r.t.bind(null,201,7)).then(function(t){s()(".timeline").timeline({verticalTrigger:"150px"})}))}},o=r(6),c={components:{Timeline:Object(o.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{attrs:{id:"timeline"}},[r("div",{staticClass:"timeline"},[r("div",{staticClass:"timeline__wrap"},[r("div",{staticClass:"timeline__items"},t._l(t.data,function(e){return r("div",{staticClass:"timeline__item"},[r("div",{staticClass:"timeline__content"},[r("h3",[t._v(t._s(e.year))]),t._v(" "),r("p",[t._v(t._s(e.text))])])])}),0)])])])},[],!1,null,null,null).exports},props:{content:{type:Object},timeline:{type:Array}}},u=Object(o.a)(c,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{attrs:{id:"about"}},[r("div",{staticClass:"wrapper"},[r("article",[r("div",[r("header",[r("h2",[t._v(t._s(t.content.title))])]),t._v(" "),r("figure",[r("img",{attrs:{src:t.content.frontmatter.image,alt:t.content.title}})])]),t._v(" "),r("div",{domProps:{innerHTML:t._s(t.content.excerpt)}})]),t._v(" "),r("Timeline",{attrs:{data:t.timeline}})],1)])},[],!1,null,null,null).exports,_={props:{companies:{type:Array},title:{type:String}}},p=Object(o.a)(_,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{attrs:{id:"group"}},[r("div",{staticClass:"wrapper"},[r("article",[r("div",[r("header",[r("h2",[t._v(t._s(t.title))])])]),t._v(" "),t._l(t.companies,function(e){return r("div",[r("img",{attrs:{src:e.frontmatter.logo,alt:e.title}}),t._v(" "),r("h3",[t._v(t._s(e.frontmatter.description))]),t._v(" "),r("section",{domProps:{innerHTML:t._s(e.excerpt)}}),t._v(" "),r("a",{staticClass:"cta",attrs:{href:e.frontmatter.url,target:"_blank",rel:"noopener"}},[t._v("\n        Discover\n      ")])])})],2)])])},[],!1,null,null,null).exports,v={props:{content:{type:Object}}},d=Object(o.a)(v,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{attrs:{id:"philosophy"}},[r("div",{staticClass:"wrapper"},[r("article",[r("div",[r("header",[r("h2",[t._v(t._s(t.content.title))])]),t._v(" "),r("figure",[r("img",{attrs:{src:t.content.frontmatter.image,alt:t.content.title}})])]),t._v(" "),r("div",{domProps:{innerHTML:t._s(t.content.excerpt)}})])])])},[],!1,null,null,null).exports,f={props:{data:{type:Array}},mounted:function(){if(window){var t=window.innerWidth<992?1:2;window.jQuery=s.a,r.e(4).then(r.t.bind(null,202,7)).then(function(e){return s()("#slider").lightSlider({item:t,auto:!0,loop:!0})})}}},m=Object(o.a)(f,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"partners",attrs:{id:"partners"}},[r("div",{staticClass:"wrapper"},[r("article",[t._m(0),t._v(" "),r("div",[r("ul",{attrs:{id:"slider"}},t._l(t.data,function(e){return r("li",[r("img",{attrs:{src:e.logo,alt:e.name}}),t._v(" "),r("p",[t._v(t._s(e.description))])])}),0)])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("header",[e("h2",[this._v("our partners")])])])}],!1,null,null,null).exports,h=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"contact",attrs:{id:"contact"}},[r("div",{staticClass:"wrapper"},[r("article",[r("div",[r("h4",[t._v("Corporate")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.linkedin.com/company/bitrock-srl/jobs/",target:"_blank",rel:"noopener"}},[t._v("Careers")]),t._v(" "),r("br"),t._v("\n          Credits"),r("br"),t._v("\n          Investors "),r("br"),t._v(" "),r("a",{attrs:{href:"https://www.iubenda.com/privacy-policy/15812422",target:"_blank",rel:"noopener"}},[t._v("Privacy policy")])])]),t._v(" "),r("div",[r("h4",[t._v("Treviso")]),t._v(" "),r("p",[t._v("\n           Office and Operational HQ"),r("br"),t._v(" \n           Viale della Repubblica 156/a"),r("br"),t._v(" \n           31100 Treviso (TV)"),r("br"),t._v("\n           Tel: 0422 1600025"),r("br"),t._v(" "),r("a",{attrs:{href:"mailto:info@databiz.it"}},[t._v("info@databiz.it")])])]),t._v(" "),r("div",[r("h4",[t._v("Milano")]),t._v(" "),r("p",[t._v("\n          Operational HQ"),r("br"),t._v("\n          Via Borsieri 41"),r("br"),t._v(" \n          20159 Milano (MI)"),r("br"),t._v("\n          Tel: 0422 1600025"),r("br"),t._v(" "),r("a",{attrs:{href:"mailto:info@databiz.it"}},[t._v("info@databiz.it")])])]),t._v(" "),r("div",[r("h4",[t._v("Follow us")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.linkedin.com/company/databiz-group/",target:"_blank",rel:"noopener"}},[t._v("Linkedin")]),r("br"),t._v(" "),r("a",{attrs:{href:"https://twitter.com/DATABIZit",target:"_blank",rel:"noopener"}},[t._v("Twitter")])])])])])])}],!1,null,null,null).exports,b={props:{text:""},computed:{year:function(){return(new Date).getFullYear()}}},g=Object(o.a)(b,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"credits"},[r("div",{staticClass:"wrapper"},[r("article",[t._m(0),t._v(" "),r("p",[t._v("Copyright "),r("span",{staticClass:"year"},[t._v(t._s(t.year))]),t._v(" \n        "+t._s(t.text))])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("figure",[e("img",{attrs:{src:"/logos/DatabizLogo.white.svg",alt:"Databiz Group"}})])}],!1,null,null,null).exports,w={components:{Header:n.a,Hero:a.a,About:u,Group:p,Philosophy:d,Partners:m,Footer:h,Credits:g},methods:{getPage:function(t){return this.$site.pages.filter(function(e){return e.path===t})[0]||{}}},computed:{data:function(){return this.$page.frontmatter},intro:function(){return{title:this.$page.frontmatter.claim,tagline:this.$page.frontmatter.tagline}},cta:function(){return{link:this.$page.frontmatter.ctaLink,text:this.$page.frontmatter.ctaText}},companies:function(){return[this.getPage("/group/bitrock/"),this.getPage("/group/radicalbit/")]}},mounted:function(){r.e(2).then(r.bind(null,199))}},C=(r(186),Object(o.a)(w,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"theme-container"},[r("Header"),t._v(" "),r("Hero",{attrs:{cta:t.cta,intro:t.intro}}),t._v(" "),r("About",{attrs:{content:t.getPage("/about/"),timeline:t.data.timeline}}),t._v(" "),r("Group",{attrs:{companies:t.companies,title:t.data.group}}),t._v(" "),r("Philosophy",{attrs:{content:t.getPage("/philosophy/")}}),t._v(" "),r("Partners",{attrs:{data:t.data.partners}}),t._v(" "),r("Footer"),t._v(" "),r("Credits",{attrs:{text:t.data.footer}})],1)},[],!1,null,null,null));e.default=C.exports}}]);