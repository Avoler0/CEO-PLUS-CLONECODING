
function navInit(){
  const nav = document.createElement('nav');
  nav.id = 'mainnav';

  const navbar = document.createElement('div');
  navbar.className = 'navbar'
  const navbarLeft = document.createElement('div');
  navbarLeft.className = 'navbar-left';

  const navbarRight = document.createElement('ul');
  navbarRight.className = 'navbar-right';

  navbar.appendChild(navbarLeft);
  navbar.appendChild(navbarRight);
  nav.appendChild(navbar)

  function logoSet(){
    const logo = document.createElement('a');
    logo.className = 'navbar-logo';

    const logoImage = document.createElement("img");
    logoImage.className = 'logo-image';
    logoImage.src = 'https://myceoplus.com/images/ceo_plus_logo.png';

    logo.appendChild(logoImage);

    navbarLeft.appendChild(logo);
  }

  function navLeftItems() {
    const leftUl = document.createElement('ul')
    leftUl.id = 'gnb'
    const itemEn = ['My News','Promotion','Reference Check','Partner Ship','Talk','Lounge','Pulse Survey','Magazine','Top20'];
    const itemKr = ['내 소식 쓰기', '신상품홍보하기','인재레퍼런스체크/추천','협력업체추천받기','익명게시판','프리미엄 소통공간','투표','뉴스/인터뷰','인기글']
    const list = itemEn.map((en,index)=>{
    const itemLi = document.createElement("li");
    const aTag = document.createElement('a');
    const enSpan = document.createElement('span');
    const krSpan = document.createElement('span');

    
    itemLi.className = index;
    enSpan.className = 'nav-title-en'
    enSpan.innerHTML = en;
    krSpan.className = 'nav-title-kr'
    krSpan.innerHTML = itemKr[index];

    aTag.appendChild(enSpan);
    aTag.appendChild(krSpan);

    itemLi.appendChild(aTag);

    return itemLi;
  })

  list.forEach((item)=>{
    leftUl.appendChild(item)
  })

  navbarLeft.appendChild(leftUl)
}

  function navRightItems(){

    const theme = document.createElement("li");
    const themeBtn = document.createElement("button");
    theme.className = 'nav-item theme'
    themeBtn.classList.add('nav-icon')
    themeBtn.style.backgroundImage = "url('https://myceoplus.com/images/theme_dark.png')"
    theme.appendChild(themeBtn)

    navbarRight.appendChild(theme)
    const search = document.createElement("li");
    const searchDiv = document.createElement('div');
    const searchA = document.createElement("a");
    search.className = 'nav-item search'
    searchA.className = 'nav-link nav-icon search'
    searchA.style.backgroundImage = "url('https://myceoplus.com/images/search_dark.png')";
    
    searchDiv.appendChild(searchA)
    search.append(searchDiv)
    navbarRight.appendChild(search)

    const user = document.createElement("li");
    const userA = document.createElement("a");
    const userI = document.createElement("i");
    user.className = 'nav-item user'
    userA.className = 'nav-link'
    userI.className = 'material-symbols-outlined nav-icon'
    userI.innerText = 'account_circle'
    userA.appendChild(userI)
    user.append(userA)


    navbarRight.appendChild(user)
  }
  logoSet();
  navLeftItems();
  navRightItems();

  return nav;
}






document.body.appendChild(navInit())