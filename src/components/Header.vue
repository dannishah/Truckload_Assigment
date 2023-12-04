<template>
  <v-container>
    <v-row class="justify-md-space-between" no-gutters>
      <v-col cols="6" md="4">
        <v-sheet class="pr-10 mb-2 pl-8">
          <span><v-img src="@/assets/logo.png"></v-img></span>
          <span class="font-weight-black text-sm-h6 mt-sm-4 pl-sm-2">Truck For Every Route</span>
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="mt-8 text-title d-none d-md-flex font-weight-bold">
          Pakistan's first online trucking marketplace,
          Book a verified Truck within minutes
        </v-sheet>
      </v-col>
      <v-col cols="6" md="4">
        <v-sheet>
          <div class="d-flex justify-end ml-8 mt-4 mr-10">
            <div>
              <v-icon size="35" class="mt-2" icon="mdi-cellphone"></v-icon>
            </div>
            <div class="font-weight-bold contact text-xs-h6">
              <span class="text-red">CALL US NOW</span
              ><br><span>0314-4456736</span>
            </div>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
  <v-layout>
    <v-toolbar density="comfortable" color="#d24243">
      <v-container>
        <v-btn @click="home">Home</v-btn>
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn append-icon="mdi-menu-down" elevation="0" v-bind="props"
              >Services</v-btn>
          </template>
          <v-list>
            <v-list-item>
              <a href="">services</a>
            </v-list-item>
            <v-list-item>
              <a href="">benefits</a>
            </v-list-item>
            <v-list-item>
              <a href="">spot rate</a>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn append-icon="mdi-menu-down" v-bind="props">Ecosystem</v-btn>
          </template>

          <v-list class="font-weight-bold">
            <v-list-item>
              <a href="">shipper app</a>
            </v-list-item>
            <v-list-item>
              <a href="">driver app</a>
            </v-list-item>
            <v-list-item>
              <a href="">carrier app</a>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn @click="bookTruck" >Book A Truck</v-btn>
        <v-btn>Relation Services</v-btn>
        <v-btn @click="carMoving">Car Moving</v-btn>
        <button
        class="bg-white px-lg-5 py-lg-2 py-1 mr-md-8 rounded float-right"
        @click="register"
        >Register</button>
      </v-container>
    </v-toolbar>
  </v-layout>
</template>

<script setup>
import { useRouter } from "vue-router"
let router = useRouter()

const register = () => {
  router.push({ name : "Register"})
}
const home = () => {
  router.push({ name : "Home"})
}
const bookTruck = () => {
  router.push({ name : "BookTruck"})
}
const carMoving = () => {
  router.push({ name : "CarMoving"})
}
</script>

<style scoped>
a {
  text-transform: uppercase !important;
  color: black !important;
}
a:hover {
  opacity: 0.5;
}
.contact{
  line-height: 25px;
}
</style>
