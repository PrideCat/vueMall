<template>
  <div class="main">
    <p>填寫并核對訂單信息</p>
    <p>{{$('填寫并核對訂單信息')}}</p>
    <div class="m_body">

    </div>
  </div>
</template>

<script>
export default {
  name: "checkOrder",
  data() {
    return {
      
    };
  },
  computed: {
   
  },
  methods: {
   
  },
  created() {
    this.$store.dispatch("setMenuI", 0);
    this.$store.dispatch("setBreadCrumbs", []);
   
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
