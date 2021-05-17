export default () => {
const viewHomework = document.createElement("div");

viewHomework.innerHTML = `
<button 
  type="button" 
  class="btn btn-primary" 
  data-bs-toggle="modal" 
  data-bs-target="#exampleModal" 
  data-bs-whatever="@mdo">
  Nueva tarea
</button>


<div 
  class="modal fade" 
  id="exampleModal" 
  tabindex="-1" 
  aria-labelledby="exampleModalLabel" 
  aria-hidden="true"
  >
  <div class="modal-dialog">
    <div class="modal-content fromHomework">

      <div class="modal-header header-fromHomework">
        <h5 class="modal-title title-fromHomework" id="exampleModalLabel">Crear tarea</h5>
        <button type="button" class=" btnClose-fromHomework" data-bs-dismiss="modal" aria-label="Close">
          <img src="./img/svg/x_homework.svg" class="" alt="cerrar" />
        </button>
      </div>

      <div class="modal-body body-fromHomework">
        <form class="form-homework">

          <div class="form-group row row-fromHomework">
            <label for="inputText1" class="col-sm-2 col-form-label label-fromHomework">1. Denominación</label>
            <div class="col-sm-10 containerInput-fromHomework">
              <input type="text" class="form-control input-fromHomework " id="inputText1" placeholder="Ejem: Solicitud de documentos a RRHH">
            </div>
          </div>

          <div class="form-group row row-fromHomework">
            <label for="inputDate2" class="col-sm-2 col-form-label label-fromHomework">2. Vencimiento</label>
            <div class="col-sm-10 containerInput-fromHomework" id="date_fromHomework">
              <!-- <input type="date" class="form-control input-fromHomework " id="inputDate2" value="" placeholder=""> -->
            </div>
          </div>

          <div class="form-group row row-fromHomework">
            <label for="inputText3" class="col-sm-2 col-form-label label-fromHomework">3. Destinatario</label>
            <div class="col-sm-10 containerInput-fromHomework">
              <input type="text" class="form-control input-fromHomework " id="inputText3" placeholder="Escribir nombre del destinatario">
            </div>
          </div>

          <div class="form-group row row-fromHomework">
            <label for="inputText4" class="col-sm-2 col-form-label label-fromHomework">4. Correo</label>
            <div class="col-sm-10 containerInput-fromHomework">
              <input type="text" class="form-control input-fromHomework " id="inputText4" placeholder="Escribir email del destinatario">
            </div>
          </div>

          <div class="form-group row row-fromHomework">
            <label for="inputText5" class="col-sm-2 col-form-label label-fromHomework">5. Mensaje</label>
            <div class="col-sm-10 containerInput-fromHomework">
              <input type="text" class="form-control input-fromHomework " id="inputText5" placeholder="Mensaje">
            </div>
          </div>
          
        </form>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Send message</button>
      </div>

    </div>
  </div>
</div>

  `;



//******* Fecha actual - input date *******/
const date = new Date();
const year = date.getFullYear();
const month = String(date.getMonth()+1).padStart(2,'0');
const todayDate = String(date.getDate()).padStart(2, '0');
const datePattern = year + '-' + month + '-' + todayDate;
// const datePattern = todayDate + "-" + month + "-" + year;

const dateFromHomework = viewHomework.querySelector("#date_fromHomework");

dateFromHomework.innerHTML = `
  <input 
    type="date" 
    id="inputDate2" 
    value="${datePattern}" 
    class="form-control input-fromHomework date-fromHomework" 
  >
  <img src="./img/svg/calendar-red.svg" class="" alt="icono calendario" />

`;




  return viewHomework;
};


