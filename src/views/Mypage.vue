<template>
  <div class="mypage">
    <div class="inner">
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
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@use "/src/assets/variables" as *;

.mypage {
  padding: 100px 0;
  height: calc(100vh - 290px);
  background-color: $bg-color;
}
h1 {
  text-align: center;
  padding-bottom: 50px;
  font-family: "Cafe24Surround";
  color: $point-color;
}
.hello {
  font-size: 28px;
  margin-bottom: 50px;
}

.mypage-box {
  display: flex;
  justify-content: space-between;
  gap: 3%;
}
.reservation {
  color: $font-color;
  font-size: 22px;
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
  width: 30%;
}
.methodlocker p {
  margin-right: 10px;
}

.btn {
  display: flex;
  gap: 25px;
  margin-top: 5%;
}
.btn button {
  background-color: #ffebc2;
  font-size: 24px;
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
}
button.reser_change {
border: none;
background-color: #fff;
margin-left: 146px;
cursor: pointer;
text-decoration: underline;
}
@media screen and (max-width: 768px)
{
  button.stemp,button.review{
    font-size: $f-a-q-text-font;
  }
}
</style>
