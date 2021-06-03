var reader = document.querySelector('canvas');
var ctx = reader.getContext('2d');

function checkpixcel(){
  var obstacle1 = ctx.getImageData(176, 112, 1, 1);
  var obstacle2 = ctx.getImageData(176, 90, 1, 1);
  var obstacle11 = ctx.getImageData(110, 112, 1, 1);
  var obstacle22 = ctx.getImageData(110, 90, 1, 1);
  console.log(obstacle1.data[0]+'__'+obstacle2.data[0]+'__'+obstacle11.data[0]+'__'+obstacle22.data[0]);
  if(obstacle1.data[0] || obstacle2.data[0] || obstacle11.data[0] || obstacle22.data[0]){
    var e = new Event('keydown');
    e.which = e.keyCode = 32;
    document.dispatchEvent(e);
  }
}
var loop = setInterval(checkpixcel,5);
