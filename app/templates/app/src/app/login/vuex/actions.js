import auth from '@/auth.js'

export default {
  login ({ commit }, { vm, user }) {
    auth.login(vm, user).then(response => {
      if (response.status === 200) {
        commit('SET_USER', response.data.data)
        vm.$router.push({ name: 'Dashboard' })
      }
    }, err => {
      console.log(err)
    })
  }
}

