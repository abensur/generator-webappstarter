<template>
  <div class="dashboard">
    <h2>@/app/dashboard/main.vue</h2>
    <button @click="logout"> Sair </button>
    <hr />
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>
<script>

import auth from '@/auth'

export default {
  methods: {
    logout () {
      auth.logout()
    }
  }
}
</script>
