

// // ---------------------------
// // 필름 프레임을 나타내는 배열
// const frames = ['popcony.png', 'popconb.png', 'popcony.png', 'popconb.png'];
// let currentFrame = 0;

// // 필름을 돌리는 함수
// function rotatePopcorns() {
//   // 현재 프레임을 화면에 표시
//   document.getElementById('popcorn1').src = frames[currentFrame];

//   // 다음 프레임으로 이동
//   currentFrame++;
//   if (currentFrame >= frames.length) currentFrame = 0;

//   // 일정 시간마다 함수를 반복 호출
//   setTimeout(rotateFilm, 100);
// }

// // 애니메이션 시작
// rotatePopcorns();


// window.onscroll = function() {
//     scrollFunction();
//   };

//   function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//       document.getElementById("gotop").style.display = "block";
//     } else {
//       document.getElementById("gotop").style.display = "none";
//     }
//   }

//   document.getElementById('gotop').addEventListener('click', function(){
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
//   });


document.addEventListener('DOMContentLoaded', function () {
  // 구글 아이콘 클릭 시 hidden 클래스 제거
  document.querySelector('.google').addEventListener('click', function (event) {
    event.preventDefault(); // 기본 동작 방지 (링크 이동 X)
    // hidden 클래스를 가진 요소를 모두 순회하며 hidden 클래스 제거
    document.querySelectorAll('.sns-box li.hidden').forEach(function (item) {
      item.classList.remove('hidden');
    });
  });

  document.querySelectorAll('.sns-box li:not(:first-child)').forEach(function(item) {
    item.addEventListener('click', function() {
        // 첫 번째 li 제외하고 모든 li 요소에 hidden 클래스 추가
        document.querySelectorAll('.sns-box li:not(:first-child)').forEach(function(otherItem) {
            otherItem.classList.add('hidden');
        });
      });
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const slateTop = document.querySelector('.my-works1');
  
    function clapSlate() {
      slateTop.style.transform = 'rotate(0deg)';
  
      setTimeout(() => {
        slateTop.style.transform = 'rotate(8deg)';
      }, 500); // 0.5초 후 원래 위치로 돌아옴
    }
  
    // 일정 시간마다 clapSlate 함수 실행
    setInterval(clapSlate, 2000); // 2초마다 슬레이트 치기
  });
