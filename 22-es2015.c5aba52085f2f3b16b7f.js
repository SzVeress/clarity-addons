(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{vVo6:function(e,l,r){"use strict";r.r(l),r.d(l,"NumericFieldDemoModule",(function(){return S}));var c=r("SVse"),t=r("s7LF"),n=r("iInd"),o=r("X69f"),a=r("QgOn"),i=r("XPsC"),b=r("JsA7"),u=r("N+3j"),m=r("8Y7J"),d=r("0G9f"),s=r("vAyd");let p=(()=>{class e extends u.a{constructor(){super("numericfield"),this.htmlExample='\n<form clrForm clrLayout="vertical" [formGroup]="exampleForm">\n    <clr-input-container>\n        <label>Money</label>\n        <input clrInput clrNumeric\n               type="text"\n               formControlName="money"\n               [clrUnit]="\'\u20ac\'"\n               [clrAutofillDecimals]="true"/>\n        <clr-control-error>Please enter a value between 0 and 10.000</clr-control-error>\n    </clr-input-container>\n    <clr-input-container>\n        <label>Percentage</label>\n        <input clrInput clrNumeric\n               type="text"\n               formControlName="percentage"\n               [clrUnit]="\'%\'"\n               [clrDecimalPlaces]="0"/>\n        <clr-control-error>Please enter a value between 0 and 100</clr-control-error>\n    </clr-input-container>\n</form>\n',this.htmlExample2='\n<form clrForm>\n    <clr-input-container>\n        <label>Money</label>\n        <input clrInput clrNumeric\n               class="clr-col-xl-2 clr-col-md-3 clr-col-sm-12"\n               type="text"\n               [clrUnit]="\'\u20ac\'"\n               [(ngModel)]="money"\n               [clrAutofillDecimals]="true"/>\n        <clr-control-error>Please enter a value between 0 and 10.000</clr-control-error>\n    </clr-input-container>\n    <clr-input-container>\n        <label>Percentage</label>\n        <input clrInput clrNumeric\n               class="clr-col-xl-2 clr-col-md-3 clr-col-sm-12"\n               type="text"\n               [clrUnit]="\'%\'"\n               [(ngModel)]="percentage"\n               [clrDecimalPlaces]="0"/>\n        <clr-control-error>Please enter a value between 0 and 100</clr-control-error>\n    </clr-input-container>\n</form>\n',this.htmlExample3='\n<form clrForm>\n    <clr-input-container>\n        <label>Money</label>\n        <input clrInput clrNumeric\n               class="clr-col-xl-2 clr-col-md-3 clr-col-sm-12"\n               type="text"\n               [clrUnit]="\'\u20ac\'"\n               [clrUnitPosition]="\'left\'"\n               [clrAutofillDecimals]="true"/>\n        <clr-control-error>Please enter a value between 0 and 10.000</clr-control-error>\n    </clr-input-container>\n</form>\n',this.htmlExample4='\n<form clrForm [formGroup]="exampleForm2">\n    <clr-input-container>\n        <label>Rounded Value</label>\n        <input clrInput clrNumeric\n               class="clr-col-xl-2 clr-col-md-3 clr-col-sm-12"\n               type="text"\n               formControlName="money1"\n               [clrUnit]="\'\u20ac\'"\n               [clrRoundDisplayValue]="true"\n               [clrAutofillDecimals]="true"/>\n        <clr-control-error>Please enter a value between 0 and 100</clr-control-error>\n    </clr-input-container>\n    <clr-input-container>\n        <label>Original Value</label>\n        <input clrInput clrNumeric\n               class="clr-col-xl-2 clr-col-md-3 clr-col-sm-12"\n               type="text"\n               formControlName="money2"\n               [clrUnit]="\'\u20ac\'"\n               [clrDecimalPlaces]="5"\n               [clrAutofillDecimals]="true"/>\n        <clr-control-error>Please enter a value between 0 and 100</clr-control-error>\n    </clr-input-container>\n</form>\n',this.tsExample='\nimport { FormControl, FormGroup, Validators } from "@angular/forms";\nimport { ClrNumericFieldValidators } from "@porscheinformatik/clr-addons";\n\nexampleForm = new FormGroup({\n    money: new FormControl(undefined, {\n        validators: [ClrNumericFieldValidators.min(0, ".", ","), ClrNumericFieldValidators.max(10000, ".", ","), Validators.required],\n        updateOn: "blur",\n    }),\n    percentage: new FormControl(undefined, {\n        validators: [ClrNumericFieldValidators.min(0, ".", ","), ClrNumericFieldValidators.max(100, ".", ","), Validators.required],\n        updateOn: "blur",\n    }),\n});\n',this.exampleForm=new t.e({money:new t.c(void 0,{validators:[a.z.min(0,".",","),a.z.max(1e4,".",","),t.y.required],updateOn:"blur"}),percentage:new t.c(void 0,{validators:[a.z.min(0,".",","),a.z.max(100,".",","),t.y.required],updateOn:"blur"})}),this.exampleForm2=new t.e({money1:new t.c(89.99999,{validators:[a.z.min(0,".",","),a.z.max(100,".",","),t.y.required],updateOn:"blur"}),money2:new t.c(89.99999,{validators:[a.z.min(0,".",","),a.z.max(100,".",","),t.y.required],updateOn:"blur"})}),this.usageForm=new t.e({money:new t.c(void 0,{validators:[a.z.min(0,".",","),t.y.required],updateOn:"blur"}),weight:new t.c(void 0,{validators:[a.z.min(0,".",","),t.y.required],updateOn:"blur"}),emission:new t.c(void 0,{validators:[a.z.min(0,".",","),t.y.required],updateOn:"blur"}),kilometres:new t.c(void 0,{validators:[a.z.min(0,".",","),t.y.required],updateOn:"blur"}),cubic:new t.c(void 0,{validators:[a.z.min(0,".",","),t.y.required],updateOn:"blur"}),millimetres:new t.c(void 0,{validators:[t.y.required],updateOn:"blur"}),kilowatt:new t.c(void 0,{validators:[a.z.min(0,".",","),t.y.required],updateOn:"blur"}),timeunit:new t.c(void 0,{validators:[a.z.min(0,".",","),t.y.required],updateOn:"blur"}),horsepower:new t.c(void 0,{validators:[a.z.min(0,".",","),t.y.required],updateOn:"blur"}),percentage:new t.c(void 0,{validators:[a.z.min(0,".",","),a.z.max(100,".",","),t.y.required],updateOn:"blur"})})}}return e.\u0275fac=function(l){return new(l||e)},e.\u0275cmp=m.Gb({type:e,selectors:[["clr-numericfield-demo"]],hostVars:4,hostBindings:function(e,l){2&e&&m.Db("content-area",!0)("dox-content-panel",!0)},features:[m.xb],decls:364,vars:42,consts:[[3,"ng","ui","title","newLayout"],[1,"component-summary"],["id","usage"],[1,"list"],["clrForm","","clrLayout","horizontal",3,"formGroup"],["clrInput","","clrNumeric","","type","text","clrUnit","\u20ac","formControlName","money",1,"clr-col-xl-2","clr-col-md-3","clr-col-sm-12",3,"clrAutofillDecimals"],["clrInput","","clrNumeric","","type","text","clrUnit","kg","formControlName","weight",1,"clr-col-xl-2","clr-col-md-3","clr-col-sm-12"],["clrInput","","clrNumeric","","type","text","clrUnit","g/km","formControlName","emission",1,"clr-col-xl-2","clr-col-md-3","clr-col-sm-12",3,"clrDecimalPlaces"],["clrInput","","clrNumeric","","type","text","clrUnit","km","formControlName","kilometres",1,"clr-col-xl-2","clr-col-md-3","clr-col-sm-12",3,"clrDecimalPlaces"],["clrInput","","clrNumeric","","type","text","clrUnit","cc","formControlName","cubic",1,"clr-col-xl-2","clr-col-md-3","clr-col-sm-12",3,"clrDecimalPlaces"],["clrInput","","clrNumeric","","type","text","clrUnit","mm","formControlName","millimetres",1,"clr-col-xl-2","clr-col-md-3","clr-col-sm-12",3,"clrDecimalPlaces"],["clrInput","","clrNumeric","","type","text","clrUnit","kW","formControlName","kilowatt",1,"clr-col-xl-2","clr-col-md-3","clr-col-sm-12",3,"clrDecimalPlaces"],["clrInput","","clrNumeric","","type","text","clrUnit","TU","formControlName","timeunit",1,"clr-col-xl-2","clr-col-md-3","clr-col-sm-12"],["clrInput","","clrNumeric","","type","text","clrUnit","hp","formControlName","horsepower",1,"clr-col-xl-2","clr-col-md-3","clr-col-sm-12",3,"clrDecimalPlaces"],["clrInput","","clrNumeric","","type","text","clrUnit","%","formControlName","percentage",1,"clr-col-xl-2","clr-col-md-3","clr-col-sm-12",3,"clrDecimalPlaces"],[1,"clr-row"],[1,"clr-col-md-12","clr-col-lg-6"],[1,"clrweb-DoxMedia","is-do-block"],[1,"clrweb-DoxMedia-block"],["clrForm","","clrLayout","horizontal"],[1,"clr-col-4"],["clrInput","","clrNumeric","","type","text","clrUnit","\u20ac",1,"clr-col-md-5","clr-col-sm-12",3,"clrAutofillDecimals"],[1,"clrweb-DoxMedia-text"],[1,"clrweb-DoxMedia-do-dont"],[1,"clrweb-DoxMedia","is-dont-block"],["clrInput","","type","text",1,"clr-col-md-5","clr-col-sm-12"],["id","code-examples"],["id","examples"],[1,"clr-code"],[1,"table"],[1,"left"],[1,"left","clr-hidden-xs-down"],[1,"clr-hidden-xs-down"],[1,"clr-hidden-sm-up"],["clrForm","","clrLayout","vertical",3,"formGroup"],["clrInput","","clrNumeric","","type","text","formControlName","money",3,"clrUnit","clrAutofillDecimals"],["clrInput","","clrNumeric","","type","text","formControlName","percentage",3,"clrUnit","clrDecimalPlaces"],[3,"clrCode"],["clrLanguage","typescript",3,"clrCode"],["clrForm",""],["clrInput","","clrNumeric","","type","text","name","money",1,"clr-col-xl-2","clr-col-md-3","clr-col-sm-12",3,"clrUnit","ngModel","clrAutofillDecimals","ngModelChange"],["clrInput","","clrNumeric","","type","text","name","percentage",1,"clr-col-xl-2","clr-col-md-3","clr-col-sm-12",3,"clrUnit","ngModel","clrDecimalPlaces","ngModelChange"],["clrInput","","clrNumeric","","type","text",1,"clr-col-xl-2","clr-col-md-3","clr-col-sm-12",3,"clrUnit","clrUnitPosition","clrAutofillDecimals"],["clrForm","",3,"formGroup"],["clrInput","","clrNumeric","","type","text","formControlName","money1",1,"clr-col-xl-2","clr-col-md-3","clr-col-sm-12",3,"clrUnit","clrRoundDisplayValue","clrAutofillDecimals"],["clrInput","","clrNumeric","","type","text","formControlName","money2",1,"clr-col-xl-2","clr-col-md-3","clr-col-sm-12",3,"clrUnit","clrDecimalPlaces","clrAutofillDecimals"]],template:function(e,l){1&e&&(m.Sb(0,"clr-doc-wrapper",0),m.Sb(1,"article"),m.Sb(2,"h5",1),m.Ec(3,"The Numeric Field is used to enter numeric values of a certain type."),m.Rb(),m.Sb(4,"h3",2),m.Ec(5,"Usage"),m.Rb(),m.Sb(6,"ul"),m.Sb(7,"li"),m.Ec(8,"Invalid characters are ignored during input."),m.Rb(),m.Sb(9,"li"),m.Ec(10,"Amount of decimal places should be defined according to the input type and usecase. "),m.Rb(),m.Sb(11,"li"),m.Ec(12,"Decimal separator and grouping separator should be set according to locale."),m.Rb(),m.Rb(),m.Sb(13,"h3"),m.Ec(14,"Use when"),m.Rb(),m.Sb(15,"ul",3),m.Sb(16,"li"),m.Ec(17,"One of the following inputs is required from the user:"),m.Rb(),m.Rb(),m.Sb(18,"form",4),m.Sb(19,"clr-input-container"),m.Sb(20,"label"),m.Ec(21,"Money Amount"),m.Rb(),m.Nb(22,"input",5),m.Sb(23,"clr-control-error"),m.Ec(24,"Please enter a value greater than or equal to 0"),m.Rb(),m.Rb(),m.Sb(25,"clr-input-container"),m.Sb(26,"label"),m.Ec(27,"Weight"),m.Rb(),m.Nb(28,"input",6),m.Sb(29,"clr-control-error"),m.Ec(30,"Please enter a value greater than or equal to 0"),m.Rb(),m.Rb(),m.Sb(31,"clr-input-container"),m.Sb(32,"label"),m.Ec(33,"Emission"),m.Rb(),m.Nb(34,"input",7),m.Sb(35,"clr-control-error"),m.Ec(36,"Please enter a value greater than or equal to 0"),m.Rb(),m.Rb(),m.Sb(37,"clr-input-container"),m.Sb(38,"label"),m.Ec(39,"Kilometer Reading"),m.Rb(),m.Nb(40,"input",8),m.Sb(41,"clr-control-error"),m.Ec(42,"Please enter a value greater than or equal to 0"),m.Rb(),m.Rb(),m.Sb(43,"clr-input-container"),m.Sb(44,"label"),m.Ec(45,"Cubic Capacity"),m.Rb(),m.Nb(46,"input",9),m.Sb(47,"clr-control-error"),m.Ec(48,"Please enter a value greater than or equal to 0"),m.Rb(),m.Rb(),m.Sb(49,"clr-input-container"),m.Sb(50,"label"),m.Ec(51,"Millimeter"),m.Rb(),m.Nb(52,"input",10),m.Sb(53,"clr-control-error"),m.Ec(54,"Please enter a value greater than or equal to 0"),m.Rb(),m.Rb(),m.Sb(55,"clr-input-container"),m.Sb(56,"label"),m.Ec(57,"Kilowatt"),m.Rb(),m.Nb(58,"input",11),m.Sb(59,"clr-control-error"),m.Ec(60,"Please enter a value greater than or equal to 0"),m.Rb(),m.Rb(),m.Sb(61,"clr-input-container"),m.Sb(62,"label"),m.Ec(63,"Timeunit"),m.Rb(),m.Nb(64,"input",12),m.Sb(65,"clr-control-error"),m.Ec(66,"Please enter a value greater than or equal to 0"),m.Rb(),m.Rb(),m.Sb(67,"clr-input-container"),m.Sb(68,"label"),m.Ec(69,"Horsepower"),m.Rb(),m.Nb(70,"input",13),m.Sb(71,"clr-control-error"),m.Ec(72,"Please enter a value greater than or equal to 0"),m.Rb(),m.Rb(),m.Sb(73,"clr-input-container"),m.Sb(74,"label"),m.Ec(75,"Percentage"),m.Rb(),m.Nb(76,"input",14),m.Sb(77,"clr-control-error"),m.Ec(78,"Please enter a value between 0 and 100 (including)."),m.Rb(),m.Rb(),m.Rb(),m.Sb(79,"div",15),m.Sb(80,"div",16),m.Sb(81,"div",17),m.Sb(82,"div",18),m.Sb(83,"form",19),m.Sb(84,"clr-input-container"),m.Sb(85,"label",20),m.Ec(86,"Price (gross)"),m.Rb(),m.Nb(87,"input",21),m.Sb(88,"clr-control-error"),m.Ec(89,"Please enter a value greater than 0"),m.Rb(),m.Rb(),m.Sb(90,"clr-input-container"),m.Sb(91,"label",20),m.Ec(92,"Price (net)"),m.Rb(),m.Nb(93,"input",21),m.Sb(94,"clr-control-error"),m.Ec(95,"Please enter a value greater than 0"),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Sb(96,"div",22),m.Sb(97,"h6",23),m.Ec(98,"Do"),m.Rb(),m.Sb(99,"p"),m.Ec(100," Use the numeric field consistently for the listed input types. "),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Sb(101,"div",16),m.Sb(102,"div",24),m.Sb(103,"div",18),m.Sb(104,"form",19),m.Sb(105,"clr-input-container"),m.Sb(106,"label",20),m.Ec(107,"Price (gross)"),m.Rb(),m.Nb(108,"input",25),m.Sb(109,"clr-control-error"),m.Ec(110,"Please enter a value greater than 0"),m.Rb(),m.Rb(),m.Sb(111,"clr-input-container"),m.Sb(112,"label",20),m.Ec(113,"Price (net)"),m.Rb(),m.Nb(114,"input",21),m.Sb(115,"clr-control-error"),m.Ec(116,"Please enter a value greater than 0"),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Sb(117,"div",22),m.Sb(118,"h6",23),m.Ec(119,"Don't"),m.Rb(),m.Sb(120,"p"),m.Ec(121," Don't use normal input and numeric fields inconsistently. "),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Sb(122,"div",26),m.Sb(123,"h3",27),m.Ec(124,"Code & Examples"),m.Rb(),m.Sb(125,"p"),m.Ec(126," Because the numeric field is a directive, it can be applied on any "),m.Sb(127,"code",28),m.Ec(128,"input"),m.Rb(),m.Ec(129," element. This makes the numeric field compatible with the existing "),m.Sb(130,"code",28),m.Ec(131,"ClrInputContainer"),m.Rb(),m.Ec(132," and forms. See code examples below which include "),m.Sb(133,"code",28),m.Ec(134,"clr-control-error"),m.Rb(),m.Ec(135," and "),m.Sb(136,"code",28),m.Ec(137,"clr-control-helper"),m.Rb(),m.Ec(138," elements. "),m.Rb(),m.Sb(139,"p"),m.Ec(140," The numeric field supports template driven as well as reactive forms, see the form demos below. "),m.Rb(),m.Sb(141,"p"),m.Ec(142," The numeric field requires you to use custom validators, namely "),m.Sb(143,"code",28),m.Ec(144,"ClrNumericFieldValidators"),m.Rb(),m.Ec(145," to validate min and max values. "),m.Rb(),m.Sb(146,"h2"),m.Ec(147,"Angular Directive"),m.Rb(),m.Sb(148,"h3"),m.Ec(149,"Summary of Options"),m.Rb(),m.Sb(150,"table",29),m.Sb(151,"thead"),m.Sb(152,"tr"),m.Sb(153,"th",30),m.Ec(154,"Input"),m.Rb(),m.Sb(155,"th",31),m.Ec(156,"Values"),m.Rb(),m.Sb(157,"th",32),m.Ec(158,"Default"),m.Rb(),m.Sb(159,"th",30),m.Ec(160,"Effect"),m.Rb(),m.Rb(),m.Rb(),m.Sb(161,"tbody"),m.Sb(162,"tr"),m.Sb(163,"td",30),m.Sb(164,"b"),m.Ec(165,"[clrTextAlign]"),m.Rb(),m.Sb(166,"div",33),m.Ec(167,"Type: String"),m.Rb(),m.Sb(168,"div",33),m.Ec(169,'Default: "right"'),m.Rb(),m.Rb(),m.Sb(170,"td",31),m.Ec(171,"left, right"),m.Rb(),m.Sb(172,"td",32),m.Ec(173,'"right"'),m.Rb(),m.Sb(174,"td",30),m.Ec(175,"Defines the alignment of the text inside input field."),m.Rb(),m.Rb(),m.Sb(176,"tr"),m.Sb(177,"td",30),m.Sb(178,"b"),m.Ec(179,"[clrDecimalSep]"),m.Rb(),m.Sb(180,"div",33),m.Ec(181,"Type: String"),m.Rb(),m.Sb(182,"div",33),m.Ec(183,'Default: ","'),m.Rb(),m.Rb(),m.Sb(184,"td",31),m.Ec(185,"Javascript String"),m.Rb(),m.Sb(186,"td",32),m.Ec(187,'","'),m.Rb(),m.Sb(188,"td",30),m.Ec(189,"Defines the decimal separator."),m.Rb(),m.Rb(),m.Sb(190,"tr"),m.Sb(191,"td",30),m.Sb(192,"b"),m.Ec(193,"[clrGroupingSep]"),m.Rb(),m.Sb(194,"div",33),m.Ec(195,"Type: String"),m.Rb(),m.Sb(196,"div",33),m.Ec(197,'Default: "."'),m.Rb(),m.Rb(),m.Sb(198,"td",31),m.Ec(199,"Javascript String"),m.Rb(),m.Sb(200,"td",32),m.Ec(201,'"."'),m.Rb(),m.Sb(202,"td",30),m.Ec(203,"Defines the grouping separator."),m.Rb(),m.Rb(),m.Sb(204,"tr"),m.Sb(205,"td",30),m.Sb(206,"b"),m.Ec(207,"[clrDecimalPlaces]"),m.Rb(),m.Sb(208,"div",33),m.Ec(209,"Type: Number"),m.Rb(),m.Sb(210,"div",33),m.Ec(211,"Default: 2"),m.Rb(),m.Rb(),m.Sb(212,"td",31),m.Ec(213,"Javascript Number"),m.Rb(),m.Sb(214,"td",32),m.Ec(215,"2"),m.Rb(),m.Sb(216,"td",30),m.Ec(217,"Defines the number of allowed decimal places."),m.Rb(),m.Rb(),m.Sb(218,"tr"),m.Sb(219,"td",30),m.Sb(220,"b"),m.Ec(221,"[clrAutofillDecimals]"),m.Rb(),m.Sb(222,"div",33),m.Ec(223,"Type: Boolean"),m.Rb(),m.Sb(224,"div",33),m.Ec(225,"Default: false"),m.Rb(),m.Rb(),m.Sb(226,"td",31),m.Ec(227,"true, false"),m.Rb(),m.Sb(228,"td",32),m.Ec(229,"false"),m.Rb(),m.Sb(230,"td",30),m.Ec(231,"Defines whether decimal places should automatically be filled with zeroes until clrDecimalPlaces is reached. Useful for money fields. "),m.Rb(),m.Rb(),m.Sb(232,"tr"),m.Sb(233,"td",30),m.Sb(234,"b"),m.Ec(235,"[(clrNumericValue)]"),m.Rb(),m.Sb(236,"div",33),m.Ec(237,"Type: Number"),m.Rb(),m.Sb(238,"div",33),m.Ec(239,'Default: ""'),m.Rb(),m.Rb(),m.Sb(240,"td",31),m.Ec(241,"Javascript Number"),m.Rb(),m.Sb(242,"td",32),m.Ec(243,'""'),m.Rb(),m.Sb(244,"td",30),m.Ec(245,"Two-way bound parameter for the value of the input component."),m.Rb(),m.Rb(),m.Sb(246,"tr"),m.Sb(247,"td",30),m.Sb(248,"b"),m.Ec(249,"[clrUnit]"),m.Rb(),m.Sb(250,"div",33),m.Ec(251,"Type: string"),m.Rb(),m.Sb(252,"div",33),m.Ec(253,'Default: ""'),m.Rb(),m.Rb(),m.Sb(254,"td",31),m.Ec(255,"Javascript String"),m.Rb(),m.Sb(256,"td",32),m.Ec(257,'""'),m.Rb(),m.Sb(258,"td",30),m.Ec(259,"The unit to be displayed on top of the input field."),m.Rb(),m.Rb(),m.Sb(260,"tr"),m.Sb(261,"td",30),m.Sb(262,"b"),m.Ec(263,"[clrUnitPosition]"),m.Rb(),m.Sb(264,"div",33),m.Ec(265,"Type: string"),m.Rb(),m.Sb(266,"div",33),m.Ec(267,'Default: "right"'),m.Rb(),m.Rb(),m.Sb(268,"td",31),m.Ec(269,'"left", "right"'),m.Rb(),m.Sb(270,"td",32),m.Ec(271,'"right"'),m.Rb(),m.Sb(272,"td",30),m.Ec(273,"Determines whether the unit is shown on the right or left side of the value. "),m.Rb(),m.Rb(),m.Sb(274,"tr"),m.Sb(275,"td",30),m.Sb(276,"b"),m.Ec(277,"[clrRoundDisplayValue]"),m.Rb(),m.Sb(278,"div",33),m.Ec(279,"Type: Boolean"),m.Rb(),m.Sb(280,"div",33),m.Ec(281,"Default: false"),m.Rb(),m.Rb(),m.Sb(282,"td",31),m.Ec(283,"true, false"),m.Rb(),m.Sb(284,"td",32),m.Ec(285,"false"),m.Rb(),m.Sb(286,"td",30),m.Ec(287,"Defines whether the value should be rounded or not. "),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Sb(288,"h4"),m.Ec(289,"Vertical Form (Reactive)"),m.Rb(),m.Sb(290,"p"),m.Ec(291,"In the following section you can find some examples with validation."),m.Rb(),m.Sb(292,"form",34),m.Sb(293,"clr-input-container"),m.Sb(294,"label"),m.Ec(295,"Money"),m.Rb(),m.Nb(296,"input",35),m.Sb(297,"clr-control-error"),m.Ec(298,"Please enter a value between 0 and 10.000"),m.Rb(),m.Rb(),m.Sb(299,"clr-input-container"),m.Sb(300,"label"),m.Ec(301,"Percentage"),m.Rb(),m.Nb(302,"input",36),m.Sb(303,"clr-control-error"),m.Ec(304,"Please enter a value between 0 and 100"),m.Rb(),m.Rb(),m.Rb(),m.Nb(305,"clr-code-snippet",37),m.Nb(306,"clr-code-snippet",38),m.Sb(307,"h4"),m.Ec(308,"Horizontal Form (Template Driven)"),m.Rb(),m.Sb(309,"form",39),m.Sb(310,"clr-input-container"),m.Sb(311,"label"),m.Ec(312,"Money"),m.Rb(),m.Sb(313,"input",40),m.ac("ngModelChange",(function(e){return l.moneyTemplate=e})),m.Rb(),m.Sb(314,"clr-control-error"),m.Ec(315,"Please enter a value between 0 and 10.000"),m.Rb(),m.Rb(),m.Sb(316,"clr-input-container"),m.Sb(317,"label"),m.Ec(318,"Percentage"),m.Rb(),m.Sb(319,"input",41),m.ac("ngModelChange",(function(e){return l.percentageTemplate=e})),m.Rb(),m.Sb(320,"clr-control-error"),m.Ec(321,"Please enter a value between 0 and 100"),m.Rb(),m.Rb(),m.Rb(),m.Nb(322,"clr-code-snippet",37),m.Sb(323,"h4"),m.Ec(324,"Alignment"),m.Rb(),m.Sb(325,"p"),m.Ec(326,"For special usecases, if necessary the Unit and Value alignment can be defined independently."),m.Rb(),m.Sb(327,"form",39),m.Sb(328,"clr-input-container"),m.Sb(329,"label"),m.Ec(330,"Money"),m.Rb(),m.Nb(331,"input",42),m.Sb(332,"clr-control-error"),m.Ec(333,"Please enter a value between 0 and 10.000"),m.Rb(),m.Rb(),m.Rb(),m.Nb(334,"clr-code-snippet",37),m.Sb(335,"h4"),m.Ec(336,"Rounding"),m.Rb(),m.Sb(337,"p"),m.Ec(338," If "),m.Sb(339,"code"),m.Ec(340,"[clrRoundDisplayValue]"),m.Rb(),m.Ec(341," is "),m.Sb(342,"code"),m.Ec(343,"true"),m.Rb(),m.Ec(344,", the value bound via "),m.Sb(345,"code"),m.Ec(346,"[(clrNumericValue)]"),m.Rb(),m.Ec(347," is displayed rounded."),m.Nb(348,"br"),m.Ec(349," A change event is only fired, after the user modifies the input field. "),m.Rb(),m.Sb(350,"form",43),m.Sb(351,"clr-input-container"),m.Sb(352,"label"),m.Ec(353,"Rounded Value"),m.Rb(),m.Nb(354,"input",44),m.Sb(355,"clr-control-error"),m.Ec(356,"Please enter a value between 0 and 100"),m.Rb(),m.Rb(),m.Sb(357,"clr-input-container"),m.Sb(358,"label"),m.Ec(359,"Original Value"),m.Rb(),m.Nb(360,"input",45),m.Sb(361,"clr-control-error"),m.Ec(362,"Please enter a value between 0 and 100"),m.Rb(),m.Rb(),m.Rb(),m.Nb(363,"clr-code-snippet",37),m.Rb(),m.Rb(),m.Rb()),2&e&&(m.kc("ng",l.ng)("ui",l.ui)("title",l.title)("newLayout",l.newLayout),m.Ab(18),m.kc("formGroup",l.usageForm),m.Ab(4),m.kc("clrAutofillDecimals",!0),m.Ab(12),m.kc("clrDecimalPlaces",0),m.Ab(6),m.kc("clrDecimalPlaces",0),m.Ab(6),m.kc("clrDecimalPlaces",0),m.Ab(6),m.kc("clrDecimalPlaces",0),m.Ab(6),m.kc("clrDecimalPlaces",0),m.Ab(12),m.kc("clrDecimalPlaces",0),m.Ab(6),m.kc("clrDecimalPlaces",0),m.Ab(11),m.kc("clrAutofillDecimals",!0),m.Ab(6),m.kc("clrAutofillDecimals",!0),m.Ab(21),m.kc("clrAutofillDecimals",!0),m.Ab(178),m.kc("formGroup",l.exampleForm),m.Ab(4),m.kc("clrUnit","\u20ac")("clrAutofillDecimals",!0),m.Ab(6),m.kc("clrUnit","%")("clrDecimalPlaces",0),m.Ab(3),m.kc("clrCode",l.htmlExample),m.Ab(1),m.kc("clrCode",l.tsExample),m.Ab(7),m.kc("clrUnit","\u20ac")("ngModel",l.moneyTemplate)("clrAutofillDecimals",!0),m.Ab(6),m.kc("clrUnit","%")("ngModel",l.percentageTemplate)("clrDecimalPlaces",0),m.Ab(3),m.kc("clrCode",l.htmlExample2),m.Ab(9),m.kc("clrUnit","\u20ac")("clrUnitPosition","left")("clrAutofillDecimals",!0),m.Ab(3),m.kc("clrCode",l.htmlExample3),m.Ab(16),m.kc("formGroup",l.exampleForm2),m.Ab(4),m.kc("clrUnit","\u20ac")("clrRoundDisplayValue",!0)("clrAutofillDecimals",!0),m.Ab(6),m.kc("clrUnit","\u20ac")("clrDecimalPlaces",5)("clrAutofillDecimals",!0),m.Ab(3),m.kc("clrCode",l.htmlExample4))},directives:[d.a,t.A,t.n,o.u,o.E,t.f,o.C,o.D,t.b,o.B,a.x,t.m,t.d,o.i,t.o,s.a,t.p],encapsulation:2}),e})(),S=(()=>{class e{}return e.\u0275mod=m.Kb({type:e}),e.\u0275inj=m.Jb({factory:function(l){return new(l||e)},imports:[[c.c,t.h,t.u,o.a,o.v,i.a,b.a,n.g.forChild([{path:"",component:p}]),a.a]]}),e})()}}]);