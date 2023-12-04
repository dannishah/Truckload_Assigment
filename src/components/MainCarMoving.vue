<template>
  <v-container>
    <v-row class="mt-10" justify="space-around">
      <v-col cols="6" class="text-center pa-8">
        <h1>Car Carrier Services</h1>
        <p class="mt-4 mb-10">
          Now with the help of Truckload.pk, the customers can ship their
          vehicles, for intercity transportation, with full confidence through
          our network of trusted partners, at the right market rates without
          fear of getting overcharged and greater quality of service.
        </p>
        <v-carousel cycle hide-delimiters>
          <v-carousel-item src="https://www.truckload.pk/site/imgs/WhatsApp%20Image%202022-12-12%20at%2022.02.12.jpg"
            cover></v-carousel-item>
          <v-carousel-item src="https://www.truckload.pk/site/imgs/WhatsApp%20Image%202022-12-12%20at%2022.02.13.jpg"
            cover></v-carousel-item>
          <v-carousel-item src="https://www.truckload.pk/site/imgs/WhatsApp%20Image%202022-12-12%20at%2022.02.48.jpg"
            cover></v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col cols="5">
        <v-sheet rounded class="elevation-6 text-center py-6">
          <h2>Get a price estimate in your inbox</h2>
          <p>For your commercial Cargo Movement</p>
          <v-radio-group class="mt-12 ml-8" v-model="radios">
            <v-radio label="Yard to Yard" color="primary" value="Yard to Yard"></v-radio>
            <v-radio label="Door to Door" color="primary" value="Door to Door"></v-radio>
          </v-radio-group>
          <v-select :model-value="vehicleType[0]" :items="vehicleType" variant="outlined" density="compact"
            label="Vehicle Type" class="mx-16 my-4"></v-select>
          <v-select :model-value="vehicleBrand[0]" :items="vehicleBrand" variant="outlined" label="Vehicle Brand"
            density="compact" class="mx-16 my-4"></v-select>
          <v-select :model-value="vehicleModel[0]" :items="vehicleModel" label="Vehicle Model" variant="outlined"
            density="compact" class="mx-16 my-4"></v-select>
          <v-select :model-value="vehicle[0]" :items="vehicle" label="Vehicle" variant="outlined" density="compact"
            class="mx-16 my-4"></v-select>
          <v-select :model-value="pickup[0]" :items="pickup" label="Pickup City" variant="outlined" density="compact"
            class="mx-16 my-4"></v-select>
          <v-select :model-value="dropoff[0]" :items="dropoff" label="Dropoff City" variant="outlined" density="compact"
            class="mx-16 my-4"></v-select>
          <v-btn size="large" class="my-4 mt-16 px-16 elevation-0 bg-green">next</v-btn>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
  <section>
    <v-container class="text-center">
      <h1 class="mt-16 mb-4">
        How can Truckload help with the Vehicle Moving Process?
      </h1>
      <p>
        Now with the help of Truckload.pk, enjoy the hassle-free experience for
        intercity movement & relocation of your vehicles at the right market
        rates and right quality of service through our trusted partners.
      </p>
      <v-row class="pt-12">
        <v-col cols="3">
          <v-avatar image="@/assets/carMoving/tow.png" class="pa-5" size="125" color="white"></v-avatar>
          <h4 class="mt-5">HASSLE FREE MOVEMENT</h4>
        </v-col>
        <v-col cols="3">
          <v-avatar image="@/assets/carMoving/tow-truck1.png" class="pa-5" size="125" color="white"></v-avatar>
          <h4 class="mt-5">MARKET RATES</h4>
        </v-col>
        <v-col cols="3">
          <v-avatar image="@/assets/carMoving/price.png" class="pa-5" size="125" color="white"></v-avatar>
          <h4 class="mt-5">FAIR PRICING</h4>
        </v-col>
        <v-col cols="3">
          <v-avatar image="@/assets/carMoving/calendar1.png" class="pa-5" size="125" color="white"></v-avatar>
          <h4 class="mt-5 mx-4">MULTIPLE TRUCK TYPES TO SUIT YOUR NEEDS</h4>
        </v-col>
      </v-row>
      <v-row class="pt-12">
        <v-col cols="4">
          <v-avatar image="@/assets/carMoving/delivery1.png" class="pa-5" size="125" color="white"></v-avatar>
          <h4 class="mt-5">HASSLE FREE MOVEMENT</h4>
        </v-col>
        <v-col cols="4">
          <v-avatar image="@/assets/carMoving/car-insurance.png" class="pa-5" size="125" color="white"></v-avatar>
          <h4 class="mt-5">MARKET RATES</h4>
        </v-col>
        <v-col cols="4">
          <v-avatar image="@/assets/carMoving/salary.png" class="pa-5" size="125" color="white"></v-avatar>
          <h4 class="mt-5">FAIR PRICING</h4>
        </v-col>
      </v-row>
    </v-container>
  </section>
  <v-container>
    <v-row>
      <h1 class="mt-16 mb-4 mx-auto font-weight-bold my-16 text-red">Car Carrier Rate List</h1>
      <table class="table table-striped">
        <thead>
          <tr>
            <th >Vehicle Name</th>
            <th>Vehicle Type</th>
            <th>Multan</th>
            <th>Lahore</th>
            <th>Islamabad</th>
            <th>Peshawar</th>
            <th>Faislabad</th>
            <th>Quetta</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in table" :key="item.vehicle">
            <td>{{ item.vehicle }}</td>
            <td>{{ item.vehicleType }}</td>
            <td>{{ item.multan }}</td>
            <td>{{ item.lahore }}</td>
            <td>{{ item.islamabad }}</td>
            <td>{{ item.peshawar }}</td>
            <td>{{ item.faisalabad }}</td>
            <td>{{ item.quetta }}</td>
          </tr>
        </tbody>
      </table>
    </v-row>
  </v-container>
