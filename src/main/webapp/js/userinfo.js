$(function(){var b=$("#resultCount").val();var a=0;var c=$("#hidPageUserID").val();$.ajax({url:"/u/visitorsList.action?pageNo="+a+"&userId="+c,type:"get",data:"json",success:function(e){$("#visitors").empty();for(var d=0;d<e.length;d++){$('<dl class="clearfix sid-guest"><dt class="guest-pic"><a href="'+$www+"/u/"+e[d].userId+'.html" type="showCard" uweb="'+e[d].userId+'"><img width="50" height="50" border="0" alt="'+e[d].userName+'" src="'+e[d].faceImg+'"></a></dt><dd class="guest-con"><p class="sid-mane"><a rel="nofollow" class="blue" href="'+$www+"/u/"+e[d].userId+'.html" type="showCard" uweb="'+e[d].userId+'">'+e[d].userName+'</a></p><p class="sid-address gray02">'+e[d].ipLocation+'</p><p class="sid-time gray02">'+e[d].newDate+"</p></dd></dl>").appendTo("#visitors")}}})});
