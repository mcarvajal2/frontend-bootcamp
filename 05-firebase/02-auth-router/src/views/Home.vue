<template>
    <div>
        <h1>Bienvenido al Home</h1>
        <button @click="logout">Cerrar sesión</button>
    </div>
</template>

<script>
import { auth } from "@/auth";
import { signOut } from "firebase/auth";

export default {
    methods: {
        async logout() {
            try {
                await signOut(auth);
                this.$router.push("/login");
            } catch (error) {
                console.error("Error al cerrar sesión:", error.message);
            }
        },
    },
};
</script>