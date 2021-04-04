<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title class="ion-text-center">Daily Quote</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-grid class="makeCenter">
        <ion-row>
          <ion-card class="card-container">
            <ion-card-header>
              <ion-card-title>Quote of the Day</ion-card-title>
              <ion-card-subtitle>{{ date }}</ion-card-subtitle>
            </ion-card-header>

            <ion-card-content> {{ quote.text }} </ion-card-content>
          </ion-card>
        </ion-row>

        <ion-grid>
          <ion-row>
            <ion-col col-4> </ion-col>

            <ion-col col-4>
              <ion-button @click="nextQuote" class="button" color="light"
                >More</ion-button
              >
            </ion-col>

            <ion-col col-4> </ion-col>
          </ion-row>
        </ion-grid>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
  export default {
    data() {
      return {
        quotes: [],
        quote: {},
        date: new Date().toDateString(),
      };
    },
    beforeMount() {
      this.getQuotes();
    },
    methods: {
      async getQuotes() {
        const res = await fetch("https://type.fit/api/quotes");
        const quotes = await res.json();
        this.quotes = quotes;
        this.quote = quotes[0];
      },
      nextQuote() {
        this.quote = this.quotes[Math.round(Math.random() * 1000)];
      },
    },
  };
</script>

<style>
  .card-container {
    width: 100%;
  }
  .makeCenter {
    margin-top: 280px;
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 800px; */
  }
</style>
