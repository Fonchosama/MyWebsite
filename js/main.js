
// Function that let the content of the about page buttons being showed// 

function toggleContent(id) {
    const content = document.getElementById(id);
    
    // Alterna entre mostrar y ocultar
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}