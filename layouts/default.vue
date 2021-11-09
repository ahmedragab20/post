<template>
  <v-app dark>
    <v-app-bar fixed app class="d-flex justify-space-around align-center">
      <ul class="list d-flex" style="list-style: none">
        <li class="links mx-2" v-for="(item, i) in items" :key="i">
          <v-btn :to="item.to" exact>
            <v-icon small left>mdi-{{ item.icon }}</v-icon> {{ item.title }}
          </v-btn>
        </li>
      </ul>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Home',
          to: '/',
          icon: 'home',
        },
        {
          title: 'Admin',
          to: '/admin',
          icon: 'badminton',
        },
      ],
    }
  },
}
</script>
