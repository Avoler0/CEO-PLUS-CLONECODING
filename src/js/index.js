
const main = document.createElement('div');
main.id = 'main'

const mainWrap = document.createElement('div');
mainWrap.className = 'main-wrap'

const mainTop = document.createElement('div');
mainTop.className = 'main-top'

const mbIcon = document.createElement('div');
mbIcon.className = 'mobile-icon-box';
const mbIconUl = document.createElement('ul');

[0,1,2,3].forEach((num)=>{
  const li = document.createElement('li');
  li.className = `${num}-item`;
  const a = document.createElement('a');
  const div = document.createElement('div');
  const span1 = document.createElement('span');
  const span2 = document.createElement('span');

  div.appendChild(span1)
  div.appendChild(span2)
  a.appendChild(div)
  li.appendChild(a)
  mbIconUl.appendChild(li);
})

mbIcon.appendChild(mbIconUl);

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
  mainRightContent.appendChild(magazineCard())
  mainRightContent.appendChild(magazineCard())
  mainRightContent.appendChild(magazineCard())
  return mainRight;
}

function mainBottomCreate(){
  const mainBottom = document.createElement('div');
  mainBottom.className = 'main-content main-bottom';
  const mainBottomTitle = document.createElement('h2');
  mainBottomTitle.innerHTML = '최신글';
  const mainBottomContent = document.createElement('div');
  mainBottomContent.className = 'bottom-container';

  const mainBottomGrid = document.createElement('div');
  mainBottomGrid.className = 'post-grid';
  const grid = [0,1,2,3,4].map(()=>{
    const div = document.createElement('div');
    div.className = 'post-columns';
    return div;
  })

  function postLargeCard(){
    const postWrap = document.createElement('div');
    postWrap.className = 'post-wrap';

    const postTop = document.createElement('div');
    postTop.className = 'post-top'

    const write = document.createElement('div');
    write.className = 'card-write-title';
    const category = document.createElement('div');
    category.className = 'card-category-title';

    write.innerHTML = '내소식 쓰기';
    category.innerHTML = '언론 출판 미디어';
    postTop.appendChild(write);
    postTop.appendChild(category);

    const postCard = document.createElement('div');
    postCard.className = 'post-card';

    const cardImg = document.createElement('div');
    cardImg.className = 'card-img-wrap';
    const img = document.createElement('img');
    img.className = 'card-img';
    img.src = 'https://myceoplus.com/uploads/1685924264.jpg';
    cardImg.appendChild(img);
    const cardWrap = document.createElement('div');
    cardWrap.className = 'card-wrap'
    const cardHead = document.createElement('div');
    cardHead.className = 'card-head';
    const cardContent = document.createElement('div');
    cardContent.className = 'card-content';
    const contentHead = document.createElement('h4');
    contentHead.innerHTML = '펄스 서베이 진행중'
    cardContent.appendChild(contentHead)
    const contentText = document.createElement('p')
    contentText.innerText = '현재 진행중인 서베이 투표바랍니다.회사 성장 시키기 의한 노력~~~'
    cardContent.appendChild(contentText)
    const cardFoot = document.createElement('div');
    cardFoot.className = 'card-foot';
    const postLike = document.createElement('div');
    postLike.className = 'post-like';
    postLike.innerHTML = '1';
    const postView = document.createElement('div');
    postView.className = 'post-view';
    postView.innerHTML = '45'
    const postComment = document.createElement('div');
    postComment.className = 'post-comment';
    postComment.innerHTML = '1'

    cardFoot.appendChild(postLike)
    cardFoot.appendChild(postView)
    cardFoot.appendChild(postComment)

    cardWrap.appendChild(cardHead)
    cardWrap.appendChild(cardContent)
    cardWrap.appendChild(cardFoot)

    postCard.appendChild(cardImg)
    postCard.appendChild(cardWrap)
    
    postWrap.appendChild(postTop);
    postWrap.appendChild(postCard);
    
    return postWrap;
  }

  function postSmallCard(){
    const postWrap = document.createElement('div');
    postWrap.className = 'post-wrap small';

    const postTop = document.createElement('div');
    postTop.className = 'post-top'

    const write = document.createElement('div');
    write.className = 'card-write-title';
    const category = document.createElement('div');
    category.className = 'card-category-title';

    write.innerHTML = '내소식 쓰기';
    category.innerHTML = '언론 출판 미디어';
    postTop.appendChild(write);
    postTop.appendChild(category);

    const postCard = document.createElement('div');
    postCard.className = 'post-card';

    const cardImg = document.createElement('div');
    cardImg.className = 'card-img-wrap';
    const img = document.createElement('img');
    img.className = 'card-img';
    img.src = 'https://myceoplus.com/uploads/background/sunset.png';
    cardImg.appendChild(img);
    const cardWrap = document.createElement('div');
    cardWrap.className = 'card-wrap'
    const cardHead = document.createElement('div');
    cardHead.className = 'card-head';
    const cardContent = document.createElement('div');
    cardContent.className = 'card-content';
    const contentHead = document.createElement('h4');
    contentHead.innerHTML = '펄스 서베이 진행중'
    cardContent.appendChild(contentHead)
    const contentText = document.createElement('p')
    contentText.innerText = '현재 진행중인 서베이 투표바랍니다.회사 성장 시키기 의한 노력~~~'
    cardContent.appendChild(contentText)
    const cardFoot = document.createElement('div');
    cardFoot.className = 'card-foot';
    const postLike = document.createElement('div');
    postLike.className = 'post-like';
    postLike.innerHTML = '1';
    const postView = document.createElement('div');
    postView.className = 'post-view';
    postView.innerHTML = '45'
    const postComment = document.createElement('div');
    postComment.className = 'post-comment';
    postComment.innerHTML = '1'

    cardFoot.appendChild(postLike)
    cardFoot.appendChild(postView)
    cardFoot.appendChild(postComment)

    cardWrap.appendChild(cardHead)
    cardWrap.appendChild(cardContent)
    cardWrap.appendChild(cardFoot)

    postCard.appendChild(cardImg)
    postCard.appendChild(cardWrap)
    
    postWrap.appendChild(postTop);
    postWrap.appendChild(postCard);
    
    return postWrap;
  }

  grid.forEach((div,index)=>{
    let bool = 0;
    bool = index % 2;
    [0,1,2,3,4].forEach(()=>{
      if(bool === 0){
        div.appendChild(postLargeCard())
        bool = 1;
      }else{
        div.appendChild(postSmallCard())
        bool = 0;
      }
    })
    
    mainBottomGrid.appendChild(div);
  })

  

  console.log(grid)
  mainBottomContent.appendChild(mainBottomGrid)
  mainBottom.appendChild(mainBottomTitle);
  mainBottom.appendChild(mainBottomContent);
  return mainBottom;
}

mainTop.appendChild(mainLeftCreate());
mainTop.appendChild(mainRightCreate());
mainWrap.appendChild(mainTop);
mainWrap.appendChild(mbIcon);
mainWrap.appendChild(mainBottomCreate());
main.appendChild(mainWrap);

const app = document.querySelector('#app')

app.appendChild(main)