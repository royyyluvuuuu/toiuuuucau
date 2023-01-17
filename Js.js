const textConfig = {
  text1: "Heluuuuuuu cậu!!!",
  text2: "Tớ có điều này muốn hỏi cậu, cậu phải trả lời thật lòng nhaaa 💘",
  text3: "Cậu yêu tớ có phải không nàoooooo :3",
  text4: "Cậu mà thoát ra không trả lời là muốn làm vợ tớ rồi đó nhaaa <3",
  text5: "Cậu mơ à???",
  text6: "Tớ iuuu cậu nhiều lắm íiiiii <3",
  text7: "Nói cho tớ lí do cậu thích tớ đi :33333",
  text8: "❤ Gửi cho tớ ❤",
  text9: "Vì cậu tài năng cutee ga lăng vlllll <3",
  text10: "Tớ biết mà ^^ Tớ cũng thích cậu lâu lắm rùi. Luv u 3000 <3",
  text11:
    "Giờ thì còn chờ gì nữa mà ko inbox tớ để lên lịch cho first date nàooooo 💕",
  text12: "Okii lunn <3",
};

$(document).ready(function () {
  setTimeout(function () {
    firstQuestion();
    $(".spinner").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({
      overflow: "visible",
    });
  }, 600);

  $("#text3").html(textConfig.text3);
  $("#text4").html(textConfig.text4);
  $("#no").html(textConfig.text5);
  $("#yes").html(textConfig.text6);

  function firstQuestion() {
    $(".content").hide();
    Swal.fire({
      title: textConfig.text1,
      text: textConfig.text2,
      imageUrl: "img/mèo.jpg",
      imageWidth: 300,
      imageHeight: 300,
      background: '#fff url("img/bg.jpg")',
      imageAlt: "Custom image",
    }).then(function () {
      $(".content").show(200);
    });
  }
  function switchButton() {
    var audio = new Audio("sound/vịt.mp3");
    audio.play();
    var leftNo = $("#no").css("left");
    var topNO = $("#no").css("top");
    var leftY = $("#yes").css("left");
    var topY = $("#yes").css("top");
    $("#no").css("left", leftY);
    $("#no").css("top", topY);
    $("#yes").css("left", leftNo);
    $("#yes").css("top", topNO);
  }
  function moveButton() {
    var audio = new Audio("sound/poc.mp3");
    audio.play();
    if (screen.width <= 600) {
      var x = Math.random() * 300;
      var y = Math.random() * 500;
    } else {
      var x = Math.random() * 500;
      var y = Math.random() * 500;
    }
    var left = x + "px";
    var top = y + "px";
    $("#no").css("left", left);
    $("#no").css("top", top);
  }

  var n = 0;
  $("#no").mousemove(function () {
    if (n < 1) switchButton();
    if (n > 1) moveButton();
    n++;
  });
  $("#no").click(() => {
    if (screen.width >= 900) switchButton();
  });
  function textGenerate() {
    var n = "";
    var text = " " + textConfig.text9;
    var a = Array.from(text);
    var textVal = $("#txtReason").val() ? $("#txtReason").val() : "";
    var count = textVal.length;
    if (count > 0) {
      for (let i = 1; i <= count; i++) {
        n = n + a[i];
        if (i == text.length + 1) {
          $("#txtReason").val("");
          n = "";
          break;
        }
      }
    }
    $("#txtReason").val(n);
  }
  $("#yes").click(function () {
    var audio = new Audio("sound/tick.mp3");
    audio.play();
    Swal.fire({
      title: textConfig.text7,
      html: true,
      width: 900,
      padding: "3em",
      html: "<input type='text' class='form-control' id='txtReason'  placeholder='Whyyy'>",
      background: '#fff url("img/bg.jpg")',
      backdrop: `
                    rgba(0,0,123,0.4)
                    url("img/giphy2.gif")
                    left top
                    no-repeat
                  `,
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonColor: "#fe8a71",
      cancelButtonColor: "#f6cd61",
      confirmButtonText: textConfig.text8,
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          width: 900,
          confirmButtonText: textConfig.text12,
          background: '#fff url("img/bg.jpg")',
          title: textConfig.text10,
          text: textConfig.text11,
          confirmButtonColor: "#83d0c9",
          onClose: () => {
            window.location = "http://m.me/royloveneu";
          },
        });
      }
    });

    $("#txtReason").focus(function () {
      var handleWriteText = setInterval(function () {
        textGenerate();
      }, 10);
      $("#txtReason").blur(function () {
        clearInterval(handleWriteText);
      });
    });
  });
});
