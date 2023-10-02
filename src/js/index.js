const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");

function alternarModal() {
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () =>{
    alternarModal();
    video.setAttribute("src", "https://www.youtube.com/embed/d161xEhp4Ec");
    d161xEhp4Ec
} );

botaoFecharModal.addEventListener("click", () =>{
    alternarModal();
    video.setAttribute("src", "");
});


 

 


