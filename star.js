(function(){
      // 获取触发目标元素index的方法

  var sta, starMain = document.querySelector(".starMain")
  // 绑定事件和方法及元素
  var EventUtil = {
          addHandler: function(element, type, hander) {
              if (element.addEventListener) {
                  element.addEventListener(type, handler, false);
              } else if (element.attachEvent) {
                  element.attachEvent("on" + type, handler);
              } else {
                  element["on" + type] = handler;
              }
          },
          removeHandler: function(element, type, handler) {
              if (element.removeEventListener) {
                  element.removeEventListener(type, handler, false);
              } else if (element.detachEvent) {
                  element.detachEvent("on" + type, handler);
              } else {
                  element["on" + type] = null;
              }
          }
      }
  function index(current, obj) {
      for (var e = 0, length = obj.length; e < length; e++) {
          if (obj[e] == current) {
              return e;
              console.log(e)
          }
      }
  }
  //  触发事件目标元素兼容处理
  function getEventTag(e){
          var e = e || window.event;
          return e.target || e.srcElement;
      }

  var handler = function(event) {
      var i, star;
     //兼容处理
      var ev = event || window.event;
      var target = ev.target || ev.srcElement;
      // 目标元素父节点
      var starsP=target.parentNode;
      // 目标元素兄弟节点
      var stars = target.parentNode.children;
      // 判断是否是指定的目标元素
  if(target.nodeName.toLowerCase()=='img'){
     var _index = index(target, stars);
     if(starsP.className!=='c_redColor'){
      switch (event.type) {
          case "click":
          for (var j = 0;j <= _index; j++) {
                  star = stars[j]; //或者strongs.item(i)
                  star.src = "images/bigstar1.png";
                  starsP.className="c_redColor"
              }
              break;
          case "mouseover":
              for (var j = 0;j <= _index; j++) {
                  star = stars[j]; //或者strongs.item(i)
                  star.src = "images/bigstar1.png";
              }
              break;
          case "mouseout":
             for (var j = 0;j <= _index; j++) {
                  star = stars[j]; //或者strongs.item(i)
                  star.src = "images/bigstar.png";
              }
              break
          }
        }
      }
  }

  EventUtil.addHandler(starMain, "click", handler)
  EventUtil.addHandler(starMain, "mouseover", handler)
  EventUtil.addHandler(starMain, "mouseout", handler)

}()) 