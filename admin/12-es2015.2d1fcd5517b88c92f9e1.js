(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{dkdp:function(e,o,i){"use strict";i.r(o),i.d(o,"TabProfilePageModule",(function(){return m}));var t=i("TEn/"),n=i("ofXK"),s=i("3Pt+"),l=i("tyNb"),r=i("mrSG"),a=i("AytR"),c=i("fXoL"),b=i("pRC4");function d(e,o){if(1&e){const e=c.Nb();c.Mb(0,"ion-list"),c.Mb(1,"ion-list-header"),c.Mb(2,"ion-label"),c.hc(3,"Account"),c.Lb(),c.Lb(),c.Mb(4,"ion-item"),c.hc(5," You are not logged in, please submit credentials: "),c.Lb(),c.Mb(6,"form",5),c.Ub("ngSubmit",(function(){return c.dc(e),c.Wb().loginSubmit()})),c.Mb(7,"ion-item"),c.Mb(8,"ion-input",6),c.Ub("ngModelChange",(function(o){return c.dc(e),c.Wb().loginEmail=o})),c.Lb(),c.Lb(),c.Mb(9,"ion-item"),c.Mb(10,"ion-input",7),c.Ub("ngModelChange",(function(o){return c.dc(e),c.Wb().loginPassword=o})),c.Lb(),c.Lb(),c.Mb(11,"ion-item"),c.Mb(12,"ion-button",8),c.hc(13,"Login"),c.Lb(),c.Lb(),c.Lb(),c.Lb()}if(2&e){const e=c.Wb();c.xb(8),c.Zb("ngModel",e.loginEmail),c.xb(2),c.Zb("ngModel",e.loginPassword)}}function g(e,o){if(1&e){const e=c.Nb();c.Mb(0,"ion-list"),c.Mb(1,"ion-list-header"),c.Mb(2,"ion-label"),c.hc(3,"Account"),c.Lb(),c.Lb(),c.Mb(4,"ion-item"),c.hc(5," You are succesfully logged in! "),c.Lb(),c.Mb(6,"form",5),c.Ub("ngSubmit",(function(){return c.dc(e),c.Wb().logoutSubmit()})),c.Mb(7,"ion-item"),c.Mb(8,"ion-input",9),c.Ub("ngModelChange",(function(o){return c.dc(e),c.Wb().loginEmail=o})),c.Lb(),c.Lb(),c.Mb(9,"ion-item"),c.Mb(10,"ion-input",10),c.Ub("ngModelChange",(function(o){return c.dc(e),c.Wb().loginPassword=o})),c.Lb(),c.Lb(),c.Mb(11,"ion-item"),c.Mb(12,"ion-button",8),c.hc(13,"Logout"),c.Lb(),c.Lb(),c.Lb(),c.Lb()}if(2&e){const e=c.Wb();c.xb(8),c.Zb("ngModel",e.loginEmail),c.xb(2),c.Zb("ngModel",e.loginPassword)}}const u=[{path:"",component:(()=>{class e{constructor(e,o,i){this.loadingController=e,this.toastController=o,this.sessionService=i,this.checker=null,this.loggedIn=!1}ngOnInit(){console.log("Profile tab: ngOnInit")}ionViewWillEnter(){return Object(r.a)(this,void 0,void 0,(function*(){console.log("Profile tab: will enter"),yield this.checkStatus(),this.checker=setInterval(()=>Object(r.a)(this,void 0,void 0,(function*(){yield this.checkStatus()})),a.a.PERIOD_REENTER)}))}ionViewWillLeave(){return Object(r.a)(this,void 0,void 0,(function*(){console.log("Profile tab: will leave"),this.checker&&clearInterval(this.checker)}))}checkStatus(){return Object(r.a)(this,void 0,void 0,(function*(){console.log("Profile tab: check status"),this.loggedIn=yield this.sessionService.isLoggedIn(),this.loggedIn||this.loginEmail&&this.loginPassword||(this.loginEmail="",this.loginPassword="")}))}loginSubmit(){return Object(r.a)(this,void 0,void 0,(function*(){if(!this.loginEmail)return(yield this.toastController.create({message:"The email address must not be empty",duration:a.a.TOAST_DURATION_ERROR,position:a.a.TOAST_POSITION,color:"warning"})).present(),!1;if(!this.loginPassword)return(yield this.toastController.create({message:"The password must not be empty",duration:a.a.TOAST_DURATION_ERROR,position:a.a.TOAST_POSITION,color:"warning"})).present(),!1;const e=yield this.loadingController.create({message:"Logging in...",backdropDismiss:!1,translucent:!0});yield e.present();let o=null;try{o=yield this.sessionService.submitLogin(this.loginEmail,this.loginPassword)}catch(i){return e.dismiss(),(yield this.toastController.create({message:""+i,duration:a.a.TOAST_DURATION_ERROR,position:a.a.TOAST_POSITION,color:"danger"})).present(),!1}return e.dismiss(),this.loggedIn=!0,(yield this.toastController.create({message:"You are succesfully logged in",duration:a.a.TOAST_DURATION_SUCCESS,position:a.a.TOAST_POSITION,color:"success"})).present(),!0}))}logoutSubmit(){return Object(r.a)(this,void 0,void 0,(function*(){const e=yield this.loadingController.create({message:"Logging out...",backdropDismiss:!1,translucent:!0});yield e.present();try{yield this.sessionService.submitLogout()}catch(o){return e.dismiss(),(yield this.toastController.create({message:""+o,duration:a.a.TOAST_DURATION_ERROR,position:a.a.TOAST_POSITION,color:"danger"})).present(),!1}return e.dismiss(),this.loggedIn=!1,(yield this.toastController.create({message:"You are succesfully logged out",duration:a.a.TOAST_DURATION_SUCCESS,position:a.a.TOAST_POSITION,color:"success"})).present(),!0}))}}return e.\u0275fac=function(o){return new(o||e)(c.Hb(t.A),c.Hb(t.E),c.Hb(b.a))},e.\u0275cmp=c.Bb({type:e,selectors:[["app-tab-profile"]],decls:11,vars:4,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"],["size","large"],[4,"ngIf"],[3,"ngSubmit"],["name","email","type","email","placeholder","E-mail address",3,"ngModel","ngModelChange"],["name","password","type","password","placeholder","Password",3,"ngModel","ngModelChange"],["type","submit","block",""],["disabled","","name","email","type","email","placeholder","email address","autcomplete","off",3,"ngModel","ngModelChange"],["disabled","","name","password","type","password","placeholder","password","autcomplete","off",3,"ngModel","ngModelChange"]],template:function(e,o){1&e&&(c.Mb(0,"ion-header",0),c.Mb(1,"ion-toolbar"),c.Mb(2,"ion-title"),c.hc(3," Profile "),c.Lb(),c.Lb(),c.Lb(),c.Mb(4,"ion-content",1),c.Mb(5,"ion-header",2),c.Mb(6,"ion-toolbar"),c.Mb(7,"ion-title",3),c.hc(8,"Profile"),c.Lb(),c.Lb(),c.Lb(),c.gc(9,d,14,2,"ion-list",4),c.gc(10,g,14,2,"ion-list",4),c.Lb()),2&e&&(c.Zb("translucent",!0),c.xb(4),c.Zb("fullscreen",!0),c.xb(5),c.Zb("ngIf",!o.loggedIn),c.xb(1),c.Zb("ngIf",o.loggedIn))},directives:[t.i,t.x,t.w,t.g,n.i,t.n,t.o,t.m,t.l,s.h,s.e,s.f,t.k,t.D,s.d,s.g,t.d],styles:[""]}),e})()}];let h=(()=>{class e{}return e.\u0275mod=c.Fb({type:e}),e.\u0275inj=c.Eb({factory:function(o){return new(o||e)},imports:[[l.i.forChild(u)],l.i]}),e})(),m=(()=>{class e{constructor(){}}return e.\u0275mod=c.Fb({type:e}),e.\u0275inj=c.Eb({factory:function(o){return new(o||e)},imports:[[t.y,n.b,s.a,h]]}),e})()}}]);