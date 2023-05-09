<template> <!-- This is just css stuff for whenever loading stuff from database-->
  <div class="loading">
    <span></span>
  </div>
</template>
<script setup></script>
<style scoped>
.loading {
  top: 0;
  left: 0;
  z-index: 101;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loading span {
  display: block;
  width: 60px;
  height: 60px;
  margin: 0 auto;
  border: 3px solid transparent;
  border-top-color: white;
  border-bottom-color: white;
  border-radius: 50%;
  animation: spin ease 1s infinite;
}

@keyframes spin {
  to {
    transform: rotateZ(360deg);
  }
}
</style>
