// TreasureMap API 代码
class TreasureMap {
  // ... (API methods as provided above)
}

// 寻宝过程
function findTreasureWithPromises() {
  TreasureMap.getInitialClue()
    .then(clue => {
      updateGameContent(clue);
      return TreasureMap.decodeAncientScript(clue);
    })
    .then(location => {
      updateGameContent(location);
      return TreasureMap.searchTemple(location);
    })
    .then(box => {
      updateGameContent(box);
      return TreasureMap.openTreasureBox();
    })
    .then(treasure => {
      updateGameContent(treasure);
    })
    .catch(error => {
      updateGameContent("任务失败: " + error);
    });
}

// 在页面加载时开始游戏
window.onload = findTreasureWithPromises;

// 更新游戏内容的函数
function updateGameContent(message) {
  const gameContentElement = document.getElementById('gameContent');
  gameContentElement.innerHTML += `<p>${message}</p>`;
}