(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{gFsD:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),c=function(){return function(){}}(),a=u("zl1X"),b=u("pMnS"),d=u("8KBR"),t=u("Ip0R"),s=u("xLE1"),o=u("+Xo0"),r=u("0G9f"),i=u("QkwE"),v=u("vAyd"),p=u("mrSG"),h=u("N+3j"),A='\n<div class="clr-row">\n    <div class="clr-col-4">\n        <div class="card card-active clickable">\n            <div class="card-header">\n                I am an active card\n            </div>\n            <div class="card-block">\n                I am also clickable\n            </div>\n        </div>\n    </div>\n    <div class="clr-col-4">\n        <div class="card clickable">\n            <div class="card-header">\n                I am a non active card\n            </div>\n            <div class="card-block">\n                But I am clickable\n            </div>\n        </div>\n    </div>\n    <div class="clr-col-4">\n        <div class="card">\n            <div class="card-header">\n                I am a non active card\n            </div>\n            <div class="card-block">\n                And I am also not clickable\n            </div>\n        </div>\n    </div>\n</div>\n',m='\n<div class="card card-placeholder">\n    <div class="card-header">\n        Placeholder card\n    </div>\n    <div class="card-block">\n        Card block\n        <div>\n            <a class="btn btn-link">Action</a>\n        </div>\n    </div>\n</div>\n',f='\n<div class="card">\n    <div class="card-header">\n        Card header with custom actions\n        <clr-dropdown class="card-actions">\n            <button type="button" class="btn btn-icon btn-link card-action dropdown-toggle" clrDropdownTrigger>\n                <clr-icon shape="ellipsis-vertical"></clr-icon>\n            </button>\n            <clr-dropdown-menu clrPosition="bottom-right" *clrIfOpen>\n                ...\n            </clr-dropdown-menu>\n        </clr-dropdown>\n    </div>\n    <div class="card-block">\n        Card Block\n    </div>\n</div>\n',w=function(l){function n(){var n=l.call(this,"cards")||this;return n.htmlExample=A,n.htmlExamplePlaceholder=m,n.htmlExampleCustomActions=f,n.cards=[{title:"Selectable card",active:!0},{title:"Selectable card",active:!1},{title:"Selectable card",active:!1}],n}return Object(p.c)(n,l),n.prototype.activateCard=function(l){for(var n=0,u=this.cards;n<u.length;n++)u[n].active=!1;this.cards[l].active=!0},n}(h.a),g=e.qb({encapsulation:2,styles:[],data:{}});function K(l){return e.Mb(0,[(l()(),e.sb(0,0,null,null,1,"div",[["class","card-block"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" Click to select me "]))],null,null)}function k(l){return e.Mb(0,[(l()(),e.sb(0,0,null,null,1,"div",[["class","card-block"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" I am the selected card "]))],null,null)}function C(l){return e.Mb(0,[(l()(),e.sb(0,0,null,null,7,"div",[["class","clr-col-4"]],null,null,null,null,null)),(l()(),e.sb(1,0,null,null,6,"div",[["class","card selectable"]],[[2,"card-active",null]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.activateCard(l.context.index)&&e),e},null,null)),(l()(),e.sb(2,0,null,null,1,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),e.Kb(3,null,[" "," "])),(l()(),e.ib(16777216,null,null,1,null,K)),e.rb(5,16384,null,0,t.q,[e.S,e.P],{ngIf:[0,"ngIf"]},null),(l()(),e.ib(16777216,null,null,1,null,k)),e.rb(7,16384,null,0,t.q,[e.S,e.P],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,5,0,!n.context.$implicit.active),l(n,7,0,n.context.$implicit.active)},function(l,n){l(n,1,0,n.context.$implicit.active),l(n,3,0,n.context.$implicit.title)})}function y(l){return e.Mb(0,[(l()(),e.sb(0,0,null,null,17,"clr-dropdown-menu",[["clrPosition","bottom-right"]],[[2,"dropdown-menu",null],[1,"role",0],[2,"is-off-screen",null]],null,null,a.Q,a.v)),e.rb(1,9617408,null,1,s.X,[e.s,[2,s.we],[3,s.X],s.ze],{position:[0,"position"]},null),e.Ib(603979776,1,{items:1}),(l()(),e.sb(3,0,null,0,4,"button",[["clrDropdownItem",""],["type","button"]],[[2,"dropdown-item",null],[1,"role",0]],null,null,null,null)),e.Hb(1024,null,s.Ae,s.Be,[]),e.Hb(512,[[1,4]],s.Ce,s.Ee,[s.Ae,e.l,e.H,e.D]),e.rb(6,4341760,null,0,s.W,[s.V,e.l,s.Yd,e.H,s.Ce],null,null),(l()(),e.Kb(-1,null,[" Edit "])),(l()(),e.sb(8,0,null,0,4,"button",[["clrDropdownItem",""],["type","button"]],[[2,"dropdown-item",null],[1,"role",0]],null,null,null,null)),e.Hb(1024,null,s.Ae,s.Be,[]),e.Hb(512,[[1,4]],s.Ce,s.Ee,[s.Ae,e.l,e.H,e.D]),e.rb(11,4341760,null,0,s.W,[s.V,e.l,s.Yd,e.H,s.Ce],null,null),(l()(),e.Kb(-1,null,[" Duplicate "])),(l()(),e.sb(13,0,null,0,4,"button",[["clrDropdownItem",""],["type","button"]],[[2,"dropdown-item",null],[1,"role",0]],null,null,null,null)),e.Hb(1024,null,s.Ae,s.Be,[]),e.Hb(512,[[1,4]],s.Ce,s.Ee,[s.Ae,e.l,e.H,e.D]),e.rb(16,4341760,null,0,s.W,[s.V,e.l,s.Yd,e.H,s.Ce],null,null),(l()(),e.Kb(-1,null,[" Delete "]))],function(l,n){l(n,1,0,"bottom-right")},function(l,n){l(n,0,0,!0,"menu",e.Cb(n,1).isOffScreen),l(n,3,0,!0,"menuitem"),l(n,8,0,!0,"menuitem"),l(n,13,0,!0,"menuitem")})}function H(l){return e.Mb(0,[(l()(),e.sb(0,0,null,null,100,"clr-doc-wrapper",[],[[2,"dox-wrapper",null]],null,null,o.b,o.a)),e.rb(1,49152,null,0,r.a,[],{title:[0,"title"],newLayout:[1,"newLayout"],ui:[2,"ui"],ng:[3,"ng"]},null),(l()(),e.sb(2,0,null,0,98,"article",[],null,null,null,null,null)),(l()(),e.sb(3,0,null,null,1,"h5",[["class","component-summary"],["id","cards-header"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["The Addons extend the default Clarity cards by providing following additional types:"])),(l()(),e.sb(5,0,null,null,4,"ul",[],null,null,null,null,null)),(l()(),e.sb(6,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Selectable card. The selected stays visually highlighted."])),(l()(),e.sb(8,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Placeholder card. Represents an empty card which can be filled by user actions."])),(l()(),e.sb(10,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Selectable card"])),(l()(),e.sb(12,0,null,null,34,"div",[["id","design-guidelines"]],null,null,null,null,null)),(l()(),e.sb(13,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Behavior"])),(l()(),e.sb(15,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Only one card at the time can have the selection indicator. Compare this behavior to a radio button. Note the different hover style in the example below."])),(l()(),e.sb(17,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Default clickable card (Standard Clarity)"])),(l()(),e.sb(19,0,null,null,9,"div",[["class","clr-row"]],null,null,null,null,null)),(l()(),e.sb(20,0,null,null,8,"div",[["class","clr-col-4"]],null,null,null,null,null)),(l()(),e.sb(21,0,null,null,7,"div",[["class","card clickable"]],null,null,null,null,null)),(l()(),e.sb(22,0,null,null,1,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" Default card "])),(l()(),e.sb(24,0,null,null,4,"div",[["class","card-block"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" See the official "])),(l()(),e.sb(26,0,null,null,1,"a",[["href","https://clarity.design/documentation/cards"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Clarity documentation"])),(l()(),e.Kb(-1,null,[" for details. "])),(l()(),e.sb(29,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Selectable card (Clarity Addons)"])),(l()(),e.sb(31,0,null,null,2,"div",[["class","clr-row"]],null,null,null,null,null)),(l()(),e.ib(16777216,null,null,1,null,C)),e.rb(33,278528,null,0,t.p,[e.S,e.P,e.u],{ngForOf:[0,"ngForOf"]},null),(l()(),e.sb(34,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Usage"])),(l()(),e.sb(36,0,null,null,10,"p",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" On contrast to the default clickable-cards, the selectable card does not start an action, it is only marked as selected. Note that multiple selection is not supported. If you depend on multi-selection, use a different element such as a checkbox. A selectable card should have the class "])),(l()(),e.sb(38,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["selectable"])),(l()(),e.Kb(-1,null,[" instead of the clarity-default "])),(l()(),e.sb(41,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["clickable"])),(l()(),e.Kb(-1,null,[" class. Use the "])),(l()(),e.sb(44,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["card-active"])),(l()(),e.Kb(-1,null,[" class to mark the currently selected one. "])),(l()(),e.sb(47,0,null,null,2,"div",[["id","examples"]],null,null,null,null,null)),(l()(),e.sb(48,0,null,null,1,"clr-code-snippet",[],null,null,null,i.b,i.a)),e.rb(49,4243456,null,0,v.a,[],{code:[0,"code"]},null),(l()(),e.sb(50,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Placeholder card"])),(l()(),e.Kb(-1,null,[" The placeholder card represents an empty card by a dashed border. The style is provided by class "])),(l()(),e.sb(53,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["card-placeholder"])),(l()(),e.Kb(-1,null,[". All buttons inside a placeholder card should be flat (btn-link). "])),(l()(),e.sb(56,0,null,null,9,"div",[["class","clr-row"]],null,null,null,null,null)),(l()(),e.sb(57,0,null,null,8,"div",[["class","clr-col-4"]],null,null,null,null,null)),(l()(),e.sb(58,0,null,null,7,"div",[["class","card card-placeholder"]],null,null,null,null,null)),(l()(),e.sb(59,0,null,null,1,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" Placeholder card "])),(l()(),e.sb(61,0,null,null,4,"div",[["class","card-block"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" Card block "])),(l()(),e.sb(63,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),e.sb(64,0,null,null,1,"a",[["class","btn btn-link"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Action"])),(l()(),e.sb(66,0,null,null,1,"clr-code-snippet",[],null,null,null,i.b,i.a)),e.rb(67,4243456,null,0,v.a,[],{code:[0,"code"]},null),(l()(),e.sb(68,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Card with custom actions"])),(l()(),e.Kb(-1,null,[" To use a card with custom actions, use the classes "])),(l()(),e.sb(71,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["card-actions"])),(l()(),e.Kb(-1,null,[" on the dropdown itself and "])),(l()(),e.sb(74,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["card-action"])),(l()(),e.Kb(-1,null,[" on the dropdown-toggle. "])),(l()(),e.sb(77,0,null,null,21,"div",[["class","clr-row"]],null,null,null,null,null)),(l()(),e.sb(78,0,null,null,20,"div",[["class","clr-col-4"]],null,null,null,null,null)),(l()(),e.sb(79,0,null,null,19,"div",[["class","card"]],null,null,null,null,null)),(l()(),e.sb(80,0,null,null,16,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" Card header with custom actions "])),(l()(),e.sb(82,0,null,null,14,"clr-dropdown",[["class","card-actions"]],[[2,"dropdown",null],[2,"open",null]],null,null,a.R,a.u)),e.Hb(6144,null,s.we,null,[e.l]),e.Hb(6144,null,s.Ce,null,[s.ze]),e.Hb(512,null,s.Fd,s.Fd,[]),e.Hb(1024,null,s.Yd,s.ue,[[3,s.Yd]]),e.rb(87,180224,null,0,s.V,[[3,s.V],s.Fd,e.h,s.Yd],null,null),e.Hb(1024,null,s.Ae,s.Be,[]),e.Hb(1024,null,s.xe,s.ye,[[3,s.xe],e.H]),e.Hb(512,null,s.ze,s.ze,[s.Ae,e.H,[3,s.ze],s.Fd,s.xe,e.D]),(l()(),e.sb(91,0,null,0,3,"button",[["class","btn btn-icon btn-link card-action dropdown-toggle"],["clrDropdownTrigger",""],["type","button"]],[[2,"dropdown-toggle",null],[2,"dropdown-item",null],[2,"expandable",null],[2,"active",null],[1,"aria-haspopup",0],[1,"aria-expanded",0]],[[null,"click"]],function(l,n,u){var c=!0;return"click"===n&&(c=!1!==e.Cb(l,92).onDropdownTriggerClick(u)&&c),c},null,null)),e.rb(92,16384,null,0,s.Z,[s.V,s.Fd,e.l,s.ze],null,null),(l()(),e.sb(93,0,null,null,1,"clr-icon",[["shape","ellipsis-vertical"]],null,null,null,null,null)),e.rb(94,16384,null,0,s.fb,[],null,null),(l()(),e.ib(16777216,null,0,1,null,y)),e.rb(96,147456,null,0,s.ib,[s.Fd,e.P,e.S],{open:[0,"open"]},null),(l()(),e.sb(97,0,null,null,1,"div",[["class","card-block"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" Card Block "])),(l()(),e.sb(99,0,null,null,1,"clr-code-snippet",[],null,null,null,i.b,i.a)),e.rb(100,4243456,null,0,v.a,[],{code:[0,"code"]},null)],function(l,n){var u=n.component;l(n,1,0,u.title,u.newLayout,u.ui,u.ng),l(n,33,0,u.cards),l(n,49,0,u.htmlExample),l(n,67,0,u.htmlExamplePlaceholder),l(n,96,0,null),l(n,100,0,u.htmlExampleCustomActions)},function(l,n){l(n,0,0,!0),l(n,82,0,!0,!0),l(n,91,0,e.Cb(n,92).isRootLevelToggle,!e.Cb(n,92).isRootLevelToggle,!e.Cb(n,92).isRootLevelToggle,e.Cb(n,92).active,"menu",e.Cb(n,92).active)})}function x(l){return e.Mb(0,[(l()(),e.sb(0,0,null,null,1,"clr-cards-demo",[],[[2,"content-area",null],[2,"dox-content-panel",null]],null,null,H,g)),e.rb(1,49152,null,0,w,[],null,null)],null,function(l,n){l(n,0,0,!0,!0)})}var I=e.ob("clr-cards-demo",w,x,{},{},[]),D=u("gIcY"),S=u("6/Z3"),T=u("XPsC"),F=u("ZYCi"),P=u("JsA7");u.d(n,"CardsDemoModuleNgFactory",function(){return E});var E=e.pb(c,[],function(l){return e.zb([e.Ab(512,e.j,e.db,[[8,[a.ab,a.a,a.b,a.d,a.e,a.f,a.g,a.h,a.c,a.bb,a.cb,a.db,a.eb,b.a,d.a,I]],[3,e.j],e.z]),e.Ab(4608,t.s,t.r,[e.w,[2,t.K]]),e.Ab(4608,D.D,D.D,[]),e.Ab(4608,S.f,S.f,[]),e.Ab(1073742336,t.c,t.c,[]),e.Ab(1073742336,D.C,D.C,[]),e.Ab(1073742336,D.k,D.k,[]),e.Ab(1073742336,s.gb,s.gb,[]),e.Ab(1073742336,s.Hc,s.Hc,[]),e.Ab(1073742336,s.Fe,s.Fe,[]),e.Ab(1073742336,s.Y,s.Y,[]),e.Ab(1073742336,s.i,s.i,[]),e.Ab(1073742336,s.ab,s.ab,[]),e.Ab(1073742336,s.u,s.u,[]),e.Ab(1073742336,s.Qc,s.Qc,[]),e.Ab(1073742336,s.s,s.s,[]),e.Ab(1073742336,s.Tc,s.Tc,[]),e.Ab(1073742336,s.O,s.O,[]),e.Ab(1073742336,s.lb,s.lb,[]),e.Ab(1073742336,s.Bb,s.Bb,[]),e.Ab(1073742336,s.Fb,s.Fb,[]),e.Ab(1073742336,s.Jb,s.Jb,[]),e.Ab(1073742336,s.dc,s.dc,[]),e.Ab(1073742336,s.db,s.db,[]),e.Ab(1073742336,s.rb,s.rb,[]),e.Ab(1073742336,s.dd,s.dd,[]),e.Ab(1073742336,s.gd,s.gd,[]),e.Ab(1073742336,s.S,s.S,[]),e.Ab(1073742336,s.H,s.H,[]),e.Ab(1073742336,s.Tb,s.Tb,[]),e.Ab(1073742336,s.jc,s.jc,[]),e.Ab(1073742336,s.y,s.y,[]),e.Ab(1073742336,s.vb,s.vb,[]),e.Ab(1073742336,s.qb,s.qb,[]),e.Ab(1073742336,s.n,s.n,[]),e.Ab(1073742336,s.o,s.o,[]),e.Ab(1073742336,s.tb,s.tb,[]),e.Ab(1073742336,s.yb,s.yb,[]),e.Ab(1073742336,s.de,s.de,[]),e.Ab(1073742336,s.ac,s.ac,[]),e.Ab(1073742336,s.oc,s.oc,[]),e.Ab(1073742336,s.ob,s.ob,[]),e.Ab(1073742336,s.Mb,s.Mb,[]),e.Ab(1073742336,s.gc,s.gc,[]),e.Ab(1073742336,s.Cb,s.Cb,[]),e.Ab(1073742336,s.sc,s.sc,[]),e.Ab(1073742336,s.se,s.se,[]),e.Ab(1073742336,s.re,s.re,[]),e.Ab(1073742336,s.a,s.a,[]),e.Ab(1073742336,T.a,T.a,[]),e.Ab(1073742336,F.p,F.p,[[2,F.u],[2,F.l]]),e.Ab(1073742336,P.a,P.a,[]),e.Ab(1073742336,S.cb,S.cb,[]),e.Ab(1073742336,S.M,S.M,[]),e.Ab(1073742336,S.s,S.s,[]),e.Ab(1073742336,S.K,S.K,[]),e.Ab(1073742336,S.h,S.h,[]),e.Ab(1073742336,S.e,S.e,[]),e.Ab(1073742336,S.w,S.w,[]),e.Ab(1073742336,S.o,S.o,[]),e.Ab(1073742336,S.C,S.C,[]),e.Ab(1073742336,S.u,S.u,[]),e.Ab(1073742336,S.c,S.c,[]),e.Ab(1073742336,S.F,S.F,[]),e.Ab(1073742336,S.T,S.T,[]),e.Ab(1073742336,S.Y,S.Y,[]),e.Ab(1073742336,S.O,S.O,[]),e.Ab(1073742336,S.j,S.j,[]),e.Ab(1073742336,S.q,S.q,[]),e.Ab(1073742336,S.Q,S.Q,[]),e.Ab(1073742336,S.lb,S.lb,[]),e.Ab(1073742336,S.z,S.z,[]),e.Ab(1073742336,S.a,S.a,[]),e.Ab(1073742336,c,c,[]),e.Ab(1024,F.j,function(){return[[{path:"",component:w}]]},[])])})}}]);