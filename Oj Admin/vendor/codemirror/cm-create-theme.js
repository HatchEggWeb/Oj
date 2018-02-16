var etextarea = document.getElementById("test-problem-code");
var editer = CodeMirror.fromTextArea(etextarea,{
    mode: "text/x-java",
    theme: "3024-day",   //设置主题
    lineWrapping: true, //代码折叠
    foldGutter: true,
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
    matchBrackets: true,  
});
editer.setOption("lineNumbers","true");
var tselect = $('#test-problem-t-select');
tselect.change(function(event) {
    var option = $('#test-problem-t-select option:selected');
    editer.setOption("theme",option.text());
});