var Body = {
  setColor : function(color) {
    // var i ,alist = document.querySelectorAll('a');
    // for(i=0; i<alist.length; i++){
    //   alist[i].style.color = color;
    // }
    $('a').css('color', color);

  },
  setBackColor : function(bgColor, fontColor, sel) {
    // sel.style.backgroundColor = bgColor;
    // sel.style.color = fontColor;
    $(sel).css('backgroundColor', bgColor);
    $(sel).css('color', fontColor);
  }

}

function nightDayHandler(btn) {
  var target = document.querySelector('body');
  if(btn.value === 'NIGHT'){
    btn.value = 'DAY';
    Body.setBackColor('black', 'white', target);
    Body.setColor('powderblue');
  }
  else{
    btn.value = 'NIGHT';
    Body.setBackColor('white', 'black', target);
    Body.setColor('orange');
  }
}
