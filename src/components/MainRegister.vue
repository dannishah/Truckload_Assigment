<template>
  <div class="main">
    <v-container>
      <v-row justify="space-between">
        <v-col cols="6">
          <h1 class="text-white my-auto font-weight-regular">
            Plan your shipments in a lean fashion.
          </h1>
          {{ radios }}
        </v-col>
        <v-col cols="5">
          <v-card class="text-center pa-8">
            <h1 class="my-6">SIGN ME UP!</h1>
            <v-row>
              <v-col
                ><v-btn
                  @click="show = true"
                  color="#999999"
                  class="mt-6 my-3 w-100 h-100 elevation-0"
                  >shipper</v-btn
                ></v-col
              >
              <v-col
                ><v-btn
                  @click="show = false"
                  color="#33ad85"
                  class="mt-6 w-100 h-100 elevation-0 bg-green"
                  >carrier/broker</v-btn
                ></v-col
              >
            </v-row>
            <div class="mt-4" v-if="show">
              <v-radio-group class="mt-12 d-flex ml-8" v-model="radios">
                <v-radio
                  label="Corporate Customer"
                  color="primary"
                  value="Corporate Customer"
                  @click="radio = true"
                ></v-radio>
                <v-radio
                  label="Consumer"
                  color="primary"
                  value="Consumer"
                  @click="radio = false"
                ></v-radio>
              </v-radio-group>
              <div v-if="radio">
                <p class="font-weight-regular text-left text-h6">
                  Sign up from here only if you require Control Panel Access to
                  Manage your Shipments. Control Panel Access is only for
                  Corporate Customers. Truckload.pk will review your request
                  before Approval is Granted.
                </p>
                <v-text-field placeholder="EMAIL" variant="outlined" class="my-4"></v-text-field>
                <v-text-field placeholder="Full Name" variant="outlined" class="my-4"></v-text-field>
                <v-text-field type="number" placeholder="Enter Mobile Number" variant="outlined" class="my-4"></v-text-field>
                <v-text-field placeholder="Company Name" variant="outlined" class="my-4"></v-text-field>
                <v-btn class="elevation-0 bg-red px-16" size="x-large">submit</v-btn>
              </div>
              <div v-else>
                <v-img
                  class="w-75 mx-auto mb-2"
                  src="@/assets/StoreBtn.png"
                ></v-img>
                <p class="font-weight-regular text-h6">
                  Consumers shall sign up through Truckload Shippers App.
                  Download from Playstore and book your shipment instantly.
                </p>
              </div>
            </div>
            <div class="mt-4" v-else>
              <v-img
                class="w-75 mx-auto my-6"
                src="@/assets/StoreBtn.png"
              ></v-img>
              <p class="font-weight-regular text-h6">
                Carriers & Brokers shall sign up through Truckload
                Carrier/Broker App. Download from Playstore and haul your trucks
                with us.
              </p>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script setup>
import { ref } from "vue";
let show = ref(true);
let radio = ref(true);
let radios = ref("Corporate Customer");
</script>
<style scoped>
.main {
  background: url("") no-repeat center;
  background-size: cover;
  height: auto;
  background: green;
}
h1{
  font-size: 44px;
  line-height: 65px;
}
</style>
