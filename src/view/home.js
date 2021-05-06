

export default () => {
    const viewHome = document.createElement('div');
    viewHome.innerHTML = `
    <!---Primera fila-->
    <div class="row " style="">
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
                            <div class="d-flex align-items-center "style="height: 64px;border-bottom: 1px solid  #D70025;width:106px;">
                              <li class="nav-item">
                                  <a class="nav-link active" aria-current="page" style="color:#0E3141;font-weight: bold;font-size:12px;" href="#">Mis casos</a>
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
                                        <h6 class="title_card">Descripción</h6>
                                        <button id="edit"></button>
                                    </div>
                                    <input type="text" id="description" disabled=true
                                        style="width:260px; height:77px;margin-bottom:20px;">
                                </div>
                                <div class="fecha_orden" id="fecha_orden"></div>
                                <div class="materias" id="materia1"></div>
                                <div class="materias" id="materia2"></div>
                                <div class="materias" id="materia3"></div>
                                <div class="materias" id="materia4"></div>
                                <div class="materias" id="materia5"></div>
                                <div class="materias" id="materia6"></div>
                                <div class="materias" id="materia7"></div>
                                <div class="materias" id="materia8"></div>
                            </div>
                        </div>
                    </div>
    
                    <!--actuacion en proceso-->
                    <div class="col-12 col-lg-9">
                    </div>
                </div>
            </div>
            <!--COLUMNA DERECHA-->
            <div class="col-12 col-lg-3 ">
                <div class="card d-flex  align-items-center" style="width: 320px; height: 816px;">
                    <!--estado-->
                    <div class="estado">
                        <h6 class="title_card" style="margin-top:20px;">Estado del caso</h6>
                        <div style="background: #FFFFFF;    
                            border: 1px solid #466EFE;
                            box-sizing: border-box;
                            border-radius: 5px;">
                            <p id="description_estado"
                                style="width:195px; height:76px;margin-bottom:20px;margin-left:34px;margin-right:35px;margin-top:28px;font-size: 11px;">
                                Felicitaciones por crear tu primer caso, no olvides registrar tu primera actuación</p>
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
                            <h6 class="title_card" ">Actividades</h6>
                            <a href="" style="font-weight: 500;
                                    font-size: 11px;
                                    line-height: 140%;
                                    text-align: right;
                                    letter-spacing: -0.3px;
                                    margin-left:142px;
                                    text-decoration:none;">Ver todas</a>
                        </div>
                        <div class="d-flex flex-row ">
                            <p style="height: 40px;width: 236px;">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                              </p>
                            <img src="../img/vector_actividades.png" alt="" style="height: 12px;width: 6px;margin-top:20px;">
                        </div>
                        <div class="d-flex flex-row ">
                            <p style="height: 40px;width: 236px;">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                              </p>
                            <img src="../img/vector_actividades.png" alt="" style="height: 12px;width: 6px;margin-top:20px;">
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
        
        <footer class="d-flex justify-content-around" >
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


//evento list para utenticar
const autenticar = firebase.auth();
autenticar.onAuthStateChanged(user =>{
if (user){
 
  console.log('signin')
}else{
  console.log('signup')
}
})

const fecha_orden = viewHome.querySelector('#fecha_orden');
const materias1 = viewHome.querySelector('#materia1');
const materias2 = viewHome.querySelector('#materia2');
const materias3 = viewHome.querySelector('#materia3');
const materias4 = viewHome.querySelector('#materia4');
const materias5 = viewHome.querySelector('#materia5');
const materias6 = viewHome.querySelector('#materia6');
const materias7 = viewHome.querySelector('#materia7');
const materias8 = viewHome.querySelector('#materia8');


//leer documentos
firebase.firestore()
.collection("users").onSnapshot((querySnapshot) => {
  fecha_orden.innerHTML='';
  querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().check1}`);

      fecha_orden.innerHTML += `
        <h6 class="title_card">Fecha de creación</h6>
        <p style="font-size: 14px;">${doc.data().fecha}</p>
        <h6 class="title_card">Orden de inspección</h6>
        <p style="font-size: 14px;">${doc.data().orden}</p>
        <h6 class="title_card">Materias</h6>
      `
        });
      });
      firebase.firestore()
.collection("check1").get((querySnapshot) => {
  materias1.innerHTML='';
  querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().check1}`);

      materias1.innerHTML = `
           <p style="font-size: 14px;">${doc.data().check1}</p>
           `
        });
      });

      firebase.firestore()
.collection("check2").onSnapshot((querySnapshot) => {
  materias2.innerHTML='';
  querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().check2}`);

      materias2.innerHTML = `
           <p style="font-size: 14px;">${doc.data().check2}</p>
           `
        });
      });

      firebase.firestore()
.collection("check3").onSnapshot((querySnapshot) => {
  materias3.innerHTML='';
  querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().check3}`);

      materias3.innerHTML = `
           <p style="font-size: 14px;">${doc.data().check3}</p>
           `
        });
      });

      firebase.firestore()
.collection("check4").onSnapshot((querySnapshot) => {
  materias4.innerHTML='';
  querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().check4}`);

      materias4.innerHTML = `
           <p style="font-size: 14px;">${doc.data().check4}</p>
           `
        });
      });

      firebase.firestore()
.collection("check5").onSnapshot((querySnapshot) => {
  materias5.innerHTML='';
  querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().check5}`);

      materias5.innerHTML = `
           <p style="font-size: 14px;">${doc.data().check5}</p>
           `
        });
      });

      firebase.firestore()
.collection("check6").onSnapshot((querySnapshot) => {
  materias6.innerHTML='';
  querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().check6}`);

      materias6.innerHTML = `
           <p style="font-size: 14px;">${doc.data().check6}</p>
           `
        });
      });

      firebase.firestore()
.collection("check7").onSnapshot((querySnapshot) => {
  materias7.innerHTML='';
  querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().check7}`);

      materias7.innerHTML = `
           <p style="font-size: 14px;">${doc.data().check7}</p>
           `
        });
      });

      firebase.firestore()
.collection("check8").onSnapshot((querySnapshot) => {
  materias8.innerHTML='';
  querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().check8}`);

      materias8.innerHTML = `
           <p style="font-size: 14px;">${doc.data().check8}</p>
           `
        });
      });

      

     
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
    return viewHome;
  };