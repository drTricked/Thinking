<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>MentalWealth</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list>
        <ion-item v-for="(note, index) in notes" :key="index">
          <ion-label>
            <h1>{{ note.title }} : {{ note.date.toDateString() }}</h1>
            <ion-note>{{ note.noteDescription }}</ion-note>
          </ion-label>
        </ion-item>
      </ion-list>

      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button @click="() => router.push('/new')">
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>

    <Navbar />
  </ion-page>
</template>

<script>
  import {
    IonContent,
    IonFab,
    IonFabButton,
    IonHeader,
    IonIcon,
    IonPage,
    IonTitle,
    IonToolbar,
    IonList,
  } from "@ionic/vue";
  import { defineComponent } from "vue";
  import { add, calendar, personCircle } from "ionicons/icons";
  import { useRouter } from "vue-router";
  import Navbar from "@/components/Navbar";

  export default defineComponent({
    name: "Home",
    components: {
      IonContent,
      IonFab,
      IonFabButton,
      IonHeader,
      IonIcon,
      IonPage,
      IonTitle,
      IonToolbar,
      IonList,
      Navbar,
    },
    setup() {
      const notes = [
        {
          title: "Note 1",
          date: new Date(),
          noteDescription: "This is the note",
        },
      ];
      return {
        router: useRouter(),
        add,
        calendar,
        personCircle,
        Navbar,
        notes,
      };
    },
  });
</script>

<style scoped>
  #container {
    text-align: center;

    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  #container strong {
    font-size: 20px;
    line-height: 26px;
  }

  #container p {
    font-size: 16px;
    line-height: 22px;

    color: #8c8c8c;

    margin: 0;
  }

  #container a {
    text-decoration: none;
  }
</style>
