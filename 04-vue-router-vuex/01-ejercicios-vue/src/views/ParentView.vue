<template>
    <div>
        <h1>Componente Padre</h1>
        <Parent />
    </div>
</template>

<script>
import Parent from '@/components/Parent.vue';

export default {
    components: {
        Parent,
    },
};
</script>