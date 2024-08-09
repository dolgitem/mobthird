import{aS as l,aT as i,D as s,ah as a,ab as o}from"./index.f78a3f78.js";const c=l("auth",{state:()=>({auth_type:"phone",phone:"",email:"",registration:{name:"",password:"",accept:!1,birthDate:"",parentName:"",parentEmail:"",email:"",code:"",errors:[],isRequest:!1,countdown:0},inquiry:{name:"",accept:!1,errors:[],isRequest:!1},login:{password:"",accept:!1,errors:[],isRequest:!1},forgot:{accept:!1,errors:[],isRequest:!1},checkLogin:{isRequest:!1}}),getters:{isRegistrationDataFilled(){return!0},isInquiryDataFilled(){return this.inquiry.name&&this.inquiry.accept},getAuthClientId(){var t;return this.auth_type=="phone"?t=this.phone:this.auth_type=="email"&&(t=this.email),t}},actions:{setAuthType(t){this.auth_type=t},setPhone(t){this.phone=t},setEmail(t){this.email=t},async submitRegistration(){const t=this;this.registration.isRequest=!0,this.registration.errors=[],await i.post("/auth/signup",{login:this.getAuthClientId,clientPassword:this.registration.password,code:this.registration.code,name:this.registration.name,policy:this.registration.accept,birthDate:this.registration.birthDate,parentName:this.registration.parentName,parentEmail:this.registration.parentEmail,email:this.registration.email}).then(e=>{t.registration.isRequest=!1,e.data.stage=="codeSent"?t.router.currentRoute.value.name=="RegistrationPage"?t.router.push("/account/registration/confirm"):s.create({title:"\u041A\u043E\u0434 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D",message:"\u041A\u043E\u0434 \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D",maximized:!0,position:"bottom",ok:{label:"\u041E\u043A",class:"full-width q-mt-md standoutButton"}}):e.data.stage=="registered"?(a().setToken(e.data.access_token),a().getClientInfo().then(()=>{t.router.push("/")})):e.data.timeRemaining&&(t.registration.countdown=e.data.timeRemaining),console.log(e)}).catch(e=>{if(t.registration.errors=e.response.data.errors,t.registration.isRequest=!1,e.response.data.errors.code){const n=`\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0434 \u0438\u0437 ${t.auth_type=="phone"?"SMS":"email"} \u0435\u0449\u0435 \u0440\u0430\u0437`;s.create({title:"\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043A\u043E\u0434",message:n,maximized:!0,position:"bottom",ok:{label:"\u041E\u043A",class:"full-width q-mt-md standoutButton"}}),t.registration.code=""}})},submitInquiry(){const t=this;this.inquiry.isRequest=!0,i.post("/auth/lead",{login:this.getAuthClientId,name:this.inquiry.name}).then(e=>{s.create({title:"\u0417\u0430\u044F\u0432\u043A\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430",message:"\u0421\u043F\u0430\u0441\u0438\u0431\u043E! \u041C\u044B \u0441\u0432\u044F\u0436\u0435\u043C\u0441\u044F \u0441 \u0432\u0430\u043C\u0438 \u0432 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043C\u044F.",maximized:!0,position:"bottom",persistent:!0,ok:{label:"\u041E\u043A",class:"full-width q-mt-md standoutButton"}}).onOk(()=>{t.router.push("/")})}).catch(e=>{s.create({title:"\u041E\u0448\u0438\u0431\u043A\u0430",message:"\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430. \u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044C \u043A \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0443",maximized:!0,position:"bottom",ok:{label:"\u041E\u043A",class:"full-width q-mt-md standoutButton"}})}).finally(()=>{t.inquiry.isRequest=!1})},submitLogin(){this.login.isRequest=!0,this.login.errors=[];const t=this;i.post("/auth/credentials",{client_id:this.getAuthClientId,client_secret:this.login.password,auth_type:this.auth_type}).then(function(e){a().setToken(e.data.access_token),a().getClientInfo().then(()=>{t.router.push("/")})}).catch(e=>{if(e.response.data.error_codes){if(e.response.data.error_codes.client_id=="deletedProfile"){s.create({title:"\u0412\u0445\u043E\u0434 \u043D\u0435 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D",message:"\u041F\u0440\u043E\u0444\u0438\u043B\u044C \u0431\u044B\u043B \u0443\u0434\u0430\u043B\u0435\u043D. \u0414\u043B\u044F \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044C \u043A \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0443.",maximized:!0,position:"bottom",ok:{label:"\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B",class:"full-width q-mt-md standoutButton"}}).onOk(()=>{t.router.push("/contacts")});return}else if(e.response.data.error_codes.client_id=="duplicateProfile"){s.create({title:"\u0412\u0445\u043E\u0434 \u043D\u0435 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D",message:"\u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044C \u043A \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0443, \u0447\u0442\u043E\u0431\u044B \u0443\u0437\u043D\u0430\u0442\u044C \u0434\u0435\u0442\u0430\u043B\u0438",maximized:!0,position:"bottom",ok:{label:"\u0412\u043E\u0439\u0442\u0438 \u0435\u0449\u0435 \u0440\u0430\u0437",class:"full-width q-mt-md standoutButton"}});return}}s.create({title:"\u0412\u0445\u043E\u0434 \u043D\u0435 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D",message:o().settings.mobileLoginIncorrectText,maximized:!0,position:"bottom",ok:{label:"\u0412\u043E\u0439\u0442\u0438 \u0435\u0449\u0435 \u0440\u0430\u0437",class:"full-width q-mt-md standoutButton"}})}).finally(()=>{t.login.isRequest=!1})},submitForgot(){const t=this;this.forgot.isRequest=!0,i.post("/auth/forgot",{login:this.getAuthClientId,auth_type:this.auth_type}).then(function(e){const r=t.auth_type=="phone"?"\u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430":"email",n="\u041D\u0430 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0439 "+r+" \u0432\u044B\u0441\u043B\u0430\u043D \u043D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C \u0434\u043B\u044F \u0432\u0445\u043E\u0434\u0430";s.create({title:"\u041D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C",message:n,persistent:!0,maximized:!0,position:"bottom",ok:{label:"\u0412\u043E\u0439\u0442\u0438",class:"full-width q-mt-md standoutButton"}}).onOk(()=>{t.router.push("/account/login")})}).catch(e=>{if(e.response.data.error_codes){if(e.response.data.error_codes.login=="deletedProfile"){s.create({title:"\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u0430\u0440\u043E\u043B\u044F \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E",message:"\u041F\u0440\u043E\u0444\u0438\u043B\u044C \u0431\u044B\u043B \u0443\u0434\u0430\u043B\u0435\u043D. \u0414\u043B\u044F \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044C \u043A \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0443.",maximized:!0,position:"bottom",ok:{label:"\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B",class:"full-width q-mt-md standoutButton"}}).onOk(()=>{t.router.push("/contacts")});return}else if(e.response.data.error_codes.login=="duplicateProfile"){s.create({title:"\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u0430\u0440\u043E\u043B\u044F \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E",message:"\u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044C \u043A \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0443, \u0447\u0442\u043E\u0431\u044B \u0443\u0437\u043D\u0430\u0442\u044C \u0434\u0435\u0442\u0430\u043B\u0438",maximized:!0,position:"bottom",ok:{label:"\u0412\u043E\u0439\u0442\u0438 \u0435\u0449\u0435 \u0440\u0430\u0437",class:"full-width q-mt-md standoutButton"}});return}else if(e.response.data.error_codes.login=="not_found"){s.create({title:"\u041F\u0440\u043E\u0444\u0438\u043B\u044C \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D",message:"\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0432\u0432\u0435\u0434\u0435\u043D\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435. \u0415\u0441\u043B\u0438 \u0432\u0441\u0435 \u0432\u0435\u0440\u043D\u043E, \u043D\u043E \u043E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u0432\u0442\u043E\u0440\u044F\u0435\u0442\u0441\u044F, \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044C \u043A \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0443",maximized:!0,position:"bottom",ok:{label:"\u041F\u043E\u043D\u044F\u043B, \u043F\u0440\u0438\u043D\u044F\u043B",class:"full-width q-mt-md standoutButton"}});return}}}).finally(()=>{t.forgot.isRequest=!1})},submitCheckLogin(){const t=this;this.checkLogin.isRequest=!0,i.post("/auth/check-login",{client_id:this.getAuthClientId,auth_type:this.auth_type}).then(function(e){t.router.push("/account/login")}).catch(e=>{if(e.response.data.error_codes){if(e.response.data.error_codes.client_id=="deletedProfile"){s.create({title:"\u0412\u0445\u043E\u0434 \u043D\u0435 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D",message:"\u041F\u0440\u043E\u0444\u0438\u043B\u044C \u0431\u044B\u043B \u0443\u0434\u0430\u043B\u0435\u043D. \u0414\u043B\u044F \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044C \u043A \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0443.",maximized:!0,position:"bottom",ok:{label:"\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B",class:"full-width q-mt-md standoutButton"}}).onOk(()=>{t.router.push("/contacts")});return}else if(e.response.data.error_codes.client_id=="duplicateProfile"){s.create({title:"\u0412\u0445\u043E\u0434 \u043D\u0435 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D",message:"\u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044C \u043A \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0443, \u0447\u0442\u043E\u0431\u044B \u0443\u0437\u043D\u0430\u0442\u044C \u0434\u0435\u0442\u0430\u043B\u0438",maximized:!0,position:"bottom",ok:{label:"\u0412\u043E\u0439\u0442\u0438 \u0435\u0449\u0435 \u0440\u0430\u0437",class:"full-width q-mt-md standoutButton"}});return}}o().settings.allowNewPhonesOnlineListing==0?s.create({title:"\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0437\u0430\u044F\u0432\u043A\u0443",message:o().settings.requestOnlineAccessText,persistent:!0,maximized:!0,position:"bottom",cancel:{label:"\u041E\u0442\u043C\u0435\u043D\u0430",class:"full-width q-mt-md standoutButton"},ok:{label:"\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443",class:"full-width q-mt-md standoutButton"}}).onOk(()=>{t.router.push("/account/inquiry")}):o().settings.allowNewPhonesOnlineListing==1?t.router.push("/account/registration"):o().settings.allowNewPhonesOnlineListing==2&&s.create({title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430",message:"\u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044C \u043A \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0443, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435 \u0434\u043B\u044F \u0432\u0445\u043E\u0434\u0430",maximized:!0,position:"bottom",ok:{label:"\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B",class:"full-width q-mt-md standoutButton"}}).onOk(()=>{t.router.push("/contacts")})}).finally(()=>{t.checkLogin.isRequest=!1})}}});export{c as u};
