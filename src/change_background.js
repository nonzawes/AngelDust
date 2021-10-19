//COlors(imgsurls)
var colors = ["#461748", "#336731", "#25BD1D", "#C8B06C", "#4B2545", "#782992"];
//ON HOVER CONSOLE LOG target ID return id
document.onmouseover = function (e) {
  //e = xy positioning
  current_id = e.target.id;
  console.log(current_id);
  document.body.style.background = colors[current_id - 1];
}; //endmouseover
