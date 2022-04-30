export default [
	new Game(0, "Geometry Dash", "https://github.com/OhBeomho/firstvue/blob/master/src/assets/Geometry%20Dash.png?raw=true", `스웨덴 국적인 로버트 토팔라 RobTop(Robert Topala)이 운영중인 1인 회사 RobTopGames에서 2013년 8월 13일에 출시한 iOS, Android, Windows Phone용 리듬 기반 액션 플랫포밍 유료 게임.`, 4400),
	new Game(1, "Roblox", "https://github.com/OhBeomho/firstvue/blob/master/src/assets/Roblox.png?raw=true", `2004년 데이비드 바수츠키와 에릭 카셀(Erik Cassel)이 설립한 Roblox Corporation에서 만든 메타버스 게임 플랫폼. 사용자들이 직접 게임을 만들고, 플레이할 수 있다. 그래서 로블록스 자체는 게임보다는 플랫폼에 가깝다.`, 4400),
	new Game(2, "Geometry Dash", "https://github.com/OhBeomho/firstvue/blob/master/src/assets/Minecraft.png?raw=true", `Mojang(모장) 스튜디오에서 2009년 처음 발매한 샌드박스 형식의 비디오 게임. 이름처럼 채광(Mine)과 제작(Craft)을 하는 게임으로 흔히 알려져 있다.`, 4400)
];

function Game(id, name, image, content, price) {
	this.id = id;
	this.name = name;
	this.image = image;
	this.content = content;
	this.price = price;
}