<template>
  <div class="row">
    <div class="col">
      <h2 class="text-center">Enter username</h2>
    </div>
  </div>

  <div class="row justify-center">
    <div class="col-lg-5 q-mx-auto">
      <q-form
        @submit.prevent="search"
        autocorrect="off"
        autocapitalize="off"
        autocomplete="off"
        spellcheck="false"
        class="q-gutter-md"
      >
        <q-input filled v-model.trim="username" autofocus />

        <div class="row justify-center">
          <q-btn label="Submit" type="submit" color="primary" />
        </div>
      </q-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
  data: () => ({
    username: ""
  }),
  methods: {
    async search() {
      await this.$router.push({ path: this.username });
    }
  }
});
</script>
