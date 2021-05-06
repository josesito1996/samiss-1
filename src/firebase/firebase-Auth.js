// ----------------------------------Función para registrar nuevo usuario------------------------//

// se asigna valor firebase.auth(); para evitar error en funcion
export const createUser = (email, password) => {
    const authentication = firebase.auth();
    return authentication.createUserWithEmailAndPassword(email, password);
  };
  
  // ---------------------------Función para iniciar sesion--------------------------------------//
  
  export const signIn = (email, pass) => {
    const auth = firebase.auth();
    return auth.signInWithEmailAndPassword(email, pass);
  };