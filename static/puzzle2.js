var hits = 0;
var gameOver = false;
var count = 30;
var counter = setInterval(timer, 1000);
setTimeout("pop()", 3000);

function pop() {
  var x = Math.random() * 500;
  var y = Math.random() * 150;
  $(".mole").css("opacity", 1);
  $(".mole").css({
    top: y,
    left: x,
  });
  setTimeout("pop()", Math.random() * 3000);
}

$(".mole").click(function () {
  if (gameOver) return;
  var audio = document.getElementById("clickSound");
  if (audio) {
    audio.currentTime = 0;
    audio.play().catch(function (e) {
      console.log("Audio play failed:", e);
    });
  }
  $(".mole").css("opacity", 0);
  $("#score").html(++hits);
});

$("button").click(function () {
  count = 30;
  hits = 0;
  $("#score").html(hits);
  gameOver = false;
  $("#overlay").hide();
  $("#nextBtn").hide();
});

function goNext() {
  window.location.href = "/puzzle3"; // your next page
}

function timer() {
  if (count <= 0) {
    gameOver = true;
    $("#timer").html("Game&nbsp;Over");
    $("#overlay").css("display", "flex");

    if (hits == 14) {
      $("#message").html("🎉 You Win!");
      $("#nextBtn").show();
    } else {
      $("#message").html("💔 You lose, try again");
      $("#nextBtn").hide();
    }
    return;
  }
  $("#timer").html((count < 10 ? "0:0" : "0:") + count--);
}
