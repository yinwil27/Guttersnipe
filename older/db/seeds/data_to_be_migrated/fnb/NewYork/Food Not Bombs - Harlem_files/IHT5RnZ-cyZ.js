if (self.CavalryLogger) { CavalryLogger.start_js(["or+pW"]); }

__d('legacy:dom',['DOM'],(function a(b,c,d,e,f,g){b.DOM=c('DOM');}),3);
__d('BlueBarFixedBehaviorController',['Arbiter','Bootloader'],(function a(b,c,d,e,f,g){f.exports={init:function h(i){if(!('getBoundingClientRect' in i))return;var j=void 0,k=document.documentElement;function l(){var m=i.getBoundingClientRect(),n=m.top,o=Math.round(n)-k.clientTop<=0;if(j!==o){j=o;c('Arbiter').inform('bluebarFixedBehaviorController/isfixed',j,c('Arbiter').BEHAVIOR_STATE);}}l();c('Bootloader').loadModules(["Event"],function(m){m.listen(window,'scroll',l);},'BlueBarFixedBehaviorController');}};}),null);