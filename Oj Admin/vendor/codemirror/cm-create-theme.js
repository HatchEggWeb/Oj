var etextarea = document.getElementById("test-problem-code");
var editer = CodeMirror.fromTextArea(etextarea,{
    mode: "text/x-csrc",
    theme: "duotone-light",   //设置主题
    lineWrapping: true, //代码折叠
    foldGutter: true,
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
    matchBrackets: true,  
});
editer.setOption("lineNumbers","true");
var lselect = $('#test-problem-l-select');
lselect.change(function(event) {
	var loption = $('#test-problem-l-select option:selected');
	if(loption.text() == "C"){
		editer.setOption("mode","text/x-csrc");
		//alert(editer.getOption("mode"));
	}
	else if(loption.text() == "C++"){
		editer.setOption("mode","text/x-c++src");
		//alert(editer.getOption("mode"));
	}
	else if(loption.text() == "Java"){
		editer.setOption("mode","text/x-java");
		//alert(editer.getOption("mode"));
	}
});
var tselect = $('#test-problem-t-select');
tselect.change(function(event) {
    var toption = $('#test-problem-t-select option:selected');
    editer.setOption("theme",toption.text());
});
