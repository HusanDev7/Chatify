import { defineStore } from 'pinia';
import { ref } from 'vue';
import { auth } from '@/lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: ref(null),
  }),
  actions: {
    async signIn(email, password) {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        this.user = userCredential.user;
      } catch (error) {
        console.error(error);
      }
    },
    async signOut() {
      try {
        await auth.signOut();
        this.user = null;
      } catch (error) {
        console.error(error);
      }
    },
    checkAuthState() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user = user;
        } else {
          this.user = null;
        }
      });
    }
  }
});
