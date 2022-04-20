<template>
  <div class="black-bg" v-if="dialogVisible == true">
    <div class="white-bg">
      <h4 ref="dialogTitle">상세페이지</h4>
      <p ref="dialogContent">상세페이지 내용</p>
      <button @click="setDialogState(false)">닫기</button>
    </div>
  </div>

  <div class="menu">
    <a v-for="(menu, i) in menus" :key="i">{{ menu }}</a>
  </div>

  <div>
    <h1>Games</h1>
  </div>
  <div class="games">
    <div v-for="(game, i) in games" :key="i" class="game">
      <img :src="game.image" alt="Image">
      <h3 @click="setDialogState(game.name, '', true)">{{ game.name }}</h3>
      <p>가격: &#8361; {{ game.price }}</p>
      <button @click="report(i)">허위게임신고</button> <span>신고수: {{ game.report }}</span>
    </div>
  </div>
</template>

<script>
function GameObject(name, price, desc) {
  this.name = name;
  this.price = price;
  this.desc = desc;
  this.report = 0;
  this.image = require(`./assets/${name}.png`);
}

export default {
  name: 'App',
  data() {
    return {
      games: [
        new GameObject("Roblox", "free", ""),
        new GameObject("Geometry Dash", "4400", ""),
        new GameObject("Minecraft", "30000", "")
      ],
      menus: [ "Home", "Shop", "About" ],
      dialogVisible: false
    };
  },
  methods: {
    report(index) {
      this.games[index].report++;
    },
    setDialogState(title = "", content = "", visible) {
      this.$refs.dialogTitle.innerText = title;
      this.$refs.dialogContent.innerText = content;
      this.dialogVisible = visible;
    }
  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0px;
}

div {
  box-sizing: border-box;
}

.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 5px;
  padding: 20px;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}

.games {
  padding: 20px;
  align-items: center;
  justify-content: center;
}

.game {
  width: 80%;

  border-radius: 3px;
  background: lightgray;

  padding-bottom: 20px;
  padding-top: 20px;

  margin: auto;
  margin-bottom: 20px;

  justify-content: center;
  align-items: center;
}

.game img {
  width: 120px;
  border-radius: 10px;
}

button {
  background: darkslateblue;
  border: 0;
  border-radius: 5px;
  padding: 5px;
  color: white;
}

button:hover {
  background: rgb(96, 81, 192);
}

button:active {
  background: rgb(43, 31, 125);
}
</style>
