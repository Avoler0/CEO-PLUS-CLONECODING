
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

  const ceoList = [
    {name:'김지연',category:'ICT정보통신(인프라, 소프트웨어, 서비스)'},
    {name:'Hans',category:'투자 및 벤처 창업 지원(R&D 및 금융 지원)'},
    {name:'링크밸류',category:'전문컨설팅 서비스(경영, 법률, 재무회계, 마케팅, 세무, 특허, 지식재산권)'},
    {name:'홍헌표코치',category:'언론 · 출판 · 미디어(온오프라인)'},
    {name:'나이스가이',category:'미래 전략산업(드론, 로봇, 가상현실, 인공지능, 바이오헬스, 첨단소재 등)'},
    {name:'마카오',category:'식품(식품 및 원료부자재 제조, 유통 관련 서비스)'},
    {name:'dkdjdh',category:'건설(시공, 자재부품 제조)'},
    {name:'싸부',category:'전문컨설팅 서비스(경영, 법률, 재무회계, 마케팅, 세무, 특허, 지식재산권)'},
    {name:'수오리',category:'교육 · 문화 · 예술 (콘텐츠, 디자인, 인테리어, 인프라)'},
    {name:'타짜',category:'ICT정보통신(인프라, 소프트웨어, 서비스)'},
    {name:'청천',category:'ICT정보통신(인프라, 소프트웨어, 서비스)'},
    {name:'Lisakim',category:'물류 · 도소매 · 유통(온오프라인 유통 및 관련 서비스)'}
  ]

  const mainLeftContentDiv = document.createElement('div');
  const mainLeftContent = document.createElement('ul');
  
  mainLeftContentDiv.appendChild(mainLeftContent)
  mainLeft.appendChild(mainLeftContentDiv);

  
  ceoList.forEach((data)=>{
    mainLeftContent.appendChild(ceoCard(data.name,data.category))
  })
  
  return mainLeft;
}
function ceoCard(name,category){
  const card = document.createElement('li');
  card.className = 'ceo-reco-card';

  const cardDiv = document.createElement('div');

  const cardIcon = document.createElement('img');
  cardIcon.className = 'card-profile-icon';

  const cardName = document.createElement('p');
  cardName.className = 'card-ceo-name';
  cardName.innerHTML = name;

  const cardCategory = document.createElement('p');
  cardCategory.className = 'card-ceo-category';
  cardCategory.innerHTML = category;

  const folowBtn = document.createElement('button');
  folowBtn.className = 'card-ceo-folow';
  folowBtn.innerHTML = '팔로우'

  card.appendChild(cardDiv);
  cardDiv.appendChild(cardIcon);
  cardDiv.appendChild(cardName);
  cardDiv.appendChild(cardCategory);
  cardDiv.appendChild(folowBtn);

  return card;
}

function mainRightCreate(){
  const mainRight = document.createElement('div');
  mainRight.className = 'main-content main-right'
  const mainRightTitle = document.createElement('h2');
  mainRightTitle.innerHTML = 'MAGAZINE';
  
  const mainRightContainer = document.createElement('div');
  mainRightContainer.className = 'right-container'

  const mainRightContent = document.createElement('ul');
  mainRightContainer.className = 'right-content'
  mainRightContainer.appendChild(mainRightContent)

  mainRight.appendChild(mainRightTitle);
  mainRightContainer.appendChild(mainRightContent);
  mainRight.appendChild(mainRightContainer);

  function magazineCard(){
    const magazine = document.createElement('li');
    magazine.className = 'magazine-card'

    const magazineWrap = document.createElement('a');
    magazineWrap.style.backgroundImage = "url('https://myceoplus.com/uploads/1684397357.jpg')";

    const topImg = document.createElement('div');
    topImg.className = 'card-top-img';
    const img = document.createElement('img');
    img.src = 'https://myceoplus.com/images/ceo_story_title.svg'
    topImg.appendChild(img);

    const content = document.createElement('div');
    content.className = 'card-content';

    const ceoComent = document.createElement('div');
    const h2 = document.createElement('h4');
    ceoComent.className = 'card-ceo-coment';
    h2.innerHTML = 'Symbol of Love';
    ceoComent.appendChild(h2)

    const bottomImg = document.createElement('div');
    bottomImg.className = 'card-bottom-img';
    const bacode = document.createElement('img');
    bacode.src = 'https://myceoplus.com/images/ceo_story_bacode.svg'
    bottomImg.appendChild(bacode);

    content.appendChild(ceoComent)
    content.appendChild(bottomImg)
    
    magazine.appendChild(magazineWrap);
    magazineWrap.appendChild(topImg)
    magazineWrap.appendChild(content)
    
    

    return magazine;
  }

  mainRightContent.appendChild(magazineCard());

  return mainRight;
}


mainWrap.appendChild(mainLeftCreate())
mainWrap.appendChild(mainRightCreate())

main.appendChild(mainWrap)

const app = document.querySelector('#app')

app.appendChild(main)