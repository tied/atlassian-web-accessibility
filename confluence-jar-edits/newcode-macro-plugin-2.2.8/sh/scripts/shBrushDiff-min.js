(function(){SyntaxHighlighter=SyntaxHighlighter||(typeof(require)!="undefined"?SyntaxHighlighter=require("shCore").SyntaxHighlighter:null);function a(){this.regexList=[{regex:/^\+\+\+.*$/gm,css:"color2"},{regex:/^\-\-\-.*$/gm,css:"color2"},{regex:/^\s.*$/gm,css:"color1"},{regex:/^@@.*@@$/gm,css:"variable"},{regex:/^\+[^\+]{1}.*$/gm,css:"string"},{regex:/^\-[^\-]{1}.*$/gm,css:"comments"}]}a.prototype=new SyntaxHighlighter.Highlighter();a.aliases=["diff","patch"];SyntaxHighlighter.brushes.Diff=a;typeof(exports)!="undefined"?exports.Brush=a:null})();