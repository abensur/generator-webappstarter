<template>
  <div class="view <%=lmoduleName%>">
    <%=moduleName%>
  </div>
</template>
<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  name: <%=moduleName%>,
  data () {
    return {}
  },
  computed: {
    ...mapGetters([])
  },
  methods: {
    ...mapActions([])
  }
}
</script>
<style lang="scss">
.<%=lmoduleName%> {

}
</style>
