<template>
  <v-container>
    <v-row class="mt-10" justify="space-around">
      <v-col cols="6" class="text-center pa-8">
        <h1>Book a Truck</h1>
        <p>
          Book your required Truck Online for your commercial cargo movement,
          hassle Free and get the best rates within Minutes, directly from the
          market.
        </p>
        <v-img src="@/assets/BookTruck/main.jpg"></v-img>
      </v-col>
      <v-col cols="5">
        <v-sheet rounded class="elevation-6 text-center py-6">
          <h2>Get a price estimate in your inbox</h2>
          <p>For your commercial Cargo Movement</p>
          <v-radio-group class="mt-12 ml-8" v-model="radios">
            <v-radio
              label="Full Truckload (FTL)"
              color="primary"
              value="Full Truckload (FTL)"
            ></v-radio>
            <v-radio
              label="Shared Space (LTL)"
              color="primary"
              value="Shared Space (LTL)"
            ></v-radio>
          </v-radio-group>
          <v-select
            :model-value="city[0]"
            :items="city"
            variant="outlined"
            density="compact"
            label="Select City"
            class="mx-16 my-4"
          ></v-select>
          <v-select
            :model-value="truckType[0]"
            :items="truckType"
            variant="outlined"
            density="compact"
            class="mx-16 my-4"
          ></v-select>
          <v-select
            :model-value="typeLoad[0]"
            :items="typeLoad"
            variant="outlined"
            density="compact"
            class="mx-16 my-4"
          ></v-select>
          <v-text-field
            label="Origin Address*"
            placeholder="Enter a location"
            variant="outlined"
            density="compact"
            class="mx-16 my-4"
          ></v-text-field>
          <v-text-field
            label="Destination Address*"
            placeholder="Enter azz location"
            variant="outlined"
            density="compact"
            class="mx-16 my-4"
          ></v-text-field>
          <v-select
            :model-value="requirements[0]"
            :items="requirements"
            variant="outlined"
            density="compact"
            class="mx-16 my-4"
          ></v-select>
          <v-btn size="large" class="my-4 px-16 elevation-0 bg-red"
            >Request Quote</v-btn
          >
          <p class="mx-8">
            Need Trucks on regular basis? <br />We advise you to download our
            Shipper's APP and enjoy hassle free experience.
          </p>
          <a href=""
            ><v-img height="70px" src="@/assets/storeBtn.png"></v-img
          ></a>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
  <section>
    <v-container class="text-center">
      <h1 class="mt-16 mb-4">Hassle-Free Truck booking for the commercial cargo</h1>
      <p>
        Move your commercial cargo through truckload.pk with full confidence and
        grip through the entire journey with vehicle tracking
      </p>
      <v-row class="pt-12">
          <v-col cols="3">
            <v-avatar image="@/assets/BookTruck/Mover-Truck.png" class="pa-5" size="125" color="white"></v-avatar>
            <h4 class="mt-5">HASSLE FREE MOVEMENT</h4>
          </v-col>
          <v-col cols="3">
            <v-avatar image="@/assets/BookTruck/price-tag1.png" class="pa-5" size="125" color="white"></v-avatar>
            <h4 class="mt-5">MARKET RATES</h4>
          </v-col>
          <v-col cols="3">
            <v-avatar image="@/assets/BookTruck/price.png" class="pa-5" size="125" color="white"></v-avatar>
            <h4 class="mt-5">FAIR PRICING</h4>
          </v-col>
          <v-col cols="3">
            <v-avatar image="@/assets/BookTruck/lorry.png" class="pa-5" size="125" color="white"></v-avatar>
            <h4 class="mt-5 mx-4">MULTIPLE TRUCK TYPES TO SUIT YOUR NEEDS</h4>
          </v-col>
      </v-row>
      <v-row class="pt-12 mb-10">
          <v-col cols="4">
            <v-avatar image="@/assets/BooksTruck/shipped.png" class="pa-5" size="125" color="white"></v-avatar>
            <h4 class="mt-5">HASSLE FREE MOVEMENT</h4>
          </v-col>
          <v-col cols="4">
            <v-avatar image="@/assets/BookTruck/invoice.png" class="pa-5" size="125" color="white"></v-avatar>
            <h4 class="mt-5">MARKET RATES</h4>
          </v-col>
          <v-col cols="4">
            <v-avatar image="@/assets/BookTruck/delivery-truck3.png" class="pa-5" size="125" color="white"></v-avatar>
            <h4 class="mt-5">FAIR PRICING</h4>
          </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script setup>
import { ref } from "vue";
let radios = ref("Full Truckload (FTL)");
let truckType = ["Truck Type", "Type1", "Type2", "Type3"];
let typeLoad = ["Type of Load", "Type1", "Type2", "Type3"];
let city = ["Lahore", "Karachi", "Faisalabad", "Other"];
let requirements = ["Requirements", "Business", "personal"];
</script>
<style scoped>
h1 {
  font-size: 42px;
}
section {
  background: #feead2;
}
</style>
