<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <!-- uses the web history but if no history can use the default -->
          <ion-back-button default-href="/home"></ion-back-button>
        </ion-buttons>
        <ion-title>New Item</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-item>
        <!-- <ion-label position="fixed">Title: </ion-label> -->
        <ion-input type="text" placeholder="Enter title here"></ion-input>
      </ion-item>
      <ion-item>
        <ion-input
          placeholder="Date"
          type="text"
          ionFocus=""
          onblur="(this.type='text')"
        >
          <!-- placeholder="2000-12-02"> -->
        </ion-input>
      </ion-item>
      <ion-item>
        <ion-input placeholder="Write about your day here:"></ion-input>
      </ion-item>

      <ion-button @click="addNote" shape="round">Submit</ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
  import {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
  } from "@ionic/vue";

  import { defineComponent } from "vue";

  export default defineComponent({
    name: "NewItem",
    components: {
      IonBackButton,
      IonButtons,
      IonContent,
      IonHeader,
      IonPage,
      IonTitle,
      IonToolbar,
    },
    setup() {
      const addNote = () => {
        console.log("Jell");
      };
      return {
        addNote,
      };
    },
  });
</script>
