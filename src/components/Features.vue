<template>
  <v-container>
    <v-row class="mb-16" justify="space-between">
      <v-col cols="12" sm="6">
        <v-row justify="space-between">
          <v-col cols="1" class="mt-16 px-1">
            <span class="count"> 1 </span>
          </v-col>
          <v-col cols="11">
            <h2 class="font-weight-bold">Select a required service</h2>
            <p>
              Choose the required Logistics Service that you need, provide all
              the relevant details of the cargo you want to get transported
              along with the Payment details
            </p>
            <h3 class="mt-6">Download the Truckload Shippers' app now</h3>
            <v-img
              src="@/assets/StoreBtn.png"
              height="15vh"
              width="40vh"
              alt="Get it on google play"
            ></v-img>
          </v-col>
        </v-row>
        <v-row justify="space-between">
          <v-divider class="mt-16 mb-10"></v-divider>
          <v-col class="mt-16 px-1" cols="1">
            <span class="count"> 2 </span>
          </v-col>
          <v-col cols="11">
            <h2 class="font-weight-bold">Mobilization</h2>
            <p class="mb-16">
              A verified Truck and driver will be mobilized to execute your
              order as soon as you accept the quoted price. Our verified
              partners will ensure that your goods are transported safely to the
              destination. We will provide live vehicle tracking on regular
              intervals through our Shippers' MOBILE APP
            </p>
          </v-col>
        </v-row>
        <v-row justify="space-between">
          <v-divider class="mt-16 mb-10"></v-divider>
          <v-col cols="1" class="mt-16 px-1">
            <span class="count"> 3 </span>
          </v-col>
          <v-col cols="11">
            <h2 class="font-weight-bold">Payment Processing</h2>
            <p class="mb-16">
              Once your delivery is complete, You will be charged in accordance
              with the agreed payment terms, set at the beginning while you
              posted your order. Cash on Delivery(COD) facility available.
              However, for some deliveries 100% payment will be processed in
              advance. Please review our Terms & Conditions in detail.
            </p>
          </v-col>
        </v-row>
        <v-row justify="space-between">
          <v-divider class="mt-16 mb-10"></v-divider>
          <v-col cols="1" class="mt-16 px-1">
            <span class="count mt-5"> 4 </span>
          </v-col>
          <v-col cols="11">
            <h2 class="font-weight-bold">Rate your experience</h2>
            <p class="mb-16">
              Once your goods are delivered, please provide your valuable
              feedback and share your mini truck hire experience. We’d love to
              hear it!
            </p>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="6">
        <div class="mobile mx-auto mt-16">
          <div class="mobile2 mx-auto">
            <v-carousel height="100%" class="z" cycle hide-delimiters>
              <v-carousel-item
                src="https://www.truckload.pk/site/imgs/screenshots/s10.jpg"
                cover
              ></v-carousel-item>

              <v-carousel-item
                src="https://www.truckload.pk/site/imgs/screenshots/s11.jpg"
                cover
              ></v-carousel-item>

              <v-carousel-item
                src="https://www.truckload.pk/site/imgs/screenshots/s7.jpg"
                cover
              ></v-carousel-item>
              <v-carousel-item
                src="https://www.truckload.pk/site/imgs/screenshots/s8.jpg"
                cover
              ></v-carousel-item>

              <v-carousel-item
                src="https://www.truckload.pk/site/imgs/screenshots/s12.jpg"
                cover
              ></v-carousel-item>

              <v-carousel-item
                src="https://www.truckload.pk/site/imgs/screenshots/s13.jpg"
                cover
              ></v-carousel-item>
            </v-carousel>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
</script>
<style scoped>
.count {
  font-size: 64px;
  line-height: 48px;
  color: #bdbdbd;
  font-weight: 600;
}
p {
  font-weight: 600;
  margin-top: 10px;
}
.mobile {
  background: url(https://www.truckload.pk/site/imgs/iphone-mask1.png) no-repeat
    center center;
  background-size: 100% 100%;
  width: 302px;
  height: 600px;
  margin: 30;
  z-index: 999 !important;
}
.mobile2 {
  height: 93%;
  width: 86%;
  border-radius: 200px;
  margin-top: 20px;
}
.z{
  z-index: 200 !important;
}
</style>
