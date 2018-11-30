
var $btns = document.getElementsByClassName("prodcutkind");
for (var i=0;i<$btns.length;i++) {
	var b=$btns[i];
	b.onclick=function(){
		for(var j=0;j<$btns.length;j++){
			$btns[j].css({"backgroundColor": "#390c20",});
			this.css({
				"backgroundColor":"#9dc819",
				"fontWeight":"700"
			});
		}
	}
}