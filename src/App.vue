<template>
  <div class="black-bg" v-if="dialog.visible == true">
    <div class="white-bg">
      <h4>{{ dialog.title }}</h4>
      <p>{{ dialog.content }}</p>
      <button @click="dialog.visible = false">닫기</button>
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
      <h3 @click="setDialogState(game.name, game.desc, true)">{{ game.name }}</h3>
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

function Dialog() {
  this.title = "";
  this.content = "";
  this.visible = false;
}

export default {
  name: 'App',
  data() {
    return {
      games: [
        new GameObject("Roblox", "free", `2004년 데이비드 바수츠키와 에릭 카셀(Erik Cassel)이 설립한 Roblox Corporation에서 만든 메타버스 게임 플랫폼.
        사용자들이 직접 게임을 만들고, 플레이할 수 있다.
        그래서 로블록스 자체는 게임보다는 플랫폼에 가깝다.`),
        new GameObject("Geometry Dash", "4400", `스웨덴 국적인 로버트 토팔라 RobTop(Robert Topala)이
        운영중인 1인 회사 RobTopGames에서 2013년 8월 13일에 출시한
        iOS, Android, Windows Phone용 리듬 기반 액션 플랫포밍 유료 게임.`),
        new GameObject("Minecraft", "30000", `Mojang(모장) 스튜디오에서 2009년 처음 발매한 샌드박스 형식의 비디오 게임.
        이름처럼 채광(Mine)과 제작(Craft)을 하는 게임으로 흔히 알려져 있다.`)
      ],
      menus: [ "Home", "Shop", "About" ],
      dialog: new Dialog()
    };
  },
  methods: {
    report: function(index) {
      this.games[index].report++;
    },
    setDialogState: function(title, content, visible) {
      this.dialog.title = title;
      this.dialog.content = content;
      this.dialog.visible = visible;
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
