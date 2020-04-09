$(document).ready(function () {
  //Slider
  if (window.location.href.indexOf("index") > -1) {
    $(".galery").bxSlider({
      mode: "fade",
      captions: true,
      slideWidth: 1210,
      responsive: true,
    });
  }

  //Post
  if (window.location.href.indexOf("index") > -1) {
    let posts = [
      {
        title: "Prueba de titulo 1",
        date:
          "Publicado el dia " +
          moment().date() +
          " de " +
          moment().format("MMMM") +
          " del " +
          moment().format("YYYY"),
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              rerum in quam, rem reprehenderit totam veritatis incidunt pariatur
              molestiae necessitatibus voluptatibus, aperiam, ratione magnam.
              Nisi natus magnam alias obcaecati corrupti. Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Esse rerum hic vel quasi ipsum,
              harum veniam eaque quidem laborum temporibus? Repellendus minus,
              accusamus non voluptates voluptas praesentium dolores molestiae
              dolore!`,
      },
      {
        title: "Prueba de titulo 2",
        date:
          "Publicado el dia" +
          moment().date() +
          " de " +
          moment().format("MMMM") +
          " del " +
          moment().format("YYYY"),
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              rerum in quam, rem reprehenderit totam veritatis incidunt pariatur
              molestiae necessitatibus voluptatibus, aperiam, ratione magnam.
              Nisi natus magnam alias obcaecati corrupti. Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Esse rerum hic vel quasi ipsum,
              harum veniam eaque quidem laborum temporibus? Repellendus minus,
              accusamus non voluptates voluptas praesentium dolores molestiae
              dolore!`,
      },
      {
        title: "Prueba de titulo 3",
        date:
          "Publicado el dia" +
          moment().date() +
          " de " +
          moment().format("MMMM") +
          " del " +
          moment().format("YYYY"),
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              rerum in quam, rem reprehenderit totam veritatis incidunt pariatur
              molestiae necessitatibus voluptatibus, aperiam, ratione magnam.
              Nisi natus magnam alias obcaecati corrupti. Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Esse rerum hic vel quasi ipsum,
              harum veniam eaque quidem laborum temporibus? Repellendus minus,
              accusamus non voluptates voluptas praesentium dolores molestiae
              dolore!`,
      },
      {
        title: "Prueba de titulo 4",
        date:
          "Publicado el dia" +
          moment().date() +
          " de " +
          moment().format("MMMM") +
          " del " +
          moment().format("YYYY"),
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              rerum in quam, rem reprehenderit totam veritatis incidunt pariatur
              molestiae necessitatibus voluptatibus, aperiam, ratione magnam.
              Nisi natus magnam alias obcaecati corrupti. Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Esse rerum hic vel quasi ipsum,
              harum veniam eaque quidem laborum temporibus? Repellendus minus,
              accusamus non voluptates voluptas praesentium dolores molestiae
              dolore!`,
      },
      {
        title: "Prueba de titulo 5",
        date:
          "Publicado el dia" +
          moment().date() +
          " de " +
          moment().format("MMMM") +
          " del " +
          moment().format("YYYY"),
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              rerum in quam, rem reprehenderit totam veritatis incidunt pariatur
              molestiae necessitatibus voluptatibus, aperiam, ratione magnam.
              Nisi natus magnam alias obcaecati corrupti. Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Esse rerum hic vel quasi ipsum,
              harum veniam eaque quidem laborum temporibus? Repellendus minus,
              accusamus non voluptates voluptas praesentium dolores molestiae
              dolore!`,
      },
    ];

    for (const post of posts) {
      let article = `
       <article class="post">
         <h2>${post.title}</h2>
         <span class="date">${post.date}</span>
         <p>
            ${post.content}
         </p>
         <a href="#" class="button-more">
           Leer más
         </a>
       </article>
    `;
      $("#posts").append(article);
    }
  }
  //Selector de tema

  let theme = $("#theme");

  $("#to-green").click(function () {
    theme.attr("href", "/css/green.css");
  });

  $("#to-red").click(function () {
    theme.attr("href", "/css/red.css");
  });

  $("#to-blue").click(function () {
    theme.attr("href", "/css/blue.css");
  });

  //Scroll arriba de la web

  $(".subir").click(function (e) {
    e.preventDefault();
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });

  //Login

  $("#login form").submit(function () {
    let form_name = $("#name").val();
    localStorage.setItem("form_name", form_name);
  });

  let form_name = localStorage.getItem("form_name");

  if (form_name) {
    let about_parrafo = $("#about p");
    about_parrafo.html(
      "<br><strong>Bienvenido, " + form_name + "</strong>" + " "
    );
    about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");

    $("#login").hide();

    $("#logout").click(function () {
      localStorage.clear();
      location.reload();
    });
  }

  /*   Acordeon */
  if (window.location.href.indexOf("about") > -1) {
    $("#acordeon").accordion();
  }

  /*  Reloj */
  if (window.location.href.indexOf("reloj") > -1) {
    let reloj = moment().format("hh:mm:ss");
    $("#reloj").html(reloj);
    setInterval(function () {
      let reloj = moment().format("hh:mm:ss");
      $("#reloj").html(reloj);
    }, 1000);
  }

  /* Validación */
  if (window.location.href.indexOf("contact") > -1) {
    $("form input[name='date']").datepicker({
      dateFormat: "dd/mm/yy",
    });
    $.validate({
      lang: "es",
    });
  }
});
