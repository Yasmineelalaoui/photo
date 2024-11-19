// Fonction pour mettre à jour l'image et le texte
function upDate(previewPic) {
    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
    imageDiv.textContent = previewPic.alt;
}

// Fonction pour réinitialiser l'image et le texte
function unDo() {
    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "";
    imageDiv.textContent = "Hover over an image below to display here";
}

// Ajout des événements aux images
const previews = document.querySelectorAll(".preview");
previews.forEach(preview => {
    preview.addEventListener("mouseover", function () {
        upDate(this);
    });
    preview.addEventListener("mouseout", unDo);
});
