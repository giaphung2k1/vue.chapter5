<template>
  <div id="wrapper-loading">
    <div class="loading">
      <div class="loadingio-spinner-spinner-j57duqs7sl">
        <div class="ldio-4nt2j447q7v">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "loading"
};
</script>

<style>
#wrapper-loading{
    display: none;
}
#wrapper-loading.show{
    display: block;
}

#wrapper-loading.show .loading {
  top: 0px;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  background: #ffffffc7;
  z-index: 100;
}
#wrapper-loading.show .loading .loadingio-spinner-spinner-j57duqs7sl {
  position: fixed;
  top: 30%;
  left: 50%;
}
@keyframes ldio-4nt2j447q7v {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.ldio-4nt2j447q7v div {
  left: 94px;
  top: 48px;
  position: absolute;
  animation: ldio-4nt2j447q7v linear 1s infinite;
  background: #c5acb1;
  width: 12px;
  height: 24px;
  border-radius: 6px / 12px;
  transform-origin: 6px 52px;
}
.ldio-4nt2j447q7v div:nth-child(1) {
  transform: rotate(0deg);
  animation-delay: -0.9166666666666666s;
  background: #c5acb1;
}
.ldio-4nt2j447q7v div:nth-child(2) {
  transform: rotate(30deg);
  animation-delay: -0.8333333333333334s;
  background: #c5acb1;
}
.ldio-4nt2j447q7v div:nth-child(3) {
  transform: rotate(60deg);
  animation-delay: -0.75s;
  background: #c5acb1;
}
.ldio-4nt2j447q7v div:nth-child(4) {
  transform: rotate(90deg);
  animation-delay: -0.6666666666666666s;
  background: #c5acb1;
}
.ldio-4nt2j447q7v div:nth-child(5) {
  transform: rotate(120deg);
  animation-delay: -0.5833333333333334s;
  background: #c5acb1;
}
.ldio-4nt2j447q7v div:nth-child(6) {
  transform: rotate(150deg);
  animation-delay: -0.5s;
  background: #c5acb1;
}
.ldio-4nt2j447q7v div:nth-child(7) {
  transform: rotate(180deg);
  animation-delay: -0.4166666666666667s;
  background: #c5acb1;
}
.ldio-4nt2j447q7v div:nth-child(8) {
  transform: rotate(210deg);
  animation-delay: -0.3333333333333333s;
  background: #c5acb1;
}
.ldio-4nt2j447q7v div:nth-child(9) {
  transform: rotate(240deg);
  animation-delay: -0.25s;
  background: #c5acb1;
}
.ldio-4nt2j447q7v div:nth-child(10) {
  transform: rotate(270deg);
  animation-delay: -0.16666666666666666s;
  background: #c5acb1;
}
.ldio-4nt2j447q7v div:nth-child(11) {
  transform: rotate(300deg);
  animation-delay: -0.08333333333333333s;
  background: #c5acb1;
}
.ldio-4nt2j447q7v div:nth-child(12) {
  transform: rotate(330deg);
  animation-delay: 0s;
  background: #c5acb1;
}
.loadingio-spinner-spinner-j57duqs7sl {
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  background: none;
}
.ldio-4nt2j447q7v {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-4nt2j447q7v div {
  box-sizing: content-box;
}
</style>