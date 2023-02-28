"use strict";(self.webpackChunkAppTuristica=self.webpackChunkAppTuristica||[]).push([[341],{2341:($,f,s)=>{s.r(f),s.d(f,{CrudModule:()=>k});var C=s(9808),_=s(1813),n=s(2382),p=s(2340),t=s(7587),c=s(7948),l=s(9783),h=s(4036),Z=s(1424),q=s(3407),u=s(845),d=s(1497);let b=(()=>{class i{constructor(e,o,a){this.pqrsService=e,this.fb=o,this.messageService=a,this.API_URI=p.N.API_URI,this.tipoSolicitudes=[],this.form=this.fb.group({description:["",n.kI.required],tipopqrs:["",n.kI.required],titulo:["",n.kI.required]})}ngOnInit(){this.token=localStorage.getItem("token"),this.User=JSON.parse(localStorage.getItem("user")),this.traerTipoSolicitudes()}onSubmit(){let e={description:this.form.value.description,persona:this.User.id,tipopqrs:this.form.value.tipopqrs.id,titulo:this.form.value.titulo};try{this.pqrsService.createPqrs(`${this.API_URI}/pqrs/create/`,e,this.token).subscribe(o=>(console.log(o),this.form.reset(),this.messageService.add({severity:"success",summary:"Success",detail:"Creado correctamente !!!"})))}catch(o){return console.log(o),this.messageService.add({severity:"error",summary:"Error",detail:"Hubo un problema en la consulta"})}}traerTipoSolicitudes(){try{this.pqrsService.getAllPqrs(`${this.API_URI}/pqrs/tipo/`,this.token).subscribe(e=>{this.tipoSolicitudes=e.data.results})}catch(e){return console.log(e),this.messageService.add({severity:"error",summary:"Error",detail:"Hubo un problema en la consulta"})}}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(c.K),t.Y36(n.qu),t.Y36(l.ez))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-crear"]],decls:9,vars:4,consts:[[1,"main"],[3,"formGroup","submit"],["formControlName","tipopqrs","placeholder","Tipo de solicitud","optionLabel","tipo",3,"options","showClear"],["type","text","placeholder","Titulo","pInputText","","formControlName","titulo"],["rows","5","cols","10","placeholder","Descripcion","formControlName","description","pInputTextarea",""],["pButton","","pRipple","","type","submit","label","Crear solicitud",1,"p-button-success",3,"disabled"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"h1"),t._uU(2,"Crear solicitud"),t.qZA(),t.TgZ(3,"form",1),t.NdJ("submit",function(){return o.onSubmit()}),t._UZ(4,"p-dropdown",2),t._UZ(5,"input",3),t._UZ(6,"textarea",4),t._UZ(7,"button",5),t.qZA(),t.qZA(),t._UZ(8,"p-toast")),2&e&&(t.xp6(3),t.Q6J("formGroup",o.form),t.xp6(1),t.Q6J("options",o.tipoSolicitudes)("showClear",!0),t.xp6(3),t.Q6J("disabled",!o.form.valid))},directives:[n._Y,n.JL,n.sg,h.Lt,n.JJ,n.u,n.Fj,Z.o,q.g,u.Hq,d.FN],styles:[".main[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-direction:column}form[_ngcontent-%COMP%]{width:500px;border:1px solid rgba(128,128,128,.555);border-radius:10px;padding:20px;display:flex;justify-content:center;align-items:center;flex-direction:column}form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p-dropdown[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{margin-top:10px;width:100%}"]}),i})();var m=s(6697),T=s(5315);function U(i,r){1&i&&(t.TgZ(0,"tr"),t.TgZ(1,"th",11),t._uU(2,"Indice"),t.qZA(),t.TgZ(3,"th",11),t._uU(4,"ID"),t.qZA(),t.TgZ(5,"th",11),t._uU(6,"Titulo"),t.qZA(),t.TgZ(7,"th",11),t._uU(8,"Descripcion"),t.qZA(),t.TgZ(9,"th",11),t._uU(10,"Tipo"),t.qZA(),t.TgZ(11,"th",11),t._uU(12,"Persona"),t.qZA(),t.TgZ(13,"th",11),t._uU(14,"Editar"),t.qZA(),t.qZA())}function x(i,r){if(1&i){const e=t.EpF();t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t.TgZ(14,"button",12),t.NdJ("click",function(){const g=t.CHM(e).$implicit;return t.oxw().showEditar(g.id)}),t.qZA(),t.qZA(),t.qZA()}if(2&i){const e=r.$implicit,o=r.rowIndex;t.xp6(2),t.Oqu(o),t.xp6(2),t.Oqu(e.id),t.xp6(2),t.Oqu(e.titulo),t.xp6(2),t.Oqu(e.description),t.xp6(2),t.Oqu(e.tipopqrs),t.xp6(2),t.Oqu(e.persona)}}const y=function(){return{"min-width":"60rem"}},S=function(){return{width:"600px",height:"500px"}};let I=(()=>{class i{constructor(e,o,a){this.fb=e,this.pqrsService=o,this.messageService=a,this.API_URI=p.N.API_URI,this.id="",this.display=!1,this.solicitudes=[],this.tipoSolicitudes=[],this.form=this.fb.group({tipopqrs:["",n.kI.required],description:["",n.kI.required],titulo:["",n.kI.required]})}ngOnInit(){this.token=localStorage.getItem("token"),this.traerSolicitudes(),this.traerTipoSolicitudes()}showEditar(e){this.id=e,this.display=!this.display}submit(){try{this.pqrsService.updatePqrs(`${this.API_URI}/pqrs/update/${this.id}/`,this.form.value,this.token).subscribe(e=>{this.form.reset(),this.traerSolicitudes(),this.showEditar(""),this.messageService.add({severity:"success",summary:"Success",detail:"Editado correctamente"})})}catch(e){console.log(e),this.messageService.add({severity:"error",summary:"Error",detail:"Hubo un problema con la peticion"})}}traerSolicitudes(){this.solicitudes=[];try{this.pqrsService.getAllPqrs(`${this.API_URI}/pqrs`,this.token).subscribe(e=>{console.log(e.data.results),this.solicitudes=e.data.results})}catch(e){console.log(e),this.messageService.add({severity:"error",summary:"Error",detail:"Error al traer las solicitudes"})}}traerTipoSolicitudes(){try{this.pqrsService.getAllPqrs(`${this.API_URI}/pqrs/tipo/`,this.token).subscribe(e=>{this.tipoSolicitudes=e.data.results})}catch(e){console.log(e)}}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(n.qu),t.Y36(c.K),t.Y36(l.ez))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-editar"]],decls:14,vars:14,consts:[[1,"main"],[3,"value","tableStyle"],["pTemplate","header"],["pTemplate","body"],["header","Editar momento",3,"visible","modal","draggable","resizable","visibleChange"],[1,"grid","dialog-form-crear","col-12","md:col-12","lg:col-12"],[3,"formGroup","submit"],["formControlName","tipopqrs","placeholder","Tipo de solicitud","optionLabel","tipo",3,"options","showClear"],["type","text","placeholder","Titulo","pInputText","","formControlName","titulo"],["rows","5","cols","10","placeholder","Descripcion","formControlName","description","pInputTextarea",""],["pButton","","pRipple","","type","submit","label","Crear solicitud",1,"p-button-success",3,"disabled"],[2,"width","20%"],["pButton","","pRipple","","type","button","icon","pi pi-pencil",1,"p-button-rounded","p-button-warning","mx-3",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"h1"),t._uU(2,"Editar solicitudes"),t.qZA(),t.TgZ(3,"p-table",1),t.YNc(4,U,15,0,"ng-template",2),t.YNc(5,x,15,6,"ng-template",3),t.qZA(),t.qZA(),t.TgZ(6,"p-dialog",4),t.NdJ("visibleChange",function(g){return o.display=g}),t.TgZ(7,"div",5),t.TgZ(8,"form",6),t.NdJ("submit",function(){return o.submit()}),t._UZ(9,"p-dropdown",7),t._UZ(10,"input",8),t._UZ(11,"textarea",9),t._UZ(12,"button",10),t.qZA(),t.qZA(),t.qZA(),t._UZ(13,"p-toast")),2&e&&(t.xp6(3),t.Q6J("value",o.solicitudes)("tableStyle",t.DdM(12,y)),t.xp6(3),t.Akn(t.DdM(13,S)),t.Q6J("visible",o.display)("modal",!0)("draggable",!1)("resizable",!1),t.xp6(2),t.Q6J("formGroup",o.form),t.xp6(1),t.Q6J("options",o.tipoSolicitudes)("showClear",!0),t.xp6(3),t.Q6J("disabled",!o.form.valid))},directives:[m.iA,l.jx,u.Hq,T.V,n._Y,n.JL,n.sg,h.Lt,n.JJ,n.u,n.Fj,Z.o,q.g,d.FN],styles:[".main[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-direction:column}form[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;align-items:center;flex-direction:column;padding:20px}form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], p-dropdown[_ngcontent-%COMP%]{margin-top:10px;width:80%}"]}),i})();var A=s(7307);function P(i,r){1&i&&(t.TgZ(0,"tr"),t.TgZ(1,"th",4),t._uU(2,"Indice"),t.qZA(),t.TgZ(3,"th",4),t._uU(4,"ID"),t.qZA(),t.TgZ(5,"th",4),t._uU(6,"Titulo"),t.qZA(),t.TgZ(7,"th",4),t._uU(8,"Descripcion"),t.qZA(),t.TgZ(9,"th",4),t._uU(10,"Tipo"),t.qZA(),t.TgZ(11,"th",4),t._uU(12,"Persona"),t.qZA(),t.TgZ(13,"th",4),t._uU(14,"Eliminar"),t.qZA(),t.qZA())}function O(i,r){if(1&i){const e=t.EpF();t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._UZ(14,"p-confirmPopup"),t.TgZ(15,"button",5),t.NdJ("click",function(a){const v=t.CHM(e).$implicit;return t.oxw().confirm(a,v.id)}),t.qZA(),t.qZA(),t.qZA()}if(2&i){const e=r.$implicit,o=r.rowIndex;t.xp6(2),t.Oqu(o),t.xp6(2),t.Oqu(e.id),t.xp6(2),t.Oqu(e.titulo),t.xp6(2),t.Oqu(e.description),t.xp6(2),t.Oqu(e.tipopqrs),t.xp6(2),t.Oqu(e.persona)}}const E=function(){return{"min-width":"60rem"}};let M=(()=>{class i{constructor(e,o,a){this.pqrsService=e,this.messageService=o,this.confirmationService=a,this.API_URI=p.N.API_URI,this.solicitudes=[]}ngOnInit(){this.token=localStorage.getItem("token"),this.traerSolicitudes()}traerSolicitudes(){this.solicitudes=[];try{this.pqrsService.getAllPqrs(`${this.API_URI}/pqrs/`,this.token).subscribe(e=>this.solicitudes=e.data.results)}catch(e){console.log(e)}}confirm(e,o){this.confirmationService.confirm({target:e.target,message:"\xbfSeguro que desea eliminar esta solicitud?",icon:"pi pi-exclamation-triangle",accept:()=>{try{this.pqrsService.deletePqrs(`${this.API_URI}/pqrs/delete/${o}/`,this.token).subscribe(a=>(this.traerSolicitudes(),this.messageService.add({severity:"success",summary:"Success",detail:"Eliminado correctamente !!!"})))}catch(a){return console.log(a),this.messageService.add({severity:"error",summary:"Error",detail:"Hubo un problema en la consulta"})}},reject:()=>{}})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(c.K),t.Y36(l.ez),t.Y36(l.YP))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-eliminar"]],decls:8,vars:3,consts:[[1,"main"],[3,"value","tableStyle"],["pTemplate","header"],["pTemplate","body"],[2,"width","10%"],["pButton","","pRipple","","type","button","icon","pi pi-times",1,"p-button-rounded","p-button-danger","mx-3",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"h1"),t._uU(2,"Eliminar solicitudes"),t.qZA(),t.TgZ(3,"p-table",1),t.YNc(4,P,15,0,"ng-template",2),t.YNc(5,O,16,6,"ng-template",3),t.qZA(),t.qZA(),t._UZ(6,"p-toast"),t._UZ(7,"p-confirmPopup")),2&e&&(t.xp6(3),t.Q6J("value",o.solicitudes)("tableStyle",t.DdM(2,E)))},directives:[m.iA,l.jx,A.P,u.Hq,d.FN],styles:[".main[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-direction:column}"]}),i})();function w(i,r){1&i&&(t.TgZ(0,"tr"),t.TgZ(1,"th",4),t._uU(2,"Indice"),t.qZA(),t.TgZ(3,"th",4),t._uU(4,"ID"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"Titulo"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"Descripcion"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"Tipo"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"Persona"),t.qZA(),t.qZA())}function J(i,r){if(1&i&&(t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.qZA()),2&i){const e=r.$implicit,o=r.rowIndex;t.xp6(2),t.Oqu(o),t.xp6(2),t.Oqu(e.id),t.xp6(2),t.Oqu(e.titulo),t.xp6(2),t.Oqu(e.description),t.xp6(2),t.Oqu(e.tipopqrs),t.xp6(2),t.Oqu(e.persona)}}const N=function(){return{"min-width":"50rem"}},R=[{path:"ver",component:(()=>{class i{constructor(e){this.pqrsService=e,this.API_URI=p.N.API_URI,this.solicitudes=[]}ngOnInit(){this.token=localStorage.getItem("token"),this.traerSolicitudes()}traerSolicitudes(){try{this.pqrsService.getAllPqrs(`${this.API_URI}/pqrs`,this.token).subscribe(e=>{this.solicitudes=e.data.results})}catch(e){console.log(e)}}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(c.K))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-ver"]],decls:6,vars:3,consts:[[1,"main"],[3,"value","tableStyle"],["pTemplate","header"],["pTemplate","body"],[2,"width","10%"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"h1"),t._uU(2,"Ver Solicitudes"),t.qZA(),t.TgZ(3,"p-table",1),t.YNc(4,w,13,0,"ng-template",2),t.YNc(5,J,13,6,"ng-template",3),t.qZA(),t.qZA()),2&e&&(t.xp6(3),t.Q6J("value",o.solicitudes)("tableStyle",t.DdM(2,N)))},directives:[m.iA,l.jx],styles:[".main[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-direction:column}"]}),i})()},{path:"crear",component:b},{path:"editar",component:I},{path:"eliminar",component:M}];let Y=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[_.Bz.forChild(R)],_.Bz]}),i})(),k=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[C.ez,Y,Z.j,u.hJ,d.EV,m.U$,T.S,A.n,n.u5,n.UX,h.kW,q.A]]}),i})()}}]);