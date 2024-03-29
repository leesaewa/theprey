# the prey 사전예약 페이지 리뉴얼
- 헝그리앱에 올라온 사전예약 페이지를 다시 코딩함.


## Link
- Javascript 붙이기 전
  <a href="http://swlee.pe.kr/smart/theprey/index.html">리뉴얼 전 페이지</a>
- <a href="https://leesaewa.github.io/theprey/">리뉴얼 후 페이지</a>


## Preview
<img src="https://user-images.githubusercontent.com/97646713/209971387-69bb009a-be11-4d99-aa3d-55e554fc3fda.png">

----
## 목적
1. 웹접근성, 웹표준 통과
2. jqeury가 아닌 순수한 vanilaJS만을 사용할 것
3. SCSS 여러 문법을 사용해볼 것
4. SEO 최적화를 위하여, 텍스트 기반으로 코딩할 것. -> 어쩔 수 없는 이미지만 이미지로 사용.
5. 버튼을 텍스트로 변경할 것
6. 반응형으로 코딩할 것

-----


## 기존 페이지와 달라진 점
1. 웹접근성, 웹표준 테스트 통과
2. 네비게이션과 푸터 등 이미지로 대체했던 텍스트를 텍스트로 전부 교체하여 수정이 용이해짐. (웹폰트 사용)
3. 버튼을 이미지가 아닌 CSS로 변경
4. slider, modal, header, scroll top 효과들을 vanilaJS로 구현함.
5. 적당한 애니메이션 효과를 사용하였음
6. 중요한 요소인 '카페'와 '헝그리앱' 아이콘은 모바일일 때, 하단으로 이동시켜 고정함.

------


## 신경쓴 점
- 캐릭터 소개
- `modal` 효과


------

## 아쉬운 점
- 이미지 사이즈가 커서 로딩에 시간이 소요됨. (배경 이미지, 캐릭터 소개 이미지)
- `background-image`대신 `img`로 사용해도 될 것은 교체해도 될 듯함.
