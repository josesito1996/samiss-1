export default () => {
  const viewHome = document.createElement("div");
  const inspectionDate = localStorage.getItem("date");
  const inspectionOrder = localStorage.getItem("order");
  const etapa_actuacion = localStorage.getItem("etapa");
  const tipo_actuacion = localStorage.getItem("tipo"); 
  // const date_actuacion = localStorage.getItem("date_actuacion"); 

  // fecha actual  
  let date = new Date()

let days = date.getDate()
let months = date.getMonth() + 1
let years = date.getFullYear()

if(months < 10){
  const fecha1 = `${days}/0${months}/${years}`
  localStorage.setItem("fechaActual", fecha1)
  console.log(`${days}/0${months}/${years}`)
}else{
  const fecha2 = `${days}/${months}/${years}`
  console.log(`${days}/${months}/${years}`)
  localStorage.setItem("fechaActual", fecha2)
}
// Imprime: 9/6/2019
  
  const year = localStorage.getItem("year"); 
  const day = localStorage.getItem("day"); 
  const month = localStorage.getItem("month"); 

  const funcionario_actuacion = localStorage.getItem("funcionario_actuacion");

  const descripcion_actuacion = localStorage.getItem("descripcion_actuacion")
  viewHome.innerHTML =  `
    <div class="wrapper">

      <div class="header">

        <div class="header-left d-flex">
          <img src="./img/svg/logo.svg" class="logo" alt="logo" />
          <span class="vertical-line"></span>
        </div>

        <div class="header-center d-flex">
          <div class="tag-case d-flex">
            <p>Mis Casos</p>
          </div>
          <div class="search-notification d-flex">
            <img src="./img/svg/search.svg" class="icon" alt="search" />
            <img
              src="./img/svg/notifications.svg"
              class="icon"
              alt="nofications"
            />
            <span class="vertical-line"></span>
          </div>
        </div>

        <div class="header-right d-flex">
          <img src="./img/svg/avatar.svg" class="avatar" alt="profile" />
          <p>Alonso Hoyos</p>
          <img src="./img/svg/chevron-down.svg" alt="profile menu" />
        </div>

      </div>

      <div class="mainCase">
        <div class="btn-back d-flex">
          <img src="./img/svg/double left.svg" alt="back button" />
          <p>Volver</p>
        </div>
        <div class="title-btnActions d-flex">
          <h5>Caso estibadores</h5>
          <div class="btn-actions d-flex" id="actuacion">
            <p class="moreIcon">+</p>
            <p>Actuación</p>
          </div>
        </div>
        <div class="tags-case d-flex">
          <ul class="">
            <li  ><a id="irDatos" class="allA"  href="#">Datos</a></li>
            <li id="liActuacion"  ><a href="#" id="irActuacion"  class="allA">Actuaciones</a></li>
            <li><a href="#">Documentos</a></li>
            <li><a href="#">Tareas</a></li>
          </ul>
        </div>
        <div  id="main-datos">
        <div class="detailMain d-flex">
          <div class="detail-description">
            <div class="title-description d-flex">
              <h6 class="text-blue-opacity">Descripción</h6>

              <img
                id="btnEditComment"
                src="./img/svg/edit.svg"
                class="btnEditComment"
                alt="icon edit"
              />
              <img
                id="btnSaveComment"
                src="./img/svg/save.svg"
                class="btnSaveComment hide"
                alt="icon edit"
              />
            </div>
            <p id="pComment" class="ptxt-comment">
              Hola <strong>Alonso</strong> si deseas escribir algo puntual sobre
              el caso puedes hacer <strong>click aquí</strong> o en el
              <strong>ícono del lapiz</strong>. Recuerda que podrás editar en
              cualquier momento la descripción.
            </p>
            <div id="textareaContainer" class="textarea-container hide">
              <textarea
                name="txtComment"
                id="txtComment"
                placeholder="Escribir aquí..."
                cols=""
                rows=""
            
                class="txt-comment hide"
                disabled
              ></textarea>
              <p id="countComment" class="hide">(Máximo 200 caracteres)</p>

            </div>
            <h6 class="text-blue-opacity">Fecha de creación</h6>
            <p>${inspectionDate}</p>
            <h6 class="text-blue-opacity">Orden de inspección</h6>
            <p>${inspectionOrder}</p>
            <h6 class="text-blue-opacity">Materias</h6>
            <div id="materias" class="cardsMaterias">
              <div id="materia1" class="card_materia_uno">
                <img src="./img/svg/redes.svg" class="cardIcon" />
                <p class="text-blue">Relaciones Laborales</p>
              </div>
              <div id="materia2" class="card_materia_dos">
                <img src="./img/svg/seguro-de-vida.svg" class="cardIcon" />
                <p class="text-blue">Seguridad y salud en el trabajo</p>
              </div>
              <div id="materia3" class="card_materia_tres">
                <img src="./img/svg/headhunting.svg" class="cardIcon" />
                <p class="text-blue">Empleo y colocación</p>
              </div>

              <div id="materia4" class="card_materia_cuatro">

                <img src="./img/svg/apreton-manos.svg" class="cardIcon" />
                <p class="text-blue">Intermediación laboral</p>
              </div>
              <div id="materia5" class="card_materia_cinco">
                <img src="./img/svg/presentacion.svg" class="cardIcon" />
                <p class="text-blue">Promoción y formación</p>
              </div>
              <div id="materia6" class="card_materia_seis">
                <img src="./img/svg/headhunting.svg" class="cardIcon" />
                <p class="text-blue">Extranjeros</p>
              </div>
              <div id="materia7" class="card_materia_siete">
                <img src="./img/svg/bandera.svg" class="cardIcon" />
                <p class="text-blue">Seguridad social</p>
              </div>
              <div id="materia8" class="card_materia_ocho">
                <img src="./img/svg/inspeccion.svg" class="cardIcon" />

                <p class="text-blue">Labor inspectiva</p>

              </div>
            </div>
          </div>
          <div class="detail-process-performance d-flex  justify-content-center align-items-center">
            <div class="card-process bg-white ">
                <div class="col-12 " id="inProcess">
                    <div class="row" id="title_inProcess">
                    <p >Actuación en proceso</p>
                    </div>
                    <div class="row">
                        <div class="d-flex flex-row " style="margin-right:50px">
                        <div>
                            <p class="title_tipoResolution">Tipo:Resolución de <br> Sub intendencia</p>
                        </div>

                        <div class="d-flex flex-row justify-content-center  " style="border-left:none;" id="container_adicional_information">
                            <img class="img_tipoResolution" src="./img/svg/file text.svg" alt="" />
                            <div class="d-flex flex-column   ">
                                <p class="text_Resolution">0</p>
                                <p class="text_tipoResolution">Documentos</p>
                            </div>
                        </div>

                        <div class="d-flex flex-row justify-content-center   align-items-center " id="container_adicional_information">
                            <img class="img_tipoResolution" src="./img/svg/user check.svg" alt="" />
                            <div class="d-flex flex-column  align-items-center ">
                                <p class="text_Resolution">Laura Perez</p>
                                <p class="text_tipoResolution">Funcionario(a)</p>
                            </div>
                        </div>

                        <div class="d-flex flex-row justify-content-center    " id="container_adicional_information">
                            <div class="d-flex flex-column  align-items-center">
                                <p class="text_Resolution" style="color: #FF3355;">Tareas</p>
                                <p class="text_Resolution" style="font-size: 10px;margin-left:28px;">0 pendientes</p>
                            </div>
                            <img src="./img/svg/Vector.svg"  class="style_icon_right" alt="" />
                        </div>
                    </div>
                    </div>
                </div>
                    <hr>
                    <div class="col-12 d-flex ">
                        <div class="row">
                            <div class="col-12 col-lg-6">
                                <div>
                                    <h6 class="title_card" style="margin-left:36px;">Multa Potencial</h6>
                                    <div class="d-flex flex-row ">
                                        <img src="./img/trending up.png" alt="" loading="lazy"
                                            style=" width: 24px;height: 27px; margin-right:12.68px;margin-left:67px" />
                                        <p id="multa" style="font-weight: 600;
                                            font-size: 20px;
                                            line-height: 20px;      
                                            display: flex;
                                            align-items: center;
                                            color: #0E3141;"></p>
                                    </div>
                                </div>

                                <div style="margin-bottom:44px;margin-top:25px;">
                                    <h6 class="title_card" style="margin-left:36px;">Riesgo</h6>
                                    <div class="d-flex flex-row align-items-center">
                                        <div id="label_risk" style="margin-left:65px; margin-right:26.7px;">
                                            <li class="bullets1" style="
                                            color: #FF3355;
                                            list-style:initial;
                                            opacity: 0.2;"><span id="label_level_risk" class="label_level_risk1">Nivel
                                                    Alto</span>
                                            </li>

                                            <li class="bullets2" style="
                                            color: #FFB000;
                                            list-style:initial;;
                                             opacity: 0.2;"><span id="label_level_risk" class="label_level_risk2">Nivel
                                                    Moderado</span></li>

                                            <li class="bullets3" style="
                                            color:  #31CC53;
                                            list-style:initial;
                                            opacity: 0.2;"><span id="label_level_risk" class="label_level_risk3">Nivel
                                                    Leve</span> </li>
                                        </div>

                                        <div id="bars" class="d-flex flex-row-reverse align-items-end">
                                            <div id="bar1" style="width: 6.94px;
                                            height: 46px;
                                            left: 637.21px;
                                            top: 559px;
                                            background:#FF3355;
                                            opacity: 0.2;
                                            border-radius: 5px;"></div>

                                            <div id="bar2" style="width: 6.94px;
                                            height: 33.67px;
                                            left: 619.18px;
                                            top: 571.33px;  
                                            background: #FFB000;
                                            opacity: 0.2;
                                            border-radius: 5px;
                                            margin-right:11.11px;"></div>

                                            <div id="bar3" style="width: 6.94px;
                                            height: 22.76px;
                                            left: 601.15px;
                                            top: 582.24px;
                                            background: #31CC53;
                                            opacity: 0.2;
                                            border-radius: 5px;
                                            margin-right:11.11px"></div>
                                        </div>
                                    </div>
                                </div>
                              <!--funcionario homeCase-->
                                <div>
                                    <h6 class="title_card" style="margin-left:36px;font-family: Raleway;
                                font-style: normal;
                                font-weight: bold;
                                font-size: 14px;
                                line-height: 20px;
                                align-items: center;
                                color: #969CBA;
                               ">Perfil de funcionarios</h6>

                                <div class="d-flex colum">
                                    <div class="d-flex flex-row align-items-center justify-content-center" id="container_funcionario_homeCaso" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >
                                        <img src="./img/funcionario.png" alt="" loading="lazy"
                                            style=" width: 38.3px;height: 38px;" />
                                        <p >${localStorage.getItem('inspectorAuxiliar') }</p>
                                    </div>
                                </div>
                                      <!-- Modal Infromación Funcionario -->
                                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
                                        tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                        <div class="modal-dialog modal-dialog-centered">
                                            <div class="modal-content" style="width:488px; height:367px;">
                                              <div class="row">
                                                <div class="d-flex flex-row">
                                                  <div class="padding_funcionario" style="width:150px;position: relative;"/>
                                                  <img src="./img/svg/Rectangle 300.svg" class="funcionario" alt="" loading="lazy"/>
                                                  <div class="fondo_camera">
                                                  </div>
                                                  <img src="./img/svg/camera on.svg" class="camera" alt="" loading="lazy"/>
                                                  
                                                  </div>
                                                  <div class="padding_funcionario_modal" style="width:338px;">
                                                  <div class="d-flex flex-column   justify-content-center" >
                                                      <div class="row" style= "width:338px;">
                                                      <button type="button" ><img src="./img/svg/x.svg" alt="" loading="lazy" id="close_modal_funcionario" data-bs-dismiss="modal"
                                                      aria-label="Close"/></button>
                                                      </div>
                                                      <div class="row" style="border-bottom:1px solid #BDBDBD; width:187px;margin-bottom:13px;" >
                                                        <p class="modal_title_funcionario" style="line-height: 14px;margin-bottom:0px;" >Funcionario actual</p>
                                                        <p class="nameFuncionario_modal">${localStorage.getItem('inspectorAuxiliar') }</p>
                                                      </div>
                                                      <div class="row">
                                                        <div class="d-flex flex-row" style="margin-bottom:25px;">
                                                          <div class="modal_etapas" style="margin-right:20px;">
                                                          <p class="modal_title_funcionario" style="margin-bottom:0px;" >Etapa</p>
                                                            <div class="d-flex flex-row align-items-center">
                                                              <img src="./img/svg/!.svg" alt="" loading="lazy"/>
                                                              <p class="modal_txt_funcionario" style="margin-bottom:0px;" >&nbsp; &nbsp; Investigación</p>
                                                            </div>
                                                          </div>
                                                          <div class="modal_cantidadCasos">
                                                          <p class="modal_title_funcionario"  style="margin-bottom:0px;">Cantidad de casos</p>
                                                            <div class="d-flex flex-row align-items-center">
                                                              <img src="./img/svg/list modal.svg" alt="" loading="lazy"/>
                                                              <p class="modal_txt_funcionario" style="margin-bottom:0px;" >&nbsp; &nbsp; 0 casos</p>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div class="row" style="margin-bottom:22px;">
                                                      <p class="modal_title_funcionario" style="margin-bottom:0px;" >Multas promedio</p>
                                                      <div class="d-flex flex-row">
                                                          <div class="modal_up">
                                                            <div class="d-flex flex-row" style="width:135px;">
                                                              <img src="./img/svg/trending up modal.svg" alt="" loading="lazy"/>
                                                              <p class="modal_txt_funcionario" style="margin-bottom:0px;margin-left:12px;" >${localStorage.getItem("multa1")}</p>
                                                            </div>
                                                          </div>
                                                          <div class="down">
                                                            <div class="d-flex flex-row" style="width:135px;">
                                                              <img src="./img/svg/trending down modal.svg" alt="" loading="lazy"/>
                                                              <p class="modal_txt_funcionario" style="margin-bottom:0px;margin-left:12px;" >${localStorage.getItem("multa2")}</p>
                                                            </div>
                                                          </div>
                                                        
                                                        </div>
                                                      </div>
                                                      <div class="row" style="margin-bottom:22px;">
                                                        <p class="modal_title_funcionario" style="margin-bottom:0px;" >Ranking por multas</p>
                                                           <div class="d-flex flex-row">
                                                           <img src="./img/svg/user check modal.svg" style="margin-right:16px;" alt="" loading="lazy"/>
                                                           <p class="modal_txt_funcionario" style="margin-bottom:0px;" >Puesto &nbsp; ${localStorage.getItem("aleatorio")} &nbsp; de 10</p>
                                                           </div> 
                                                      </div>
                                                      <div class="row">
                                                        <p class="modal_title_funcionario" style="margin-bottom:0px;">Califica a tu funcionario</p>
                                                        
                                                        <div id='rating'>
                                                      
                                                        <i class="bi bi-star" value="1"></i>
                                                        <i class="bi bi-star" value="2"></i>
                                                        <i class="bi bi-star" value="3"></i>
                                                        <i class="bi bi-star" value="4"></i>
                                                        <i class="bi bi-star" value="5"></i>
                                                         </div>
                                                       
                                                        </div>
                                                      </div>
                                                  </div>

                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                    </div>
                                                                   
                                </div>
                            </div>
                            <div class="col-12 col-lg-6">
                                <div class="row d-flex  justify-content-center">
                                    <div class="col-12 col-lg-3">
                                        <div class="row d-flex justify-content-center mt-100">
                                            <div class="col-md-6">
                                                <div class="progressCircle blue"> <span class="progressCircle-left">
                                                        <span class="progressCircle-bar"></span> </span> <span
                                                        class="progressCircle-right"> <span
                                                            class="progressCircle-bar"></span>
                                                    </span>
                                                    <div class="progressCircle-value">0</div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-12 col-lg-6" style="margin-left:20px;">
                                        <p class="title_card" style="margin-bottom:0px;font-weight: 600;">Documentos</p>
                                        <p style="font-family: Raleway;
                                            font-style: normal;
                                            // font-weight: 600;
                                            font-size: 11px;
                                            line-height: 20px;
                                            color: #969CBA;">aun no tienes documentos <br> solicitados?</p>
                                    </div>

                                    <div class="col-12 col-lg-1">
                                        <img src="./img/+.png" alt="" style=" width: 20px;height: 20px;" />
                                    </div>
                                </div>
                                <div id="container_archivosSubidos">
                                </div>
                        </div>
                    </div>
                </div>
            </div>     

          </div>
        </div>
        </div>
        <div class="ocultar" id="main-actuaciones">
            <!--MAIN-INFORMATION-->

            <!--Menú botones-->

            <div class="row" style="margin-top:47px;" >

              <div class="d-flex flex-row" id="parent_buttons_etapas">
                  <div id="button_total" class="buttons_etapa">
                    Total
                  </div>

                  <div id="buttons_etapa1" class="buttons_etapa">
                  <strong>ETAPA 1:</strong>&nbsp; Investigación
                  </div>

                  <div id="buttons_etapa2" class="buttons_etapa">
                    <strong>ETAPA 2:</strong>&nbsp; Instrucción
                  </div>

                  <div id="buttons_etapa3" class="buttons_etapa">
                    <strong>ETAPA 3:</strong>&nbsp; Sancionadora
                  </div>
              
              </div>

            </div>

           <div id="linea_grey"></div> 
          <div class="row" style="margin-top:19px"  >
            <div   id="container_total">
               <div class="row">
              <!--COLUMNA IZQUIERDA-->
                <div class="col-12 col-lg-1" id="container_line_time">
                  <div class="container_line_time">
                    <div id="year"><span>${year}</span></div>
              
                    <div class="timeline">
                      <div class="container left">
                        <div class="content">
                        <div id="day">${day}</div>
                        <div id="month">${month}</div>
                        </div>
                      </div>
                    </div>
                    <div class= "timeLineAfter"></div>
                  

                  </div>
                </div>     
          <!--COLUMNA DERECHA-->
                <div class="col-12 col-lg-11" id="container_actuacion_head">
                  <div class="container_actuacion_head">
                    <!--primera-fila-->
                    <div class="row">
                    <div id="etapas"><span>${etapa_actuacion}</span></div>
                    </div>
                    
                    <!--segunda-fila-->
                    <div class=" d-flex  flex-row  justify-content-center" >
                        
                        <!--trae datos de crear actuacion-->
                        <div class="col-12 col-lg-3"   id="container_adicional_information_actuacion" style="margin-left:55px">
                          <p class="text_tipoResolution_actuacion_principal" style="margin-bottom:0px;">ACTUACIÓN</p>
                          <div id="actuacion_tipo"  style="margin-left:0px;"><span>Tipo:${tipo_actuacion}</span></div>
                        </div>
                          <!--descripcion-->
                        <div class="col-12 col-lg-5"   >
                          <div id="descripcion_actuacion_get" style="margin-left:50px">
                            <p class="text_tipoResolution_actuacion_principal" style="margin-bottom:0px;margin-top:11px;">Descripción</p>
                            <p style= "font-size:12px;font-weight: 600;" id="input_setDescripcion_actuacion"  >${descripcion_actuacion}</p>
                          </div>
                          <div id="descripcion_actuacion_edit" class="ocultar" style="margin-left:50px">
                                <div class="title-description d-flex">
                                    <p class="text-blue-opacity" id="title_descripcion_actuacion" >Descripción</p>

                                    <img
                                      id="btnEditComment_actuacion"
                                      src="./img/svg/edit actuacion descripcion.svg"
                                      class="btnEditComment_actuacion"
                                      alt="icon edit"
                                    />
                                    <img
                                      id="btnSaveComment_actuacion"
                                      src="./img/svg/save_actuacion.svg"
                                      class="btnSaveComment hide"
                                      alt="icon edit"
                                    />
                                  </div>
                                  <p id="pComment_actuacion" class="ptxt-comment">
                                  Si deseas escribir algo puntal sobre la actuación puedes hacerlo <strong >aquí</strong>.Recuerda que puedes edicarlo en cualquier momento haciendo click en el lápiz.
                                  </p>
                                  <div id="textareaContainer_actuacion" class="textarea-container hide">
                                    <textarea
                                      name="txtComment"
                                      id="txtComment_actuacion"
                                      placeholder="Escribir aquí..."
                                      cols=""
                                      rows=""
                                  
                                      class="txt-comment_actuacion hide"
                                      disabled
                                    ></textarea>
                                    <p id="countComment_actuacion"  class="hide">(Máximo 200 caracteres)</p>
                                </div>
                          </div>
                        </div>
                      
                          <!--funcionario-->
                        <div class="col-12 col-lg-4"  id="container_adicional_information_actuacion">
                            <div class="d-flex justify-content-end align-items-center ">
                                      <img class="img_tipoResolution" src="./img/svg/user check.svg" alt="" />
                                      <div class="d-flex flex-column  align-items-center" style="margin-right:10px;">
                                          <p class="text_Resolution" style="margin-right:25px;">${funcionario_actuacion}</p>
                                          <p class="text_tipoResolution_fila"  style="margin-bottom:0px;padding-right:35px">Funcionario (a)</p>
                                      </div>
                            </div>
                        </div>
                        
                    </div>
              
                  <!--tercera-fila-->
                    <div class="d-flex  flex-row align-items-center justify-content-center" id="container_3Line_actuacion" >
                  <!--archivos subidos-->
                            <div class="col-12 col-lg-4">
                              <div class="d-flex flex-row align-items-center" style="border-left:none;margin-left:5px;" id="container_adicional_information_actuacion">
                                  <img class="img_tipoResolution" src="./img/svg/cli.svg" alt="" />
                                  <div class="d-flex flex-column">
                                    <p class="text_tipoResolution_actuacion_principal" style="margin-bottom:0px;margin-top:5px;font-size: 9px;">PRINCIPAL</p>
                                    <div class="d-flex flex-row align-items-center justify-content-center ">
                                    <p id="txt_carga">Cargar documento</p>
                                      <label for="file-upload" id="subir" >
                                      <img  src="./img/svg/carga.svg" alt="" />
                                        </label>
                                        <input id="file-upload" onchange='cambiar()' type="file" style='display: none;'/>
                                        <div id="info"></div>
                                        <div>
                                      
                                        </div>
                                      </div>
                                  </div>
                              </div>
                            </div>

                              <div class="col-12 col-lg-8 ">
                                <div class="d-flex flex-row ">
                    <!--nombre de usuario-->
                                <div class="ocultar" id="usuario">
                                  <div class="d-flex flex-row justify-content-center   align-items-center " id="container_adicional_information_actuacion" style="margin-top:4px;margin-right:18px;">
                                      <img class="img_tipoResolution" src="./img/svg/avatar.svg" alt="" />
                                      <div class="d-flex flex-column">
                                      <p class="text_Resolution">Subido por Alonso</p>
                                        <p class="text_tipoResolution_fila">${localStorage.getItem("fechaActual")}</p>
                                      </div>
                                  </div>
                                </div>
                    <!--tareas-->
                                <div class="ocultar" id="conTareas" >
                                  <div class="d-flex flex-row justify-content-center" style="border-left:none;margin-right:15px;" id="container_adicional_information_actuacion">
                                      <img class="img_tipoResolution_actuacion" src="./img/svg/list.svg" alt="" />
                                      <div class="d-flex flex-column" style="margin-top:5px;">
                                          <p class="text_Resolution">0 Tareas</p>
                                          <p class="text_tipoResolution_fila1">0 completadas</p>
                                      </div>
                                  </div>
                                </div>  
                    <!--Sin tareas -->
                                <div id="Sintareas" >
                                  <div class="d-flex flex-row justify-content-center  align-items-center " style="border-left:none;" id="container_adicional_information_actuacion">
                                      <img class="img_tipoResolution_sinDoc" src="./img/svg/noList.svg" alt="" />
                                        <p class="text_tipoResolution_fila2"  style="margin-bottom:0px;">Aún sin tareas</p>
                                  </div>
                                </div> 
                              
                    <!--Documentos--> 
                              <div class="ocultar" id="conDocumentos">         
                                <div class="d-flex flex-row justify-content-center  " style="border-left:none;" id="container_adicional_information_actuacion">
                                    <img class="img_tipoResolution_actuacion" src="./img/svg/file text.svg" alt="" />
                                    <div class="d-flex flex-column"  style="margin-top:5px;">
                                        <p class="text_Resolution">1 Documentos</p>
                                        <p class="text_tipoResolution_fila1">De tareas</p>
                                    </div>
                                </div>
                              </div>

                    <!--Sin Documentos--> 
                              <div id="Sindocumentos" >
                                <div class="d-flex flex-row  " style="border-left:none;" id="container_adicional_information_actuacion">
                                    <img class="img_tipoResolution_sinDoc" src="./img/svg/noDoc.svg" alt="" />
                                      <p class="text_tipoResolution_fila2"  style="margin-bottom:0px;">Aún sin documentos</p>
                                </div>
                              </div> 
                            </div>
                          </div>
                  </div>

                  </div>
                  </div>
                </div>
            </div>

            <div class="ocultar" id="container_etapa1">
              <div style="width:800px; height:600px; background: #C1F0CB;" > ETAPA 1</div>
            </div>
          
            <div class="ocultar" id="container_etapa2"> 
            <div style="width:800px; height:600px; background: #FFE7B3;" > ETAPA 2</div>
            </div>
            
            <div class="ocultar" id="container_etapa3">
            <div style="width:800px; height:600px; background: #BFBEFF;" > ETAPA 3</div>
            </div>

          </div>

        </div> 
      </div>

      <div class="sidebarCase">
        <h6>Estado del caso</h6>
        <div class="div-process d-flex">
          <img src="./img/svg/check.svg" class="checkIcon" alt="Icono check" />
          <div class="detail-process">
            <p class="detail-title">En proceso</p>
            <p class="detail-txt">
              Felicitaciones por crear tu primer caso, no olvides registrar tu
              primera actuación.
              <!-- El 13/12/21 se notificó la inspección. Recuerda que a la fecha de
              hoy 30/04/21 quedan
              <span>7 días</span>
              para iniciar la siguiente actuación -->
            </p>
          </div>
          <img src="./img/svg/copy.svg" class="copyIcon" alt="Icono copiar" />
        </div>
        <hr class="horizontalLine-sidebar" />

        <!-- STATUS copy (inicio)-->
        <div class="status mb-5">
          <div class="status d-flex flex-column">
            <h6 class="title_card">Status</h6>

            <div class="line-content">
              <div class="line">
                <div class="d-flex flex-row" style="height:25px;">
                  <div>
                    <div class="contents" style="background: #466EFE;">
                      <h1
                        style=" position: absolute; font-size: 14px;font-weight: bold;"
                      >
                        1
                      </h1>
                      <p style="font-size: 12px;color: #FFFFFF;">
                        Investigación
                      </p>
                    </div>
                    <p style="font-size: 11px;color:#31CC53; margin-left:30px;">
                      0 actuaciones cerradas
                    </p>
                  </div>
                  <div style="margin-left:13px;">
                    <img src="./img/check.png" alt="" />
                  </div>
                </div>
                <div class="lines"></div>
                <!-- -->
                <div
                  class="d-flex flex-row justify-content-center"
                  style="height:25px;"
                >
                  <div>
                    <div class="contents">
                      <h1 class="numbers">2</h1>
                      <p class="style_text_status">Instrucción</p>
                    </div>
                    <p style="font-size: 11px;color:#31CC53; margin-left:30px;">
                      0 actuaciones cerradas
                    </p>
                  </div>

                  <div style="margin-left:13px;" class="ocultar_img">
                    <img src="./img/check.png" alt="" />
                  </div>
                </div>
                <div class="lines"></div>
                <div
                  class="d-flex flex-row justify-content-center"
                  style="height:25px;"
                >
                  <div>
                    <div class="contents">
                      <h1 class="numbers">3</h1>
                      <p class="style_text_status">Sancionadora</p>
                    </div>
                    <p style="font-size: 11px;color:#31CC53;margin-left:30px;">
                      0 actuaciones cerradas
                    </p>
                  </div>

                  <div style="margin-left:13px;" class="ocultar_img">
                    <img src="./img/check.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- STATUS copy (termino)-->

        <hr class="horizontalLine-sidebar" />
        <div class="div-activities">
          <div class="title d-flex">
            <h6 class="title-left">Actividades</h6>
            <a class="title-right"> Ver todas </a>
          </div>
          <div class="activity-details d-flex">
            <p>Puedes registrar nuevas tareas en la pestaña de actuaciones</p>
            <!-- <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Habitant
              sit lacus mattis.
            </p>
            <img src="./img/svg/btn-right.svg" alt="next button" /> -->
          </div>
        </div>

      </div>

      <div class="footer d-flex">
        <p>
          Copyright © 2021 <strong>sami.</strong>Todos los derechos reservados.
          <span>Términos del Servicio y Políticas de Privacidad</span>
        </p>
        <img src="./img/svg/group.svg" alt="logo" />
      </div>

    </div>

  `;
  // ****  Columna Izquierda (inicio)**** //
  // const materias = viewHome.querySelector("#materias");

  const nameMateria1 = localStorage.getItem("materia1");
  
  const nameMateria2 = localStorage.getItem("materia2");
  const nameMateria3 = localStorage.getItem("materia3");
  const nameMateria4 = localStorage.getItem("materia4");
  const nameMateria5 = localStorage.getItem("materia5");
  const nameMateria6 = localStorage.getItem("materia6");
  const nameMateria7 = localStorage.getItem("materia7");
  const nameMateria8 = localStorage.getItem("materia8");
  const materia1 = viewHome.querySelector("#materia1");
  const materia2 = viewHome.querySelector("#materia2");
  const materia3 = viewHome.querySelector("#materia3");
  const materia4 = viewHome.querySelector("#materia4");
  const materia5 = viewHome.querySelector("#materia5");
  const materia6 = viewHome.querySelector("#materia6");
  const materia7 = viewHome.querySelector("#materia7");
  const materia8 = viewHome.querySelector("#materia8");

  if (nameMateria1 == null) {
    materia1.classList.add("hide");
  } else {
    materia1.classList.remove("hide");
  }

  if (nameMateria2 == null) {
    materia2.classList.add("hide");
  } else {
    materia2.classList.remove("hide");
  }

  if (nameMateria3 == null) {
    materia3.classList.add("hide");
  } else {
    materia3.classList.remove("hide");
  }

  if (nameMateria4 == null) {
    materia4.classList.add("hide");
  } else {
    materia4.classList.remove("hide");
  }

  if (nameMateria5 == null) {
    materia5.classList.add("hide");
  } else {
    materia5.classList.remove("hide");
  }

  if (nameMateria6 == null) {
    materia6.classList.add("hide");
  } else {
    materia6.classList.remove("hide");
  }

  if (nameMateria7 == null) {
    materia7.classList.add("hide");
  } else {
    materia7.classList.remove("hide");
  }

  if (nameMateria8 == null) {
    materia8.classList.add("hide");
  } else {
    materia8.classList.remove("hide");
  }

        //Ingresar comentarios al textarea
        const edit = viewHome.querySelector("#btnEditComment");
        const save = viewHome.querySelector("#btnSaveComment");
        const pComment = viewHome.querySelector("#pComment");
        const divComment = viewHome.querySelector("#textareaContainer");
        const txtComment = viewHome.querySelector("#txtComment");
        const countComment = viewHome.querySelector("#countComment");
        
        pComment.addEventListener("click", () => {
          pComment.classList.add("hide");
          divComment.classList.remove("hide");
          txtComment.classList.remove("hide");
          txtComment.disabled = false;
          countComment.classList.remove("hide");
          save.classList.remove("hide");
          edit.classList.add("hide");
        })

        edit.addEventListener("click", ()=>{
          pComment.classList.add("hide");
          divComment.classList.remove("hide");
          txtComment.classList.remove("hide");
          txtComment.disabled = false;
          countComment.classList.remove("hide");
          save.classList.remove("hide");
          edit.classList.add("hide");
        });

        save.addEventListener("click", ()=> {
            txtComment.disabled= true ;
            edit.classList.remove("hide");
            save.classList.add("hide");
          })
  
//  agregar archivos subidos al home
    let getFile = localStorage.getItem('file')  

     
    // localStorage file date orden
     
    const  container_archivosSubidos = viewHome.querySelector("#container_archivosSubidos");
    container_archivosSubidos.innerHTML = `
    <div><button>${getFile}</button>
    </div>
    `

//   // ****  Columna Izquierda (termino)  **** //

//   //evento list para utenticar
//   const autenticar = firebase.auth();
//   autenticar.onAuthStateChanged((user) => {
//     if (user) {
//       console.log("signin");
//     } else {
//       console.log("signup");
//     }
//   });


// // //leer documentos
// // firebase.firestore()
// // .collection("users").onSnapshot((querySnapshot) => {
// //   fecha_orden.innerHTML='';
// //   querySnapshot.forEach((doc) => {
// //     //   console.log(`${doc.id} => ${doc.data().check1}`);
// //       fecha_orden.innerHTML += `
// //         <h6 class="title_card">Fecha de creación</h6>
// //         <p style="font-size: 14px;">${doc.data().fecha}</p>
// //         <h6 class="title_card">Orden de inspección</h6>
// //         <p style="font-size: 14px;">${doc.data().orden}</p>
// //         <h6 class="title_card">Materias</h6>
// //       `
// //         });
// //       });
   
    //   //habilitar input
    //   const editar = viewHome.querySelector("#edit");
    //   editar.addEventListener("click", ()=>{
    //     const description = viewHome.querySelector("#description");
    //     if(description .disabled == true)	{
	// 	      description.disabled=false;
	//          }
    //           else
    //     {
    //       description.disabled=true;
    //     }
    //         });

        //número aleatorio
        function aleatorio(inferior, superior) {
            var numPosibilidades = superior - inferior;
            var aleatorio = Math.random() * (numPosibilidades + 1);
            aleatorio = Math.floor(aleatorio);
            return inferior + aleatorio;
        }

        const multa_aleatoria = (x) =>  {
            return x.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
          }
          console.log(multa_aleatoria(aleatorio(5000, 250000))); 
          const multaAleatoria = multa_aleatoria(aleatorio(5000, 250000))


          //Registar multa alearotia en input
          const multa = viewHome.querySelector("#multa");
          multa.innerHTML='S/' + multa_aleatoria((aleatorio(5000, 250000)))

          //nivel de riego
          const sizeCheck = localStorage.getItem("checked");
          if(sizeCheck>=4){
            //Si el usuario marca 4 o más materias debe aparecer riesgo alto
            const  label_level_risk = viewHome.querySelector(".label_level_risk1");
            label_level_risk.style.fontSize = '14px';
            const  bullets = viewHome.querySelector(".bullets1");
            bullets.style.opacity = 1;
            const  bar1 = viewHome.querySelector("#bar1");
            bar1.style.opacity = 1;
            console.log("riesgo alto")

        }else if (sizeCheck>=2){
             //Si marca 2 o 3 riesgo medio 
             const  label_level_risk = viewHome.querySelector(".label_level_risk2");
             label_level_risk.style.fontSize = '14px';
             const  bullets = viewHome.querySelector(".bullets2");
             bullets.style.opacity = 1;
             const  bar2 = viewHome.querySelector("#bar2");
             bar2.style.opacity = 1;
            console.log("riesgo medio")

        }else{
            // solo 1 materia debe aparecer como riesgo bajo
            const  label_level_risk = viewHome.querySelector(".label_level_risk3");
            label_level_risk.style.fontSize = '14px';
            const  bullets = viewHome.querySelector(".bullets3");
            bullets.style.opacity = 1;
            const  bar3 = viewHome.querySelector("#bar3");
            bar3.style.opacity = 1;
            console.log("riesgo bajo")
        }

        //Crear MODAL para funcionario

         //modal
         const myModal = viewHome.querySelector('.modal');
         myModal.addEventListener('shown.bs.modal',function () {

          //multa maxima

        function aleatorio1(inferior, superior) {
          var numPosibilidades = superior - inferior;
          var aleatorio = Math.random() * (numPosibilidades + 1);
          aleatorio = Math.floor(aleatorio);
          return inferior + aleatorio;
      }

      const multa_aleatoria1 = (x) =>  {
          return x.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        }
        console.log(multa_aleatoria1(aleatorio1(5000, 250000))); 
        const multaAleatoria1 = multa_aleatoria1(aleatorio1(15000, 250000))
        localStorage.setItem("multa1", multaAleatoria1);      
      

         //multa min

        function aleatorio2(inferior, superior) {
          var numPosibilidades = superior - inferior;
          var aleatorio = Math.random() * (numPosibilidades + 1);
          aleatorio = Math.floor(aleatorio);
          return inferior + aleatorio;
      }

      const multa_aleatoria2 = (x) =>  {
          return x.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        }
        console.log(multa_aleatoria2(aleatorio2(5000, 250000))); 
        const multaAleatoria2 = multa_aleatoria2(aleatorio2(5000, 150000))
        localStorage.setItem("multa2", multaAleatoria2); 

          //número aleatorio del 1 al 10
        //ir a link  actuaciones (main)
        function aleatorioNumber(inferior, superior) {
          var numPosibilidades = superior - inferior;
          var aleatorio = Math.random() * (numPosibilidades + 1);
          aleatorio = Math.floor(aleatorio);
          return inferior + aleatorio;
        }

        console.log(aleatorioNumber (1, 10))
        const valorNumber = aleatorioNumber (1, 10)
        console.log(valorNumber);
       
        localStorage.setItem("aleatorio", valorNumber); 

         });

         //estrellas

         let x = viewHome.getElementsByTagName("i");
         console.log(x)
         for(let i=0;i<x.length;i++){
           x[i].addEventListener("click",function(){
             console.log("pintar")
             let value=this.getAttribute("value");
             console.log(value)
             clearClass();
             for(let j=value-1;j>=0;j--){
               x[j].classList.toggle('ap');
             }
           })
         };
         
         function clearClass(){
           let x = viewHome.getElementsByTagName("i");
           for(let i=0;i<x.length;i++){
               //console.log(x[i].classList);
               x[i].classList.remove('ap');
           };
         }

      //   viewHome.querySelector('#rating').addEventListener('click', function (e) {
      //     if (e.target.nodeName === 'IMG') {
      //         var currentSibling = e.target;
      //         var nextSibling = e.target;
      //         currentSibling.classList.add('active');
      //         while ((currentSibling = currentSibling.previousElementSibling)) {
      //             currentSibling.classList.add('active');
      //         }
      //         while ((nextSibling = nextSibling.nextElementSibling)) {
      //             nextSibling.classList.remove('active');
      //         }
      //     }
      // });
        //HOME ACTUACIONES
        //ir a crear actuación actuacion

        const actuacion =viewHome.querySelector("#actuacion");
        actuacion.addEventListener("click", ()=> {
            window.location.hash = "#/actuacion";
        })

      

        const irActuacion = viewHome.querySelector("#irActuacion");
        const liActuacion = viewHome.querySelector("#liActuacion");
        const irDatos = viewHome.querySelector("#irDatos");
        const mainDatos = viewHome.querySelector("#main-datos");
        const mainActuaciones = viewHome.querySelector("#main-actuaciones");
        liActuacion.addEventListener("click", (e)=> {
          e.preventDefault();
          irDatos.style.borderBottom= "1px" ;
          irDatos.style.fontWeight= "100" ;
          irActuacion.style.borderBottom = "3px solid #0F3041"; 
          irActuacion.style.fontWeight= "600" ;
          mainDatos.classList.add("ocultar");
          mainActuaciones.classList.remove("ocultar");
          
        });

        //mostar descripcion actuacion

        // const descripcion_actuacion = localStorage.getItem("#descripcion_actuacion");
        const input_setDescripcion_actuacion = viewHome.querySelector("#input_setDescripcion_actuacion");
        const descripcion_actuacion_edit = viewHome.querySelector("#descripcion_actuacion_edit");
          const descripcion_actuacion_get = viewHome.querySelector("#descripcion_actuacion_get");
        
          if (descripcion_actuacion  == null) {
            console.log("yu")
            console.log(descripcion_actuacion)
            descripcion_actuacion_get.classList.add("ocultar");
            input_setDescripcion_actuacion.classList.add("ocultar");
            descripcion_actuacion_edit.classList.remove("ocultar");
          } else {
            
          }

        const subir = viewHome.querySelector("#subir");
        const txt_carga = viewHome.querySelector("#txt_carga");
        const file_upload = viewHome.querySelector("#file-upload");

        const usuario = viewHome.querySelector("#usuario");
        const conTarea = viewHome.querySelector("#conTareas");
        const Sintarea = viewHome.querySelector("#Sintareas");
        const conDocumentos = viewHome.querySelector("#conDocumentos");
        const Sindocumentos = viewHome.querySelector("#Sindocumentos");

        file_upload.addEventListener("change", ()=> {
          subir.classList.add("ocultar");
          txt_carga.classList.add("ocultar");
          usuario.classList.remove("ocultar");
          conTarea.classList.remove("ocultar");
          Sintarea.classList.add("ocultar");
          conDocumentos.classList.remove("ocultar");
          Sindocumentos.classList.add("ocultar");
          var pdrs = document.getElementById('file-upload').files[0].name;
          document.getElementById('info').innerHTML = pdrs;
         
        })
       
        
   
         //Ingresar comentarios al textarea vista actuacion
         const edit_actuacion = viewHome.querySelector("#btnEditComment_actuacion");
         const save_actuacion = viewHome.querySelector("#btnSaveComment_actuacion");
         const pComment_actuacion = viewHome.querySelector("#pComment_actuacion");
         const divComment_actuacion = viewHome.querySelector("#textareaContainer_actuacion");
         const txtComment_actuacion = viewHome.querySelector("#txtComment_actuacion");
         const countComment_actuacion = viewHome.querySelector("#countComment_actuacion");
         
         pComment_actuacion.addEventListener("click", () => {
           pComment_actuacion.classList.add("hide");
           divComment_actuacion.classList.remove("hide");
           txtComment_actuacion.classList.remove("hide");
           txtComment_actuacion.disabled = false;
           countComment_actuacion.classList.remove("hide");
           save_actuacion.classList.remove("hide");
           edit_actuacion.classList.add("hide");
         })
 
         edit_actuacion.addEventListener("click", ()=>{
           pComment_actuacion.classList.add("hide");
           divComment_actuacion.classList.remove("hide");
           txtComment_actuacion.classList.remove("hide");
           txtComment_actuacion.disabled = false;
           countComment_actuacion.classList.remove("hide");
           save_actuacion.classList.remove("hide");
           edit_actuacion.classList.add("hide");
         });
 
         save_actuacion.addEventListener("click", ()=> {
             txtComment_actuacion.disabled = true ;
             edit_actuacion.classList.remove("hide");
             save_actuacion.classList.add("hide");
           })
  // menú etapas

  
  const buttons_total = viewHome.querySelector("#button_total");
  const buttons_etapa1 = viewHome.querySelector("#buttons_etapa1");
  const buttons_etapa2 = viewHome.querySelector("#buttons_etapa2");
  const buttons_etapa3 = viewHome.querySelector("#buttons_etapa3");
  const container_total = viewHome.querySelector("#container_total");
  const container_etapa1 = viewHome.querySelector("#container_etapa1");
  const container_etapa2 = viewHome.querySelector("#container_etapa2");
  const container_etapa3 = viewHome.querySelector("#container_etapa3");

  buttons_total.addEventListener("click", ()=>{
    buttons_total.style.background = "rgba(15, 48, 65, 0.5)";
     buttons_total.style.fontWeight = "800";
   buttons_total.style.fontSize = "14px";
  buttons_total.style.color = "#FFFFFF";
  container_total.classList.remove ("ocultar");
  container_etapa1.classList.add ("ocultar");
  container_etapa2.classList.add ("ocultar");
  container_etapa3.classList.add ("ocultar");
  })
  
  buttons_etapa1.addEventListener("click", ()=>{
    buttons_total.style.background = "#FFFFFF";
   buttons_total.style.border = "1px solid #BDBDBD";
   buttons_total.style.boxSizing = "border-box";
   buttons_total.style.fontWeight = "500";
   buttons_total.style.fontSize = "11px";
  buttons_total.style.color = "#0F3041";
  container_total.classList.add ("ocultar");
  container_etapa1.classList.remove ("ocultar");
  container_etapa2.classList.add ("ocultar");
  container_etapa3.classList.add ("ocultar");
  })

  buttons_etapa2.addEventListener("click", ()=>{
    buttons_total.style.background = "#FFFFFF";
   buttons_total.style.border = "1px solid #BDBDBD";
   buttons_total.style.boxSizing = "border-box";
   buttons_total.style.fontWeight = "500";
   buttons_total.style.fontSize = "11px";
  buttons_total.style.color = "#0F3041";
  container_total.classList.add ("ocultar");
  container_etapa1.classList.add ("ocultar");
  container_etapa2.classList.remove ("ocultar");
  container_etapa3.classList.add ("ocultar");
  })

  buttons_etapa3.addEventListener("click", ()=>{
    buttons_total.style.background = "#FFFFFF";
   buttons_total.style.border = "1px solid #BDBDBD";
   buttons_total.style.boxSizing = "border-box";
   buttons_total.style.fontWeight = "500";
   buttons_total.style.fontSize = "11px";
  buttons_total.style.color = "#0F3041";
  container_total.classList.add ("ocultar");
  container_etapa1.classList.add ("ocultar");
  container_etapa2.classList.add ("ocultar");
  container_etapa3.classList.remove ("ocultar");
  })

  buttons_total.classList.add("button_change_etapas");
  const buttons_etapas = viewHome.getElementsByClassName("buttons_etapa");
  for(let i=0; i < buttons_etapas.length; i ++)
           {
             buttons_etapas[i].onclick = function (){

              let el = buttons_etapas[0];
              while(el)
              {
                if(el.tagName === "DIV"){
                // remueve class
                el.classList.remove("button_change_etapas");
              }

              //pasa al hermano
              el = el.nextSibling;
            }
               this.classList.add("button_change_etapas");
             };
           }

           
  

      
    
    return viewHome;
  };