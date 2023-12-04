<template>
  <div class="ifrm">
    <iframe
      class="h-100 w-100"
      src="https://www.truckload.pk/site/demo.html"
      frameborder="0"
    ></iframe>
    <div  class="ifrm-btn d-md-flex">
      <v-btn elevation="10" class="d-block ml-6 mt-2" color="#d24243">Rates</v-btn>
      <v-btn elevation="10" class="d-block mx-md-4 mt-2" color="#d24243">TruckBoard</v-btn>
      <v-btn elevation="10" class="d-block ml-1 mt-2" color="#d24243">LoadBoard</v-btn>
    </div>
  </div>
  <v-sheet class="form mx-4 elevation-6">
    <div class="d-md-flex">
      <div class="flex-grow-1">
        <v-select
          :model-value="city[0]"
          :items="city"
          elevation="0"
          variant="solo"
        ></v-select>
      </div>
      <div class="flex-grow-1">
        <v-text-field
          variant="solo"
          placeholder="Pickup Address"
        ></v-text-field>
      </div>
      <div class="flex-grow-1">
        <v-text-field
          variant="solo"
          placeholder="Dropoff Address"
        ></v-text-field>
      </div>
      <div class="flex-grow-1">
        <v-select
          :model-value="requirements[0]"
          :items="requirements"
          elevation="0"
          variant="solo"
        ></v-select>
      </div>
      <div class="flex-grow-1">
        <v-select
          :model-value="truckType[0]"
          :items="truckType"
          elevation="0"
          variant="solo"
        ></v-select>
      </div>
      <div class="flex-grow-1">
        <v-select
          :model-value="typeLoad[0]"
          :items="typeLoad"
          elevation="0"
          variant="solo"
        ></v-select>
      </div>
    </div>
    <div class="text-center">
      <v-btn color="#13a011" size="x-large" class="mx-auto">Book</v-btn>
    </div>
  </v-sheet>

</template>
<script setup>
let city = ["Lahore", "Karachi", "Faisalabad", "Other"];
let requirements = ["Requirements", "Business", "personal"];
let truckType = ["Truck Type", "Type1", "Type2", "Type3"];
let typeLoad = ["Type of Load", "Type1", "Type2", "Type3"];
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&family=Titillium+Web:wght@100;200;400;500;600;700&display=swap");
* {
  font-family: "Titillium Web", sans-serif;
}
.ifrm {
  height: 95vh;
  width: 100vw;
  position: relative;
}
.ifrm-btn {
  position: absolute;
  top: 80%;
  left: 50%;
  transform:translate(-50%, -50%)
}
.v-text-field .v-input__details {
  padding-inline-start: unset !important;
  padding-inline-end: unset !important;
}
.v-input__details {
  grid-area: unset !important;
}
.v-col-6{
  padding: unset !important;
}
a {
  text-decoration: none;
  font-weight:500;
  color: white;
}
.form {
  position: relative;
  bottom: 8vh;
}
</style>
