global.WEB_SERVER=WEB_SERVER=METHOD({run:function(e,t){"use strict";var o=require("webserver");o.create().listen(e,function(e,o){t({},function(e){var t=void 0===e.statusCode?200:e.statusCode,n=void 0===e.headers?{}:e.headers,i=e.contentType,s=e.content,E=void 0===e.encoding?"utf-8":E,a=e.cacheTime;void 0!==i&&(n["Content-Type"]=contentTypes),void 0!==a&&(n.ETag=a,n["Last-Modified"]=new Date(a).toUTCString()),o.statusCode=t,o.headers=n,o.write(s),o.close()})}),console.log("[UPPERCASE.JS-WEB_SERVER] RUNNING WEB SERVER... (PORT:"+e+")")}});