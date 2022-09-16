<script setup lang="ts">
import menuData from './../assets/menu.json';
</script>

<template>
  <div
    id="sideMenuContainer"
    :class="{ transitionRight: true, transitionLeft: !true }"
    style="display: block"
  >
    <ul class="sideMainMenu">
      <!-- eslint-disable-next-line prettier/prettier -->
      <li
        v-for="level1Item in menuData"
        :key="level1Item.seqNo"
        :class="{ select: true, withSubMenu: level1Item.subMenu.length !== 0 }"
      >
        <a v-if="level1Item.subMenu.length === 0">{{ level1Item.name }}</a>
        <div v-else>{{ level1Item.name }}</div>
        <ul v-if="level1Item.subMenu.length !== 0" class="sideSubMenu">
          <li
            v-for="level2Item in level1Item.subMenu"
            :key="level2Item.seqNo"
            :class="{ select: false }"
            href="#"
          >
            <a>{{ level2Item.name }}</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style scoped>
/*=== Side Menu ===*/
#sideMenuContainer {
  padding-top: 60px; /* Nav height */
  width: 220px;
  height: calc(100% - 60px);
  background: #fff;
  z-index: 99;
  position: fixed;
  left: -220px;
  top: 0;
  overflow-y: auto;
  box-shadow: 0px 0px 5px 4px rgba(0, 0, 0, 0.1);
  display: none;
}
ul.sideMainMenu {
  padding: 15px 15px 0;
}
ul.sideMainMenu li {
  padding: 12px 0;
  display: block;
}
ul.sideMainMenu li a,
ul.sideMainMenu > li.withSubMenu {
  display: block;
  font-size: 18px;
  color: #3c4c5e;
  opacity: 0.9;
  padding-left: 10px;
  cursor: pointer;
}
ul.sideMainMenu li a:hover,
ul.sideMainMenu li.withSubMenu:hover,
ul.sideSubMenu li a:hover {
  opacity: 1;
  font-weight: bold;
}
ul.sideMainMenu li.select > a {
  color: #45b29d;
  font-weight: bold;
  opacity: 1;
  border-left: 3px solid #45b29d;
}
/*=== With Sub Menu ===*/
ul.sideMainMenu li.withSubMenu.select {
  font-weight: bold;
  opacity: 1;
  border-top: 1px solid #cecece;
  border-bottom: 1px solid #cecece;
}
ul.sideSubMenu {
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition: all 0.2s;
  -moz-transition: all 0.2s;
  -ms-transition: all 0.2s;
  -o-transition: all 0.2s;
}
li.withSubMenu.select ul.sideSubMenu {
  margin-top: 12px;
  max-height: 100%;
  opacity: 1;
  transition: all 0.2s;
  -moz-transition: all 0.2s;
  -ms-transition: all 0.2s;
  -o-transition: all 0.2s;
}
ul.sideSubMenu li a {
  display: block;
  font-size: 16px;
  font-weight: normal;
}

@media screen and (max-width: 1366px) {
  #sideMenuContainer {
    width: 180px;
  }
  ul.sideMainMenu {
    padding: 15px 15px 0;
  }
  ul.sideMainMenu li {
    padding: 10px 0;
  }
  ul.sideMainMenu li a,
  ul.sideMainMenu > li.withSubMenu {
    font-size: 16px;
    padding-left: 6px;
  }

  li.withSubMenu.select ul.sideSubMenu {
    margin-top: 10px;
  }
  ul.sideSubMenu li a {
    font-size: 15px;
  }
}

/*=== Menu Animate ===*/
.transitionRight {
  animation: moveRight 0.3s linear;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}

@keyframes moveRight {
  0% {
    left: -220px;
  }
  100% {
    left: 0px;
  }
}

.transitionLeft {
  animation: transitionLeft 0.3s linear;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}

@keyframes transitionLeft {
  0% {
    left: 0px;
  }
  100% {
    left: -220px;
  }
}
</style>
