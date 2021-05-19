export default () => {
  const viewHomework = document.createElement("div");

  viewHomework.innerHTML = `
  <!-- TABLA -->
  <div class="createTask d-flex">
      <div id="container_table" class="container-table"> 
      </div>
      <div class="container-btnCreateTask d-flex">
          <button
            id="showModal_taskform"
            type="button"
            class="d-flex"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            data-bs-whatever="@mdo">
                <p>Crear tarea</p>
                <img src="./img/svg/+_red.svg" class="" alt="agregar" />
            </button>
        </div>
  </div>


  <!-- MODAL FORMULARIO - (Nueva tarea) -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    style="padding-right: 140px;"
  >
    <div class="modal-dialog">
      <div class="modal-content fromHomework">
        <div class="modal-header header-fromHomework">
          <h5 class="modal-title title-fromHomework" id="exampleModalLabel">
            Crear tarea
          </h5>
          <button
            type="button"
            class=" btnClose-fromHomework"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <img src="./img/svg/x_homework.svg" class="" alt="cerrar" />
          </button>
        </div>
        <div class="modal-body body-fromHomework">
          <form class="form-homework">

            <div class="form-group row row-fromHomework">
              <label
                for="inputText1"
                class="col-sm-2 col-form-label label-fromHomework"
                >1. Denominación</label
              >
              <div class="col-sm-10 containerInput-fromHomework">
                <input
                  type="text"
                  class="form-control input-fromHomework "
                  id="inputText1"
                  placeholder="Ejem: Solicitud de documentos a RRHH"
                />
              </div>
            </div>

            <div class="form-group row row-fromHomework">
              <label
                for="inputDate2"
                class="col-sm-2 col-form-label label-fromHomework"
                >2. Vencimiento</label
              >
              <div
                class="col-sm-10 containerInput-fromHomework"
                id="date_fromHomework"
              >
              </div>
            </div>

            <div class="form-group row row-fromHomework">
              <label
                for="inputText3"
                class="col-sm-2 col-form-label label-fromHomework"
                >3. Destinatario</label
              >
              <div class="col-sm-10 containerInput-fromHomework">
                <input
                  type="text"
                  class="form-control input-fromHomework "
                  id="inputText3"
                  placeholder="Escribir nombre del destinatario"
                />
              </div>
            </div>

            <div class="form-group row row-fromHomework">
              <label
                for="inputText4"
                class="col-sm-2 col-form-label label-fromHomework"
                >4. Correo</label
              >
              <div class="col-sm-10 containerInput-fromHomework">

                <!--<div class="input-fromHomework div-email">-->
                  <!--<span class="span-emailX">-->
                    <input
                    type="text"
                    class="form-control input-fromHomework"
                    id="inputText4"
                    placeholder="Escribir email del destinatario"
                    />
                    <!--<span>x</span>-->
                  <!--</span>-->
                <!--</div>-->
                
              </div>
            </div>

            <div class="form-group row row-fromHomework">
              <label
                for="textarea5"
                class="col-sm-2 col-form-label label-fromHomework labelTextarea-fromHomework"
                >5. Mensaje</label
              >
              <div class="col-sm-10 containerInput-fromHomework">
                <div class="containerTexarea-fromHomework">
                  <button
                    id="btnShow_modal_message"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#modalMessage"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                  >
                    <img src="./img/svg/edit-red.svg" class="" alt="editar" />
                    <textarea
                    class="form-control textarea-fromHomework"
                    id="textarea5"
                    rows="5"
                    col="5"
                    maxlength="135"
                    placeholder="Mensaje"
                    disabled
                    ></textarea>
                  </button>
                  <p>(Máximo 1200 caracteres)</p>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer footer-fromHomework">
          <!--<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>-->
          <button
            type="button"
            id="btnCreate_homework"
            class="btnCreate-fromHomework btnDisabled"
            data-bs-dismiss="modal"

            data-bs-toggle="modal"
            data-bs-target="#modalOk"

          >
            Crear tarea
          </button>
        </div>
      </div>
    </div>
  </div>


  <!-- MODAL Texarea del Formulario - (Mensaje) -->
  <div
    class="modal fade"
    data-backdrop="static"
    data-keyboard="false"

    id="modalMessage"
    tabindex="-1"
    aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true"
    style="z-index: 1060;"
  >
    <div class="modal-dialog modal-dialog-centered modalDialog-message">
      <div class="modal-content modalMessage">
        <div class="modal-header header-modalMessage">
          <h4 class="modal-title" id="exampleModalCenterTitle">Mensaje</h4>
          <button
            id="btnClose_message"
            type="button"
            class="close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <img src="./img/svg/x_homework.svg" class="" alt="cerrar" />
          </button>
        </div>
        <div class="modal-body body-modalMessage">
          <div class="containerTexarea-modalMessage">
            <textarea
              class="form-control textarea-modalMessage"
              id="textareaModal"
              rows="5"
              col="5"
              maxlength="1200"
              placeholder="Escriba su mensaje aquí."
            ></textarea>
            <p>(Máximo 1200 caracteres)</p>
          </div>
        </div>
        <div class="modal-footer footer-modalMessage">
          <button type="button" id="btnAdd_message" class="btn" data-bs-dismiss="modal">Continuar</button>
        </div>
      </div>
    </div>
  </div>


  <!-- MODAL Registro de Tarea completada - (Ok) -->

  <div
    id="modalOk"
    class="modal fade"
    data-backdrop="static"
    data-keyboard="false"
    tabindex="-1"
    aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true"
    style="z-index: 1060;"
  >
    <div class="modal-dialog modal-dialog-centered modalDialog-ok">
      <div class="modal-content modalOk ">

        <div class="modal-header header-modalOk d-flex">
          <button
            id="btnClose_Ok"
            type="button"
            class="close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <img src="./img/svg/x_homework.svg" class="" alt="cerrar" />
          </button>
        </div>

        <div class="modal-body body-modalOk">
          <div class="container-modalOk">
            <img src="./img/svg/check-circle.svg" alt="cerrar" />
            <p>Tu tarea ha sido creada con éxito en la actuación de "Requerimiento de comparecencia"</p>
          </div>
        </div>

        <div class="modal-footer footer-modalOk">
          <button type="button" id="btnAdd_message" class="btn" data-bs-dismiss="modal">Ver mi tarea</button>
        </div>

      </div>
    </div>
  </div>

  

`;

  //******* Fecha actual - input date *******/
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const todayDate = String(date.getDate()).padStart(2, "0");
  const datePattern = year + "-" + month + "-" + todayDate;
  const currentDate = todayDate + "/" + month + "/" + year;

  const dateFromHomework = viewHomework.querySelector("#date_fromHomework");
  const btnCreateHomework = viewHomework.querySelector("#btnCreate_homework");

  dateFromHomework.innerHTML = `
  <input 
    type="date" 
    id="inputDate2" 
    value="${datePattern}" 
    class="form-control input-fromHomework date-fromHomework" 
  >
  <!-- <img src="./img/svg/calendar-red.svg" class="" alt="icono calendario" /> -->
`;

  /******* Modal ingresar mensaje *******/
  const modalForm = viewHomework.querySelector("#exampleModal");
  const btnShow_modal_message = viewHomework.querySelector(
    "#btnShow_modal_message"
  );
  const textareaModal = viewHomework.querySelector("#textareaModal");
  const btnAddMessage = viewHomework.querySelector("#btnAdd_message");
  const btnCloseMessage = viewHomework.querySelector("#btnClose_message");
  const textarea5 = viewHomework.querySelector("#textarea5");

  btnShow_modal_message.addEventListener("click", (e) => {
    e.preventDefault;
    modalForm.classList.add("zIndexDown-modal");
  });

  btnAddMessage.addEventListener("click", (e) => {
    e.preventDefault;
    const valueTextAreaModal = textareaModal.value;

    textarea5.value = valueTextAreaModal;
    console.log(valueTextAreaModal);

    modalForm.classList.remove("zIndexDown-modal");
  });

  btnCloseMessage.addEventListener("click", (e) => {
    e.preventDefault;
    modalForm.classList.remove("zIndexDown-modal");
  });



  //****** Crea template de la tabla con datos del formulario  *******/
  const createHomework = () => {
    const expirationDate = viewHomework.querySelector("#inputDate2").value;
    const containerTable = viewHomework.querySelector("#container_table");

    containerTable.innerHTML = `
    <table class="table table-hover table-createTask">
      <thead>
        <tr class="thTable-createTask">
          <th scope="col">Tareas</th>
          <th scope="col">Documentos</th>
          <th scope="col">Equipo</th>
          <th scope="col">Registrado</th>
          <th scope="col">Vencimiento</th>
          <th scope="col">Estado</th>
        </tr>
      </thead>
      <tbody>
        <tr class="tdTable-createTask">
          <td>
          <input type="checkbox" id="cbox1" value="primary_checkbox">
          <label for="cbox1">Tema 1</label>
          </td>
          <td></td>
          <td>Imagen</td>
          <td>${currentDate}</td>
          <td>${expirationDate}</td>
          <td>Pendiente</td>
        </tr>
      </tbody>
    </table>
`;
  };



  //*******Validando campos del formulario********//
  const homeworkValidInputs = () => {
    const inputDenominacion = viewHomework.querySelector("#inputText1");
    const dateVencimiento = viewHomework.querySelector("#inputDate2");
    const inputDestinatario = viewHomework.querySelector("#inputText3");
    const inputCorreo = viewHomework.querySelector("#inputText4");
    const textareaModal = viewHomework.querySelector("#textareaModal");

    if (
      inputDenominacion.value === "" ||
      inputDestinatario.value === "" ||
      inputCorreo.value === "" ||
      textareaModal.value === ""
    ) {
      console.log("campos vacios");
      btnCreateHomework.classList.add("btnDisabled");
      btnCreateHomework.disabled = true;
    } else {
      console.log("campos llenos");
      btnCreateHomework.classList.remove("btnDisabled");
      btnCreateHomework.disabled = false;
    }
    
    // else if (
    //   inputDenominacion.validity.valid &&
    //   inputDestinatario.validity.valid &&
    //   inputCorreo.validity.valid &&
    //   inputMensaje.validity.valid
    // ) {
    //   btnCreateHomework.classList.remove("btnDisabled");
    //   btnCreateHomework.disabled = false;
    // }
  };


  const inputDenominacion = viewHomework.querySelector("#inputText1");
  const dateVencimiento = viewHomework.querySelector("#inputDate2");
  const inputDestinatario = viewHomework.querySelector("#inputText3");
  const inputCorreo = viewHomework.querySelector("#inputText4");
  // const textarea5 = viewHomework.querySelector("textarea5");


  inputDenominacion.addEventListener("input", homeworkValidInputs);
  inputDestinatario.addEventListener("input", homeworkValidInputs);
  inputCorreo.addEventListener("input", homeworkValidInputs);
  textareaModal.addEventListener("input", homeworkValidInputs);



 //******** Limpia inputs ********/
  const cleanInputs = () => {
    inputDenominacion.value =""
    inputDestinatario.value = "";
    inputCorreo.value = "";
    textarea5.value = "";
    textareaModal.value = "";
  }
 
const showModalTaskform = viewHomework.querySelector("#showModal_taskform");

//******* botón Crear tarea - abre modal del formulario *******/
showModalTaskform.addEventListener("click", (e) => {
  e.preventDefault;
  console.log("limpia?");
  cleanInputs();
  btnCreateHomework.classList.add("btnDisabled");
  btnCreateHomework.disabled = true;
});

//***** botón CREAR TAREA del formulario ******/
btnCreateHomework.addEventListener("click", (e) => {
  e.preventDefault;
  createHomework();
  cleanInputs();
});

  return viewHomework;
};


