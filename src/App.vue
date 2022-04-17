<template>
  <div class="menu">
    <a v-for="(menu, i) in menus" :key="i">{{ menu }}</a>
  </div>

  <div>
    <h1>Games</h1>
  </div>
  <div class="games">
    <div v-for="(game, i) in games" :key="i" class="game">
      <h3>{{ game.name }}</h3>
      <p>Price: &#8361; {{ game.price }}</p>
      <button @click="report(i)">허위게임신고</button> <span>신고수: {{ game.report }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      games: [
        {
          name: "Roblox",
          price: 0,
          report: 0
        },
        {
          name: "Geometry Dash",
          price: 4400,
          report: 0
        },
        {
          name: "Minecraft",
          price: 30000,
          report: 0
        }
      ],
      menus: [ "Home", "Shop", "About" ]
    };
  },
  methods: {
    report(index) {
      this.games[index].report++;
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
  padding-top: 2px;

  margin: auto;
  margin-bottom: 20px;

  justify-content: center;
  align-items: center;
}

.game button {
  background: darkslateblue;
  border: 0;
  border-radius: 5px;
  padding: 5px;
  color: white;
}

.game button:hover {
  background: rgb(96, 81, 192);
}

.game button:active {
  background: rgb(43, 31, 125);
}
</style>
