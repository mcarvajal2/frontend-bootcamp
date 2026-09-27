<template>
    <div>
        <h2>Lista de Usuarios</h2>
        <ul>
            <li v-for="user in users" :key="user.id">
                {{ user.name }} - {{ user.email }}
                <button @click="removeUser(user.id)">Eliminar</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    computed: {
        users() {
            return this.$store.state.users;
        }
    },
    created() {
        this.$store.dispatch("fetchUsers");
    },
    methods: {
        removeUser(userId) {
            this.$store.dispatch("deleteUser", userId);
        }
    }
};
</script>