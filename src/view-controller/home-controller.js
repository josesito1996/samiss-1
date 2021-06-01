import { firestore } from "../firebase/firebase.js";

// export const addTask = (
//   taskName,
//   taskDate,
//   taskExpiration,
//   taskReceiver,
//   taskMail,
//   taskMessages
// ) => {
//   firebase.firestore().collection("tasks").add({
//   taskName: taskName,
//   date: taskDate,
//   expiration: taskExpiration,
//   receiver: taskReceiver,
//   mail: taskMail,
//   message: taskMessages,
//   });
// };

// //****** ingresando datos temporal *****/
// export const addDocument = () => {
//   firestore
//     .collection("homeWorks")
//     .add({
//       taskName: "Tema1",
//       date: "22/05/2021",
//       expiration: "23/05/2021",
//       receiver: "Juanito Perez",
//       file: "",
//       files: [],
//       initials: "SH",
//       mail: "perez@gmail.com",
//       message: "Mensaje de tarea 1",
//       status: "Pendiente",
//       count: 0,
//     })
//     .then((docRef) => {
//       console.log(("Documento escrito con ID:", docRef.id));
//     })
//     .catch((error) => {
//       console.log("Error al agregar documento:", error);
//     });
// };
