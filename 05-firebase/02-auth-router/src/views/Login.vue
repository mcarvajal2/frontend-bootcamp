<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="login">
            <input v-model="email" type="email" placeholder="Email" required />
            <input v-model="password" type="password" placeholder="Password" required />
            <button type="submit">Login</button>
        </form>
        <p v-if="error" style="color: red;">{{ error }}</p>
        <p>¿No tienes una cuenta? <router-link to="/signup">Regístrate</router-link></p>
    </div>
</template>

<script>
import { auth, signInWithEmailAndPassword } from "@/auth";

export default {
    data() {
        return {
            email: "",
            password: "",
            error: "",
        };
    },
    methods: {
        async login() {
            try {
                this.error = "";
                await signInWithEmailAndPassword(auth, this.email, this.password);
                this.$router.push("/home");
            } catch (error) {
                this.error = "Error al iniciar sesión: " + error.message;
            }
        },
    },
};
</script>