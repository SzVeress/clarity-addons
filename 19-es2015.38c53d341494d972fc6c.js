(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{Qy6K:function(e,t,l){"use strict";l.r(t),l.d(t,"MultilingualInputDemoModule",(function(){return E}));var r=l("SVse"),a=l("s7LF"),c=l("iInd"),n=l("X69f"),o=l("QgOn"),i=l("XPsC"),b=l("JsA7"),s=l("N+3j"),d=l("8Y7J"),u=l("0G9f"),p=l("vAyd");const m=function(){return{updateOn:"blur"}};let g=(()=>{class e extends s.a{constructor(){super("multilingual-input"),this.templateExample='\n<clr-multilingual-input class="clr-col-12 clr-row" clrSelectedLang="EN" [(ngModel)]="data1"\n    [ngModelOptions]="{ updateOn: \'blur\' }" clrRequiredAllMultilang clrControlClasses="clr-col-md-5" name="template1">\n    <label class="clr-col-md-2 required">Template</label>\n    <clr-control-error>Please translate in every language!</clr-control-error>\n    <clr-control-helper>Helper text</clr-control-helper>\n</clr-multilingual-input>\n<clr-multilingual-textarea class="clr-col-12 clr-row" clrSelectedLang="EN" [(ngModel)]="data2"\n    [ngModelOptions]="{ updateOn: \'blur\' }" clrRequiredAllMultilang clrControlClasses="clr-col-md-5" name="template2">\n    <label class="clr-col-md-2 required">Template</label>\n    <clr-control-error>Please translate in every language!</clr-control-error>\n    <clr-control-helper>Helper text</clr-control-helper>\n</clr-multilingual-textarea>\n',this.templateTSExample='\ndata1 = new Map();\nthis.data1.set("EN", "english text");\nthis.data1.set("DE", "deutscher text");\nthis.data1.set("FR", "texte fran\xe7ais");\n',this.reactiveExample='\n<form clrForm [formGroup]="exampleForm">\n    <clr-multilingual-input class="clr-col-12 clr-row" clrSelectedLang="EN" formControlName="sample1"\n        clrControlClasses="clr-col-md-5" name="reactive1">\n\n        <label class="clr-col-md-2 required">Reactive</label>\n        <clr-control-helper>Helper text</clr-control-helper>\n        <clr-control-error>Please translate in every language!</clr-control-error>\n    </clr-multilingual-input>\n    <clr-multilingual-textarea class="clr-col-12 clr-row" clrSelectedLang="EN" formControlName="sample2"\n        clrControlClasses="clr-col-md-5" name="reactive2">\n\n        <label class="clr-col-md-2 required">Reactive</label>\n        <clr-control-helper>Helper text</clr-control-helper>\n        <clr-control-error>Please translate in every language!</clr-control-error>\n    </clr-multilingual-textarea>\n</form>\n',this.reactiveTSExample='\nreactiveData1 = new Map();\nthis.reactiveData1.set("EN", "english text");\nthis.reactiveData1.set("DE", "deutscher text");\nthis.reactiveData1.set("FR", "texte fran\xe7ais");\n\nexampleForm = new FormGroup({\n  sample1: new FormControl(this.reactiveData1, {\n    updateOn: "blur",\n    validators: [ClrMultilingualInputValidators.requiredAll()]\n  })\n});\n',this.data1=new Map,this.data2=new Map,this.reactiveData1=new Map,this.reactiveData2=new Map,this.exampleForm=new a.e({sample1:new a.c(this.reactiveData1,{updateOn:"blur",validators:[o.t.requiredAll()]}),sample2:new a.c(this.reactiveData2,{updateOn:"blur",validators:[o.t.requiredAll()]})})}ngOnInit(){this.data1.set("EN","english text"),this.data1.set("DE","deutscher text"),this.data1.set("FR","texte fran\xe7ais"),this.data2.set("EN","english text\nSecond line with a little more text"),this.data2.set("DE","deutscher text\nZweite Zeile mit etwas mehr Text"),this.data2.set("FR","texte fran\xe7ais\nDeuxi\xe8me ligne avec un peu plus de texte"),this.reactiveData1.set("EN","english text"),this.reactiveData1.set("DE","deutscher text"),this.reactiveData1.set("FR","texte fran\xe7ais"),this.reactiveData2.set("EN","english text\nSecond line with a little more text"),this.reactiveData2.set("DE","deutscher text\nZweite Zeile mit etwas mehr Text"),this.reactiveData2.set("FR","texte fran\xe7ais\nDeuxi\xe8me ligne avec un peu plus de texte")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d.Gb({type:e,selectors:[["clr-multilingual-demo"]],hostVars:4,hostBindings:function(e,t){2&e&&d.Db("content-area",!0)("dox-content-panel",!0)},features:[d.xb],decls:162,vars:27,consts:[[3,"ng","ui","title","newLayout"],[1,"component-summary"],["id","code-examples"],["id","examples"],[1,"clr-code"],[1,"table"],[1,"left"],[1,"left","clr-hidden-xs-down"],[1,"clr-hidden-xs-down"],[1,"clr-hidden-sm-up"],["clrForm","",3,"formGroup"],["clrSelectedLang","EN","formControlName","sample1","clrControlClasses","clr-col-md-5","name","reactive1",1,"clr-col-12","clr-row"],[1,"clr-col-md-2","required"],["clrSelectedLang","EN","formControlName","sample2","clrControlClasses","clr-col-md-5","name","reactive2",1,"clr-col-12","clr-row"],[1,"clr-row"],[1,"clr-col-4"],[1,"clr-col-8"],[3,"clrCode"],["clrLanguage","typescript",3,"clrCode"],["clrForm",""],["clrSelectedLang","EN","clrRequiredAllMultilang","","clrControlClasses","clr-col-md-5","name","template1",1,"clr-col-12","clr-row",3,"ngModel","ngModelOptions","ngModelChange"],["clrSelectedLang","EN","clrRequiredAllMultilang","","clrControlClasses","clr-col-md-5","name","template2",1,"clr-col-12","clr-row",3,"ngModel","ngModelOptions","ngModelChange"]],template:function(e,t){1&e&&(d.Sb(0,"clr-doc-wrapper",0),d.Sb(1,"article"),d.Sb(2,"h5",1),d.Ec(3,"The multilingual input/textarea fields are used to enter texts in different languages."),d.Rb(),d.Sb(4,"div",2),d.Sb(5,"h3",3),d.Ec(6,"Code & Examples"),d.Rb(),d.Sb(7,"p"),d.Ec(8," The multilingual input/textarea components require you to use custom validators: "),d.Rb(),d.Sb(9,"ul"),d.Sb(10,"li"),d.Ec(11," Reactive forms: "),d.Sb(12,"code",4),d.Ec(13,"ClrMultilingualInputValidators"),d.Rb(),d.Rb(),d.Sb(14,"li"),d.Ec(15," Template-driven forms: "),d.Sb(16,"code",4),d.Ec(17,"clrRequiredOneMultilang, clrRequiredAllMultilang"),d.Rb(),d.Rb(),d.Rb(),d.Sb(18,"h2"),d.Ec(19,"Angular Component"),d.Rb(),d.Sb(20,"h3"),d.Ec(21,"Summary of Options"),d.Rb(),d.Sb(22,"table",5),d.Sb(23,"thead"),d.Sb(24,"tr"),d.Sb(25,"th",6),d.Ec(26,"Parameter"),d.Rb(),d.Sb(27,"th",7),d.Ec(28,"Values"),d.Rb(),d.Sb(29,"th",8),d.Ec(30,"Default"),d.Rb(),d.Sb(31,"th",6),d.Ec(32,"Effect"),d.Rb(),d.Rb(),d.Rb(),d.Sb(33,"tbody"),d.Sb(34,"tr"),d.Sb(35,"td",6),d.Sb(36,"b"),d.Ec(37,"value binding (ngModel or reactive)"),d.Rb(),d.Sb(38,"div",9),d.Ec(39,"Type: Map<string, string>"),d.Rb(),d.Sb(40,"div",9),d.Ec(41,"Default: null"),d.Rb(),d.Rb(),d.Sb(42,"td",7),d.Ec(43,"Map of language and translation"),d.Rb(),d.Sb(44,"td",8),d.Ec(45,"null"),d.Rb(),d.Sb(46,"td",6),d.Ec(47,"Value binding for control represented by a map of language as key and translation as value."),d.Rb(),d.Rb(),d.Sb(48,"tr"),d.Sb(49,"td",6),d.Sb(50,"b"),d.Ec(51,"[clrSelectedLang]"),d.Rb(),d.Sb(52,"div",9),d.Ec(53,"Type: String"),d.Rb(),d.Sb(54,"div",9),d.Ec(55,'Default: ""'),d.Rb(),d.Rb(),d.Sb(56,"td",7),d.Ec(57,"Javascript String"),d.Rb(),d.Sb(58,"td",8),d.Ec(59,'""'),d.Rb(),d.Sb(60,"td",6),d.Ec(61,"Defines the currently selected language."),d.Rb(),d.Rb(),d.Sb(62,"tr"),d.Sb(63,"td",6),d.Sb(64,"b"),d.Ec(65,"[clrControlClasses]"),d.Rb(),d.Sb(66,"div",9),d.Ec(67,"Type: String"),d.Rb(),d.Sb(68,"div",9),d.Ec(69,'Default: "clr-col-md-10"'),d.Rb(),d.Rb(),d.Sb(70,"td",7),d.Ec(71,"Javascript String"),d.Rb(),d.Sb(72,"td",8),d.Ec(73,'"clr-col-md-10"'),d.Rb(),d.Sb(74,"td",6),d.Ec(75,"Defines the css classes applied to the input control."),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Sb(76,"h3"),d.Ec(77,"Reactive forms"),d.Rb(),d.Sb(78,"p"),d.Ec(79,"Validation will happen on blur"),d.Rb(),d.Sb(80,"form",10),d.Sb(81,"clr-multilingual-input",11),d.Sb(82,"label",12),d.Ec(83,"Reactive"),d.Rb(),d.Sb(84,"clr-control-helper"),d.Ec(85,"Helper text"),d.Rb(),d.Sb(86,"clr-control-error"),d.Ec(87,"Please translate in every language!"),d.Rb(),d.Rb(),d.Sb(88,"clr-multilingual-textarea",13),d.Sb(89,"label",12),d.Ec(90,"Reactive"),d.Rb(),d.Sb(91,"clr-control-helper"),d.Ec(92,"Helper text"),d.Rb(),d.Sb(93,"clr-control-error"),d.Ec(94,"Please translate in every language!"),d.Rb(),d.Rb(),d.Sb(95,"h4"),d.Ec(96,"Output texts"),d.Rb(),d.Sb(97,"div",14),d.Sb(98,"div",15),d.Sb(99,"b"),d.Ec(100,"Input"),d.Rb(),d.Nb(101,"br"),d.Ec(102),d.Nb(103,"br"),d.Ec(104),d.Nb(105,"br"),d.Ec(106),d.Rb(),d.Sb(107,"div",16),d.Sb(108,"b"),d.Ec(109,"Textarea"),d.Rb(),d.Nb(110,"br"),d.Ec(111),d.Nb(112,"br"),d.Ec(113),d.Nb(114,"br"),d.Ec(115),d.Rb(),d.Rb(),d.Rb(),d.Nb(116,"clr-code-snippet",17),d.Nb(117,"clr-code-snippet",18),d.Sb(118,"h3"),d.Ec(119,"Template driven"),d.Rb(),d.Sb(120,"p"),d.Ec(121,"Validation will happen on blur"),d.Rb(),d.Sb(122,"form",19),d.Sb(123,"clr-multilingual-input",20),d.ac("ngModelChange",(function(e){return t.data1=e})),d.Sb(124,"label",12),d.Ec(125,"Template"),d.Rb(),d.Sb(126,"clr-control-error"),d.Ec(127,"Please translate in every language!"),d.Rb(),d.Sb(128,"clr-control-helper"),d.Ec(129,"Helper text"),d.Rb(),d.Rb(),d.Sb(130,"clr-multilingual-textarea",21),d.ac("ngModelChange",(function(e){return t.data2=e})),d.Sb(131,"label",12),d.Ec(132,"Template"),d.Rb(),d.Sb(133,"clr-control-error"),d.Ec(134,"Please translate in every language!"),d.Rb(),d.Sb(135,"clr-control-helper"),d.Ec(136,"Helper text"),d.Rb(),d.Rb(),d.Sb(137,"h4"),d.Ec(138,"Output texts"),d.Rb(),d.Sb(139,"div",14),d.Sb(140,"div",15),d.Sb(141,"b"),d.Ec(142,"Input"),d.Rb(),d.Nb(143,"br"),d.Ec(144),d.Nb(145,"br"),d.Ec(146),d.Nb(147,"br"),d.Ec(148),d.Rb(),d.Sb(149,"div",16),d.Sb(150,"b"),d.Ec(151,"Textarea"),d.Rb(),d.Nb(152,"br"),d.Ec(153),d.Nb(154,"br"),d.Ec(155),d.Nb(156,"br"),d.Ec(157),d.Rb(),d.Rb(),d.Sb(158,"h4"),d.Ec(159,"Output texts"),d.Rb(),d.Rb(),d.Nb(160,"clr-code-snippet",17),d.Nb(161,"clr-code-snippet",18),d.Rb(),d.Rb(),d.Rb()),2&e&&(d.kc("ng",t.ng)("ui",t.ui)("title",t.title)("newLayout",t.newLayout),d.Ab(80),d.kc("formGroup",t.exampleForm),d.Ab(22),d.Gc(" EN: ",t.exampleForm.get("sample1").value.get("EN"),""),d.Ab(2),d.Gc(" DE: ",t.exampleForm.get("sample1").value.get("DE"),""),d.Ab(2),d.Gc(" FR: ",t.exampleForm.get("sample1").value.get("FR")," "),d.Ab(5),d.Gc(" EN: ",t.exampleForm.get("sample2").value.get("EN"),""),d.Ab(2),d.Gc(" DE: ",t.exampleForm.get("sample2").value.get("DE"),""),d.Ab(2),d.Gc(" FR: ",t.exampleForm.get("sample2").value.get("FR")," "),d.Ab(1),d.kc("clrCode",t.reactiveExample),d.Ab(1),d.kc("clrCode",t.reactiveTSExample),d.Ab(6),d.kc("ngModel",t.data1)("ngModelOptions",d.oc(25,m)),d.Ab(7),d.kc("ngModel",t.data2)("ngModelOptions",d.oc(26,m)),d.Ab(14),d.Gc(" EN: ",t.data1.get("EN"),""),d.Ab(2),d.Gc(" DE: ",t.data1.get("DE"),""),d.Ab(2),d.Gc(" FR: ",t.data1.get("FR")," "),d.Ab(5),d.Gc(" EN: ",t.data2.get("EN"),""),d.Ab(2),d.Gc(" DE: ",t.data2.get("DE"),""),d.Ab(2),d.Gc(" FR: ",t.data2.get("FR")," "),d.Ab(3),d.kc("clrCode",t.templateExample),d.Ab(1),d.kc("clrCode",t.templateTSExample))},directives:[u.a,a.A,a.n,n.u,a.f,o.s,a.m,a.d,n.D,n.j,n.i,o.v,p.a,a.o,o.G,a.p],encapsulation:2}),e})(),E=(()=>{class e{}return e.\u0275mod=d.Kb({type:e}),e.\u0275inj=d.Jb({factory:function(t){return new(t||e)},imports:[[r.c,a.h,a.u,n.a,n.v,i.a,b.a,c.g.forChild([{path:"",component:g}]),o.a]]}),e})()}}]);