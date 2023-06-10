
const htmlElement = document.querySelector('html');

function navInit(){
  const nav = document.createElement('nav');
  nav.id = 'mainnav';
  nav.className = htmlElement.classList.value === 'light' ? 'nav-light' : 'nav-dark';
  const navbar = document.createElement('div');
  navbar.className = 'navbar'
  const navbarLeft = document.createElement('div');
  navbarLeft.className = 'navbar-left';

  const navbarRight = document.createElement('ul');
  navbarRight.className = 'navbar-right';

  

  const mobileMenu = document.createElement('div');
  const toggle = document.createElement('button');
  const toggleIcon = document.createElement('span');

  toggle.className = 'navbar-toggle';
  toggleIcon.className = 'navbar-toggle-icon';
  mobileMenu.className = 'mobile-menu';
  toggle.appendChild(toggleIcon);
  mobileMenu.appendChild(toggle);

  navbar.appendChild(mobileMenu);
  navbar.appendChild(navbarLeft);
  navbar.appendChild(navbarRight);
  nav.appendChild(navbar)

  function logoSet(){
    const logo = document.createElement('a');
    logo.className = 'navbar-logo';

    const logoImage = document.createElement("img");
    logoImage.className = 'logo-image';
    logoImage.src = htmlElement.classList.value === 'light' ? 'https://myceoplus.com/images/ceo_plus_logo-light.png' : 'https://myceoplus.com/images/ceo_plus_logo.png';
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
    const mobileTheme = document.createElement("div");
    const theme = document.createElement("li");
    const themeBtnLight = document.createElement("button");
    const themeBtnDark = document.createElement("button");

    mobileTheme.className = 'navbar-theme'
    theme.className = 'nav-item theme'

    themeBtnLight.className = 'nav-icon light'
    themeBtnDark.className = 'nav-icon dark'


    themeBtnLight.style.backgroundImage = "url('https://myceoplus.com/images/theme_light.png')"
    themeBtnDark.style.backgroundImage = "url('https://myceoplus.com/images/theme_dark.png')"

    const mbBtnLight = themeBtnLight.cloneNode(true);
    const mbBtnDark = themeBtnDark.cloneNode(true);

    theme.appendChild(themeBtnLight)
    theme.appendChild(themeBtnDark)
    mobileTheme.appendChild(mbBtnLight)
    mobileTheme.appendChild(mbBtnDark)

    navbarRight.appendChild(theme)
    mobileMenu.appendChild(mobileTheme)
    
    const search = document.createElement("li");
    const searchDiv = document.createElement('div');
    const searchA = document.createElement("a");

    search.className = 'nav-item search'
    searchA.className = 'nav-link nav-icon search'
    searchA.style.backgroundImage = htmlElement.classList.value === 'light' ?  "url('https://myceoplus.com/images/search_light.png')" : "url('https://myceoplus.com/images/search_dark.png')";
    
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

    function themeBtnHandler(){
      const logo = document.querySelector('.navbar-logo .logo-image')
      if(htmlElement.classList.value === 'light'){
        htmlElement.className = 'dark'
        nav.className = 'nav-dark'
        mbBtnLight.style.display = 'none';
        mbBtnDark.style.display = 'block';
        themeBtnLight.style.display = 'none';
        themeBtnDark.style.display = 'block';
        searchA.style.backgroundImage = "url('https://myceoplus.com/images/search_dark.png')";
        logo.src = 'https://myceoplus.com/images/ceo_plus_logo.png';
      }else if(htmlElement.classList.value === 'dark'){
        htmlElement.className = 'light'
        nav.className = 'nav-light'
        mbBtnDark.style.display = 'none';
        mbBtnLight.style.display = 'block';
        themeBtnDark.style.display = 'none';
        themeBtnLight.style.display = 'block';
        searchA.style.backgroundImage = "url('https://myceoplus.com/images/search_light.png')";
        logo.src = 'https://myceoplus.com/images/ceo_plus_logo-light.png';
      }else{
        return;
      }
    }
    mbBtnLight.addEventListener('click',()=> themeBtnHandler());
    mbBtnDark.addEventListener('click',()=> themeBtnHandler());
    themeBtnLight.addEventListener('click',()=> themeBtnHandler());
    themeBtnDark.addEventListener('click',()=> themeBtnHandler());
    navbarRight.appendChild(user)
  }
  logoSet();
  navLeftItems();
  navRightItems();

  return nav;
}

document.body.appendChild(navInit())