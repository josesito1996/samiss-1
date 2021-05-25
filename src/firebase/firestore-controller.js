// Trae perfil de usuario
export const getProfileInfo = (userId) =>
  firebase.firestore().collection("users").doc(userId).get();