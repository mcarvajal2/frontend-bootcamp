<template>
    <div>
        <h2>Agregar Usuario</h2>
        <form @submit.prevent="submitUser">
            <input v-model="name" placeholder="Nombre" required />
            <input v-model="email" placeholder="Correo Electrónico" required />
            <button type="submit">Agregar</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "",
            email: ""
        };
    },
    methods: {
        submitUser() {
            if (this.name && this.email) {
                const user = { name: this.name, email: this.email };
                this.$store.dispatch("addUser", user);
                this.name = "";
                this.email = "";
            } else {
                alert("Por favor, llena todos los campos.");
            }
        }
    }
};
</script>