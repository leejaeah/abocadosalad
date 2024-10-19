console.clear();

new fullpage("#fullpage", {
  afterLoad: function (origin, destination, direction) {
    $("#fullpage .section [data-animate-class]").each(function (index, node) {
      const $node = $(node);
      const className = $node.attr("data-animate-class");
      $node.removeClass(className);
    });
    
    $("#fullpage .section")
      .eq(destination.index)
      .find("[data-animate-class]")
      .each(function (index, node) {
        const $node = $(node);
        const className = $node.attr("data-animate-class");
        $node.addClass(className);
      });
  }
});


var textPath = document.querySelector("#text-path");

var textContainer = document.querySelector("#text-container");

var path = document.querySelector(textPath.getAttribute("href"));

var pathLength = path.getTotalLength();
console.log(pathLength);

function updateTextPathOffset(offset) {
  textPath.setAttribute("startOffset", offset);
}

updateTextPathOffset(pathLength);

function onScroll() {
  requestAnimationFrame(function () {
    var rect = textContainer.getBoundingClientRect();
    var scrollPercent = rect.y / window.innerHeight;
    console.log(scrollPercent);
    updateTextPathOffset(scrollPercent * 2 * pathLength);
  });
}

window.addEventListener("scroll", onScroll);
