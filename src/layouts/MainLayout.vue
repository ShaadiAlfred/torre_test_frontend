<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-secondary">
      <q-toolbar>
        <q-toolbar-title @click="goToHomePage"> Torre </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainLayout",
  methods: {
    async goToHomePage() {
      await this.$router.push("/");
    }
  }
});
</script>

<style lang="scss" scoped>
.q-toolbar__title {
  color: hsla(0, 0%, 100%, 0.9);

  &:hover {
    cursor: pointer;
  }
}
</style>
