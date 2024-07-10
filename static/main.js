function getStarted() {
  document.getElementById("starter").style.display = "none";
}

window.onload = function () {
  let startlistener = document.getElementById("startbutton");
  startlistener.addEventListener("click", getStarted);
};

AFRAME.registerComponent("markerhandler", {
  init: function () {
    this.markers = { reference: false, computers: false, referencebooks: false, studyrooms: false, leisure: false, photocopier: false, elevator: false, circulation: false }
    document
      .querySelector("#anchorzero")
      .addEventListener("targetFound", () => {
        this.markers.circulation = true;
        document.querySelector("#goalzero").innerHTML = "Circulation Desk ✔";
        this.check(this.markers);
      });
    document
      .querySelector("#anchorone")
      .addEventListener("targetFound", () => {
        this.markers.elevator = true;
        document.querySelector("#goalone").innerHTML = "Elevators ✔";
        this.check(this.markers);
      });
    document
      .querySelector("#anchortwo")
      .addEventListener("targetFound", () => {
        this.markers.leisure = true;
        document.querySelector("#goaltwo").innerHTML = "Leisure Collection ✔";
        this.check(this.markers);
      });
    document
      .querySelector("#anchorthree")
      .addEventListener("targetFound", () => {
        this.markers.photocopier = true;
        document.querySelector("#goalthree").innerHTML = "Photocopier ✔";
        this.check(this.markers);
      });
    document
      .querySelector("#anchorfour")
      .addEventListener("targetFound", () => {
        this.markers.computers = true;
        document.querySelector("#goalfour").innerHTML = "Printer ✔";
        this.check(this.markers);
      });
    document
      .querySelector("#anchorfive")
      .addEventListener("targetFound", () => {
        this.markers.referencebooks = true;
        document.querySelector("#goalfive").innerHTML = "Reference Collection ✔";
        this.check(this.markers);
      });
    document
      .querySelector("#anchorsix")
      .addEventListener("targetFound", () => {
        this.markers.reference = true;
        document.querySelector("#goalsix").innerHTML = "Reference Desk ✔";
        this.check(this.markers);
      });
    document
      .querySelector("#anchorseven")
      .addEventListener("targetFound", () => {
        this.markers.studyrooms = true;
        document.querySelector("#goalseven").innerHTML = "Study Rooms ✔";
        this.check(this.markers);
      });
  },
  check: function (markers) {
    if (
       Object.is(JSON.stringify(markers), JSON.stringify({ reference: true, computers: true, referencebooks: true, studyrooms: true, leisure: true, photocopier: true, elevator: true, circulation: true })) == true
    ) {
      document.getElementById("starter").style.display = "none";
      document.getElementById("ender").style.display = "block";
      document
        .getElementsByClassName("dropdown-menu")[0]
        .classList.remove("show");
    }
  },
});
