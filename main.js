function getStarted() {
  document.getElementById("starter").style.display = "none";
}

window.onload = function () {
  let startlistener = document.getElementById("startbutton");
  startlistener.addEventListener("click", getStarted);
}

AFRAME.registerComponent('markerhandler', {
  init: function () {
    this.markers = { reference: false, computers: false, referencebooks: false, studyrooms: false, leisure: false, photocopier: false, elevator: false, circulation: false }
    document.querySelector("#anchorzero").addEventListener('markerFound', () => {
      this.markers.reference = true;
      document.querySelector('#goalzero').innerHTML = "Reference Desk ✔";
      this.check(this.markers);
    });
    document.querySelector("#anchorone").addEventListener('markerFound', () => {
      this.markers.computers = true;
      document.querySelector('#goalone').innerHTML = "Computers/Printer ✔";
      this.check(this.markers);
    });
    document.querySelector("#anchortwo").addEventListener('markerFound', () => {
      this.markers.referencebooks = true;
      document.querySelector('#goaltwo').innerHTML = "Reference Books ✔";
      this.check(this.markers);
    });
    document.querySelector("#anchorthree").addEventListener('markerFound', () => {
      this.markers.studyrooms = true;
      document.querySelector('#goalthree').innerHTML = "Study Rooms ✔";
      this.check(this.markers);
    });
    document.querySelector("#anchorfour").addEventListener('markerFound', () => {
      this.markers.leisure = true;
      document.querySelector('#goalfour').innerHTML = "Leisure Collection ✔";
      this.check(this.markers);
    });
    document.querySelector("#anchorfive").addEventListener('markerFound', () => {
      this.markers.photocopier = true;
      document.querySelector('#goalfive').innerHTML = "Photocopier/Scanner ✔";
      this.check(this.markers);
    });
    document.querySelector("#anchorsix").addEventListener('markerFound', () => {
      this.markers.elevator = true;
      document.querySelector('#goalsix').innerHTML = "Elevator to the stacks ✔";
      this.check(this.markers);
    });
    document.querySelector("#anchorseven").addEventListener('markerFound', () => {
      this.markers.circulation = true;
      document.querySelector('#goalseven').innerHTML = "Circulation Desk ✔";
      this.check(this.markers);
    });
  },
  check: function (markers) {
     if (Object.is(JSON.stringify(markers), JSON.stringify({ reference: true, computers: true, referencebooks: true, studyrooms: true, leisure: true, photocopier: true, elevator: true, circulation: true })) == true) {
       document.getElementById("ender").style.display = "block";
       document.getElementsByClassName("dropdown-menu")[0].classList.remove("show");
    }
  },
});
