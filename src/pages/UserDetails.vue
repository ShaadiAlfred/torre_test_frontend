<template>
  <div class="row justify-center">
    <div class="q-my-xl col-5">
      <q-card class="my-card">
        <q-item>
          <q-item-section avatar>
            <q-avatar style="height: 3em; width: 3em">
              <img :src="pictureUrl" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>
              <h4 style="margin-bottom: 0px; padding-bottom: 0px">
                {{ realName }}
              </h4>
            </q-item-label>
            <q-item-label caption>
              <a :href="`https://torre.co/${username}`" target="_blank">
                {{ username }}
              </a>
            </q-item-label>
          </q-item-section>
        </q-item>

        <ul>
          <li v-for="skill in skills" :key="skill.id">
            {{ skill.name }}: {{ skill.proficiency }}
          </li>
        </ul>
      </q-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Skill } from "../types/UserDetails";
import { defineComponent } from "vue";
import { getUserDetails } from "../services";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "UserDetails",
  data: () => {
    return {
      username: "",
      realName: "",
      skills: [] as Skill[],
      pictureUrl: "",
    };
  },
  async mounted() {
    const $q = useQuasar();

    $q.loading.show({
      delay: 400,
    });

    const userInfo = await getUserDetails(
      this.$route.params.username as string,
    );

    if (userInfo !== null) {
      this.username = this.$route.params.username as string;
      this.realName = userInfo.person.name;
      this.pictureUrl = userInfo.person.picture;
      this.skills = userInfo.strengths;
      $q.loading.hide();
      return;
    }

    $q.loading.hide();
    await this.$router.push({ name: "not_found" });
  },
});
</script>
