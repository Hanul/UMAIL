UMAIL.CONNECT_TO_MAIL_SERVER=METHOD(e=>{let r=require("nodemailer");return{run:(e,t)=>{let n=e.host,s=e.port,o=e.isSecure,u=e.username,E=e.password,i=r.createTransport({host:n,port:s,secure:o,auth:{user:u,pass:E}});t(e=>{let r=e.senderName,t=e.senderAddress,n=e.receiverAddress,s=e.receiverAddresses,o=e.title,u=e.content,E=e.html;i.sendMail({from:r+" <"+t+">",to:void 0===s?n:RUN(()=>{let e="";return EACH(s,(r,t)=>{e+=r+(t<s.length-1?", ":"")}),e}),subject:o,text:u,html:E},(e,r)=>{e!==TO_DELETE&&SHOW_ERROR("UPPERCASE-CONNECT_TO_MAIL_SERVER","SEND MAIL ERROR",e)})})}}});