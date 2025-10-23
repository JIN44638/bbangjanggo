<template>
  <div class="mypage">
    <div class="inner">
      <div class="web_page">
        <h1>마이페이지</h1>
        <h3 class="hello">안녕하세요 ○○○님!</h3>
        <div class="mypage-box">
          <div class="reser-txt">
            <div class="reservation">예약내역</div>
            <div class="boso">
              <ul class="locker">
                <li class="sub_list">
                  <h4>보관소</h4>
                  <p class="store">반월당역점</p>
                </li>
                <li class="sub_list">
                  <h4>방문일시</h4>
                  <p>25.09.23[11:00~11:30]</p>
                </li>
                <li class="sub_list">
                  <h4>방문빵집</h4>
                  <p class="bread">빵순이네</p>
                </li>
              </ul>
              <ul class="methodlocker">
                <li class="sub_list">
                  <h4>보관방법</h4>
                  <p class="store">기사님께 맡길게요</p>
                </li>
                <li class="sub_list">
                  <h4>온도</h4>
                  <p>상온보관</p>
                </li>

                <li class="sub_list">
                  <h4>부가서비스</h4>
                  <p class="bread">선택안함</p>
                </li>
                <button class="reser_change">예약 변경 및 취소</button>
              </ul>
            </div>

            <div class="btn">
              <button class="stemp">스탬프</button>
              <button class="review">리뷰관리</button>
            </div>
          </div>

          <ul class="reser-info">
            <li>회원정보</li>
            <li>이벤트</li>
            <li>공지사항</li>
            <li>자주묻는질문</li>
            <li>고객센터</li>
            <li>약관 및 정책</li>
          </ul>
        </div>
      </div>
      <div class="mobile_390">
        <h1 class="mine">마이페이지</h1>
        <h3>안녕하세요 ○○○님!</h3>
        <div class="box_bo">
          <div class="reser_t">
            <div class="reservation_">예약내역</div>
            <p class="ban">반월당역점</p>
            <p>상온보관 / 기사님께 맡길게요</p>
            <div class="sub_list12">
              <div class="sub_list1">
                <h4 class="visit">방문일시</h4>
                <h4>방문빵집</h4>
                <h4>부가서비스</h4>
              </div>
              <div class="sub_list2">
                <p>25.09.23[11:00~11:30]</p>
                <p>빵순이네</p>
                <p>선택안함</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@use "/src/assets/variables" as *;

.mypage {
  padding: 50px 0;
  height: calc(100vh - 290px);
  height: 100vh;
  background-color: $bg-color;
}
h1 {
  text-align: center;
  padding-top: 50px;
  font-family: "Cafe24Surround";
  color: $point-color;
  font-size: 24px;
}
h3 {
  font-size: 16px;
  padding-left: 30px;
  padding-bottom: 40px;
}

.mypage-box {
  display: flex;
  justify-content: space-between;
  gap: 74px;
}
.reservation {
  color: $font-color;
  font-size: 16px;
  font-weight: bold;
  padding-top: 20px;
  padding-left: 20px;
}

.reser-txt {
  width: 60%;
  padding: 2%;
  background-color: #fff;
  border-radius: 15px;
}
.reser-info {
  width: 40%;
  font-size: 12px;
  background-color: #fff;
  border-radius: 15px;
  padding-top: 40px;
  font-family: "SpokaHanSansNeo";
}
.reser-info li {
  padding-left: 40px;
  padding-bottom: 30px;
  font-family: "SpokaHanSansNeo";
  color: $font-color;
}
.boso {
  padding-left: 20px;
  width: 100%;
  display: flex;
  padding-top: 40px;
  justify-content: space-between;
  font-size: 12px;
  gap: 5%;
}
.boso ul {
  width: calc(100% / 2);
}
.boso ul li {
  padding-bottom: 10%;
}
.boso ul li span {
  padding-right: 0;
}

.sub_list {
  display: flex;
  gap: 5px;
  font-family: "SpokaHanSansNeo";
}
.sub_list span {
  padding-left: 10px;
}
h4 {
  text-align: left;
  width: 40%;
}

.methodlocker p {
  margin-right: 10px;
  // font-size: 16px;
}

.btn {
  display: flex;
  gap: 25px;
  margin-top: 5%;
}
.btn button {
  background-color: #ffebc2;

  width: 100%; /* 부모 폭에 맞추기 */
  border: none;
  font-family: "SpokaHanSansNeo";
  color: $font-color;
}
button.stemp,button.review
/* {  width: 286px;
  height: 70px; */ {
  border-radius: 15px;
  padding: 2%;
  font-family: "SpokaHanSansNeo";
  font-size: $f-a-q-text-font;
  font-weight: bold;
  cursor: pointer;
}
button.reser_change {
  border: none;

  background-color: #ffffff;
  text-align: end;
  cursor: pointer;
  font-size: 11px;
  text-decoration: underline;
  width: 100%;
}
.mobile_390 {
  display: none;
}
@media screen and (max-width: 768px) {
  .mypage {
    height: auto;
  }
  h1.mine {
    font-size: 20px;
    text-align: center;
    padding-top: 50px;
    padding-bottom: 40px;
  }
  h3 {
    padding-left: 30px;
    font-size: 16px;
    padding-bottom: 40px;
  }
  .box_bo {
    background-color: #fff;
    border-radius: 18px;
    padding-left: 29px;
    // width: 329px;
  }

  .mypage-box {
    flex-wrap: wrap;
  }
  .reser-txt {
    width: 100%;
  }
  .reser-info {
    width: 100%;
  }
  .sub_list12 {
    display: flex;
  }
  .sub_list1 {
    width: 100%;
  }
  .sub_list1 h4 {
    width: 100%;
  }
}
@media screen and (max-width: 390px) {
  .web_page {
    display: none;
  }
  .mobile_390 {
    // width: 500px;
    display: block;
    padding-left: 10px;
  }
  .mine {
    text-align: left;
    padding-left: 100px;
    h3 {
      font-size: 16px;
    }

    .sub_list1 {
      width: calc(100% / 2);
    }
  }
  p.ban {
    font-size: 20px;
    font-weight: bold;
    padding-bottom: 5px;
  }
  .sub_list1 h4 {
    padding-bottom: 10px;
    padding-top: 50px;
  }
  .sub_list2 p {
    padding-bottom: 10px;
    padding-top: 50px;
  }
  .reservation_ {
    // border: #ffebc2;
    // width:329px;
    background-color: #ffffff;
    font-size: 16px;
    padding-bottom: 30px;
    color:$font-color;
    font-weight: bold;
  }
}
</style>
