<template>
  <div class="footer pt-md-14">
    <v-container>
      <v-row justify="space-between" class="bg-#444343">
        <v-col class="px-10 mt-2" cols="6" sm="3"><v-img width="100vh" src="@/assets/footer.png"></v-img></v-col>
        <v-col cols="12" sm="2">
          <h2 class="font-weight-regular text-left">Quick Links</h2>
          <p><a href="">Shipper App</a></p>
          <p><a href="">Driver App</a></p>
          <p><a href="">Carrier App</a></p>
          <p><a href="">Benefits</a></p>
          <p><a href="">Rates</a></p>
          <p><a href="">Truck Locations</a></p>
        </v-col>
        <v-col cols="12" sm="2">
          <h2 class="font-weight-regular">Services</h2>
          <h3 class="font-weight-regular my-3"><a href="">Book A Truck</a></h3>
          <h3 class="font-weight-regular my-3"><a href="">Office/Home Move</a></h3>
          <h3 class="font-weight-regular my-3"><a href="">Car Moving Services</a></h3>
          <h2 class="font-weight-regular my-4">Tools</h2>
          <h3 class="font-weight-regular my-3"><a href="">Volume Calculator</a></h3>
        </v-col>
        <v-col cols="12" sm="2">
          <h2 class="font-weight-regular">Address</h2>
          <p class="font-weight-regular text-white">
            Truckload Pvt Ltd Plot #3, Sabzazar Truck stand, Near Babu Sabu,
            Lahore 54782
          </p>
        </v-col>
        <v-col cols="12" sm="3">
          <h2 class="font-weight-regular">Soical Media Links</h2>
          <v-icon class="text-white mt-3" size="6vh" icon="mdi-google-play" />
          <v-icon class="text-white mt-3 mx-4" size="6vh" icon="mdi-facebook" />
          <v-icon class="text-white mt-3" size="6vh" icon="mdi-twitter" />
          <h3 class="font-weight-regular mt-16"><a href="">Terms of Services</a></h3>
          <h3 class="font-weight-regular"><a href="">Privacy Policy</a></h3>
        </v-col>
        <p class="font-weight-regular mx-auto text-white">
          © 2021 by Truckload.pk
        </p>
      </v-row>
    </v-container>
  </div>
</template>
<script setup>
</script>
<style scoped>
.footer {
  background: #3A3A3A;
}
p {
  margin-top: 1.5vh;
}
h2{
  color: #bbbbbb;
}
</style>
