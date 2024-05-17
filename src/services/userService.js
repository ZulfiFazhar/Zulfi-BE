const { db } = require('../config/firebaseConfig');

async function createUser(userJson) {
    const snapshot = await db.collection("users").where("email", "==", userJson.email).get();
    if (!snapshot.empty) {
        throw new Error("User with this email already exists");
    }
    
    const response = await db.collection("users").add(userJson);
    return response;
}

async function getAllUsers() {
    const usersRef = db.collection("users");
    const response = await usersRef.get();
    let responseArr = [];
    response.forEach(doc => {
        responseArr.push(doc.data());
    });
    return responseArr;
}

async function getUserById(id) {
    const userRef = db.collection("users").doc(id);
    const response = await userRef.get();
    return response;
}

async function updateUserById(id){
    const newFirstName = 'abdi';
    const newLLastName = 'master';
    const newEmail = 'abdi@email.com';
    const userRef = await db.collection("users").doc(id)
    .update({
        email: newEmail,
        firstName: newFirstName,
        lastName: newLLastName
    });
    return userRef;
}

async function deleteUserById(id){
    const response = await db.collection("users").doc(id).delete();
    return response;
}

module.exports = { createUser, getAllUsers, getUserById, updateUserById, deleteUserById };
