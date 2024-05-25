function getStarted() {
  document.getElementById("starter").style.display = "none";
}

window.onload = function () {
  let startlistener = document.getElementById("startbutton");
  startlistener.addEventListener("click", getStarted);
};

AFRAME.registerComponent("markerhandler", {
  init: function () {
    this.markers = { reference: false };
    document
      .querySelector("#anchorzero")
      .addEventListener("targetFound", () => {
        this.markers.reference = true;
        document.querySelector("#goalzero").innerHTML = "Reference Desk ✔";
        this.check(this.markers);
      });
  },
  check: function (markers) {
    if (
      Object.is(JSON.stringify(markers), JSON.stringify({ reference: true })) ==
      true
    ) {
      document.getElementById("starter").style.display = "none";
      document.getElementById("ender").style.display = "block";
      document
        .getElementsByClassName("dropdown-menu")[0]
        .classList.remove("show");
    }
  },
});
