<template>
  <ion-tabs
    @ionTabsWillChange="beforeTabChange"
    @ionTabsDidChange="afterTabChange"
  >
    <ion-tab-bar slot="bottom">
      <ion-tab-button tab="schedule" href="/tabs/schedule">
        <ion-icon :icon="calendar"></ion-icon>
        <ion-label>Calendar</ion-label>
        <ion-badge>6</ion-badge>
      </ion-tab-button>

      <ion-tab-button tab="speakers" href="/tabs/speakers">
        <ion-icon :icon="personCircle"></ion-icon>
        <ion-label>Profile</ion-label>
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
</template>

<script>
  import { IonTabs } from "@ionic/vue";
  import { defineComponent } from "vue";
  import { add, calendar, personCircle } from "ionicons/icons";
  import { useRouter } from "vue-router";

  export default defineComponent({
    name: "Navbar",
    components: {
      IonTabs,
    },
    setup() {
      return {
        router: useRouter(),
        add,
        calendar,
        personCircle,
      };
    },
  });
</script>

<style scoped></style>
