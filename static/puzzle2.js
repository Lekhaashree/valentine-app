var hits = 0;
var gameOver = false;
var count = 30;
var counter = setInterval(timer, 1000);
setTimeout("pop()", 3000);

function pop() {
  const wrapper = $("#wrapper");
  const mole = $(".mole");

  const wrapperWidth = wrapper.width();
  const wrapperHeight = wrapper.height();

  const moleWidth = mole.width();
  const moleHeight = mole.height();

  const x = Math.random() * (wrapperWidth - moleWidth);
  const y = Math.random() * (wrapperHeight - moleHeight);

  mole.css({
    opacity: 1,
    left: x + "px",
    top: y + "px",
  });

  setTimeout(pop, Math.random() * 2000 + 800);
}

///event listener to initialize the audio context on the first touch.
document.body.addEventListener("touchstart", function initAudio() {
    var audio = document.getElementById("clickSound");
    audio.play().then(() => audio.pause());
    document.body.removeEventListener("touchstart", initAudio);
}, { once: true });


$(".mole").on("click touchstart", function () {
  if (gameOver) return;
  var audio = document.getElementById("clickSound");
  if (audio) {
    audio.currentTime = 0;
    audio.play().catch((e) => {
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
