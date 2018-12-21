define("confluence-space-ia/avatar-picker/canvas-cropper",["jquery"],function(c){function b(e,d){if(!b.isSupported()){throw new Error("This browser doesn't support CanvasCropper.")}return this.init.apply(this,arguments)}var a=(function(){var d=document.createElement("canvas");return(typeof d.getContext==="function")&&d.getContext("2d")}());b.isSupported=function(){return a};b.prototype.defaults={outputFormat:"image/png",backgroundFillColor:undefined};b.prototype.init=function(e,d,f){this.width=e;this.height=d||e;this.options=c.extend({},this.defaults,f);this.canvas=c("<canvas/>").attr("width",this.width).attr("height",this.height)[0];return this};b.prototype.cropToDataURI=function(h,g,f,e,d){return this.crop(h,g,f,e,d).getDataURI(this.options.outputFormat)};b.prototype.crop=function(g,f,e,n,o){var d=this.canvas.getContext("2d"),l=0,j=0,k=this.width,h=this.height;d.clearRect(l,j,k,h);if(this.options.backgroundFillColor){d.fillStyle=this.options.backgroundFillColor;d.fillRect(l,j,k,h)}if(f<0){l=Math.round((Math.abs(f)/n)*k);f=0}if(e<0){j=Math.round((Math.abs(e)/o)*h);e=0}if(f+n>g.naturalWidth){var m=g.naturalWidth-f;k*=m/n;n=m}if(e+o>g.naturalHeight){var i=g.naturalHeight-e;h*=i/o;o=i}d.drawImage(g,f,e,n,o,l,j,k,h);return this};b.prototype.getDataURI=function(d){if(d){return this.canvas.toDataURL(d)}else{return null}};return b});