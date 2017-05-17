<template>
  <div class="login">
    <h2>@/app/login/main.vue</h2>
    <form @submit.stop.prevent="onSubmit">
      <label>Email</label>
      <input v-model="user.email" type="email" required />

      <label>Password</label>
      <input v-model="user.password" type="password" required />

      <button type="submit"> Entrar </button>
    </form>
  </div>
</template>
<script>

import { mapActions } from 'vuex'

export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'login'
    ]),
    onSubmit () {
      this.login({
        vm: this,
        user: this.user
      })
    }
  }
}
</script>
