<template>
  <div :class="contentStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Codes1',
  // t: tip
  // w: warn
  // e: error
  // s: sucess
  // b: bold
  props: ["t", "w", "e", "s", "b"],
  data () {
    return {
      contentStyle: "",
    };
  },
  mounted () {
    this.contentStyle = 'basic';
    if (this.b === '') {
      this.contentStyle = this.contentStyle + ' bold';
    }
    if (this.t === '') {
      this.contentStyle = this.contentStyle + ' tip';
    } else if (this.w === '') {
      this.contentStyle = this.contentStyle + ' warn';
    } else if (this.s === '') {
      this.contentStyle = this.contentStyle + ' sucess';
    } else if (this.e === '') {
      this.contentStyle = this.contentStyle + ' error';
    }
  }
};
</script>
<style scoped>
.basic {
  display: inline-block;
  margin: auto 2px;
  padding: 1px 4px;
  font-size: 85%;
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
}
.bold {
  font-weight: bold;
}
.warn {
  background-color: #ffe5644d;
  color: #a68f26;
}
.tip {
  background-color: #f3f5f7;
  color: #000;
}
.error{
  background-color: #ffeee8;
  color: #ff561b;
}
.sucess{
  background-color: #f3f5f7;
  color: #42b983;
}
</style>
