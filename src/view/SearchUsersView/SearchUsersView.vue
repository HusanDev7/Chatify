<script setup>
import { data } from "@/db";
import NullUsers from "@/components/nullUsers/NullUsers.vue";
import Profile from "@/components/profile/Profile.vue";
import { ref } from "vue";

const hours = ref("");
const minute = ref("");

const time = () => {
  const date = new Date();
  hours.value = date.getHours();
  minute.value = date.getMinutes();
};

setInterval(() => time(), 1000);

const chats = [
  { name: "Chats" },
  { name: "Groups" },
  { name: "Status" },
  { name: "Calls" },
];

const active = ref(0);

let dote = ref(false);
const toggleDote = () => {
  dote.value = !dote.value;
};

const toggle = (index) => {
  active.value = index;
};

</script>

<template>
  <div class="container">
    <div class="search-users">
      <div class="search-users-box">
        <h2 class="search-users-title">Chatify</h2>
      </div>
      <div class="search-users-box2">
        <img src="@/assets//img/search-logo.svg" alt="" />
        <img @click="toggleDote" src="@/assets/img/threeDote-logo.svg" alt="" />
      </div>
      <transition name="slide-fade">
        <Profile v-if="dote" :dote="dote" :toggleDote="toggleDote" />
      </transition>
    </div>

    <div class="sellect-chat">
      <ul class="sellect-chat-list">
        <li
          class="sellect-chat-list-item"
          @click="toggle(index)"
          :class="{ active: active === index }"
          v-for="(item, index) in chats"
          :key="item.name"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>

    <NullUsers v-if="data.length === 0" />

    <div class="users" v-else>
      <div class="users-item" v-for="item in data" :key="item.name">
        <img class="users-img" :src="item.img" alt="" />
        <h4 class="users-name">{{ item.user }}</h4>
        <div>
          <span class="users-time">{{ hours }}</span> :
          <span class="users-time">{{ minute }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
