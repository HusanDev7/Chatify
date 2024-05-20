<script setup>
import PrimaryButton from "@/components/Buttons/PrimaryButton.vue/PrimaryButton.vue"
</script>
<template>
  <div class="container">
    <div class="welcome">
      <img src="@/assets/img/logo.svg" alt="">
      <div class="welcome__box">
        <h2 class="welcome__title">Welcome to Chatify</h2>
        <p class="welcome__txt">Read our <span>Privacy Policy.</span> Tap “Agree and Continue” to accept <span>Terms of
            Services.</span></p>
        <RouterLink to="/auth" class="welcome__link">
          <PrimaryButton class="welcome__btn" title="Agree and Continue" />
        </RouterLink>
      </div>
    </div>
  </div>
</template>
