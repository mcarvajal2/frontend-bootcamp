<template>
  <div>
    <nav>
      <router-link to="/">Contador </router-link>
      <router-link to="/info">Información </router-link>
      <router-link to="/parent">Ejercicio Parent-Child</router-link>
    </nav>
    <router-view />
  </div>
</template>