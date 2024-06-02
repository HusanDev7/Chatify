  <script setup>
  import PrimaryButton from "@/components/Buttons/PrimaryButton/PrimaryButton.vue";
  import { createUserWithEmailAndPassword } from "firebase/auth";
  import { auth } from '@/lib/firebase';
  import { ref } from "vue";
  import router from "@/router";


  const email = ref('');
  const password = ref('');

  const registered = (event) => {
    event.preventDefault()
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        const user = userCredential.user
        console.log(user);
        router.push('/users')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      })
  }

</script>
<template>
  <div class="container">
    <div class="signUp">
      <img src="@/assets//img/logo.svg" alt="">
      <h2 class="signUp__title">Sign up to your Account</h2>
      <!-- form start -->
      <form @submit="registered">
        <div class="signUp__box">
          <div class="signUp__box-mini">
            <p class="signUp__txt">Email adress</p>
            <input class="signUp__inp" type="email" placeholder="Email adress" required v-model="email">
          </div>
        </div>
        <div class="signUp__box">
          <div class="signUp__box-mini">
            <p class="signUp__txt">Password</p>
            <input class="signUp__inp" type="password" placeholder="Password" required v-model="password">
          </div>
        </div>
        <div class="signUp__remember">
          <input class="signUp__check" type="checkbox">
          <span class="signUp__rem">Remember me</span>
        </div>

        <PrimaryButton title="Sign up" class="signUp__btn" />

        <p class="signUp__did">Already have an Account?
          <RouterLink to="/sign-in" class="signUp__link">Sign in</RouterLink>
        </p>
      </form>
    </div>
  </div>
</template>

