  <script setup>
import { data } from "@/db";
import NullUsers from "@/components/nullUsers/NullUsers.vue";
import Profile from "@/components/profile/Profile.vue";
import { ref } from "vue";

const date = new Date();
const hours = date.getHours();
const minute = date.getMinutes();

const chats = [
  { name: "Chats" },
  { name: "Groups" },
  { name: "Status" },
  { name: "Calls" },
];

const active = ref(0);

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
        <img src="@/assets/img/threeDote-logo.svg" alt="" />
      </div>
      <Profile />
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
