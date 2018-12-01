// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/aspect dojo/_base/lang ../DijitFactory ./dijitsSetting/TextDijitSetting ./dijitsSetting/ImageDijitSetting ./dijitsSetting/ChartDijitSetting ./dijitsSetting/GaugeDijitSetting ./dijitsSetting/NumberDijitSetting".split(" "),function(m,g,n,p,q,r,t,u){var b={},c={},h=null,k=null,l=null,e={};b._dijitsSetting=c;b.getDijitSetting=function(a){return c[a.id]};b.createDijitSetting=function(a,b){if(c[a.id])return c[a.id];var d;switch(a.type){case "text":d=p;break;case "image":d=q;break;case "chart":d=
r;break;case "gauge":d=t;break;case "number":d=u}if(!d)return console.error("Unknow type:",a.type),null;var f={nls:h,config:a.config,map:k,appConfig:l,dijit:n.createDijit(a)};f.templateName=b;g.mixin(f,e);b=new d(f);m.after(b,"destroy",function(){delete c[a.id]},a);return c[a.id]=b};b.setNls=function(a){h=a};b.setMap=function(a){k=a};b.setContext=function(a){e=a;Object.keys(c).forEach(function(a){g.mixin(c[a],e)})};b.setAppConfig=function(a){l=a};return b});