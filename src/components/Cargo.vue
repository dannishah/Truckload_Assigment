<template>
  <v-container>
    <v-row class="mb-16">
      <v-col cols="12" md="6">
        <v-img cover height="100%" src="@/assets/cargo.png"></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <v-sheet elevation="10" class="pa-6 ml-3">
          <hr class="mt-4 mb-8" />
          <h1 class="h-100 mr-4">
            Not happy with traditional transporters for LCL Cargo handling!
          </h1>
          <h3 class="listColor font-weight-regular">
            Truckload offers following LCL services at affordable rates on
            Lahore Karachi Lane
          </h3>
          <h3 class="font-weight-regular">
            <v-list class="listColor" density="compact">
              <v-list-item>- Store to Store</v-list-item>
              <v-list-item>- Store to Store</v-list-item>
              <v-list-item>- Store to Door</v-list-item>
              <v-list-item
                >- Short & Long term Warehouse Storage Facility at Affordable
                rates</v-list-item
              >
            </v-list>
          </h3>
          <v-btn
            rounded="xl"
            class="text-transform-lowercase px-12 mt-4 mb-10"
            elevation="0"
            color="#FF3459"
            size="large"
            >Book Now</v-btn
          >
          <h1 class="h-100 line-height-60">
            No Interchange of LCL cargo on trucks during the delivery Process
          </h1>
        </v-sheet>
      </v-col>
    </v-row>
    <h1 class="text-center my-16 font-weight-black">What we offer</h1>
    <v-row justify="space-between">
      <v-col cols="12" sm="4" class="text-center">
        <v-avatar
          class="elevation-2 pa-10"
          image="@/assets/instant.png"
          size="180px"
        >
        </v-avatar>
        <h2 class="font-weight-bold my-4">INSTANT BOOKING</h2>
        <p class="font-weight-regular">
          Instant booking, Push your transportation request through our app and
          get a competitive quote within minutes
        </p>
      </v-col>
      <v-col cols="12" sm="4" class="text-center">
        <v-avatar
          class="elevation-2 py-10 pr-8 pl-12"
          image="@/assets/verified.png"
          size="180px"
        >
        </v-avatar>
        <h2 class="font-weight-bold my-4">VERIFIED TRUCKS & DRIVERS</h2>
        <p class="font-weight-regular">
          We source the trucks from verified sources to handle your Job orders.
        </p>
      </v-col>
      <v-col cols="12" sm="4" class="text-center">
        <v-avatar
          class="elevation-2 pa-10"
          image="@/assets/panel.png"
          size="180px"
        >
        </v-avatar>
        <h2 class="font-weight-bold my-4">CONTROL PANEL</h2>
        <p class="font-weight-regular">
          Web based Admin Panel access for the Enterprise customers for hassle
          free booking and management of transportation requests.
        </p>
      </v-col>
    </v-row>

    <h1 class="text-center my-16 font-weight-black">Customers</h1>
    <v-row justify="center" class="mb-10">
      <v-col cols="2"><v-img src="@/assets/metro.png"></v-img></v-col>
      <v-col cols="2"><v-img src="@/assets/gmp.png"></v-img></v-col>
      <v-col cols="2"><v-img src="@/assets/clicky.png"></v-img></v-col>
    </v-row>
  </v-container>
  <v-sheet color="#f1f3f4">
    <v-row class="text-center">
      <v-col>
       <p class="final mt-10">Still have questions about our Intracity Services?</p>
       <v-btn color="#d24243" size="x-large" class="px-10 my-5">Call Us Now</v-btn>
      </v-col>
    </v-row>
  </v-sheet>
</template>
<script setup>
</script>
<style scoped>
h1 {
  font-size: 38px;
  line-height: 50px;
  color: #323232;
  font-weight: 500;
}
.final{
  font-size: 200%;
  line-height: 36px;
  color: #343a40;
  font-weight: 500;
}
.listColor {
  color: #727b81;
}
hr {
  width: 45px;
  height: 4px;
  background: red;
}
.final{
  font-size: 30px;
  line-height: 36px;
  color: #343a40;
  font-weight: 500;
}
</style>

