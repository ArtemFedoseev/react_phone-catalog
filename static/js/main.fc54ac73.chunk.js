(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(t,e,c){},,,,,,,,,function(t,e,c){},,,,,,,,,,,,function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){"use strict";c.r(e);var n=c(9),a=c.n(n),s=c(4),r=c(1),i=c.n(r),o=c(3),l=c(0),u=function(){return Object(l.jsx)("div",{children:Object(l.jsx)(s.c,{type:"button",to:"/",className:"logo",children:Object(l.jsx)("img",{className:"logo__image",src:"./img/LOGO.png",alt:"LOGO"})})})},d=[{name:"HOME",path:"/"},{name:"PHONES",path:"/phones"},{name:"TABLETS",path:"/tablets"},{name:"ACCESSORIES",path:"/accessories"}],j=function(t){var e=t.name,c=t.path;return Object(l.jsx)(s.c,{type:"button",to:{pathname:c},className:function(t){var e=t.isActive;return"\n        navlink\n        navbar__navlink\n        ".concat(e?"navlink--selected":void 0,"\n      ")},children:e})},b=(c(26),function(){return Object(l.jsx)("div",{className:"navbar",children:d.map((function(t){return Object(l.jsx)(j,{name:t.name,path:t.path},t.name)}))})}),m=c(2),h=c(18),O=c.n(h),p=c(6),f=c.n(p),x=function(t){switch(t){case"/phones":case"/tablets":case"/accessories":case"/favorites":return"Search in ".concat(t.slice(1),"...");default:return"Search..."}},_=(c(38),function(){var t=Object(o.e)(),e=t.search,c=t.pathname,n=Object(o.f)(),a=new URLSearchParams(e),s=a.get("query")||"",i=Object(r.useState)(s),u=Object(m.a)(i,2),d=u[0],j=u[1],b=Object(r.useCallback)(O()((function(t,e,c){t?c.set("query",t):c.delete("query"),n({pathname:e,search:c.toString()})}),500),[]);Object(r.useEffect)((function(){""===s&&""!==d&&j("")}),[s]);var h=""!==d;return Object(l.jsxs)("div",{className:"searchbar-container",children:[Object(l.jsx)("input",{type:"text",placeholder:x(c),value:d,className:f()("searchbar",{"searchbar--has-text":h}),onChange:function(t){var e=t.target.value.trimStart();e.length>=10||(j(e),b(e,c,a))}}),h&&Object(l.jsx)("button",{type:"button",className:"searchbar__clear-button",onClick:function(){j(""),b("",c,a)}})]})}),v=c(5),g=c(12),N=function(t,e){var c=JSON.parse(localStorage.getItem(t)||"[]"),n=Object(r.useState)(0===c.length?e:c),a=Object(m.a)(n,2);return[a[0],a[1]]},y=function(t,e,c){return function(n){var a,s=Object(g.a)(e),r=e.find((function(t){return t.id===n.id})),i=r?e.indexOf(r):-1,o=(null===r||void 0===r?void 0:r.quantity)!==n.quantity&&(null===n||void 0===n?void 0:n.quantity);if(o&&i>=0&&(s[i].quantity=n.quantity),r)a=s.filter((function(t){return!!o||t.id!==n.id}));else{var l="cart"===t?Object(v.a)(Object(v.a)({},n),{},{quantity:1}):Object(v.a)({},n);a=[].concat(Object(g.a)(e),[l])}c(a),localStorage.setItem(t,JSON.stringify(a))}},k=function(t,e){switch(e){case"discount-value":return t.sort((function(t,e){var c=t.price*(t.discount/100);return e.price*(e.discount/100)-c}));case"age":return t.sort((function(t,e){return t.age-e.age}));case"name":return t.sort((function(t,e){return t.name.localeCompare(e.name)}));case"price":return t.sort((function(t,e){return t.price-t.price*(t.discount/100)-(e.price-e.price*(e.discount/100))}));default:return t}},w=function(t){return"".concat(t.charAt(0).toUpperCase()).concat(t.slice(1).toLowerCase())},C=function(t){var e,c=t.type,n=t.id;switch(c){case"phone":e="phones";break;case"tablet":e="tablets";break;case"accessory":e="accessories";break;default:return"/"}return"/".concat(e,"/").concat(n)},S=i.a.createContext({favorites:[],changeFavItems:function(){}}),E=i.a.createContext({cartItems:[],changeCartItems:function(){}}),I=function(t){var e=t.children,c=N("cart",[]),n=Object(m.a)(c,2),a=n[0],s=n[1],r=N("favs",[]),i=Object(m.a)(r,2),o=i[0],u=i[1],d=y("cart",a,s),j=y("favs",o,u);return Object(l.jsx)(E.Provider,{value:{cartItems:a,changeCartItems:d},children:Object(l.jsx)(S.Provider,{value:{favorites:o,changeFavItems:j},children:e})})},P=(c(39),function(t){var e=t.type,c=Object(o.e)().pathname,n=function(t){switch(t){case"favs":return"/favorites";case"cart":return"/cart";default:return"/"}}(e),a=Object(r.useContext)(E).cartItems,i=Object(r.useContext)(S).favorites,u="cart"===e?a.length:i.length;return Object(l.jsxs)("div",{className:f()("saved-products-container"),children:[Object(l.jsx)(s.b,{type:"button",to:n,className:f()("saved-products","saved-products--".concat(e),{"saved-products--selected":c===n})}),0!==u&&Object(l.jsx)("div",{className:"saved-products__amount",children:u},u)]})}),q=(c(40),function(){var t=Object(o.e)().pathname,e=t.split("/").filter((function(t){return""!==t})).length,c="/"!==t&&"/cart"!==t&&1===e;return Object(l.jsxs)("div",{className:"header",children:[Object(l.jsxs)("div",{className:"header__left",children:[Object(l.jsx)("div",{className:"header__logo",children:Object(l.jsx)(u,{})}),Object(l.jsx)(b,{})]}),Object(l.jsxs)("div",{className:"header__right",children:[c&&Object(l.jsx)(_,{}),Object(l.jsx)(P,{type:"favs"}),Object(l.jsx)(P,{type:"cart"})]})]})}),L=c.p+"static/media/banner-carousel-1.520dc249.png",A=c.p+"static/media/banner-carousel-2.ba879a0c.jpg",B=c.p+"static/media/banner-carousel-3.338300e7.jpg",F=function(t){var e=t.action,c=t.hadnleClick;return Object(l.jsx)("button",{type:"button",className:"button carousel__button carousel__button--".concat(e),onClick:function(){c(e)},children:" "})},T=function(t){var e=t.path,c=t.alt,n=t.bannerWidth,a=t.bannerGap;return Object(l.jsx)("div",{style:{width:"".concat(n,"px"),marginRight:"".concat(a,"px")},className:"carousel__image-container",children:Object(l.jsx)("img",{src:e,alt:c,className:"carousel__image"})})},G=function(t){var e=t.isSelected;return Object(l.jsx)("div",{className:f()("selected-banner__icon",{"selected-banner__icon--selected":e})})},R=(c(41),[{path:L,alt:"phones"},{path:A,alt:"tablets"},{path:B,alt:"accessories"}]),V={bannerWidth:1040,bannerGap:64,totalBanners:R.length},U=function(){var t=V.bannerWidth,e=V.bannerGap,c=V.totalBanners,n=Object(r.useState)(1),a=Object(m.a)(n,2),s=a[0],i=a[1],o={transform:"translateX(".concat(-(s-1)*(t+e),"px)"),transition:"transform 0.5s"},u=function(t){i("next"===t?s===c?1:s+1:1===s?c:s-1)};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"carousel grid",children:[Object(l.jsx)(F,{action:"prev",hadnleClick:u}),Object(l.jsx)("div",{className:"carousel__images-container",children:Object(l.jsx)("div",{style:o,className:"carousel__images",children:R.map((function(c){var n=c.path,a=c.alt;return Object(l.jsx)(T,{path:n,alt:a,bannerWidth:t,bannerGap:e},a)}))})}),Object(l.jsx)(F,{action:"next",hadnleClick:u})]}),Object(l.jsx)("div",{className:"selected-banner",children:R.map((function(t,e){var c=t.alt;return Object(l.jsx)(G,{isSelected:s===e+1},c)}))})]})},H=c.p+"static/media/loader.a1a99674.gif",M=(c(42),function(){var t="Loading...",e=t.length,c=e-3,n=Object(r.useState)(e),a=Object(m.a)(n,2),s=a[0],i=a[1];return Object(r.useEffect)((function(){var t=setInterval((function(){i((function(t){return t===e?c:t+1}))}),200);return function(){return clearInterval(t)}}),[]),Object(l.jsxs)("div",{className:"loader",children:[Object(l.jsx)("img",{src:H,alt:"Animated Loader",className:"loader__gif"}),Object(l.jsx)("h2",{className:"loader__text",children:t.slice(0,s)})]})}),D=(c(43),function(t){var e=t.id,c=Object(r.useContext)(E),n=c.cartItems,a=c.changeCartItems,s=n.length>0&&n.find((function(t){return t.id===e})),i=Object(r.useContext)(S),o=i.favorites,u=i.changeFavItems,d=o.length>0&&o.find((function(t){return t.id===e}));return Object(l.jsxs)("div",{className:"action-buttons__container",children:[Object(l.jsx)("button",{type:"button",className:f()("dark-button","action-buttons__to-cart",{"dark-button--in-cart":s}),onClick:function(){a(t)},children:"".concat(s?"Added":"Add"," to cart")}),Object(l.jsx)("button",{type:"button",className:f()("button",{"button--selected":d},"action-buttons__to-favs",{"action-buttons__to-favs--in-favs":d}),onClick:function(){u(t)},children:" "})]})}),J=(c(44),function(t){return Object(l.jsx)("div",{className:"features-list",children:Object.keys(t).map((function(e){return Object(l.jsxs)("div",{className:"features-list__item",children:[Object(l.jsx)("div",{className:"features-list__param",children:w(e)}),Object(l.jsx)("div",{className:"features-list__value",children:t[e]||"Not specified"})]},e)}))})}),W=(c(45),function(t){var e=t.imageUrl,c=t.name,n=t.price,a=t.discount,r=t.id,i=t.type,o=t.screen,u=t.capacity,d=t.ram,j=n*((100-a)/100),b=C({type:i,id:r});return Object(l.jsxs)("div",{className:"product-card",children:[Object(l.jsx)("div",{className:"product-card__image-container",children:Object(l.jsx)(s.b,{type:"button",to:b,children:Object(l.jsx)("img",{className:"product-card__image",src:e,alt:c})})}),Object(l.jsx)(s.b,{type:"button",to:b,className:"product-card__name",children:c}),Object(l.jsxs)("div",{className:"product-card__price",children:[String.fromCodePoint(36),j,0!==a&&Object(l.jsxs)("div",{className:"product-card__initial-price",children:[String.fromCodePoint(36),n]})]}),Object(l.jsx)("div",{className:"product-card__features",children:Object(l.jsx)(J,{screen:o,capacity:u,ram:d})}),Object(l.jsx)("div",{className:"product-card__actions",children:Object(l.jsx)(D,Object(v.a)({},t))})]})}),z=function(t){var e=t.direction,c=t.disabled,n=void 0!==c&&c,a=t.handleClick;return Object(l.jsx)("button",{type:"button",className:"\n        button\n        products-slider__button\n        products-slider__button--".concat(e,"\n      "),onClick:function(){a(e)},disabled:n,children:" "})},X="https://mate-academy.github.io/react_phone-catalog/api",Y=function(){var t="".concat(X,"/products.json");return fetch(t).then((function(t){if(t.ok)return t.json();throw new Error(t.statusText)}))},K=function(){return Y().then((function(t){return t.filter((function(t){return"phone"===t.type}))}))},Q=function(){return Y().then((function(t){return t.filter((function(t){return"tablet"===t.type}))}))},Z=function(){return Y().then((function(t){return t.filter((function(t){return"accessory"===t.type}))}))},$=function(t){var e="".concat(X,"/products/").concat(t,".json");return fetch(e).then((function(t){if(t.ok)return t.json();throw new Error(t.statusText)}))},tt=function(t){return Y().then((function(e){return e.find((function(e){return e.id===t}))}))},et=(c(46),272),ct=16,nt=4,at=function(t){var e=t.title,c=t.filterCriteria,n=t.sortBy,a=et,s=ct,i=nt,o=Object(r.useState)(!0),u=Object(m.a)(o,2),d=u[0],j=u[1],b=Object(r.useState)([]),h=Object(m.a)(b,2),O=h[0],p=h[1],f=Object(r.useState)(""),x=Object(m.a)(f,2),_=x[0],g=x[1],N=Object(r.useState)(i),y=Object(m.a)(N,2),w=y[0],C=y[1],S={transform:"translateX(".concat(-(w-i)*(a+s),"px)"),transition:"transform 0.5s"};Object(r.useEffect)((function(){Y().then((function(t){var e=function(t,e,c){var n;switch(t){case"discount":n=c.filter((function(t){return t.discount>0}));break;case"no-discount":n=c.filter((function(t){return 0===t.discount}));break;case"random":n=function(t){for(var e,c=t.map((function(){return arguments.length<=1?void 0:arguments[1]})),n=[],a=0;a<8;a+=1){var s=(e=c.length-1,Math.floor(Math.random()*(e+1))),r=c.splice(s,1)[0];n.push(r)}return n.map((function(e){return t[e]}))}(c);break;default:n=c}return k(n,e)}(c,n,t);p(e),j(!1)})).catch((function(t){g(t)}))}),[]);var E=function(t){var e,c=O.length;"next"===t?(e=w+i)>c&&(e=c):(e=w-i)<i&&(e=i),C(e)};return Object(l.jsxs)("div",{className:"products-slider",children:[Object(l.jsxs)("div",{className:"products-slider__header grid",children:[Object(l.jsx)("h2",{className:"products-slider__title",children:e}),Object(l.jsx)(z,{direction:"prev",handleClick:E,disabled:w===i}),Object(l.jsx)(z,{direction:"next",handleClick:E,disabled:w===O.length})]}),_?Object(l.jsx)("h1",{className:"main-title",children:"Something went wrong"}):Object(l.jsxs)(l.Fragment,{children:[d&&Object(l.jsx)(M,{}),!d&&Object(l.jsx)("div",{className:"products-slider__products-container",children:Object(l.jsx)("div",{className:"products-slider__products",children:O.map((function(t){return Object(l.jsx)("div",{style:S,className:"products-slider__product-container",children:Object(l.jsx)(W,Object(v.a)({},t))},t.id)}))})})]})]})},st=function(t){var e=t.path,c=t.type,n=t.text,a=t.amount;return Object(l.jsxs)("div",{className:"category-nav__nav-link",children:[Object(l.jsx)(s.c,{to:e,className:"category-nav__link-image category-nav__link-image--".concat(c)}),Object(l.jsx)(s.c,{to:e,className:"category-nav__link-text",children:n}),Object(l.jsxs)("div",{className:"amount-subtitle",children:[a," ","models"]})]})},rt=(c(47),function(){var t=Object(r.useState)([0,0,0]),e=Object(m.a)(t,2),c=e[0],n=e[1];Object(r.useEffect)((function(){var t=0,e=0,c=0;Y().then((function(a){a.forEach((function(n){switch(n.type){case"phone":t+=1;break;case"tablet":e+=1;break;case"accessory":c+=1}})),n([t,e,c])}))}),[]);var a=Object(m.a)(c,3),s=a[0],i=a[1],o=a[2];return Object(l.jsxs)("div",{className:"category-nav",children:[Object(l.jsx)("h2",{className:"category-nav__title",children:"Shop by category"}),Object(l.jsxs)("div",{className:"category-nav__links",children:[Object(l.jsx)(st,{path:"/phones",type:"phones",text:"Phones",amount:s}),Object(l.jsx)(st,{path:"/tablets",type:"tablets",text:"Tablets",amount:i}),Object(l.jsx)(st,{path:"/accessories",type:"accessories",text:"Accessories",amount:o})]})]})}),it=(c(48),function(){return Object(l.jsx)("div",{className:"home",children:Object(l.jsxs)("div",{className:"container container--with-min-height",children:[Object(l.jsx)("section",{className:"home__section",children:Object(l.jsx)(U,{})}),Object(l.jsx)("section",{className:"home__section",children:Object(l.jsx)(at,{title:"Hot prices",filterCriteria:"discount",sortBy:"discount-value"})}),Object(l.jsx)("section",{className:"home__section",children:Object(l.jsx)(rt,{})}),Object(l.jsx)("section",{className:"home__section",children:Object(l.jsx)(at,{title:"Brand new models",filterCriteria:"no-discount",sortBy:"age"})})]})})}),ot=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(s.b,{to:"/",className:"breadcrumbs__link breadcrumbs__link--home"}),Object(l.jsx)("div",{className:"breadcrumbs__separator"})]})},lt=function(t){var e=t.name,c=t.path,n=t.isLastLink;return Object(l.jsx)(l.Fragment,{children:n?Object(l.jsx)("p",{className:"breadcrumbs__plain-text",children:e}):Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(s.b,{to:c,className:"breadcrumbs__link",children:e})})})},ut=function(t){var e=t.name;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"breadcrumbs__separator"}),Object(l.jsx)("p",{className:"breadcrumbs__plain-text",children:e})]})},dt=(c(49),function(t){var e=t.productName,c=void 0===e?"":e,n=Object(o.e)().pathname.split("/")[1];return Object(l.jsxs)("div",{className:"breadcrumbs",children:[Object(l.jsx)(ot,{}),Object(l.jsx)(lt,{name:w(n),path:"/".concat(n),isLastLink:""===c}),c&&Object(l.jsx)(ut,{name:c})]})}),jt=(c(50),function(){return Object(l.jsxs)("div",{className:"no-results",children:[Object(l.jsx)("h1",{className:"no-results__title",children:"Oops!"}),Object(l.jsx)("p",{className:"no-results__text",children:"Seems like we don't have any products in this section right now"}),Object(l.jsx)(s.c,{type:"button",to:"/",className:"button no-results__button",children:"Go to home page"})]})}),bt=c(66),mt=(c(51),function(t){var e=t.title,c=t.selectedValue,n=t.defaultValue,a=t.options,s=t.setValue,i=t.isSmall,o=void 0!==i&&i,u=Object(r.useState)(!1),d=Object(m.a)(u,2),j=d[0],b=d[1];return Object(l.jsxs)("div",{className:f()("dropdown",{"dropdown--small":o}),onBlur:function(){b(!1)},children:[Object(l.jsx)("span",{className:"dropdown__title",children:e}),Object(l.jsx)("button",{type:"button",className:f()("dropdown__main-button",{"dropdown__main-button--selected":j}),onClick:function(){b(!j)},children:""===c?n:c}),Object(l.jsx)("div",{className:"dropdown__options-container",children:Object(l.jsx)(bt.a,{in:j,classNames:"dropdown__options",timeout:300,unmountOnExit:!0,addEndListener:function(t,e){t.addEventListener("transitionend",e,!1)},children:Object(l.jsx)("div",{className:"dropdown__options",children:a.map((function(t){return Object(l.jsx)("button",{type:"button",className:"dropdown__option",onMouseDown:function(e){e.preventDefault(),s(t.value),b(!1)},children:t.name},t.name)}))})})})]})}),ht=(c(52),function(){var t=Object(o.f)(),e=Object(o.e)(),c=e.search,n=e.pathname,a=new URLSearchParams(c);return Object(l.jsxs)("div",{className:"no-products-found",children:[Object(l.jsx)("h1",{className:"no-products-found__title",children:"Oops!"}),Object(l.jsx)("p",{className:"no-products-found__text",children:"Seems like we don't have any products in this section matching your search"}),Object(l.jsx)("button",{type:"button",className:"button no-products-found__button",onClick:function(){a.delete("query"),t({pathname:n,search:a.toString()})},children:"Reset your search"})]})}),Ot=(c(53),function(t){var e=t.page,c=t.totalProducts,n=t.perPage,a=t.setPage,s=Math.ceil(c/n),r=Array.from({length:s},(function(t,e){return e+1}));return Object(l.jsxs)("div",{className:"pagination",children:[Object(l.jsx)("button",{type:"button",className:"button pagination__button pagination__button--prev",onClick:function(){return a("".concat(e-1))},disabled:e<=1}),r.map((function(t){return Object(l.jsx)("button",{type:"button",className:f()("button","pagination__button","pagination__button--page",{"pagination__button--active":t===e}),onClick:function(){a("".concat(t))},children:t},t)})),Object(l.jsx)("button",{type:"button",className:"button pagination__button pagination__button--next",onClick:function(){return a("".concat(e+1))},disabled:e>=s})]})}),pt=[{name:"Newest",value:"age"},{name:"Alphabetically",value:"name"},{name:"Cheapest",value:"price"}],ft=[{name:"4",value:"4"},{name:"8",value:"8"},{name:"16",value:"16"},{name:"All",value:"all"}],xt=function(t,e){var c=e.find((function(e){return e.value===t}));return c?c.name:""},_t=function(t,e){var c=parseInt(t,10);return Number.isNaN(c)?e:c},vt=(c(54),function(t){var e,c,n=t.products,a=Object(o.f)(),s=Object(o.e)(),i=s.search,u=s.pathname,d=new URLSearchParams(i),j=d.get("query")||"",b=d.get("sort")||"",h=d.get("perPage")||"",O=d.get("page")||"",p=Object(r.useState)(j),f=Object(m.a)(p,2),x=f[0],_=f[1],g=Object(r.useState)(b),N=Object(m.a)(g,2),y=N[0],w=N[1],C=Object(r.useState)(h),S=Object(m.a)(C,2),E=S[0],I=S[1],P=Object(r.useState)(O),q=Object(m.a)(P,2),L=q[0],A=q[1],B=(e=E,c=n.length,_t(e,"all"===e?c:8)),F=_t(L,1),T=function(t,e){t?d.set(e,t):d.delete(e),a({pathname:u,search:d.toString()})},G=function(){A("1"),T("","page")},R=function(t,e){return function(c){t(c),T(c,e),"page"!==e&&"page"!==e&&G()}},V=Object(r.useRef)(!0);Object(r.useEffect)((function(){V.current?V.current=!1:(_(j),G())}),[j]);var U=function(t,e){if(!e)return t;var c=e.replace(/ /g,"").toUpperCase();return t.filter((function(t){return t.name.replace(/ /g,"").toUpperCase().includes(c)}))}(k(n,y),x),H=function(t,e,c){if(t.length/e<=1)return t;var n=e*(c-1),a=n+e-1;return t.filter((function(){var t=arguments.length<=1?void 0:arguments[1];return t>=n&&t<=a}))}(U,B,F),M=U.length/B<=1;return Object(l.jsxs)("div",{className:"products-list",children:[Object(l.jsxs)("div",{className:"products-list__dropdowns",children:[Object(l.jsx)(mt,{title:"Sort By",defaultValue:"Default",selectedValue:xt(y,pt)||"Newest",options:pt,setValue:R(w,"sort")}),Object(l.jsx)(mt,{title:"Items on page",defaultValue:"Default",selectedValue:xt(E,ft)||"8",options:ft,setValue:R(I,"perPage"),isSmall:!0})]}),0===U.length?Object(l.jsx)(ht,{}):Object(l.jsx)("div",{className:"products-list__products",children:H.map((function(t){return Object(l.jsx)(W,Object(v.a)({},t),t.id)}))}),!M&&Object(l.jsx)("div",{className:"products-list__pagination",children:Object(l.jsx)(Ot,{page:F,setPage:R(A,"page"),totalProducts:U.length,perPage:B})})]})}),gt=(c(55),function(t){var e=t.title,c=t.fetchProducts,n=Object(r.useState)(!0),a=Object(m.a)(n,2),s=a[0],i=a[1],o=Object(r.useState)([]),u=Object(m.a)(o,2),d=u[0],j=u[1],b=Object(r.useState)(null),h=Object(m.a)(b,2),O=h[0],p=h[1];return Object(r.useEffect)((function(){c().then((function(t){j(t),i(!1)})).catch((function(t){return p(t)}))}),[]),Object(l.jsx)("div",{className:"products-page",children:Object(l.jsx)("div",{className:"container container--with-min-height",children:Object(l.jsxs)("div",{className:"products-page__content",children:[Object(l.jsx)("section",{className:"products-page__section",children:Object(l.jsx)(dt,{})}),Object(l.jsxs)("section",{className:"products-page__section",children:[Object(l.jsx)("h1",{className:"main-title products-page__title",children:e}),Object(l.jsx)("div",{className:"amount-subtitle",children:"".concat(d.length," products")})]}),O?Object(l.jsx)("h1",{className:"main-title",children:"Something went wrong"}):Object(l.jsxs)("section",{className:"products-page__section",children:[s&&Object(l.jsx)(M,{}),!s&&(0===d.length?Object(l.jsx)(jt,{}):Object(l.jsx)(vt,{products:d}))]})]})})})}),Nt=(c(56),function(){return Object(l.jsx)(gt,{title:"Mobile Phones",fetchProducts:K})}),yt=function(){return Object(l.jsx)(gt,{title:"Tablets",fetchProducts:Q})},kt=function(){return Object(l.jsx)(gt,{title:"Accessories",fetchProducts:Z})},wt=(c(57),function(t){var e=t.images,c=Object(r.useState)(1),n=Object(m.a)(c,2),a=n[0],s=n[1],i=Object(r.useState)(e[0]),o=Object(m.a)(i,2),u=o[0],d=o[1],j=e.length>5,b=j?Object(g.a)(e).slice(4*(a-1),4*a):e;return Object(r.useEffect)((function(){d(e[0])}),[e[0]]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"product-details__image-selection",children:[j&&2===a&&Object(l.jsx)("button",{type:"button",className:" product-details__prev-page product-details__image-button",onClick:function(){s(1)}}),b.map((function(t){var e=t===u;return Object(l.jsx)("button",{type:"button",className:f()("product-details__image","product-details__image-button",{"product-details__image-button--selected":e}),style:{backgroundImage:"url(".concat(t,")")},onClick:function(){d(t)}},t)})),j&&1===a&&Object(l.jsx)("button",{type:"button",className:" product-details__next-page product-details__image-button",onClick:function(){s(2)}})]}),Object(l.jsx)("div",{className:"product-details__image product-details__selected-image",style:{backgroundImage:"url(".concat(u,")")}})]})}),Ct=(c(58),function(t){var e=t.name,c=t.images,n=t.price,a=t.discount,s=t.screen,r=t.display,i=t.hardware,o=t.ram,u=t.description,d=t.connectivity,j=t.camera,b=n*((100-a)/100);return Object(l.jsxs)("div",{className:"product-details",children:[Object(l.jsx)("div",{className:"product-details__title",children:Object(l.jsx)("h1",{className:"main-title",children:e})}),Object(l.jsxs)("div",{className:"grid product-details__main-details",children:[Object(l.jsx)(wt,{images:c}),Object(l.jsxs)("div",{className:"product-details__main-description",children:[Object(l.jsxs)("div",{className:"product-details__price",children:[Object(l.jsxs)("h1",{className:"main-title",children:[String.fromCodePoint(36),b]}),0!==a&&Object(l.jsxs)("div",{className:"product-details__initial-price",children:[String.fromCodePoint(36),n]})]}),Object(l.jsx)("div",{className:"product-details__actions",children:Object(l.jsx)(D,Object(v.a)({},t))}),Object(l.jsx)("div",{className:"product-details__features",children:Object(l.jsx)(J,{screen:s,resolution:r.screenResolution,processor:i.cpu,ram:o})})]})]}),Object(l.jsxs)("div",{className:"grid product-details__additional-info",children:[Object(l.jsxs)("div",{className:"product-details__about",children:[Object(l.jsx)("h2",{className:"product-details__subtitle",children:"About"}),Object(l.jsx)("p",{className:"product-details__about-text",children:u})]}),Object(l.jsxs)("div",{className:"product-details__tech-specs",children:[Object(l.jsx)("h2",{className:"product-details__subtitle",children:"Tech specs"}),Object(l.jsx)(J,{screen:s,resolution:r.screenResolution,processor:i.cpu,camera:j.primary,cell:d.cell,ram:o})]})]}),Object(l.jsx)("div",{className:"product-details__suggested-products",children:Object(l.jsx)(at,{title:"You may also like",sortBy:"age",filterCriteria:"random"},e)})]})}),St=(c(59),function(){var t=Object(o.f)();return Object(l.jsx)("button",{type:"button",className:"back-button",onClick:function(){t(-1)},children:"Back"})}),Et=function(t){var e=t.directory;return Object(l.jsxs)("div",{className:"product-not-found",children:[Object(l.jsx)("h1",{className:"main-title",children:"Sorry, but we couldn't find this product"}),Object(l.jsx)(s.b,{type:"button",to:"/".concat(e),className:"button product-not-found__button",children:"Go back to ".concat(e)})]})},It=function(){var t=Object(r.useState)(),e=Object(m.a)(t,2),c=e[0],n=e[1],a=Object(r.useState)(!0),s=Object(m.a)(a,2),i=s[0],u=s[1],d=Object(r.useState)(""),j=Object(m.a)(d,2),b=j[0],h=j[1],O=Object(o.e)().pathname,p=Object(o.g)().productId,f=O.split("/")[1];return Object(r.useEffect)((function(){(function(t){return Promise.all([tt(t),$(t)]).then((function(t){var e=Object(m.a)(t,2),c=e[0],n=e[1];return Object(v.a)(Object(v.a)({},c),n)}))})(p||"").then((function(t){return n(t)})).catch((function(t){return h(t)})),u(!1)}),[p]),Object(l.jsx)("div",{className:"container container--with-min-height",children:b?Object(l.jsx)(Et,{directory:f}):Object(l.jsxs)("div",{className:"product-details-page",children:[Object(l.jsx)("div",{className:"product-details-page__breadcrumbs",children:Object(l.jsx)(dt,{productName:(null===c||void 0===c?void 0:c.name)||p})}),Object(l.jsx)("div",{className:"product-details-page__back-button",children:Object(l.jsx)(St,{})}),i&&Object(l.jsx)(M,{}),c&&Object(l.jsx)(Ct,Object(v.a)({},c))]})})},Pt=(c(60),c(17),function(t){var e=t.text;return Object(l.jsx)("a",{href:"https://github.com/ArtemFedoseev",rel:"noreferrer",target:"_blank",className:"footer__link",children:e})}),qt=function(){var t=Object(r.useState)(!1),e=Object(m.a)(t,2),c=e[0],n=e[1],a=Object(o.e)().pathname;function s(){n(document.body.scrollHeight>window.innerHeight)}return Object(r.useEffect)((function(){return s(),window.addEventListener("resize",s),function(){window.removeEventListener("resize",s),window.removeEventListener("scroll",s)}}),[]),Object(r.useEffect)((function(){n(document.body.scrollHeight>window.innerHeight)}),[a]),window.addEventListener("scroll",s),Object(l.jsx)("div",{className:"footer",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"footer__content",children:[Object(l.jsx)("div",{className:"footer__logo",children:Object(l.jsx)(u,{})}),Object(l.jsxs)("div",{className:"footer__links",children:[Object(l.jsx)(Pt,{text:"github"}),Object(l.jsx)(Pt,{text:"contacts"}),Object(l.jsx)(Pt,{text:"rights"})]}),Object(l.jsx)("div",{style:c?{}:{visibility:"hidden"},className:"footer__to-top to-top",children:Object(l.jsxs)("label",{className:"to-top__label",htmlFor:"to-top-button",children:[Object(l.jsx)("span",{className:"to-top__text",children:"Back to top"}),Object(l.jsx)("button",{id:"to-top-button",type:"button",className:"button to-top__button",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:" "})]})})]})})})},Lt=(c(61),function(){var t=Object(r.useContext)(S).favorites;return Object(l.jsx)("div",{className:"container container--with-min-height",children:Object(l.jsxs)("div",{className:"favorites-page",children:[Object(l.jsx)("div",{className:"favorites-page__breadcrumbs",children:Object(l.jsx)(dt,{})}),Object(l.jsx)("h1",{className:"main-title favorites-page__title",children:"Favorites"}),Object(l.jsx)("div",{className:"favorites-page__amount amount-subtitle",children:"".concat(t.length," products")}),0===t.length?Object(l.jsx)(jt,{}):Object(l.jsx)(vt,{products:t})]})})}),At=function(t){var e=t.price,c=t.discount,n=t.imageUrl,a=t.quantity,i=t.name,o=t.type,u=t.id,d=e*((100-c)/100),j=Object(r.useContext)(E).changeCartItems,b=C({type:o,id:u});return Object(l.jsxs)("div",{className:"cart-item",children:[Object(l.jsxs)("div",{className:"cart-item__content-wrapper",children:[Object(l.jsx)("button",{type:"button",className:"cart-item__remove-item",onClick:function(){j(t)}}),Object(l.jsx)(s.b,{to:b,className:"cart-item__product-preview",style:{backgroundImage:"url(".concat(n,")")}}),Object(l.jsx)(s.b,{to:b,className:"cart-item__product-name",children:i})]}),Object(l.jsxs)("div",{className:"cart-item__content-wrapper",children:[Object(l.jsxs)("div",{className:"cart-item__quantity",children:[Object(l.jsx)("button",{type:"button",className:" button cart-item__quantity-button cart-item__quantity-button--remove ",onClick:function(){j(Object(v.a)(Object(v.a)({},t),{},{quantity:a&&a-1}))},disabled:!a||a<=1}),Object(l.jsx)("div",{className:"cart-item__quantity-amount",children:a}),Object(l.jsx)("button",{type:"button",className:" button cart-item__quantity-button cart-item__quantity-button--add ",onClick:function(){j(Object(v.a)(Object(v.a)({},t),{},{quantity:a&&a+1}))}})]}),Object(l.jsxs)("span",{className:"cart-item__price",children:[String.fromCodePoint(36),d*(a||1)]})]})]})},Bt=(c(62),function(){var t=Object(r.useContext)(E).cartItems,e=0===t.length?0:t.map((function(t){return t.price*((100-t.discount)/100)*(t.quantity||1)})).reduce((function(t,e){return t+e})),c=0;return t.forEach((function(t){var e=t.quantity||1;c+=e})),Object(l.jsx)("div",{className:"container container--with-min-height",children:Object(l.jsxs)("div",{className:"cart-page",children:[Object(l.jsx)("div",{className:"cart-page__back-button",children:Object(l.jsx)(St,{})}),Object(l.jsx)("div",{className:"cart-page__title",children:Object(l.jsx)("h1",{className:"main-title",children:"Cart"})}),0===t.length?Object(l.jsx)("h2",{children:"Cart is empty"}):Object(l.jsxs)("div",{className:"grid",children:[Object(l.jsx)("div",{className:"cart-page__cart-items",children:t.map((function(t){return Object(l.jsx)(At,Object(v.a)({},t),t.id)}))}),Object(l.jsxs)("div",{className:"cart-page__checkout",children:[Object(l.jsxs)("h1",{className:"main-title",children:[String.fromCodePoint(36),e]}),Object(l.jsx)("span",{className:"cart-page__checkout-subtitle",children:"Total for ".concat(c," items")}),Object(l.jsx)("button",{type:"button",className:"dark-button cart-page__checkout-button",children:"Checkout"})]})]})]})})}),Ft=(c(63),function(){return Object(l.jsx)("div",{className:"container container--with-min-height",children:Object(l.jsxs)("div",{className:"page-not-found",children:[Object(l.jsx)("h1",{className:"main-title",children:"404"}),Object(l.jsx)("p",{children:"Sorry, but we don't have the page you're looking for"}),Object(l.jsx)(s.b,{type:"button",to:"/",className:"button page-not-found__button",children:"Go back to home"})]})})}),Tt=function(){var t=Object(o.e)().pathname;return Object(r.useEffect)((function(){window.scrollTo({top:0,behavior:"smooth"})}),[t]),Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(I,{children:[Object(l.jsx)(q,{}),Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{path:"*",element:Object(l.jsx)(Ft,{})}),Object(l.jsx)(o.a,{path:"/",element:Object(l.jsx)(it,{})}),Object(l.jsx)(o.a,{path:"/phones",element:Object(l.jsx)(Nt,{})}),Object(l.jsx)(o.a,{path:"/phones/:productId",element:Object(l.jsx)(It,{})}),Object(l.jsx)(o.a,{path:"/tablets",element:Object(l.jsx)(yt,{})}),Object(l.jsx)(o.a,{path:"/tablets/:productId",element:Object(l.jsx)(It,{})}),Object(l.jsx)(o.a,{path:"/accessories",element:Object(l.jsx)(kt,{})}),Object(l.jsx)(o.a,{path:"/accessories/:productId",element:Object(l.jsx)(It,{})}),Object(l.jsx)(o.a,{path:"/favorites",element:Object(l.jsx)(Lt,{})}),Object(l.jsx)(o.a,{path:"/cart",element:Object(l.jsx)(Bt,{})})]}),Object(l.jsx)(qt,{})]})})};a.a.render(Object(l.jsx)(s.a,{children:Object(l.jsx)(Tt,{})}),document.getElementById("root"))}],[[64,1,2]]]);
//# sourceMappingURL=main.fc54ac73.chunk.js.map