</template>
<script setup>
import { ref } from "vue";
let radios = ref("Yard to Yard");

let vehicleType = ["Select Vehicle Type", "Type2", "Type3", "Type4", "Type5"];
let vehicleBrand = [
  "Select Vehicle Brand",
  "Brand2",
  "Brand3",
  "Brand4",
  "Brand5",
];

const table = [
  {
    vehicle : "660CC (WagonR, Alto, Mira, Move, Bolan, Every Van, Coure, Nissan Days, Mehran, Tantoo, Hustler)",
    vehicleType : "Mini Vehicles",
    multan : "34000",
    lahore : "35000",
    islamabad : "37000",
    peshawar : "38000",
    faisalabad : "3600",
    quetta : "30000"
  },
  {
    vehicle : "1000 CC (Vitz, Cultus, Passo, Swift, Shrade, Khyber, Santro, Picanto)",
    vehicleType : "Hatchback",
    multan : "35000",
    lahore : "36000",
    islamabad : "38000",
    peshawar : "40000",
    faisalabad : "3700",
    quetta : "33000"
  },
  {
    vehicle : "1300-1800CC SEDANS & Mini SUVs (Toyota Corolla, Honda City, Civic, Vezel, CHR, Fielder, Axio, Prius, Honda Grace, Aqua, Alsvin)",
    vehicleType : "Sedan",
    multan : "37000",
    lahore : "38000",
    islamabad : "40000",
    peshawar : "42000",
    faisalabad : "3800",
    quetta : "35000"
  },
  {
    vehicle : "1800CC+ & SUVs Crossovers (BMW X1, 3 Door Jeep, Tuscon, Sportage, MG HS) )",
    vehicleType : "Crossover",
    multan : "39000",
    lahore : "42000",
    islamabad : "44000",
    peshawar : "43000",
    faisalabad : "42000",
    quetta : "38000"
  },
  {
    vehicle : "660CC (WagonR, Alto, Mira, Move, Bolan, Every Van, Coure, Nissan Days, Mehran, Tantoo, Hustler)",
    vehicleType : "Mini Vehicles",
    multan : "34000",
    lahore : "35000",
    islamabad : "37000",
    peshawar : "38000",
    faisalabad : "3600",
    quetta : "30000"
  },
  {
    vehicle : "1000 CC (Vitz, Cultus, Passo, Swift, Shrade, Khyber, Santro, Picanto)",
    vehicleType : "Hatchback",
    multan : "35000",
    lahore : "36000",
    islamabad : "38000",
    peshawar : "40000",
    faisalabad : "3700",
    quetta : "33000"
  },
  {
    vehicle : "1300-1800CC SEDANS & Mini SUVs (Toyota Corolla, Honda City, Civic, Vezel, CHR, Fielder, Axio, Prius, Honda Grace, Aqua, Alsvin)",
    vehicleType : "Sedan",
    multan : "37000",
    lahore : "38000",
    islamabad : "40000",
    peshawar : "42000",
    faisalabad : "3800",
    quetta : "35000"
  },
  {
    vehicle : "1800CC+ & SUVs Crossovers (BMW X1, 3 Door Jeep, Tuscon, Sportage, MG HS) )",
    vehicleType : "Crossover",
    multan : "39000",
    lahore : "42000",
    islamabad : "44000",
    peshawar : "43000",
    faisalabad : "42000",
    quetta : "38000"
  },
]

let vehicleModel = [
  "Select Vehicle Model",
  "Model2",
  "Model3",
  "Model4",
  "Model5",
];
let vehicle = [
  "Select Vehicle",
  "vehicle2",
  "vehicle3",
  "vehicle4",
  "vehicle5",
];
let pickup = ["Lahore", "Karachi", "Islamabad", "Faisalabad", "Multan"];
let dropoff = ["Karachi", "Lahore", "Islamabad", "Faisalabad", "Multan"];
</script>
<style scoped>
h1 {
  font-size: 42px;
}

section {
  background: #feead2;
}
th{
  color: white;
  background: #04aa6d;
}
</style>
