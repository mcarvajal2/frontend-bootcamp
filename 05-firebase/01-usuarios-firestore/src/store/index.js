import { createStore } from "vuex";
import { db, collection, getDocs, addDoc, deleteDoc, doc } from "../firebaseConfig";

export default createStore({
    state: {
        users: []
    },
    mutations: {
        setUsers(state, users) {
            state.users = users;
        },
        addUser(state, user) {
            state.users.push(user);
        },
        deleteUser(state, userId) {
            state.users = state.users.filter(user => user.id !== userId);
        }
    },
    actions: {
        async fetchUsers({ commit }) {
            try {
                const snapshot = await getDocs(collection(db, "users"));
                const users = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                commit("setUsers", users);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        },
        async addUser({ commit }, user) {
            try {
                const docRef = await addDoc(collection(db, "users"), user);
                commit("addUser", { id: docRef.id, ...user });
            } catch (error) {
                console.error("Error adding user:", error);
            }
        },
        async deleteUser({ commit }, userId) {
            try {
                await deleteDoc(doc(db, "users", userId));
                commit("deleteUser", userId);
            } catch (error) {
                console.error("Error deleting user:", error);
            }
        }
    }
});