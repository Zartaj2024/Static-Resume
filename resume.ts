const toggleButton = document.getElementById("S-button") as HTMLButtonElement;
const summarySection = document.getElementById("Summary") as HTMLDivElement;

toggleButton.addEventListener("click", () => {
    summarySection.style.display = summarySection.style.display === "none" ? "block" : "none";
});