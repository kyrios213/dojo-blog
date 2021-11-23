<template>
  <router-view />
  <br />

  <div class="redirect-buttons">
    <button @click="back">Go Back</button>
    <button @click="redirect">Home</button>
    <button @click="forward">Go forward</button>
  </div>
</template>

<script>
export default {
  methods: {
    redirect() {
      this.$router.push({ name: "Home2" });
    },
    back() {
      this.$router.go(-1);
    },
    forward() {
      this.$router.go(+1);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.redirect-buttons {
  margin-top: 20px;
}

.redirect-buttons button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
}

.redirect-buttons button:hover {
  background: gray;
  cursor: pointer;
  color: white;
}
</style>
