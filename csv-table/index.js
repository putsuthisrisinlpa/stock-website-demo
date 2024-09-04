const CSVFileInput = document.getElementById("csv-file-input");

CSVFileInput.addEventListener("change", (event) => {
  const file = event.target.files?.[0];
  if (!file) return;
  const fileReader = new FileReader().readAsText(file, "utf-8");
});
