export default () => {
  const viewHome = document.createElement("div");
  const inspectionDate = localStorage.getItem("date");
  const inspectionOrder = localStorage.getItem("order");

  viewHome.innerHTML = `
    <!---Primera fila-->
    <div class="row " >
        <!-- Navbar-->
        <nav class="navbar navbar-expand-lg navbar-light " style="height: 64px;border-bottom: 1px solid  #E1E6F0;">
            <div class="container-fluid justify-content-between">
    
                <!-- Left elements -->
                <div class="d-flex col-12 col-lg-3">
                    <!-- Brand -->
                    <a class="navbar-brand me-2 mb-1 d-flex align-items-center" href="#">
                        <img src="./img/logo_inspection.png" position: absolute; alt="" loading="lazy"
                            style="margin-top: 19px; width: 77.19px;height: 26px;margin-left: 152px;margin-top: 19px;" />
                    </a>
    
                </div>
                <div class="lines">
                </div>
    
                <!-- Center elements -->
    
                <div class="col-12 col-lg-6">
                    <div class="float-start align-items-center justify-content-center">
                        <ul class="navbar-nav mb-2 mb-lg-0">
                            <div class="d-flex align-items-center "
                                style="height: 64px;border-bottom: 1px solid  #D70025;width:106px;">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page"
                                        style="color:#0E3141;font-weight: bold;font-size:12px;" href="#">Mis casos</a>
                                </li>
                            </div>
    
                        </ul>
                    </div>
                    <div class="d-flex float-end align-items-center justify-content-center" style="margin-top:15px;">
                        <ul class="navbar-nav flex-row">
                            <li class="nav-item me-3 me-lg-1">
                                <a class="nav-link d-sm-flex align-items-sm-center" href="#">
                                    <span> <i class="fas fa-search"></i></span>
                                </a>
                            </li>
                            <li class="nav-item me-3 me-lg-1">
                                <a class="nav-link d-sm-flex align-items-sm-center" href="#">
                                    <img src="./img/bells.png" class="rounded-circle" height="23px" alt="" loading="lazy" />
                                    <strong class="d-none d-sm-block ms-1">John</strong>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="lines">
                </div>
                <!-- Right elements -->
                <div class="col-12 ">
                    <ul class="navbar-nav flex-row">
                        <li class="nav-item me-3 me-lg-1">
                            <a class="nav-link d-sm-flex align-items-sm-center" href="#">
                                <img src="./img/Avatar.png" class="rounded-circle" height="32px" ; width="32px" ; alt=""
                                    loading="lazy" />
                                <strong class="d-none d-sm-block ms-1">Alonso Hoyos</strong>
                            </a>
                        </li>
                        <li class="nav-item me-3 me-lg-1">
                            <a class="nav-link d-sm-flex align-items-sm-center" href="#">
                                <span><i class="fas fa-chevron-down mt-2"></i></span>
                            </a>
                        </li>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <!-- Navbar -->
    
    </div>
    <!---FILA 2-->
    <main id="card_main">
        <div class="row">
            <!--COLUMNA IZQUIERDA-->
            <div class="col-12 col-lg-9">
                <!--Caso Estribadores-->
                <div class="row"></div>
                <!--Conjunto de cards-->
                <div class="row">
                    <!--Descripcion-->
                    <div class="col-12 col-lg-3">
                        <div class="card" style="width: 18rem;margin-left:74px;margin-top:18px;">
                            <div class="card-body">
                                <div class="descripcion">
                                    <div id="description_edit" class="d-flex flex-row  justify-content-between">
                                        <h6 class="title_card text-blue-opacity ">Descripción</h6>
                                        <button id="edit"></button>
                                    </div>
                                    <input type="text" id="description" disabled=true
                                        style="width:260px; height:77px;margin-bottom:20px;"
                                        class="text-area">
                                </div>

                                <!--
                                <div class="fecha_orden" id="fecha_orden"></div>
                                -->
                                <!--
                                <div class="materias" id="materia1"></div>
                                <div class="materias" id="materia2"></div>
                                <div class="materias" id="materia3"></div>
                                <div class="materias" id="materia4"></div>
                                <div class="materias" id="materia5"></div>
                                <div class="materias" id="materia6"></div>
                                <div class="materias" id="materia7"></div>
                                <div class="materias" id="materia8"></div>
                                -->

                                <h6 class="text-blue-opacity">Fecha de creación</h6>
                                  ${inspectionDate}
                                <br></br>

                                <h6 class="text-blue-opacity">Orden de inspección</h6>
                                  ${inspectionOrder}
                                <br></br>

                                <h6 class="text-blue-opacity">Materias</h6>
                                <div id="materias">
                                    <div class="card_materia_uno">
                                        <img src ="../img/svg/redes.svg" class="cardIcon">
                                        <h6 id ="materia1" class="text-blue"> Relaciones Laborales</h6>
                                    </div>
                                    <div class="card_materia_dos">
                                        <img src ="../img/svg/seguro-vida.svg" class="cardIcon">
                                        <h6 id ="materia2" class="text-blue"> Seguridad y salud </h6>
                                    </div>


                                    <div class="card_materia_tres">
                                        <img src ="../img/svg/bandera.svg" class="cardIcon">
                                        <h6 id ="materia3" class="text-blue"> Empleo y colocación</h6>
                                    </div>                                                                        
                                    <div class="card_materia_cuatro">
                                        <h6 id ="materia4" class="text-blue"> Intermediación laboral</h6>
                                    </div>
                                    <div class="card_materia_cinco">
                                        <h6 id ="materia5" class="text-blue"> Promoción y formación</h6>
                                    </div>


                                    <div class="card_materia_seis">
                                        <h6 id ="materia6" class="text-blue"> Extranjeros</h6>
                                    </div>
                                    <div class="card_materia_siete">
                                        <h6 id ="materia7" class="text-blue"> Seguridad social</h6>
                                    </div>
                                    <div class="card_materia_ocho">
                                        <h6 id ="materia8" class="text-blue"> Labor inspectiva</h6>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
    
                    <!--actuacion en proceso-->
                    <div class="card col-12 col-lg-9 " style=" width:585px; height:686px; margin-top:19px; margin-left:110px; margin-rigth:42px;background: #FFFFFF;">
    
                        <div class="col-12">
                        </div>
                        <div class="col-12">
                        <div class="row">
                            <div class="col-12 col-lg-6">
                                <div>
                                    <h6 class="title_card" style="margin-left:36px;">Multa Potencial</h6>
                                    <div class="d-flex flex-row  align-items-center">
                                    <img src="./img/trending up.png" alt="" loading="lazy"
                                    style=" width: 24px;height: 27px; margin-right:5px;margin-left:67px" />
                                    <p id="multa"></p>
                                    </div>
                                </div>
    
                                <div>
                                    <h6 class="title_card" style="margin-left:36px;">Riesgo</h6>
                                </div>
    
                                <div>
                                    <h7 class="title_card" style="margin-left:36px;font-family: Raleway;
                                    font-style: normal;
                                    font-weight: bold;
                                    font-size: 14px;
                                    line-height: 20px;
                                    align-items: center;
                                    color: #969CBA;">Perfil de funcionario</h7>

                                    <div class="d-flex flex-row align-items-center justify-content-center" style="width:261px; height:68px; background: #F9FBFC;                
                                    border: 1px solid #466EFE;
                                    box-sizing: border-box;
                                    border-radius: 6px;">
                                        <img src="./img/funcionario.png" alt="" loading="lazy"
                                            style=" width: 38.3px;height: 38px;" />
                                        <p style="margin-left:18.7px;">Federico Pajuelo Linares</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-lg-6">
    
                            <div class="row d-flex align-items-center" >
                                <div class="col-12 col-lg-3" >
                                    <div class="row d-flex justify-content-center mt-100">
                                        <div class="col-md-6">
                                            <div class="progressCircle blue"> <span class="progressCircle-left"> <span
                                                        class="progressCircle-bar"></span> </span> <span
                                                    class="progressCircle-right"> <span class="progressCircle-bar"></span>
                                                </span>
                                                <div class="progressCircle-value">0</div>
                                            </div>
        
                                        </div>
                                    </div>
                                </div>

                                <div class="col-12 col-lg-6">
                                    <h6 class="title_card">Documentos</h6>
                                    <p style="font-family: Raleway;
                                    font-style: normal;
                                    font-weight: 600;
                                    font-size: 11px;
                                    line-height: 20px;
                                    display: flex;
                                    align-items: center;
                                    color: #969CBA;">aun no tienes documentos solicitados?</p>
                                </div>                             

                                <div class="col-12 col-lg-3">
                                    <img src="./img/+.png" alt=""
                                    style=" width: 20px;height: 20px;" />
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
            <!--COLUMNA DERECHA-->
            <div class="col-12 col-lg-3 ">
                <div class="card d-flex  align-items-center" style="width: 320px; height: 816px;">
                    <!--estado-->
                    <div class="estado">
                        <h6 class="title_card text-blue" style="margin-top:20px;">Estado del caso</h6>
                        <div style="background: #FFFFFF;    
                                border: 1px solid #466EFE;
                                box-sizing: border-box;
                                border-radius: 5px;"
                                class="div-process">
                                <img src ="../img/svg/check.svg" class="all-svg borde">
                                <p id="description_estado"
                                style="width:195px; height:76px;margin-bottom:20px;margin-left:34px;margin-right:35px;margin-top:28px;font-size: 11px;"
                                class="borde">
                                Felicitaciones por crear tu primer caso, no olvides registrar tu primera actuación</p>
                                <img src ="../img/svg/copy.svg" class="all-svg borde">
                        </div>
                    </div>
                    <hr class="raya">
                    <!--status-->
                    <div class="status d-flex flex-column">
                        <h6 class="title_card" style="margin-left:40px;">Status</h6>
                        <div class="line-content">
                            <div class="line">
                                <div class="d-flex flex-row " style="height:25px;">
                                    <div>
                                        <div class="contents" style="background: #466EFE;">
                                            <h1 style=" position: absolute; font-size: 14px;font-weight: bold;">1</h1>
                                            <p style="font-size: 12px;color: #FFFFFF;">Investigación</p>
                                        </div>
                                        <p style="font-size: 11px;color:#31CC53; margin-left:30px;">0 actuaciones cerradas
                                        </p>
                                    </div>
                                    <div style="margin-left:13px;">
                                        <img src="./img/check.png" alt="">
                                    </div>
                                </div>
                                <div class="lines">
                                </div>
                                <div class="d-flex flex-row justify-content-center" style="height:25px;">
                                    <div>
                                        <div class="contents">
                                            <h1 class="numbers">2</h1>
                                            <p class="style_text_status">Instrucción</p>
                                        </div>
                                        <p style="font-size: 11px;color:#31CC53; margin-left:30px;">0 actuaciones cerradas
                                        </p>
                                    </div>
    
                                    <div style="margin-left:13px;" class="ocultar_img">
                                        <img src="./img/check.png" alt="">
                                    </div>
                                </div>
                                <div class="lines">
                                </div>
                                <div class="d-flex flex-row justify-content-center" style="height:25px;">
                                    <div>
                                        <div class="contents">
                                            <h1 class="numbers">3</h1>
                                            <p class="style_text_status">Sancionadora</p>
                                        </div>
                                        <p style="font-size: 11px;color:#31CC53;margin-left:30px;">0 actuaciones cerradas
                                        </p>
                                    </div>
    
                                    <div style="margin-left:13px;" class="ocultar_img">
                                        <img src="./img/check.png" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <hr class="raya">
                    <!--actividades-->
                    <div class="status d-flex flex-column">
                        <div class="d-flex">
                            <h6 class="title_card" >Actividades</h6>
                                <a href="" style=" font-weight: 500; font-size: 11px; line-height: 140%; text-align: right;
                                letter-spacing: -0.3px; margin-left:142px; text-decoration:none;">Ver todas</a>
                        </div>
                        <div class="d-flex flex-row ">
                            <p style="height: 40px;width: 236px;">Puedes registrar nuevas tareas en la pestaña de
                                actuaciones
                            </p>
                            <img src="../img/vector_actividades.png" alt="" class="ocultar"
                                style="height: 12px;width: 6px;margin-top:20px;">
                        </div>
    
                        <div>
    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <!---FILA 3-->
    <div class="row" style="height:81px;border-top:1px solid  #E1E6F0;">
    
        <footer class="d-flex justify-content-around">
            <div id="footer_términos" class="d-flex flex-row " style="margin-top:19px;">
                <p>Copyright © 2021 <strong>sami</strong>. Todos los derechos reservados.</p>
                <a href="" class="text-danger" style="text-decoration:none">Términos del Servicio</a>
                <p>y</p>
                <a href="" class="text-danger" style="text-decoration:none">Políticas de Privacidad</a>
            </div>
            <img src="./img/logo_footer.png" class="img_groups" style="margin-top:19px;" alt="logo">
        </footer>
    </div>
    `;

  // **********  Columna Izquierda (inicio)********** //
  const materias = viewHome.querySelector("#materias");
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
  // **********  Columna Izquierda (termino)  ********** //

  //evento list para utenticar
  const autenticar = firebase.auth();
  autenticar.onAuthStateChanged((user) => {
    if (user) {
      console.log("signin");
    } else {
      console.log("signup");
    }
  });


// //leer documentos
// firebase.firestore()
// .collection("users").onSnapshot((querySnapshot) => {
//   fecha_orden.innerHTML='';
//   querySnapshot.forEach((doc) => {
//     //   console.log(`${doc.id} => ${doc.data().check1}`);
//       fecha_orden.innerHTML += `
//         <h6 class="title_card">Fecha de creación</h6>
//         <p style="font-size: 14px;">${doc.data().fecha}</p>
//         <h6 class="title_card">Orden de inspección</h6>
//         <p style="font-size: 14px;">${doc.data().orden}</p>
//         <h6 class="title_card">Materias</h6>
//       `
//         });
//       });
   
      //habilitar input
      const editar = viewHome.querySelector("#edit");
      editar.addEventListener("click", ()=>{
        const description = viewHome.querySelector("#description");
        if(description .disabled == true)	{
		      description.disabled=false;
	         }
              else
        {
          description.disabled=true;
        }
            });

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

          //Registar multa alearotia en input

          const multa = viewHome.querySelector("#multa");
          multa.innerHTML='S/' + multa_aleatoria((aleatorio(5000, 250000)))

        //agregar archivos subidos al home
          let getFile = localStorage.getItem('file')   

            const  container_archivosSubidos = viewHome.querySelector("#container_archivosSubidos");
            container_archivosSubidos.innerHTML = `
            <div><button>${getFile}</button>
            </div>
            `
    return viewHome;
  };

