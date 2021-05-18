// import { signIn } from '../firebase/firebase-Auth.js';

export default () => {
    const viewDocumentos = document.createElement('div');
    viewDocumentos.innerHTML =  `
                    <label for="file-upload" id="subir" style="margin-left:0px;">
                                  <img  src="./img/svg/clicdoc.svg" alt="" />
                                    </label>
                                    <input id="file-upload"  type="file" style='display: none;'/>
                                    <div id="info"></div>
                                  
                                    <div id="verFiles">
                                    </div>
                                  
    
    `;

    //subir documento
const subir = viewDocumentos.querySelector("#subir");

const file_upload = viewDocumentos.querySelector("#file-upload");
file_upload.addEventListener("change", ()=> {
  subir.classList.add("ocultar");
  
  var pdrs = document.getElementById('file-upload').files[0].name;
  document.getElementById('info').innerHTML = pdrs;
  const mostrarDoc = document.getElementById('info') 
mostrarDoc.addEventListener("click", () => {
  
    rootRef.on('value', function(snapshot){
      var datos = snapshot.val();
      var result = "" 
      for(var key in datos){

        console.log(datos[key].url)
      
        result +=  '<iframe  class="styleIframe"  src="'+ datos[key].url +'"></iframe>';
        
      } 
      document.getElementById("verFiles").innerHTML= result;
    })
        });

        
 
});



  // window.onload = inicializar;
   var fichero;
   var storageRef;
    
    // function inicializar() {
        fichero = viewDocumentos.querySelector("#file-upload");
        fichero.addEventListener("change", subirDocAFirebase, false);
        storageRef = firebase.storage().ref();
        var rootRef = firebase.database().ref().child("documentos");
    

 function subirDocAFirebase(){
//     console.log("subiendo")

const documentoSubir = fichero.files[0];
console.log(documentoSubir)
const uploadTask = storageRef.child("documentos/"+documentoSubir.name).put(documentoSubir)
 
 // Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on('state_changed', function(snapshot){

  //  // Observe state change events such as progress, pause, and resume
  // console.log("subido");
  
}, function(error) {
  alert("hubo un error")
  // Handle unsuccessful uploads
}, function() {
  // Handle successful uploads on complete
  // For instance, get the download URL: https://firebasestorage.googleapis.com/...
  uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
    alert('se subió la imagen conURL', downloadURL);
    console.log('Uploaded a blob or file!');
    crearNodoEnBDFirebase(documentoSubir.name,downloadURL);
    
  });
});
};


//BJAR DOCUMENTOS
// // Create a reference with an initial file path and name
// var storages = firebase.storage();
// var pathReference = storages.ref('images/stars.jpg');

// // Create a reference from a Google Cloud Storage URI
// var gsReference = storages.refFromURL('gs://bucket/images/stars.jpg')

// // Create a reference from an HTTPS URL
// // Note that in the URL, characters are URL escaped!
// var httpsReference = storages.refFromURL('https://firebasestorage.googleapis.com/b/bucket/o/images%20stars.jpg');

// const docFB = firebase.database().ref().child('documentos')


// var storage = firebase.storage();

// var storageRef = storage.refFromURL("url_ul").getDownloadURL().then(function(url) {});

function  crearNodoEnBDFirebase(name,url){
  rootRef.push({
  nombre:name,
  url:url,
})
}

// function writeUserData(userId, name, email, imageUrl) {
//   firebase.database().ref('users/' + userId).set({
//     username: name,
//     email: email,
//     profile_picture : imageUrl
//   });
// }
// firebase.database().ref().child('images/stars.jpg').getDownloadURL().then(function(url) {
//   // `url` is the download URL for 'images/stars.jpg'

//   // This can be downloaded directly:
//   var xhr = new XMLHttpRequest();
//   xhr.responseType = 'blob';
//   xhr.onload = function(event) {
//     var blob = xhr.response;
//   };
//   xhr.open('GET', url);
//   xhr.send();

//   // Or inserted into an <img> element:
//   var img = document.getElementById('myimg');
//   img.src = url;
// }).catch(function(error) {
//   // Handle any errors
// });

      return viewDocumentos
  };