"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[691],{6287:function(e,t,r){r.r(t),r.d(t,{default:function(){return i}});var n=r(7294);function a(e){var t=e.profileId,r=e.customUrl,n=e.memberEmail,a=e.memberFirstName,m=e.memberLastName;if(!t&&!r)throw new Error("profileId or customUrl is required");if(!n)throw new Error("memberEmail is required");var u=document.createElement("form");u.action=r||"https://www.getrevue.co/profile/".concat(t,"/add_subscriber"),u.method="post",u.id="revue-form",u.name="revue-form",u.target="_blank",u.style.display="none";var i=document.createElement("input");if(i.type="email",i.name="member[email]",i.value=n,u.appendChild(i),a){var l=document.createElement("input");l.type="text",l.name="member[first_name]",l.value=a,u.appendChild(l)}if(m){var o=document.createElement("input");o.type="text",o.name="member[last_name]",o.value=m,u.appendChild(o)}document.body.appendChild(u),u.submit(),document.body.removeChild(u)}var m=r(3431),u=function(){var e=(0,n.useState)(""),t=e[0],r=e[1];return(0,m.tZ)("div",null,(0,m.tZ)("input",{type:"email",placeholder:"Email",value:t,onChange:function(e){return r(e.target.value)}}),(0,m.tZ)("button",{type:"button",onClick:function(){a({customUrl:"http://news.onekey.so/add_subscriber",memberEmail:t})}},"subscribe"))};function i(){return(0,m.tZ)("div",null,(0,m.tZ)("h1",null,"ONEKEY"),(0,m.tZ)(u,null))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-ea948e468818de2894b7.js.map