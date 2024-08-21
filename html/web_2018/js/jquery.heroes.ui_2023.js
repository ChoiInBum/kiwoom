$(function () {
  setGNB();
  setHeadSearch();
  setGNBFix();

  var lnb = $("#lnb");
  if (0 < lnb.size()) {
    setLNB();
  }

  /* placeholder 동작 바인딩 */
  var placeholder = $(".placeHolder");
  if (0 < placeholder.size()) {
    setPlaceHolder(placeholder);
  }

  /* layer popup 동작 바인딩 */
  var layer = $(".openLayer");
  if (0 < layer.size()) {
    setLayer(layer);
  }
});

function setGNB() {
  var gnb = $("#gnb");
  /* var ChildGroup = $('> li', gnb); */
  /* var gnbChild = $('> li > ul', gnb); */
  var gnbChild = $(".depth2", gnb);
  /* var link = $('> li > a', gnb); */
  var link = $("div[class^=depth] a", gnb);
  var linkAll = $("a", gnb);
  /*
	link.bind('mouseenter focus', function(){
		_close();
		$(this).addClass('current').next().stop().fadeIn();
	});*/
  /* ChildGroup.bind('mouseenter focus', function(){
		$(link).removeClass('current');
		$(this).addClass('current');
	}); */
  //  $('#gnb, #gnb *').bind('mouseenter focus', function(){
  // 	$('#header').addClass('megaSlide')
  // 	$(gnbChild).stop().slideDown();
  // 	console.log('enter')

  // });

  $("#gnb").bind("mouseenter", function () {
    $("#header").addClass("megaSlide");
    //$(gnbChild).stop().slideDown();
  });

  gnb.bind("mouseleave", _close);

  $("body *").not(gnb).bind("focus", _close);

  function _close() {
    //link.removeClass('current').next().stop().delay(100).slideUp('fast', function(){
    // $(gnbChild).stop().delay(100).slideUp('fast', function(){
    // 	$('#header').delay(300).removeClass('megaSlide');
    // 	console.log('leave')
    // });
    $("#header").removeClass("megaSlide");
  }
}

function setHeadSearch() {
  var search = $("#headSearch");
  var searchAll = $("*", search);
  var globalAll = $("*", ".navGlobal");
  var link = $(".navGlobal .btnSearch");
  var linkAll = $("div.nav div *, div.nav div, div.nav");

  link.bind("click", function (e) {
    e.preventDefault();
    e.stopPropagation();

    /*$(this).parent().hide();*/
    search.show().find('input[type="text"]').focus();
    $(globalAll).hide();
  });
  /*
	searchAll.bind('click', function(e){
		e.stopPropagation();
	});
	*/
  $("body *")
    .not("#headSearch, .btnSearch")
    .bind("click", function (e) {
      search.hide();
      $(globalAll).show();
    });
}

function setPlaceHolder(obj) {
  obj.each(function () {
    if ($.trim($(this).val()) != "") {
      $(this).addClass("focus");
    }
  });

  obj.each(function () {
    $(this)
      .bind("focus", function () {
        if ($.trim($(this).val()) == "") {
          $(this).addClass("focus");
        }
      })
      .bind("blur", function () {
        if ($.trim($(this).val()) == "") {
          $(this).val("").removeClass("focus");
        }
      });
  });
}

function getParentPath(subPath) {
  if (typeof getParentPathInSub !== "undefined") {
    return getParentPathInSub(subPath);
  }

  return subPath;
}

function setLNB() {
  var lnb = $("#lnb li a");
  lnb.removeClass("on");

  var path = getParentPath(location.pathname);

  if (path == "/fans/cheer/introTeam-view.do") {
    // 응원단 상세페이지 url 정의
    path = getParentPath("/fans/cheer/introTeam-list.do");
  }

  lnb
    .filter(function () {
      return $(this).attr("href") == path;
    })
    .addClass("on")
    .parents("ul")
    .show();

  lnb.bind("click", function (e) {
    /*$(this).toggleClass('on');*/
    //console.log( $(this).next().length );
    if ($(this).next().length > 0) {
      e.preventDefault();
      $(this).next().slideToggle();
    }
  });
}

function setGNBFix() {
  var sTop = $("#header > .innerWrap").outerHeight();
  var sTop2 = $("#header").outerHeight() * 2.5;
  var sFoot = $("#footer").outerHeight();
  var check = false;

  $(window)
    .bind("load", function () {
      if (sTop < $(window).scrollTop()) {
        check = true;
        $("#header").addClass("fix");
        // $('#body span.toTop').fadeIn();
      }
      if (sTop2 < $(window).scrollTop()) {
        $("#body span.toTop").fadeIn();
      }
    })
    .bind("scroll", function () {
      if (sTop < $(window).scrollTop() && false == check) {
        check = true;
        $("#header").addClass("fix");
        //$('body').css('padding-top', sTop);
        //$('#body span.toTop').fadeIn();
      } else if (sTop >= $(window).scrollTop() && true == check) {
        check = false;
        $("#header").removeClass("fix");
        //$('body').css('padding-top', '0');
        //$('#body span.toTop').fadeOut();
      }
      if (sTop2 < $(window).scrollTop()) {
        $("#body span.toTop").fadeIn();
      } else if (sTop2 >= $(window).scrollTop()) {
        $("#body span.toTop").fadeOut();
        console.log(sTop2);
      }
      /*
		if($(document).height() < $(window).scrollTop() + $(window).height() + sFoot - 40){
			$('#body span.toTop').css({
				bottom : ($(window).scrollTop() + $(window).height() + sFoot + 160) - $(document).height()
			});
		}else if($(document).height() >= $(window).scrollTop() + $(window).height() + sFoot - 40){
			$('#body span.toTop').css({
				bottom : 200
			});
		}*/
    });

  // top button click
  $('a[href="#header"]').bind("click", function () {
    $(window).scrollTop(0);
  });
}

function setLayer(obj) {
  var link = obj;
  var background = $("div.layerBG");
  var close = $("div.layer .closeLayer");

  link.bind("click", function (e) {
    var layer = $($(this).attr("href"));
    e.preventDefault();
    layer.show();

    if ($(window).height() < layer.height()) {
      $("div.body", layer)
        .height($(window).height() - 150)
        .css({
          "overflow-y": "scroll",
        });
    }

    layer.css({
      "margin-left": -(layer.width() / 2),
      "margin-top": -(layer.height() / 2),
    });
    background.show();
    $("body").addClass("oh");
  });

  close.on("click", function () {
    $("body").removeClass("oh");
    $(this).parents(".layer").hide();
    background.hide();
  });
}
