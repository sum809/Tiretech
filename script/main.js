const header = document.querySelector('#header_container')
const nav = document.querySelector('.navList')
const mainBtn = document.querySelectorAll('.navList > li > a.mainBtn')

// 데스크탑 - 서브메뉴 열림
nav.addEventListener('mouseenter', ()=>{
  if(window.innerWidth > 1169) {
    header.classList.add('menuOpen')
  }
})
header.addEventListener('mouseleave', ()=>{
  if(window.innerWidth > 1169) {
    header.classList.remove('menuOpen')
  }
})

// 모바일 - 서브메뉴 열림
mainBtn.forEach(btn => {
  btn.addEventListener('click', function(e){
    if(window.innerWidth < 1170){
      e.preventDefault();

      const li = this.parentElement;  // 클릭한 메인메뉴a의 부모 li
      
      if (li.classList.contains('on')){  //이미 열려있으면 닫아줌
        li.classList.remove('on')
      } else { 
        // 다른 열려있는 메뉴 다 닫음
        document.querySelectorAll('.navList > li').forEach(item => {
          item.classList.remove('on')
        })
        li.classList.add('on')  // 현재 클릭한 메뉴 열기
      } 
    }
  })
})

// 모바일 - trigger버튼 클릭
document.querySelector('.trigger').addEventListener('click',function(){
  document.querySelector('header').classList.toggle('open')
})




// 화면 내의 모든 가상 링크 클릭시 스크롤 막아줌
document.querySelectorAll('a').forEach(anchor => {
  anchor.addEventListener('click',function(e){
    const href = this.getAttribute('href')    
    if( href === '#'){
      e.preventDefault()
    }
  })
})

