function uviba_OOS_uploader(){var e=this;this.isset=function(e){return"undefined"!=typeof e&&null!==e?!0:!1},this.upload_file=function(a,t,n,o){("undefined"==typeof o||o===!1)&&(o={});var i=t.find(".uviba-oos-image-uploader").attr("uviba-uploader-id");this.when_upload_begin_func(t,n,e.uploaded_item_count[i]);var r=new FormData;r.append("file",a),this.isset(o.addition_url_params)&&$.each(o.addition_url_params,function(e,a){r.append(e,a)}),r.append("response_url_params",e.response_url_params);var u=$.ajax({xhr:function(){var a=$.ajaxSettings.xhr();return console.log(a),a.upload&&a.upload.addEventListener("progress",function(a){if(a.lengthComputable){var o=a.loaded/a.total;o=parseInt(100*o),e.when_upload_progress_func(a,o,t,n,e.uploaded_item_count[i])}},!1),a},url:uviba_UPLOAD_Url+"?connect_key="+uviba_API_CONNECT_KEY,type:"POST",data:r,processData:!1,contentType:!1,crossDomain:!0,success:function(a){var o=t.attr("upload-value"),r=t.find(".uviba-oos-image-uploader"),u=r.attr("upload-value");"undefined"!=typeof o&&o!==!1&&t.attr("upload-value",""),"undefined"!=typeof u&&u!==!1&&r.attr("upload-value","");try{var l=JSON.parse(a);l.error!==!0&&(void 0!==l.file_name||null!==l.file_name||l.file_name!==!1)&&e.uploaded_file_names[i].push(l.file_name)}catch(d){}e.when_upload_finish_func(a,t,n,e.uploaded_item_count[i])},error:function(){e.when_upload_fail_func(t,n,e.uploaded_item_count[i])}});e.xhr_req_ar.push(u)},this.xhr_req_ar=[],this.uploaded_file_names=[],this.upload_file_count_limit=[],this.uploaded_item_count=[],e.when_select_default=function(e,a){e.next().is(".uviba-response-container")&&e.next().remove(),e.after('<div class="uviba-response-container" ></div>')},e.when_upload_begin_default=function(e,a,t){console.log("upload begin"),e.next(".uviba-response-container").append('<div upload-index="'+a+'" class="uviba-response-image" style="margin: 6px 5px;display: inline-block;border: 1px solid #1874CD;background: #e6e7e8;" >			<div  class="uviba-response-image-loader" style="width:200px;" >			<div  style="background:#1874CD;width:10%;min-width:10%;height:15px;min-height:15px;color: white;	    text-align: center;"  >0%</div>			</div>')},e.when_upload_progress_default=function(e,a,t,n){var o=t.next(".uviba-response-container").find('.uviba-response-image[upload-index="'+n+'"] > .uviba-response-image-loader > div');o.animate({width:a+"%"},100),o.html(a+"%")},e.when_upload_finish_default=function(e,a,t,n){try{var e=JSON.parse(e)}catch(o){return!1}var i=a.next(".uviba-response-container").find('.uviba-response-image[upload-index="'+t+'"]');return i.css({"border-color":"#243a4e"}),console.log("upload finish"),e.error===!0?(i.remove(),!1):void i.html('<img src="'+e.file_src+'" />')},e.when_upload_fail_default=function(e,a){console.log("upload failed");var t=e.next(".uviba-response-container").find('.uviba-response-image[upload-index="'+a+'"]');t.remove()},e.when_select_func=function(a,t){e.when_select_default(a,t)},this.when_upload_begin_func=function(a,t,n){e.when_upload_begin_default(a,t,n)},this.when_upload_progress_func=function(a,t,n,o){e.when_upload_progress_default(a,t,n,o)},this.when_upload_finish_func=function(a,t,n,o){e.when_upload_finish_default(a,t,n,o)},this.when_upload_fail_func=function(a,t){e.when_upload_fail_default(a,t)},this.before_drag_word="Drag Photos Here",this.after_drag_word="Drop Here",this.button_word="Choose Photos",this.response_url_params="",this.select=function(e){return document.querySelectorAll(e)},this.when_upload_finish=function(a){e.when_upload_finish_func=a},this.when_upload_fail=function(a){e.when_upload_fail_func=a},this.when_upload_begin=function(a){e.when_upload_begin_func=a},this.when_upload_progress=function(a){e.when_upload_progress_func=a},this.when_select=function(a){e.when_select_func=a},this.func_queux=null,this.set_response_url_params=function(a){"object"==typeof a&&null!==a?window.jQuery?(clearTimeout(this.func_queux),response_url_params_string="",$.each(a,function(e,a){mp_func_ar_public.hasOwnProperty(e)?(""!=response_url_params_string&&(response_url_params_string+=","),response_url_params_string+=mp_func_ar_public[e]+"_"+a):(""!=response_url_params_string&&(response_url_params_string+=","),response_url_params_string+=e+"_"+a)}),e.response_url_params=response_url_params_string):this.func_queux=setTimeout(function(){e.set_response_url_params(a)},300):e.response_url_params=a},this.typeOf=function(e){var a=typeof e;return"object"===a&&(e?e instanceof Array&&(a="array"):a="null"),a},this.setUploadUrl=function(e){uviba_UPLOAD_Url=e},this.getbyclass=function(e){return document.getElementsByClassName(e)},this.after=function(e,a){e.insertAdjacentHTML("afterend",a)},this.get_uploaded_file_names=function(a){return void 0!==a?e.uploaded_file_names[a]:e.uploaded_file_names},this.clear_uploaded_file_names=function(a){e.uploaded_file_names[a]=[]},this.create_input=function(){var a=$(".uviba-oos-image-uploader[manupulated-upload-button!=1]");$.each(a,function(){if(1!=$(this).attr("manupulated-upload-button")){var t=$(this).attr("uviba-uploader-id"),n=$(this).attr("multiple");console.log(n),"undefined"!=typeof n&&n!==!1?n===!1||"false"==n?e.upload_file_count_limit[t]=1:e.upload_file_count_limit[t]=!1:e.upload_file_count_limit[t]=1,$(this).hide(),$(this).attr("upload-value",""),$(this).attr("manupulated-upload-button",1);var o=a.attr("buttonStyle");("undefined"==typeof o||o===!1)&&(o="");var i=a.attr("buttonAttr");("undefined"==typeof i||i===!1)&&(i="");var r=a.attr("buttonClass");("undefined"==typeof r||r===!1)&&(r="");var u=a.attr("dragAreaStyle");("undefined"==typeof u||u===!1)&&(u="");var l=a.attr("dragAreaAttr");("undefined"==typeof l||l===!1)&&(l="");var d=a.attr("dragAreaClass");("undefined"==typeof d||d===!1)&&(d="");var s=a.attr("buttonText");("undefined"==typeof d||d===!1)&&(e.button_word=s),$(this).after("<div "+i+' style="'+o+'" class=" '+r+' uviba-oos-image-uploader-button" >				'+e.button_word+"			</div>").after('<div style="'+u+'" '+l+'  class=" '+d+' uviba-oos-image-drop  " >'+e.before_drag_word+" </div>"),e.uploaded_file_names[t]=[],e.uploaded_item_count[t]=[]}});var t=a.parent().find(".uviba-oos-image-uploader-button"),n=a.parent().find(".uviba-oos-image-drop");t.on("click",function(){$(this).parent().find(".uviba-oos-image-uploader").click()}),n.on("drop dragdrop",function(){a.attr("upload-value",""),event.preventDefault();var t=$(this).parent().find(".uviba-oos-image-uploader").attr("uviba-uploader-id"),n=event.dataTransfer.files,o=0,i=e.upload_file_count_limit[t],r=$(this).parent(),u=n.length;i!==!1&&u>i&&(u=i),$.each(e.xhr_req_ar,function(e,a){a.abort()}),e.uploaded_file_names[t]=[],e.uploaded_item_count[t]=u,e.when_select_func(r,e.uploaded_item_count[t]),$.each(n,function(a,t){(i>o&&i!==!1||i===!1)&&(void 0!==t&&e.upload_file(t,r,o+1),o++)}),$(this).html(e.before_drag_word);var l=event.dataTransfer.getData("text/html");if(null==l||!e.isset(l)||""==$.trim(l)){var d=event.dataTransfer.getData("URL");return void(null!=d&&e.isset(d)&&""!=$.trim(d)&&e.upload_file(null,r,o+1,{addition_url_params:{file_url:d}}))}var s=$("<div>").append(l),_=$(s).find("img");if(0!==_.length)var p=_.attr("src");else{var f=$(s).find("a");if(0==f.length)return;var p=f.attr("href")}e.upload_file(null,r,o+1,{addition_url_params:{file_url:p}})}),n.on("dragenter",function(e){e.preventDefault()}),n.on("dragover",function(a){a.preventDefault(),$(this).html(e.after_drag_word)}),n.on("dragleave",function(a){a.preventDefault(),$(this).html(e.before_drag_word)}),a.on("change",function(){if(""==$(this).val())return!1;var t=0,n=$(this).parent().find(".uviba-oos-image-uploader").attr("uviba-uploader-id"),o=e.upload_file_count_limit[n],i=$(this).parent(),r=this.files.length;o!==!1&&r>o&&(r=o),$.each(e.xhr_req_ar,function(e,a){a.abort()}),e.uploaded_file_names[n]=[],a.attr("upload-value",""),a.find(".uviba-oos-image-uploader").attr("upload-value",""),e.uploaded_item_count[n]=r,e.when_select_func(i,e.uploaded_item_count[n]),$.each(this.files,function(a,n){(o>t&&o!==!1||o===!1)&&(e.upload_file(n,i,t+1),t++)}),$(this).val("")})}}var uviba_OOS_uploader=new uviba_OOS_uploader,uviba_uploader_callback=function(){$(function(){var e=$(".uviba-oos-image-drop"),a=$("html"),t=!1,n=-1;a.bind("dragenter",function(){e=$(".uviba-oos-image-drop"),$(".uviba-oos-image-uploader-button").hide(),e.show(),t=!0}),a.bind("drop",function(a){a.preventDefault(),t=!1,clearTimeout(n),n=setTimeout(function(){e=$(".uviba-oos-image-drop"),t||(e.hide(),$(".uviba-oos-image-uploader-button").show())},200)}),a.bind("dragover",function(){t=!0}),a.bind("dragleave",function(a){t=!1,clearTimeout(n),n=setTimeout(function(){t||(e.hide(),$(".uviba-oos-image-uploader-button").show())},200)}),uviba_OOS_uploader.create_input()}),$("head").prepend("<style>.uviba-oos-image-drop{display:none;border:2px dashed #4773dc;color:#5882ff;text-align:center;z-index:12;background:#f1f1f1;padding:14px;border-radius:2px;width:129px;margin:10px 0;}.uviba-oos-image-uploader-button{text-align:center;padding:5px;border:1px solid #3086f5;background:#3086f5;color:#fff;width:123px;border-radius:2px;cursor:pointer;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin:10px 0;}.uviba-oos-image-uploader-button:active{box-shadow:inset 0 3px 5px rgba(0,0,0,.125)}.uviba-oos-image-uploader-button:hover{background:#5198f3;border-color:#5198f3}</style>")};if(window.jQuery)uviba_uploader_callback();else{var script=document.createElement("script");script.type="text/javascript",script.src="https://code.jquery.com/jquery-1.9.1.min.js",script.onload=uviba_uploader_callback,document.getElementsByTagName("head")[0].appendChild(script)}
