document.addEventListener("DOMContentLoaded", function () {

  const boxes = document.querySelectorAll(".contact-info > div");

  /* DIRECCIÓN → GOOGLE MAPS */
  if (boxes[0]) {
    boxes[0].addEventListener("click", function () {
      window.open(
        "https://www.google.com/maps/search/?api=1&query=C.+Villafuerte+17%2C+29017+M%C3%A1laga",
        "_blank"
      );
    });
  }

  /* TELÉFONO → LLAMAR */
  if (boxes[1]) {
    boxes[1].addEventListener("click", function () {
      window.location.href = "tel:+34655080538";
    });
  }

  /* INSTAGRAM */
  if (boxes[2]) {
    boxes[2].addEventListener("click", function () {
      window.open(
        "https://www.instagram.com/kyliansbarber",
        "_blank"
      );
    });
  }

  /* HORARIO → BOOKSY */
  if (boxes[3]) {
    boxes[3].addEventListener("click", function () {
      window.open(
        "https://booksy.com/es-es/dl/show-business/153364",
        "_blank"
      );
    });
  }

  /* WHATSAPP */
  if (!document.querySelector(".whatsapp-box")) {

    const whatsapp = document.createElement("div");

    whatsapp.className = "whatsapp-box";

    whatsapp.innerHTML = `
      <small>WHATSAPP</small>
      <p>ABRIR WHATSAPP →</p>
    `;

    whatsapp.addEventListener("click", function () {
      window.open(
        "https://wa.me/34655080538?text=Hola%20Kylian%27s%20Barber%2C%20quiero%20pedir%20cita.",
        "_blank"
      );
    });

    const contact = document.querySelector(".contact-info");

    if (contact) {
      contact.appendChild(whatsapp);
    }

  }

});
/* ANIMACIONES DE LA WEB */

document.addEventListener("DOMContentLoaded", function () {

  /* APARECER AL HACER SCROLL */
  const elementos = document.querySelectorAll(
    ".section, .about, .booking, .contact, .service"
  );

  const observer = new IntersectionObserver(
    function (entradas) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  elementos.forEach(function (elemento) {
    elemento.classList.add("animate-on-scroll");
    observer.observe(elemento);
  });


  /* ANIMACIÓN AL TOCAR UN SERVICIO */
  const servicios = document.querySelectorAll(".service");

  servicios.forEach(function (servicio) {
    servicio.addEventListener("click", function () {

      servicio.classList.remove("service-selected");

      void servicio.offsetWidth;

      servicio.classList.add("service-selected");

    });
  });

});
