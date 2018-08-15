<template>
  <b-nav>
    <b-nav-item active>Active</b-nav-item>
    <b-nav-item>Login</b-nav-item>
    <b-nav-item>
      <router-link to="/posts">posts</router-link>
    </b-nav-item>
    <b-nav-item disabled>Disabled</b-nav-item>
  </b-nav>
</template>
