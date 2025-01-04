<template>
  <div class="CodeBold">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CodeBold',
};
</script>
<style scoped>
.CodeBold {
  display: inline-block;
  margin: auto 2px;
  padding: 1px 4px;
  background-color: #ffeee8;
  color: #ff561b;
  font-size: 85%;
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  font-weight: bold;
}
</style>