
export default () => {
    const viewSignUp = document.createElement('div');
    
    viewSignUp.innerHTML = `
  <!---Primera fila-->
<div class="row">
    <!---Columna izquierda-->
    <div class="col-12 col-lg-4">
        <img src="./img/logo.png" class=" " id="img_logos" style="width:160px; height:54px;" alt="logo">
    </div>
    <!---Columna derecha-->
    <div class="col-12 col-lg-8">
        <!--FORMULARIO 1-->
        <form id="form2" >
            <div class="row" >
                <div class="col-12">
                    <h1 class="registrar">Regístrate</h1>
                </div>

                <div class="col-12 d-flex align-items-center bd-highlight" id="completar">
                    <p style="text-align: center;">Completa los datos solicitados¿Ya tienes una cuenta? &nbsp</p>
                    <a href="" class="text-danger mb-3" style="text-decoration:none ;">Ingresa</a>
                </div>

                <div class="col-12">
                <div class="row ms-5 mt-3 mb-3">
                        <div class="col-12 col-lg-3">
                            <table>
                                <tr>
                                    <td>
                                        <button id="btn_color" >1 </buton>
                                    </td>
                                    <td>
                                        <a href="" class="text-muted" style="text-decoration:none">Datos personales</a>
                                    </td>
                                </tr>
                            </table>
                        </div>

                        <div class="col-12 col-lg-9">
                            <table>
                                <tr>
                                    <td>
                                        <button id="btn_color" >2 </buton>
                                    </td>
                                    <td>
                                        <a href="" class="text-muted" style="text-decoration:none">Datos empresa</a>
                                    </td>
                                </tr>
                            </table>
                        </div>
                
                </div>
            </div>

                <div class="col-12">
                    <div id="container_infoUser">
                        <div class="container_user1 col-md-4 mt-5">

                            <div class="textOnInput">
                                <label for="camponombre">Nombre</label>                         
                                <input type="text" name="nombre" id="fname1" class="form-control"
                                    placeholder="completar" id="camponombre">
                            </div>

                            <div class="textOnInput">
                                <label for="camponombre">Apellido</label>
                                <input type="text" name="nombre" id="fname1" class="form-control"
                                    placeholder="completar" id="camponombre">
                            </div>
                        </div>

                        <div class="container_user1">
                            <div class="textOnInput">
                                <label for="camponombre">Correo</label>
                                <input type="email" name="email" id="email" class="form-control"
                                    placeholder="nombre@petroperu.com">
                            </div>

                            <div class="textOnInput">
                                <label for="camponombre">Contraseña</label>
                                <input type="password" id="password1" class="form-control" name="txtPassword"
                                    placeholder="Contraseña" />
                                <button type="button" id="btn_password" class=""><i id="eyeIcon"
                                        class="bi bi-eye"></i></button>
                            </div>
                        </div>

                        <div class="col-12 d-flex flex-row" style="margin-top:8px">
                            <div class="d-flex flex-row ms-5 mb-3">
                                <input type="checkbox" name="check" class="form-check-input" style= margin:5px;">
                                <p>Acepto los <a href="#" class="text-danger" id="newAccount"
                                        style="text-decoration:none">
                                        Términos
                                        del Servicio </a> y <a href="#" class="text-danger" id="newAccount"
                                        style="text-decoration:none"> Políticas de Privacidad</a> </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!---INFORMACIÓN EMPRESA-->
                <div class="col-12">
                <div id="container_infoEmpresa" class="ocultar">
                    <div class="textOnInput2" >
                        <label for="camponombre">Empresa</label>
                        <input type="email" name="email" id="email" class="form-control"
                            placeholder="nombre@petroperu.com"><br>
                    </div>

                    <div id="ajuste" class="d-flex align-items-center bd-highlight">
                        <p class=" fs-6 fw-normal text-muted mb-1">Agregar un colocador &nbsp</p>
                        <i class="bi bi-question-circle "></i>
                    </div>
                    <!-- Modal -->
                    <!-- Button trigger modal -->
                    <div class="d-flex colum">
                        <button type="button" id="btn_New" class="btn btn-primary ms-5" data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop">
                        </button>

                        <!--Show Data-->
                        <div class="">
                            <div class="rounded-circle mt-2" id="btn_border_showNamei" style:"width:110px; height:110px;">
                                <div id="showNamei" class="rounded-circle">
                                    <p ></p>
                                </div>
                            </div> 

                            <div id="showName" style="font-size: 10px;color: #5A6072;" class="showName">
                                <p></p>
                            </div>
                            
                            <div id="show_icon" class="ocultar">
                                <div class="row " style="height:50%">
                                    <div class="col col-12 col-lg-6  align-items-center"  "style="width:12px; padding:0px" >
                                            <button id="pencil"></button>
                                    </div>
                                    
                                    <div class="col col-12 col-lg-6 " style="width:12px;padding:0px">
                                            <button id="trash"></button>
                                    </div>        
                                </div>
                            </div>
                        </div>
                        </div>
                        <!-- Modal -->
                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
                            tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content" style=" width:500px; height:402px;">
                                    <div class="modal-header" style="border-bottom: none;">
                                        <h5 class="modal-title mt-3 ms-5" id="staticBackdropLabel">Nuevo Colaborador</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>

                                    <p class="mt-3 ms-5">Completa los datos solicitados de un usuario frecuente.</p>
                                    <div class="d-flex align-items-center flex-column justify-content-center ">
                                        
                                    <div class="row d-flex justify-content-start">
                                        <div id="textOnInput3">
                                            <label for="camponombre">Nombre</label>
                                            <input type="text" name="nombre" class="form-control"
                                                style="width:302px; height:45px;margin-left: 60px;" placeholder="completar" id="name">
                                        </div>
                                    
                                        <div id="textOnInput3">
                                            <label for="camponombre">Correo</label>
                                            <input type="email" name="email" id="email" class="form-control"
                                                placeholder="nombre@petroperu.com">
                                        </div>
                                    </div>
                                    <div class="modal-footer" style="border-top:none;">
                                        <button type="button" class="btn btn-secondary btn-danger" id="add"
                                            data-bs-dismiss="modal">Agregar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                </div>
                <div class="col-12 p-5" >
                    <hr style="width:650px;">
                    <button id="btn_next">Siguiente</button>
                    <button id="btn_nextWelcome" class="ocultar">Siguiente</button>
                    <button id="btn_behind" class="ocultar">Anterior</button>
                </div>
            </div>
        </form>
    </div>

    <!--FORMULARIO 2-->

    <form id="form3" class="ocultar">
        <h1 class="registrar">Registro Completado</h1>
        <img src="./img/banner.png" id="banner" style="with:160px" alt="logo">

        <div class="m-5">
            <div id="showMessage_part1" class="mb-5">
                <p></p>
            </div>
            <div id="showMessage_part2" >
                <p></p>
            </div>
        </div>
        <button class="btn btn-danger" id="añadir_Inspección">Añadir Inspección</button>
    </form>
</div>

<!---Segunda fila-->
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

  //email con la nomenclatura correcta
    function validarEmail(correo) {
    var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var esValido = expReg.test(correo);
    if(esValido==true){
      return true
    }
    else{
      return false;
    } 
  } ; 

  //PANTALLA RESGITRO
    //mostrar contraseña
    const password = viewSignUp.querySelector('#password1');
    const btn_password = viewSignUp.querySelector('#btn_password');
    let click = false;

    btn_password.addEventListener('click', (e)=>{
        if(!click){
        password.type = 'text'
        click = true
        }else if(click){
        password.type = 'password'
        click = false
        }
    })


    const btn_ingresar = viewSignUp.querySelector('#btn_next');
    const container_infoUser =  viewSignUp.querySelector('#container_infoUser');
    const conteiner_infoEmpresa =  viewSignUp.querySelector('#container_infoEmpresa');
    const conteiner_behind =  viewSignUp.querySelector('#btn_behind');
    const btn_change =  viewSignUp.querySelector('#btn_color');
    // const btn_change1 =  viewSignUp.querySelector('#btn_color1');

    btn_ingresar.addEventListener('click', (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value;
       
        const passwordSubmit = viewSignUp.querySelector('#password1').value
        //enviar datos  FIREBASE
         console.log(email,passwordSubmit);
        console.log(email,passwordSubmit)

        const authentication = firebase.auth();
        authentication.createUserWithEmailAndPassword(email, passwordSubmit)
                .then(userCredencial =>{
                    console.log('registrado');
                })
        if(validarEmail(email)){
            container_infoUser.classList.add("ocultar");
            conteiner_infoEmpresa.classList.remove("ocultar");
            conteiner_behind.classList.remove("ocultar");
            // btn_change1.classList.add("hidde");
            btn_change.classList.remove("hidde");
        
            //modal
            const myModal = viewSignUp.querySelector('.modal');
            // const myInput = viewSignUp.querySelector('.myInput');

        
            myModal.addEventListener('shown.bs.modal',function () {
            // myInput.focus()
            });

    // Evento click agregar
         
        const show_icon =  viewSignUp.querySelector('#show_icon');
        const btn_nextWelcome =  viewSignUp.querySelector('#btn_nextWelcome');
        const btn_add =  viewSignUp.querySelector('#add');
        btn_add.addEventListener('click', (e) => {
            e.preventDefault

            btn_ingresar.classList.add("ocultar");
            btn_nextWelcome.classList.remove("ocultar");
            //jalar los nombres ingresados
            let name = document.getElementById("name").value 
            document.getElementById("showName").innerHTML= name
          

            let name1 = name.split(" ")[0]; 
            let name2 = name.split(" ")[1]; 
            document.getElementById("showName").innerHTML= name1 + name2 + "...";
         

         
            let separador = " ", // un espacio en blanco
            arregloDeSubCadenas = name.split(separador); // SEPARA EL NOMBRE EN CADENAS INDIVIDUALES
            console.log(arregloDeSubCadenas)

            
            // Imprime la primera letra de la cadena 
            for (let i=0;i<arregloDeSubCadenas.length;i++){
                let subCadena1 = name1.substring(0, 1).toUpperCase();
                let subCadena2 = name2.substring(0, 1).toUpperCase();

                // let subCadena = arregloDeSubCadenas[i].substring(0, 1).toUpperCase();
                console.log(subCadena1);
                console.log(subCadena2);
                document.getElementById("showNamei").innerHTML= subCadena1 + subCadena2
                }    
            //Mostrar iconos
            
            show_icon.classList.remove("ocultar");
            });
         } else {
        alert("email inválido")
    }
});


//FORMULARIO BIENVENIDA
const btn_nextWelcome =  viewSignUp.querySelector('#btn_nextWelcome');
const registro =  viewSignUp.querySelector('#form2'); 
const welcome =  viewSignUp.querySelector('#form3'); 
btn_nextWelcome.addEventListener("click", (e) => {
    e.preventDefault();
    //formulario BIENVENIDA
    welcome.classList.remove("ocultar");
    registro.classList.add("ocultar");
    
 
    //Seleccionar el nombre del usuario por medio del valor del atributo id
    const nombresincortar = document.getElementById("name").value;
    const nombrecortado = nombresincortar.split(" ");
    const primernombre = nombrecortado[0];
    
    console.log(primernombre);

    let email = document.getElementById("email").value 
    //Declaro una variable que contendrá msm
      let message1 = "Gracias &nbsp;"  + primernombre  +  " &nbsppor registrarte.";
      let message2 = "Te hemos enviado un mensaje a &nbsp;" + email + " &nbsp; para verificar tu correo electrónico, así como las invitaciones a los colaboradores en tu empresa";
    //Colocar el mensaje que se muestra al Usuario llamando su nombre
      document.getElementById("showMessage_part1").innerHTML= message1  
      document.getElementById("showMessage_part2").innerHTML= message2 
      return 
      });  

    //Ir a la página Inspección
    let añadir_Inspección = viewSignUp.querySelector("#añadir_Inspección");
    añadir_Inspección.addEventListener('click', (e) => {
        e.preventDefault();
        {window.location.hash = '#/inspection' }
      
        // screen1.classList.add("ocultar");
      });

     
    


    return viewSignUp;

}

