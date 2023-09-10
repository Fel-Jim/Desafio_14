const propiedadesVentas = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: "4 Habitaciones",
    baños: "4 Baños",
    costo: "5.000",
    smoke: false,
    pets: false,
  },
  {
    nombre: "Apartamento acogedor en la montaña",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: "2 Habitaciones",
    baños: "1 Baños",
    costo: "1.200",
    smoke: true,
    pets: true,
  },
  {
    nombre: "Penthouse de lujo con terraza panorámica",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: "3 Habitaciones ",
    baños: "3 Baños",
    costo: "4.500",
    smoke: false,
    pets: true,
  },
  {
    nombre: "Casa de campo con piscina",
    src: "https://i.pinimg.com/550x/86/2e/35/862e35f23996728fb030f2288b6e5d04.jpg",
    descripcion: "Esta casa de campo es muy bonita",
    ubicacion: "123 calle bonita, ciudad la mas bonita",
    habitaciones: "3 Habitaciones ",
    baños: "2 Baños",
    costo: "2.500",
    smoke: false,
    pets: true,
  },
];

const propiedadesAlquileres = [
  {
    nombre: "Apartamento en el centro de la ciudad",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: "2 Habitaciones",
    baños: "2 Baños",
    costo: "2.000",
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento luminoso con vista al mar",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar",
    ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: "3 Habitaciones",
    baños: "3 Baños",
    costo: " 2,500 ",
    smoke: true,
    pets: true,
  },
  {
    nombre: "Condominio moderno en zona residencial",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion:
      "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: "2 Habitaciones",
    baños: "2 Baños",
    costo: "2,200",
    smoke: false,
    pets: false,
  },
  {
    nombre: "casa de campo bonita",
    src: "https://www.turismovillaviciosa.es/v_portal/inc/imagen.asp?f=VV_LA_CASINA_DE_LA_TORRE_170.jpeg&c=1",
    descripcion: "esta casa esmuy bella",
    ubicacion: "123 calle bella, ciudad la mas bella",
    habitaciones: "3 Habitaciones ",
    baños: "2 Baños",
    costo: "4.500",
    smoke: false,
    pets: true,
  },
];

let html = "";

/*js para la pagina de ventas*/

const listaVentas = document.getElementById("listaDataVentas");

for (const propiedadesVenta of propiedadesVentas) {
  html += `
<div class="col-md-4 mb-4">
      <div class="card">
        <img src = ${propiedadesVenta.src}
          class="card-img-top"
          alt="Imagen del departamento"
        />
        <div class="card-body">
          <h5 class="card-title">${propiedadesVenta.nombre}</h5>
          <p class="card-text">${propiedadesVenta.descripcion}</p>
          <p>
            <i class="fas fa-map-marker-alt"></i> ${propiedadesVenta.ubicacion}
          </p>
          <p>
            <i class="fas fa-bed"></i> ${propiedadesVenta.habitaciones}
            <i class="fas fa-bath"></i> ${propiedadesVenta.baños}
          </p>
          <p>
            <i class="fas fa-dollar-sign"></i> ${propiedadesVenta.precio}
          </p>
          <p class="${propiedadesVenta.smoke ? "text-success" : "text-danger"}">
          <i class="fas ${
            propiedadesVenta.smoke ? "fa-smoking" : "fa-smoking-ban"
          }">
          </i>
          ${propiedadesVenta.smoke ? "Permitido fumar" : "No permitido fumar"}
      </p>
      <p class="${propiedadesVenta.pets ? "text-success" : "text-danger"}">
      <i class="fas ${propiedadesVenta.pets ? "fa-paw" : "fas fa-ban"}"></i>
      ${
        propiedadesVenta.pets
          ? "Mascotas permitidas"
          : "No se permiten mascotas"
      }
  </p>
  </div>
</div>
</div>`;
}

listaVentas.innerHTML = html;
/* JS para la pagina de alquiler*/

const listaAlquiler = document.getElementById("listaDataAlquileres");

for (const propiedadesAlquiler of propiedadesAlquileres) {
  html += `
<div class="col-md-4 mb-4">
      <div class="card">
        <img src = ${propiedadesAlquiler.src}
          class="card-img-top"
          alt="Imagen del departamento"
        />
        <div class="card-body">
          <h5 class="card-title">${propiedadesAlquiler.nombre}</h5>
          <p class="card-text">${propiedadesAlquiler.descripcion}</p>
          <p>
            <i class="fas fa-map-marker-alt"></i> ${
              propiedadesAlquiler.ubicacion
            }
          </p>
          <p>
            <i class="fas fa-bed"></i> ${propiedadesAlquiler.habitaciones}
            <i class="fas fa-bath"></i> ${propiedadesAlquiler.baños}
          </p>
          <p>
            <i class="fas fa-dollar-sign"></i> ${propiedadesAlquiler.precio}
          </p>
          <p class="${
            propiedadesAlquiler.smoke ? "text-success" : "text-danger"
          }">
                <i class="fas ${
                  propiedadesAlquiler.smoke ? "fa-smoking" : "fa-smoking-ban"
                }">
                </i>
                ${
                  propiedadesAlquiler.smoke
                    ? "Permitido fumar"
                    : "No permitido fumar"
                }
            </p>
            <p class="${
              propiedadesAlquiler.pets ? "text-success" : "text-danger"
            }">
            <i class="fas ${
              propiedadesAlquiler.pets ? "fa-paw" : "fas fa-ban"
            }"></i>
            ${
              propiedadesAlquiler.pets
                ? "Mascotas permitidas"
                : "No se permiten mascotas"
            }
        </p>
        </div>
      </div>
    </div>`;
}
listaAlquiler.innerHTML = html;
