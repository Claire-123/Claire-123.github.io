function clearAll() {
  var list = document.querySelectorAll('a[data-toggle="collapse"]');
  for (var i = 0; i < list.length; i++) {
    var current = list[i];
    var parent = $(current).attr('href');
    var bgClass = $(parent).attr('class').split(' ').pop();
    $(current).removeClass("text-white");
    $(parent).removeClass("bg-success");
  }
}

$('a[data-toggle="collapse"]').on(
  'click',
  function(){
    clearAll();
    var parent = $(this).attr('href');
    var bgClass = $(parent).attr('class').split(' ').pop();
    var check = $(this).attr('href-check');
    var showClass = $(check).attr('class').split(' ').pop();

    if(showClass=="show")
    {
      $(this).removeClass("text-white");
      $(parent).removeClass("bg-success");
    }
    else{
      $(this).addClass("text-white");
      $(parent).addClass("bg-success");
    }
  }
);
