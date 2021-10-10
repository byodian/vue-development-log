<script>
export default {
  name: 'GridLayout',
  props: {
    type: {
      type: String,
      default: 'flexbox'
    },
    margin: {
      type: Array,
      default: () => [0, 0]
    },
    custom: {
      type: Boolean,
      default: false
    },
    customClassName: {
      type: String,
      default: ''
    },
    colNum: {
      type: Number,
      default: 12
    },
    minWidth: {
      type: [Number, String],
      default: 200
    },
    gap: {
      type: Number,
      default: 10
    },
    autofill: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {

    }
  },
  computed: {
    defaultClassName () {
      return this.type === 'flexbox'
        ? this.$style.flex
        : this.$style.grid
    },
    className () {
      return this.custom && this.customClassName ? this.customClassName : this.defaultClassName
    },
    columnsValue () {
      const minmaxValue = `minmax(${this.minWidth}px, 1fr)`
      return this.autofill
        ? `repeat(auto-fill, ${minmaxValue})`
        : `repeat(${this.colNum}, ${minmaxValue})`
    },
    gridboxStyle () {
      return {
        gridTemplateColumns: this.columnsValue
      }
    },
    flexboxStyle () {
      return {

      }
    },
    commonStyle () {
      return {
        margin: `${this.margin[0]}px ${this.margin[1]}px`,
        gap: `${this.gap}px`
      }
    }
  },
  mounted () {
    // console.log(this.$attrs)
  }
}
</script>

<template>
  <div
    :class="[
      className,
    ]"
    v-bind="$attrs"
    :style="[
      commonStyle,
      type === 'flexbox' ? flexboxStyle : gridboxStyle
    ]"
    v-on="$listeners"
  >
    <slot />
  </div>
</template>

<style lang="scss" module>
.flex {
  display: flex;

  > * {
    flex: 1;
  }
}

.grid {
  display: grid;
}
</style>

<style lang="scss" scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
}
</style>
