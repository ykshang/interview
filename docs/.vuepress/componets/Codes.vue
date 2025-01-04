<template>
  <div :class="contentStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Codes',
  props: ["b"],
  data () {
    return {
      contentStyle: "",
    };
  },
  mounted () {
    this.contentStyle = 'basic bold';
    // if (this.b === '') {
    //   this.contentStyle = 'basic';
    // } else {
    // }
  }
};
</script>
<style scoped>
.basic {
  display: inline-block;
  margin: auto 2px;
  padding: 2px 4px;
  font-size: 85%;
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  background-color: #ffeee8;
  color: #ff561b;
}
.bold {
  font-weight: bold;
}
</style>