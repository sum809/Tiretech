// more버튼을 누르면 sns내용이 더 보임
document.querySelector('.moreBtn').addEventListener('click',function(){
  document.querySelector('.itemWrap2').style.display = 'block';
  document.querySelector('.more').style.display = 'none';
})



const popup = document.querySelector('#popup');
const checkbox = document.querySelector('#popup input[type="checkbox"]');
const closeBtn = document.querySelector('.popup_close');

// 오늘 하루 열지 않기 체크 여부 확인
const today = new Date().toDateString();

if (localStorage.getItem('popupDate') !== today) {
  popup.style.display = 'flex';
} else {
  popup.style.display = 'none';
}

// 닫기 버튼
closeBtn.addEventListener('click', function(e) {
  e.preventDefault();

  // 체크박스가 체크되어 있다면 오늘 날짜 저장
  if (checkbox.checked) {
    localStorage.setItem('popupDate', today);
  }

  popup.style.display = 'none';
});

/* 프롬프트 내용
  웹페이지의 메인 페이지의 팝업창 부분이야 
  위의 html문서에서 label부분을 클릭하면, 
  오늘 하루 위 팝업 창이 열리지 않는 자바 스크립트를 짜줘
*/