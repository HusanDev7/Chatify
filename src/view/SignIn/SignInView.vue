  <script setup>
  import PrimaryButton from "@/components/Buttons/PrimaryButton.vue/PrimaryButton.vue";

</script>
<template>
  <div class="container">
    <div class="signUp">
      <img src="@/assets//img/logo.svg" alt="">
      <h2 class="signUp__title">Sign in to your Account</h2>
      <!-- form start -->
      <form>
        <div class="signUp__box">
          <div class="signUp__box-mini">
            <p class="signUp__txt">Email adress</p>
            <input class="signUp__inp" type="text" placeholder="Email adress" required>
          </div>
        </div>
        <div class="signUp__box">
          <div class="signUp__box-mini">
            <p class="signUp__txt">Password</p>
            <input class="signUp__inp" type="text" placeholder="Password" required>
          </div>
        </div>
        <div class="signUp__remember">
          <input class="signUp__check" type="checkbox">
          <span class="signUp__rem">Remember me</span>
        </div>

        <PrimaryButton title="Sign up" class="signUp__btn" />
      </form>
    </div>
  </div>
</template>

