function calculate() {
    var area =
      Number(document.getElementById("FarmingCalculator").value) *
      Number(document.getElementById("FarmingCalculator").value);
    var perimeter =
      Number(document.getElementById("FarmingCalculator").value) * 4;
    document.getElementById("lblarea").innerHTML = area;
    document.getElementById("lblperimeter").innerHTML = perimeter;
  }
  