# 🍆 Market Kurly Clone Project 🍇

대한민국의 신선식품 전문 온라인 쇼핑몰 [마켓컬리](https://www.kurly.com/shop/main/index.php)를 Clone한 프로젝트입니다. 

👇 Project Preview

<img src="/Kurlabo-Preview.gif" width="800" height="480"/>

[프로젝트 영상 보기](https://youtube.com/playlist?list=PLw4AQO2Dk2sSHVtuFktOa74IJas9GbkFn)

## 🏈 Getting Start!

```markdown
$ git clone "https://github.com/Kurlabo/frontend.git
$ npm install
$ npm run start
```

<br>

## 🗓 프로젝트 기간

2021.01.25 - 2021.02.26 (5주)

<br>

## 🎒 기술 스택

- HTML
- CSS
- JavaScript
- React
- Redux
- Redux-saga
- Tailwindcss
- Styled-components

<br>

## 🚀 서비스 기능

### 1. 메인 Header

- 전체 카테고리 메뉴 드롭다운 UI
- DAUM API를 이용하여 주소검색 기능
- 주소 변경 기능
- Session Storage를 이용하여 주소 set/get하여 배송가능한 주소 렌더링
- cookie를 이용하여 토큰 값 유지하면서 회원정보 GET

### 2. 메인 페이지

- 메인배너 Infinity Carousel 구현
  - 자동 넘기기 재생, 정지 버튼 구현
- 추천하는 상품 클릭시 각 상품별 세부정보 페이지로 이동
- 인스타그램 고객 후기 이미지 및 인스타그램 URL이동 구현
- 사이드 메뉴(최근 조회 상품) 스크롤링 이벤트

### 3. 상품 리스트

- 대분류, 소분류에 선택에 따른 이미지 렌더링
- 요청 가능한 페이지 갯수에 따른 페이지네이션
- Redux 사용하여 상품, 로딩, 에러에 대한 상태관리
- history.location을 사용하여 페이지 번호에 따라 다른 routing 처리
- 상품 클릭시 각 상품별 세부정보 페이지로 이동
- Original 마켓컬리 페이지에서 장바구니 모달창의 외부영역 클릭시 모달창이 닫히지 않는 접근성 issue 개선
- 장바구니 담기 기능

### 4. 장바구니페이지

- 각 상품 보관 타입별(냉장, 냉동, 상온) 상품 구분 및 렌더링
- 장바구니 내의 상품 수량 수정 및 상품 삭제 기능
- 주소검색 daum API 를 통한 주소 검색후 주소 정보 표시
- 장바구니 내의 선택된 상품에 따른 결제금액 변동 및 결제하기 버튼 활성화

### 5. 주문서

- 주문상품, 회원정보, 결제 정보에 대한 상태관리
- 주문 상품에 대한 가격, 수량, 이미지 렌더링
- 배송지 변경 모달창 구현

### 6. 상품 상세 페이지

- 상품 ID에 따라 해당 상품에 대한 상세 정보 렌더링
- 해당 카테고리의 연관 상품 Infinity Carousel 구현
- 상품 정보 Navigation탭 선택에 따라 상품 info영역 렌더링
- 스크롤 위치에 따라 하단 장바구니 옵션영역 활성화
- 개수 증가, 감소시 총 상품금액 정보 변경
  - 장바구니 옵션(count, price) state로 관리하여 설정한 옵션 상/하단 연동
- 장바구니에 담기 기능 구현 및 담기 결과 알림 말풍선 UI 활성화
- count 수 1미만일 경우 알림 모달창 구현
- 늘 사는 것 추가하기 기능 및 결과 모달창 구현

### 7. 고객센터 페이지

- navigation의 선택된 탭에 따른 내용 렌더링
- 공지사항의 글 클릭시 해당 글의 페이지로 이동 및 렌더링
- 자주하는 질문의 카테고리 선택 시 해당 카테고리의 글 목록 렌더링
- 1:1문의의 글쓰기 버튼 클릭 시 글쓰기 페이지로 이동

### 8. 마이페이지(마이컬리)

- 늘 사는 것 (찜목록) 장바구니 등록

<br>

## 📌 기타

- [컨벤션](https://github.com/Kurlabo/frontend/blob/develop/CONTRIBUTING.md)
- [와이어프레임](https://www.figma.com/file/9ZA0PoPDP14XQMiI8H1UBC/%EC%BB%AC%EB%9D%BC%EB%B3%B42)
- PPT
  - [기획](https://slides.com/lexkim/title-texttitle-text/)
  - [최종발표](https://www.canva.com/design/DAEXN4RB1Y4/1uDGkPk6x8qQH_xh8iSK0A/view?utm_content=DAEXN4RB1Y4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink)
- [프로젝트 영상 YouTube 보러가기](https://youtube.com/playlist?list=PLw4AQO2Dk2sSHVtuFktOa74IJas9GbkFn)

<br>

## 🧩 구성원 ✨

### 🧑‍💻 Front-end

<table>
<tr>
<td align="center">
<a href="https://github.com/nr-baek"><img align="center" width="50" height="50" src="https://avatars.githubusercontent.com/u/52344355?v=4"></a>
</td>
<td align="center">
<a href=https://github.com/FE-sophie"><img align="center" width="50" height="50" src="https://avatars.githubusercontent.com/u/76701139?s=64&v=4"></a>
</td>
<td align="center">
<a href="https://github.com/cjy0019"><img align="center" width="50" height="50" src="https://avatars.githubusercontent.com/u/33951916?s=64&v=4"></a>
</td>
<td align="center">
<a href="https://github.com/FE-Lex-Kim"><img align="center" width="50" height="50" src="https://avatars.githubusercontent.com/u/65955988?s=64&v=4"></a>
</td>
<td align="center">
<a href="https://github.com/parksaneon"><img align="center" width="50" height="50" src="https://avatars.githubusercontent.com/u/47975991?s=64&v=4"></a>
</td>

</tr>
<tr>
<td align="center"> <a href="https://github.com/nr-baek">백나라</a> </td>
<td align="center"> <a href="https://github.com/FE-sophie">정세영</a> </td>
<td align="center"> <a href="https://github.com/cjy0019">조재연</a> </td>
<td align="center"> <a href="https://github.com/FE-Lex-Kim">김어진</a> </td>
<td align="center"> <a href="https://github.com/parksaneon">박상언</a> </td>
</tr>
</table>

<br>

### 🧑‍💻 Back-End

<table>
<tr>
<td align="center">
<a href="https://github.com/LimNoah"><img align="center" width="50" height="50" src="https://avatars.githubusercontent.com/u/46559549?s=64&v=4"></a>
</td>
<td align="center">
<a href=https://github.com/theVelopr"><img align="center" width="50" height="50" src="https://avatars.githubusercontent.com/u/68624184?s=64&v=4"></a>
</td>
<td align="center">
<a href="https://github.com/Yus2on"><img align="center" width="50" height="50" src="https://avatars.githubusercontent.com/u/46306263?s=64&v=4"></a>
</td>

</tr>
<tr>
<td align="center"> <a href="https://github.com/LimNoah">임정우</a> </td>
<td align="center"> <a href="https://github.com/theVelopr">양동경</a> </td>
<td align="center"> <a href="https://github.com/Yus2on">최유선</a> </td>
</tr>
</table>

<br>
