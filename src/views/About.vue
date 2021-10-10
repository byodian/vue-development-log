<script>
export default {
  name: 'About',
  showSlideImage: true,
  data () {
    return {}
  },
  watch: {
    $slides () {
      console.log(this.$slides)
    }
  },
  created () {
    // console.log(this.$slides)
  },
  mounted () {
    // console.log(this.$slides)
  }
}
</script>

<template>
  <div class="about">
    <AppSlide :slide-data="$slides" />
  </div>
</template>

<style lang="scss" scoped>
.about {
  padding: 8px 16px;
}
</style>
