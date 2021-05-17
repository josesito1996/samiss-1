// import { signIn } from '../firebase/firebase-Auth.js';

export default () => {
    const viewDocumentos = document.createElement('div');
    viewDocumentos.innerHTML =  `
                    <label for="file-upload" id="subir" style="margin-left:0px;">
                                  <img  src="./img/svg/carga.svg" alt="" />
                                    </label>
                                    <input id="file-upload"  type="file" style='display: none;'/>
                                    <div id="info"></div>
    
    `;



var fichero;
var storageRef;

function inicializar() {
    fichero = viewDocumentos .querySelector("#file-upload");
    fichero.addEventListener("change", subirDocAFirebase, false);
    storageRef = firebase.storage().ref();
}
inicializar()

function subirDocAFirebase(){
    console.log("subiendo")
    var documentoSubir = fichero.files[0];

    var subir = storageRef.child("documentos/"+documentoSubir.name).put(documentoSubir)
   
    .then(function(snapshot) {
  console.log('Uploaded a blob or file!');
});
   
}
      return viewDocumentos
  };