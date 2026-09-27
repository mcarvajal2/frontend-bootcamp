<template>
    <div>
        <h1>Sign Up</h1>
        <form @submit.prevent="register">
            <input v-model="email" type="email" placeholder="Email" required />
            <input v-model="password" type="password" placeholder="Password" required />
            <button type="submit">Sign Up</button>
        </form>
        <p v-if="error" style="color: red;">{{ error }}</p>
        <p>¿Ya tienes una cuenta? <router-link to="/login">Inicia sesión</router-link></p>
    </div>
</template>

<script>
import { auth, createUserWithEmailAndPassword } from "@/auth";

export default {
    data() {
        return {
            email: "",
            password: "",
            error: "",
        };
    },
    methods: {
        async register() {
            try {
                this.error = "";
                await createUserWithEmailAndPassword(auth, this.email, this.password);
                this.$router.push("/home");
            } catch (error) {
                if (error.code === "auth/email-already-in-use") {
                    this.error = "El correo ya está registrado. Intenta iniciar sesión.";
                } else if (error.code === "auth/weak-password") {
                    this.error = "La contraseña debe tener al menos 6 caracteres.";
                } else {
                    this.error = "Error al registrar usuario: " + error.message;
                }
            }
        },
    },
};
</script>