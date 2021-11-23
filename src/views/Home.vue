<template>
  <div class="home">
    <h1>Home</h1>
    <h2>Refs</h2>
    <p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">Update ninja one</button>

    <h2>Reactive</h2>
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
    <button @click="updateNinjaTwo">Update ninja two</button>

    <h2>Computed</h2>
    <input type="text" v-model="search" />
    <p>Search Term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">
      <p>{{ name }}</p>
    </div>
    <button @click="handleWatch">Stop Watching</button>

    <!-- <p ref="p">My name is {{ name }} and I'm {{ age }} years old</p>
    <button @click="handleClick">Click Me</button>
    <button @click="age++">Add Age</button>
    <br />
    <input type="text" v-model="name" /> -->
  </div>
</template>

<script>
import { ref, reactive, computed } from "@vue/reactivity";
import { watch, watchEffect } from "@vue/runtime-core";

export default {
  name: "Home",
  setup() {
    // const p = ref(null);

    // const handleClick = () => {
    //  p.value.classList.add("test");
    // };
    const ninjaOne = ref({ name: "mario", age: 30 });
    const ninjaTwo = reactive({ name: "luigi", age: 29 });

    const updateNinjaOne = () => {
      ninjaOne.value.age = 40;
    };

    const updateNinjaTwo = () => {
      ninjaTwo.age = 39;
    };

    const search = ref("");

    const names = ref([
      "mario",
      "yoshi",
      "luigi",
      "toad",
      "bowser",
      "koopa",
      "peach",
    ]);

    const stopWatch = watch(search, () => {
      console.log("Watch function ran");
    });

    const stopEffect = watchEffect(() => {
      console.log("Watcheffect function ran");
    });

    const handleWatch = () => {
      stopWatch();
      stopEffect();
    };

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });

    return {
      ninjaOne,
      ninjaTwo,
      updateNinjaOne,
      updateNinjaTwo,

      names,
      search,
      matchingNames,
      handleWatch,
      // handleClick,
      // p,
    };
  },
};
</script>

<style>
.home button {
  color: white;
  background: crimson;
  border-radius: 4px;
  padding: 10px;
  margin: 10px 10px;
  border: none;
}
.home button:hover {
  color: crimson;
  background: white;
  cursor: pointer;
}
</style>
