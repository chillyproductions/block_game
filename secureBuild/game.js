var _0x5608=['1856201JApiny','abs','length','./game.html','debu','canvas','1vZLWQD','addEventListener','while\x20(true)\x20{}','7743eAuXWj','gger','getItem','getElementById','apply','41ghGFPU','init','1eusUuX','string','stateObject','action','fill','1050ANEEtK','input','function\x20*\x5c(\x20*\x5c)','100112VkECnt','score:\x20','name','645954suDbHY','test','#000000','108mLdlTB','score','constructor','call','894111pVdLNx','href','getContext','counter','fillRect','#00cc00','572247gRnVwR','\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)','innerHTML','1WNPMco','keydown','key'];var _0x226c18=_0x34d7;(function(_0x2d842b,_0x10be9d){var _0x18994c=_0x34d7;while(!![]){try{var _0x4fdf17=-parseInt(_0x18994c(0xde))*parseInt(_0x18994c(0xd9))+-parseInt(_0x18994c(0xca))+-parseInt(_0x18994c(0xe5))*parseInt(_0x18994c(0xc0))+parseInt(_0x18994c(0xba))*-parseInt(_0x18994c(0xcd))+-parseInt(_0x18994c(0xc4))+parseInt(_0x18994c(0xbd))*parseInt(_0x18994c(0xe0))+parseInt(_0x18994c(0xd6))*parseInt(_0x18994c(0xd0));if(_0x4fdf17===_0x10be9d)break;else _0x2d842b['push'](_0x2d842b['shift']());}catch(_0x3a9aab){_0x2d842b['push'](_0x2d842b['shift']());}}}(_0x5608,0x7b3f6));var _0x43d6f2=function(){var _0x830adb=!![];return function(_0x385d79,_0x1ed46b){var _0x347dc9=_0x830adb?function(){var _0x39e1a5=_0x34d7;if(_0x1ed46b){var _0x4dcc17=_0x1ed46b[_0x39e1a5(0xdd)](_0x385d79,arguments);return _0x1ed46b=null,_0x4dcc17;}}:function(){};return _0x830adb=![],_0x347dc9;};}();(function(){_0x43d6f2(this,function(){var _0xd5b806=_0x34d7,_0x283906=new RegExp(_0xd5b806(0xb9)),_0x128916=new RegExp(_0xd5b806(0xcb),'i'),_0x277dab=_0x444ba9(_0xd5b806(0xdf));!_0x283906[_0xd5b806(0xbe)](_0x277dab+'chain')||!_0x128916[_0xd5b806(0xbe)](_0x277dab+_0xd5b806(0xb8))?_0x277dab('0'):_0x444ba9();})();}());const size=0x32;var gameLoop;const canvas=document[_0x226c18(0xdc)](_0x226c18(0xd5)),ctx=canvas[_0x226c18(0xc6)]('2d');canvas['height']=0x2*size,canvas['width']=0x14*size;var side=0x0,switchCountDown=0x0,boardArr=[new Array(0x14)[_0x226c18(0xe4)](0x0),new Array(0x14)[_0x226c18(0xe4)](0x0)],playerPos=0x0;function _0x34d7(_0x1cd1d2,_0x1d04e3){_0x1cd1d2=_0x1cd1d2-0xb8;var _0x2d05b4=_0x5608[_0x1cd1d2];return _0x2d05b4;}function rotate(){var _0x42d04a=_0x226c18;for(let _0x393ec6=0x0;_0x393ec6<boardArr[0x0][_0x42d04a(0xd2)]-0x1;_0x393ec6++){boardArr[0x0][_0x393ec6]=boardArr[0x0][_0x393ec6+0x1],boardArr[0x1][_0x393ec6]=boardArr[0x1][_0x393ec6+0x1];}switchCountDown==0x0?(boardArr[side][boardArr[0x0]['length']-0x1]=0x1,boardArr[Math['abs'](side-0x1)][boardArr[0x0][_0x42d04a(0xd2)]-0x1]=0x0,Math['random']()>0.7&&(switchCountDown=0x3,side=Math[_0x42d04a(0xd1)](side-0x1))):(switchCountDown--,boardArr[0x0][boardArr[0x0]['length']-0x1]=0x0,boardArr[0x1][boardArr[0x0][_0x42d04a(0xd2)]-0x1]=0x0);}function showBoard(){var _0x4a95d4=_0x226c18;ctx['fillStyle']=_0x4a95d4(0xbf);for(let _0x34cdfb=0x0;_0x34cdfb<boardArr[0x0][_0x4a95d4(0xd2)];_0x34cdfb++){if(boardArr[0x0][_0x34cdfb])ctx['fillRect'](_0x34cdfb*size,0x0,size,size);else{if(boardArr[0x1][_0x34cdfb])ctx[_0x4a95d4(0xc8)](_0x34cdfb*size,size,size,size);}}}function showPlayer(){var _0xf27f32=_0x226c18;ctx['fillStyle']=_0xf27f32(0xc9),ctx[_0xf27f32(0xc8)](0x1*size,playerPos*size,size,size);}function clearBoard(){var _0x3d3a83=_0x226c18;ctx['clearRect'](0x0,0x0,boardArr[0x0][_0x3d3a83(0xd2)]*size,boardArr[0x0][_0x3d3a83(0xd2)]*size);}function deathCheck(_0x1957f4){var _0x4c66b1=_0x226c18;boardArr[playerPos][0x1]==0x1&&(clearInterval(gameLoop),post(_0x1957f4),alert(_0x1957f4),location[_0x4c66b1(0xc5)]=_0x4c66b1(0xd3));}function startListening(){var _0x422eae=_0x226c18,_0x162e1f=0x0;gameLoop=setInterval(()=>{var _0x311426=_0x34d7;clearBoard(),rotate(),showBoard(),showPlayer(),deathCheck(_0x162e1f),_0x162e1f+=0x14,document[_0x311426(0xdc)](_0x311426(0xc1))[_0x311426(0xcc)]=_0x311426(0xbb)+_0x162e1f;},0x32),document[_0x422eae(0xd7)](_0x422eae(0xce),_0x54787c=>{var _0x2bf99a=_0x422eae;if(_0x54787c[_0x2bf99a(0xcf)]=='ArrowUp')playerPos=0x0,clearBoard(),showBoard(),showPlayer();else _0x54787c['key']=='ArrowDown'&&(playerPos=0x1,clearBoard(),showBoard(),showPlayer());});}addEventListener('load',async()=>{var _0x54519e=_0x226c18;if(localStorage[_0x54519e(0xdb)](_0x54519e(0xbc)))startListening();else location[_0x54519e(0xc5)]='./';});function _0x444ba9(_0x4e1819){function _0xb3c0f2(_0x38de08){var _0x8efdd0=_0x34d7;if(typeof _0x38de08===_0x8efdd0(0xe1))return function(_0x3fa7bb){}[_0x8efdd0(0xc2)](_0x8efdd0(0xd8))[_0x8efdd0(0xdd)](_0x8efdd0(0xc7));else(''+_0x38de08/_0x38de08)[_0x8efdd0(0xd2)]!==0x1||_0x38de08%0x14===0x0?function(){return!![];}['constructor'](_0x8efdd0(0xd4)+_0x8efdd0(0xda))[_0x8efdd0(0xc3)](_0x8efdd0(0xe3)):function(){return![];}[_0x8efdd0(0xc2)](_0x8efdd0(0xd4)+_0x8efdd0(0xda))[_0x8efdd0(0xdd)](_0x8efdd0(0xe2));_0xb3c0f2(++_0x38de08);}try{if(_0x4e1819)return _0xb3c0f2;else _0xb3c0f2(0x0);}catch(_0x5b0c1a){}}