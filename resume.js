var toggleButton = document.getElementById("S-button");
var summarySection = document.getElementById("Summary");
toggleButton.addEventListener("click", function () {
    summarySection.style.display = summarySection.style.display === "none" ? "block" : "none";
});
