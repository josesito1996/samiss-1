import { signIn } from '../firebase/firebase-Auth.js';

export default () => {
    const viewSignIn = document.createElement('div');
    viewSignIn.innerHTML = `
    <!---Primera fila-->
    <div class="row " style="background: #FF3355;padding: 0px 200px 200px 200px;">
        <!---Columna izquierda-->
        <div class="col-12 col-lg-6">
    
            <img src="./img/Logo Sami.png" style="width:200px; height:67.51px; margin-left:290px" class="img_logoLogin"
                alt="logo">
    
        </div>
        <div class="col-12 col-lg-6">
            <form class="form1">
                <div clas="row">
                    <img src="./img/Group.png" class="img_group" alt="logo">
                </div>
    
                <div clas="row">
                    <div class="flex_newAccount">
                        <p>Completa tus credenciales.¿Aún no tienes una cuenta? &nbsp</p>
                        <a href="#/signUp" class="text-danger" id="newAccount" style="text-decoration:none">Crea tu
                            cuenta</a>
                    </div>
                </div>
    
                <div clas="row">
                    <div class="input-group" id="container_email" style="height:auto;">
                        <label for="exampleInputEmail1" class="form-label">Usuario</label>
                        <input type="email" name="email" id="fname" class="form-control" placeholder="nombre@petroperu.com"
                            aria-required="true" aria-invalid="false" required><br>
                        <p id="messageEmail"></p>
                    </div>
                    <p id="mensajeEmail" class='aviso'></p>
                    <div class="input-group">
                        <input type="password" id="password" class="form-control" name="txtPassword"
                            placeholder="Contraseña" />
                        <button type="button" id="btnToggle" class="toggle"><i id="eyeIcon" class="bi bi-eye"></i></button>
                    </div>
                </div>
    
                <div clas="row" style="margin-top:22px;margin-left:230px;">
                    <a href="#/signUp"  style="color:#1890FF;">Olvidé mi
                        contraseña</a>
                </div>
    
                <div clas="row"></div>
                <button type="button" id="getIn" class="ingresar">Ingresar</button>
        </div>
        </form>
    </div>
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
}

//mostrar contraseña
  const password = viewSignIn.querySelector('#password');
  const btn_password = viewSignIn.querySelector('#btnToggle');
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
    
//mostrar vista registrar, si el email está validado
    // const btn_Ingresar = viewSignIn.querySelector('.ingresar');
    // btn_Ingresar.addEventListener('click', (e) => {
    //     e.preventDefault;
    //     let email = document.getElementById("fname").value;

    //     validarEmail(email) ? window.location.hash = '#/home' : alert("email inválido");
    //     // screen1.classList.add("ocultar");
    //   });
  //SIGIN VALIDACION
  
  const txtEmail = viewSignIn.querySelector('#fname');
  const txtPassword = viewSignIn.querySelector('#password');
  const aviso = viewSignIn.querySelector('#aviso_error');
  const btnRegister1 = viewSignIn.querySelector('#getIn');

  btnRegister1.addEventListener('click', (e) => {
    e.preventDefault();
    const email = txtEmail.value;
    console.log(email);
    const pass = txtPassword.value;
    console.log(pass);

    const auth = firebase.auth();
 auth.signInWithEmailAndPassword(email, pass)

 .then(userCredencial => {
  window.location.hash = "#/inspection";
  var user = userCredential.user;
  console.log("exitoso");
  // readAddNotes();
})
.catch((error) => {

  var errorCode = error.code;
  console.log(errorCode)
  var errorMessage = error.message;
  console.log(errorMessage)
  if (errorCode === 'auth/user-not-found') {
    document.getElementById('mensajeEmail').innerHTML = 'Usuario no registrado';
  }else if (errorCode === 'auth/wrong-password') {
    document.getElementById('mensajePass').innerHTML = 'Usuario no registrado';
  }else{
    document.getElementById('mensajeEmail').innerHTML = 'Usuario no registrado';
    document.getElementById('mensajePass').innerHTML = 'Usuario no registrado';
  }

  });

  });
      return viewSignIn
  };
  