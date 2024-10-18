document.getElementById("uploadButton").addEventListener("click", function() {
    document.getElementById("fileInput").click();
});

document.getElementById("fileInput").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
        const fileURL = URL.createObjectURL(file);
        const pdfViewer = document.getElementById("pdfViewer");
        pdfViewer.src = fileURL;
        pdfViewer.style.display = "block";
    } else {
        alert("Por favor, selecciona un archivo PDF.");
    }
});
