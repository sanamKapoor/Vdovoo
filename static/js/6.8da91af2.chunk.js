(this.webpackJsonpvdovoo=this.webpackJsonpvdovoo||[]).push([[6],{38:function(e,t,a){"use strict";var l=a(13),n=a(0),r=a.n(n),c=a(14);var s=function(){var e=Object(n.useContext)(c.a),t=e.data,a=e.dispatch,s=Object(n.useState)(!1),i=Object(l.a)(s,2),o=i[0],m=i[1],d=Object(n.useState)(!1),u=Object(l.a)(d,2),f=u[0],p=u[1],g=Object(n.useState)(!1),v=Object(l.a)(g,2),b=v[0],h=v[1],x=Object(n.useCallback)((function(e){var t=y(JSON.parse(localStorage.getItem("users"))),a=t.likeVDO,l=t.dislikeVDO,n=t.saveVDO;a.length>0&&a.map((function(t){return t===e&&m(!0),null})),l.length>0&&l.map((function(t){return t===e&&p(!0),null})),n.length>0&&n.map((function(t){return t===e&&h(!0),null}))}),[]);Object(n.useEffect)((function(){x(t.video)}),[t.video,x]);var E=function(e){switch(N(e),e){case"like":m(!o),p(!1);break;case"dislike":p(!f),m(!1);break;case"save":h(!b);break;default:console.log(e)}},O=function(e,t,a){if(a)e.length>0?e.filter((function(a){if(a===t){var l=e.indexOf(a);e.splice(l,1)}return null})):e.pop(t);else if(e.length>0){var l=e,n=!1;e.filter((function(e){return e===t&&(n=!0),null})),n||(l.push(t),e=l)}else e.push(t)},y=function(e){var t,a=JSON.parse(localStorage.getItem("user"));return e.length>0&&e.filter((function(e){return e.email===a.email&&e.password===a.password&&(t=e),null})),t},N=function(e){var a,l=JSON.parse(localStorage.getItem("users")),n=y(l);if(t.video&&(a=t.video))if("save"===e)O(n.saveVDO,a,b);else if("like"===e)o||n.dislikeVDO.length>0&&n.dislikeVDO.filter((function(e){if(e===a){var t=n.dislikeVDO.indexOf(e);n.dislikeVDO.splice(t,1)}return null})),O(n.likeVDO,a,o);else{if("dislike"!==e)return;f||n.likeVDO.length>0&&n.likeVDO.filter((function(e){if(e===a){var t=n.likeVDO.indexOf(e);n.likeVDO.splice(t,1)}return null})),O(n.dislikeVDO,a,f)}localStorage.setItem("users",JSON.stringify(l))};return r.a.createElement("div",{onClick:function(e){return function(e){"modal fade exampleModalCenter"===e.target.className&&(a({type:"REMOVE_VIDEO"}),h(!1),m(!1),p(!1))}(e)},className:"modal fade exampleModalCenter",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog modal-dialog-centered modal-lg",role:"document"},r.a.createElement("div",{className:"modal-content bg-secondary"},r.a.createElement("div",{className:"modal-body p-0"},r.a.createElement("div",{className:"embed-responsive embed-responsive-16by9 d-flex justify-content-center align-items-center"},t.loading||""===t.video?r.a.createElement("div",{className:"spinner-border text-light",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")):r.a.createElement("iframe",{title:"video",className:"embed-responsive-item",src:"https://www.youtube.com/embed/".concat(t.video),frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))),r.a.createElement("div",{className:"m-2"},t.hide?"":r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6 d-flex"},r.a.createElement("div",{className:"mx-3 d-flex flex-column modal-icon"},r.a.createElement("i",{onClick:function(e){return E("like")},className:"fas fa-thumbs-up fa-1x text-center ".concat(o?"text-primary":"text-light")}),r.a.createElement("small",null,"Like")),r.a.createElement("div",{className:"mx-3 d-flex flex-column modal-icon"},r.a.createElement("i",{onClick:function(e){return E("dislike")},className:"fas fa-thumbs-down fa-1x text-center ".concat(f?"text-primary":"text-light")}),r.a.createElement("small",null,"Dislike")),r.a.createElement("div",{className:"mx-3 d-flex flex-column modal-icon"},r.a.createElement("i",{onClick:function(e){return E("save")},className:"fas fa-download fa-1x text-center ".concat(b?"text-primary":"text-light"," ")}),r.a.createElement("small",null,"Save"))),r.a.createElement("div",{className:"col-6"}))))))};t.a=function(e){var t=e.data,a=Object(n.useContext)(c.a).dispatch,i=Object(n.useState)(!0),o=Object(l.a)(i,2),m=o[0],d=o[1];return r.a.createElement(r.a.Fragment,null,t.snippet.thumbnails.high.url?r.a.createElement("div",{className:"card p-0 bg-secondary my-1 my-sm-2 my-md-3"},r.a.createElement("img",{onClick:function(){return e=t.id.videoId,d(!0),void a({type:"PLAY_VIDEO",payload:e});var e},src:t.snippet.thumbnails.high.url,alt:"","data-toggle":"modal","data-target":".exampleModalCenter",className:"card-img"}),r.a.createElement("div",{className:"card-title px-2 pt-2 text-truncate"},t.snippet.title)):"",m?r.a.createElement(s,null):"")}},39:function(e,t,a){"use strict";var l=a(13),n=a(0),r=a.n(n),c=a(15),s=a(14),i=a(36),o=a.n(i);t.a=function(e){var t=e.search,a=Object(n.useState)(""),i=Object(l.a)(a,2),m=i[0],d=i[1],u=Object(n.useContext)(s.a).dispatch;return r.a.createElement("nav",{className:"navbar row mx-auto px-3 px-md-5"},r.a.createElement(c.b,{to:"/home",className:"col-md-3 col-3 navbar-brand font-weight-bold text-light h4 text-left"},"VDOVOO"),t?r.a.createElement("input",{name:"searchQuery",value:m,onChange:function(e){return d(e.target.value)},onKeyPress:function(e){return function(e){"Enter"===e.key&&(o.a.get("https://www.googleapis.com/youtube/v3/search",{params:{part:"snippet",maxResults:5,key:"AIzaSyDRoPyeSE1yUrBeb-KFNk9z5thJgmG7f4g",q:m}}).then((function(e){e.data.items&&u({type:"SEARCH_VIDEOS",payload:e.data.items})})).catch((function(e){return u({type:"ERROR",payload:"Something went wrong!"})})),d(""))}(e)},className:"col-md-5 col-11 mx-auto mt-3 mt-md-0 order-md-2 order-3 form-control",type:"search",placeholder:"Search"}):"",r.a.createElement("div",{className:"col-sm-3 col-7 order-md-3 order-2 align-self-center text-right text-md-center"},r.a.createElement("div",{className:"btn-group"},r.a.createElement("button",{className:"btn btn-outline-light btn-sm dropdown-toggle px-2 px-md-3 py-1",type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},r.a.createElement("i",{className:"far fa-user fa-1x pr-1"})),r.a.createElement("div",{className:"dropdown-menu dropdown-menu-right text-center"},r.a.createElement(c.b,{to:"/profile/like",className:"dropdown-item mx-0"},"Liked"),r.a.createElement(c.b,{to:"/profile/dislike",className:"dropdown-item mx-0"},"Disliked"),r.a.createElement(c.b,{to:"/profile/save",className:"dropdown-item mx-0"},"Saved"),r.a.createElement(c.b,{to:"/",onClick:function(){return localStorage.removeItem("user")},className:"btn btn-secondary btn-sm my-1 mx-2 mx-md-0"},"Logout")))))}},70:function(e,t,a){"use strict";a.r(t);var l=a(37),n=a(35),r=a(13),c=a(0),s=a.n(c),i=a(39),o=a(36),m=a.n(o),d=a(1),u=a(15),f=a(38);t.default=function(){var e=Object(d.g)().query,t=Object(d.f)(),a=Object(c.useState)([]),o=Object(r.a)(a,2),p=o[0],g=o[1],v=Object(c.useState)(""),b=Object(r.a)(v,2),h=b[0],x=b[1],E=Object(c.useState)(""),O=Object(r.a)(E,2),y=O[0],N=O[1],k=Object(c.useCallback)((function(a){var l,n=JSON.parse(localStorage.getItem("user"));if(n&&a.length>0&&a.filter((function(e){return e.email===n.email&&e.password===n.password&&(l=e),null})),l)if("like"===e)x("Liked Videos"),w(l.likeVDO);else if("dislike"===e)x("Disliked Videos"),w(l.dislikeVDO);else{if("save"!==e)return;x("Saved Videos"),w(l.saveVDO)}else t.push("/home")}),[t,e]);Object(c.useEffect)((function(){g([]),N(y),k(JSON.parse(localStorage.getItem("users")))}),[e,y,k]);var w=function(e){if(e.length>0){var t,a=Object(n.a)(e);try{for(a.s();!(t=a.n()).done;){var r=t.value;m.a.get("https://www.googleapis.com/youtube/v3/search",{params:{part:"snippet",maxResults:1,key:"AIzaSyDRoPyeSE1yUrBeb-KFNk9z5thJgmG7f4g",q:r}}).then((function(e){e.data&&g((function(t){return[].concat(Object(l.a)(t),[e.data.items[0]])}))})).catch((function(e){N("Something went wrong on server end!")}))}}catch(c){a.e(c)}finally{a.f()}}else N("No video found")};return s.a.createElement(s.a.Fragment,null,s.a.createElement(i.a,{search:!1}),s.a.createElement("div",{className:"container-fluid mb-4 mb-sm-5"},s.a.createElement("div",{className:"my-2 my-md-3"},s.a.createElement(u.b,{to:"/home"},s.a.createElement("i",{className:"fa fa-arrow-left text-light my-2"})),s.a.createElement("h1",{className:"text-capitalize mt-2 mb-4"},h),p.length>0?s.a.createElement("div",{className:"video-row mt-2 mt-md-2"},p.map((function(e){return s.a.createElement(f.a,{data:e,key:e.etag})}))):y?s.a.createElement("p",{className:"text-center mt-3 mt-md-4 mx-2"},y):s.a.createElement("div",{className:"text-center mt-3 mt-md-4"},s.a.createElement("div",{className:"spinner-border text-light",role:"status"},s.a.createElement("span",{className:"sr-only"},"Loading..."))))),s.a.createElement("div",{className:"py-1 py-md-2 text-center text-sm-right watermark"},s.a.createElement("span",{className:"mx-2"},"Made with ",s.a.createElement("span",{"aria-label":"img",role:"img"},"\u2764\ufe0f")," by Sanam Kapoor")))}}}]);
//# sourceMappingURL=6.8da91af2.chunk.js.map