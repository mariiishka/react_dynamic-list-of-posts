(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var n=s(6),c=s.n(n),o=s(2),a=s(1),i=s.n(a),r=(s(12),s(13),i.a.createContext({posts:[],setPosts:function(){},selectedPostId:87,setSelectedPostId:function(){},comments:[],setComments:function(){}})),l=function(){return Object(a.useContext)(r)},u=(s(14),s(0)),m=i.a.memo((function(){var e=l(),t=e.posts,s=e.selectedPostId,n=e.setSelectedPostId;return Object(u.jsxs)("div",{className:"PostsList",children:[Object(u.jsx)("h2",{children:"Posts:"}),Object(u.jsx)("ul",{className:"PostsList__list",children:t.length?t.map((function(e){var t=e.id,c=e.userId,o=e.title;return Object(u.jsxs)("li",{className:"PostsList__item",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("b",{children:"[User #".concat(c,"] ")}),o]}),Object(u.jsx)("button",{type:"button",className:"PostsList__button button",onClick:function(){!function(e){n(e===s?0:e)}(t)},children:s===t?"Close":"Open"})]},t)})):"Not found"})]})})),j=s(7),d=function(e,t){return fetch("".concat("https://mate.academy/students-api").concat(e),t).then((function(e){if(!e.ok)throw new Error("".concat(e.status," - ").concat(e.statusText));return e.json()}))},b=function(e){return d("/comments/".concat(e),{method:"DELETE"})},O=(s(16),i.a.memo((function(){var e=l(),t=e.comments,s=e.setComments,n=e.selectedPostId,c=Object(a.useState)(""),i=Object(o.a)(c,2),r=i[0],m=i[1],b=Object(a.useState)(""),O=Object(o.a)(b,2),h=O[0],f=O[1],p=Object(a.useState)(""),x=Object(o.a)(p,2),v=x[0],_=x[1],N=function(e){var t=e.target,s=t.name,n=t.value;switch(s){case"userName":m(n);break;case"userEmail":f(n);break;case"userComment":_(n)}};return Object(u.jsxs)("form",{className:"NewCommentForm",onSubmit:function(e){e.preventDefault();var c={id:(new Date).valueOf(),postId:n,body:v,name:r,email:h};!function(e){d("/comments",{method:"POST",body:JSON.stringify(e)})}(c),s([].concat(Object(j.a)(t),[c])),m(""),f(""),_("")},children:[Object(u.jsx)("div",{className:"form-field",children:Object(u.jsx)("input",{type:"text",name:"userName",value:r,onChange:N,placeholder:"Your name",className:"NewCommentForm__input",required:!0})}),Object(u.jsx)("div",{className:"form-field",children:Object(u.jsx)("input",{type:"text",name:"userEmail",value:h,onChange:N,placeholder:"Your email",className:"NewCommentForm__input",required:!0})}),Object(u.jsx)("div",{className:"form-field",children:Object(u.jsx)("textarea",{name:"userComment",value:v,onChange:N,placeholder:"Type comment here",className:"NewCommentForm__input",required:!0})}),Object(u.jsx)("button",{type:"submit",className:"NewCommentForm__submit-button button",children:"Add a comment"})]})}))),h=function(e){return d(e?"/posts".concat(e):"/posts")},f=(s(17),i.a.memo((function(){var e=l(),t=e.selectedPostId,s=e.comments,n=e.setComments,c=Object(a.useState)(),i=Object(o.a)(c,2),r=i[0],m=i[1],j=Object(a.useState)(!0),f=Object(o.a)(j,2),p=f[0],x=f[1],v=function(){var e;(e=t,h("/".concat(e))).then(m)},_=function(){var e;(e=t,d("/comments?postId=".concat(e))).then(n)};return Object(a.useEffect)((function(){Promise.all([v(),_()])}),[t]),Object(u.jsxs)("div",{className:"PostDetails",children:[Object(u.jsx)("h2",{children:"Post details:"}),Object(u.jsx)("section",{className:"PostDetails__post",children:Object(u.jsx)("p",{children:null===r||void 0===r?void 0:r.body})}),s.length>0&&Object(u.jsxs)("section",{className:"PostDetails__comments",children:[Object(u.jsx)("button",{type:"button",className:"button",onClick:function(){x((function(e){return!e}))},children:p?"Hide ".concat(s.length," comment(s)"):"Show ".concat(s.length," comment(s)")}),p&&Object(u.jsx)("ul",{className:"PostDetails__list",children:s.map((function(e){var t=e.id,c=e.body;return Object(u.jsxs)("li",{className:"PostDetails__list-item",children:[Object(u.jsx)("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;b(e);var t=s.filter((function(t){return t.id!==e}));n(t)}(t)},children:"X"}),Object(u.jsx)("p",{children:c})]},t)}))})]}),Object(u.jsx)("section",{children:Object(u.jsx)("div",{className:"PostDetails__form-wrapper",children:Object(u.jsx)(O,{})})})]})}))),p=function(){var e=Object(a.useState)(0),t=Object(o.a)(e,2),s=t[0],n=t[1],c=Object(a.useState)([]),i=Object(o.a)(c,2),l=i[0],j=i[1],b=Object(a.useState)([]),O=Object(o.a)(b,2),p=O[0],x=O[1],v=Object(a.useState)([]),_=Object(o.a)(v,2),N=_[0],P=_[1],C=function(e){(function(e){return e?h("/?userId=".concat(e)):h()})(e).then(j)},S=function(){d("/users").then((function(e){return x(e.slice(0,8))}))};return Object(a.useEffect)((function(){Promise.all([C(),S()])}),[]),Object(u.jsx)(r.Provider,{value:{selectedPostId:s,setSelectedPostId:n,posts:l,setPosts:j,comments:N,setComments:P},children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("header",{className:"App__header",children:Object(u.jsxs)("label",{children:["Select a user: \xa0",Object(u.jsxs)("select",{className:"App__user-selector",onChange:function(e){C(Number(e.target.value))},children:[Object(u.jsx)("option",{value:"0",children:"All users"}),p.map((function(e){return Object(u.jsx)("option",{value:e.id,children:e.name},e.id)}))]})]})}),Object(u.jsxs)("main",{className:"App__main",children:[Object(u.jsx)("div",{className:"App__sidebar",children:Object(u.jsx)(m,{})}),Object(u.jsx)("div",{className:"App__content",children:Boolean(s)&&Object(u.jsx)(f,{})})]})]})})};c.a.render(Object(u.jsx)(p,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.51cfdc19.chunk.js.map