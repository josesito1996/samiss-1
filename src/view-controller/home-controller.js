import firebase from '../firebase/firebase.js';

export const addTask = (
  taskName,
  taskDate, 
  taskExpiration, 
  taskReceiver, 
  taskMail, 
  taskMessages
) => {
  firebase.firestore().collection("tasks").add({
  taskName: taskName,
  date: taskDate,
  expiration: taskExpiration,
  receiver: taskReceiver,
  mail: taskMail,
  message: taskMessages,
  });
};
  


