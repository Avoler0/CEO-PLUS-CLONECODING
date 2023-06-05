
const htmlElement = document.querySelector('html');

const main = document.createElement('div');
main.id = 'main'

const mainWrap = document.createElement('div');
mainWrap.className = 'main-wrap'

function mainLeftCreate(){
  const mainLeft = document.createElement('div');
  mainLeft.className = 'main-content main-left'
  const mainLeftTitle = document.createElement('h2');
  mainLeftTitle.innerHTML = '오늘의 추천 CEO';

  mainLeft.appendChild(mainLeftTitle);

  return mainLeft;
}

function mainRightCreate(){
  const mainRight = document.createElement('div');
  mainRight.className = 'main-content main-right'
  const mainRightTitle = document.createElement('h2');
  mainRightTitle.innerHTML = 'MAGAZINE';

  mainRight.appendChild(mainRightTitle);

  return mainRight;
}


mainWrap.appendChild(mainLeftCreate())
mainWrap.appendChild(mainRightCreate())

main.appendChild(mainWrap)
document.body.appendChild(main)