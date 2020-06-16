sap.ui.define([], function () {
  "use strict";

  return {
    /**
     * Initializes firebase
     */
    initFirebase: function () {
      firebase.initializeApp({
        apiKey: "AIzaSyB0siKDfguVdHbBi9oWwI8NW3gtu7wXgcg",
        authDomain: "htammen-github-io.firebaseapp.com",
        databaseURL: "https://htammen-github-io.firebaseio.com",
        projectId: "htammen-github-io",
        storageBucket: "htammen-github-io.appspot.com",
        messagingSenderId: "1011895266307",
        appId: "1:1011895266307:web:61566f1c1632765470b236",
        measurementId: "G-PWJG2RTQ34",
      });
      firebase.analytics();
    },

    /**
     * Read a profile with id and return its json data
     * @param {*} id
     */
    readProfile: function (id) {
      id = id || "yTdDkDEA62bZ49l5ItYTgvXU9Gd2";

      return new Promise(function (resolve, reject) {
        var docRef = firebase.firestore().collection("Profiles").doc(id);
        docRef
          .get()
          .then(function (doc) {
            if (doc.exists) {
              console.log("Document data:", doc.data());
              resolve(doc.data());
            } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
              reject("No such document!");
            }
          })
          .catch(function (error) {
            reject("Error getting document: " + error);
          });
      });
    },

    getCities: function () {
      var cities = firebase.firestore().collection("cities");

      cities
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
          });
        })
        .catch(function (error) {
          Promise.reject("Error getting document: " + error);
        });
    },
  };
});
