
document.addEventListener("DOMContentLoaded", function() {
  const primoevent = document.querySelector(".primoevent");
  const ricercaVisiva = document.querySelector("#ricercaVisiva");
  const salvainraccolte= document.querySelector("#salvainraccolte");
  const impostazioni= document.querySelector("#impostazioni");

  primoevent.addEventListener("mouseenter", function() {
    ricercaVisiva.style.display = "flex";
  });


  ricercaVisiva.addEventListener("mouseenter", function() {
    salvainraccolte.style.display = "flex";
    impostazioni.style.display  = "flex";
  });
  primoevent.addEventListener("mouseleave", function() {
    salvainraccolte.style.display = "none";
    impostazioni.style.display  = "none";
  });

  

  primoevent.addEventListener("mouseleave", function() {
    ricercaVisiva.style.display = "none";
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const primoevent2 = document.querySelectorAll("[data-index]");

  primoevent2.forEach((elemento) => {
    const index = elemento.dataset.index;

    const ricercaVisiva = document.querySelector("#ricercaVisiva" + index);
    const salvainraccolte = document.querySelector("#salvainraccolte" + index);
    const impostazioni = document.querySelector("#impostazioni" + index);

    elemento.addEventListener("mouseenter", function() {
      ricercaVisiva.style.display = "flex";
    });

    ricercaVisiva.addEventListener("mouseenter", function() {
      salvainraccolte.style.display = "flex";
      impostazioni.style.display = "flex";
      ricercaVisiva.style.display = "flex";
    });

    salvainraccolte.addEventListener("mouseenter", function() {
      salvainraccolte.style.display = "flex";
      impostazioni.style.display = "flex";
      ricercaVisiva.style.display = "flex";
    });
    impostazioni.addEventListener("mouseenter", function() {
      salvainraccolte.style.display = "flex";
      impostazioni.style.display = "flex";
      ricercaVisiva.style.display = "flex";
    });

    elemento.addEventListener("mouseleave", function() {
      salvainraccolte.style.display = "none";
      impostazioni.style.display = "none";
    });

    elemento.addEventListener("mouseleave", function() {
      ricercaVisiva.style.display = "none";
    });
  });
});

let isSmiling = false;

function Sorridi() {
  const image = document.querySelector(".immagine-ridotta5");
  const autore = document.querySelector('#bio .autore');

  if (!isSmiling) {
    image.src = 'result.gif';
    isSmiling = true;
    const new_autore = document.createElement('p');
    new_autore.textContent = 'Ora sta sorridendo!';
    autore.innerHTML = '';
    autore.appendChild(new_autore)
  } else {
    image.src = 'aranzulla2.png'; // Inserisci l'URL originale dell'immagine
    isSmiling = false;
    autore.removeChild(autore.lastChild);
    autore.innerHTML = 'AUTORE --> clicca la foto per farlo sorridere';
  }

  
}

document.addEventListener('DOMContentLoaded', function() {
  const image = document.querySelector(".immagine-ridotta5");
  image.addEventListener('click', Sorridi);
});

