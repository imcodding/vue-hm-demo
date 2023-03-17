<template>
<div id="nav">
  <div class="gnb">
    <div style="width: 100%; position: relative">
      <a href="javascript: Master.gotoMainPage()" style="" class="backGradi">
        <div class="p_logo">
          <img src="../../assets/sub_netis.png" title="네티스">
        </div>
      </a>
      <div id="jqxmenu" class="netismenu">			
        <ul id="mega-menu" class="mega-menu" style="visibility: visible; z-index: 9999;">
          <li class="level-1 dc-mega-li">
            <a href="#" class="dc-mega-icon-alarm dc-mega">
              장비현황
              <span class="dc-mega-icon-alarm"></span>
            </a>
          </li>
          <li class="level-1 dc-mega-li">
            <a href="#" class="dc-mega-icon-nms dc-mega">회선현황<span class="dc-mega-icon-nms"></span></a>
            <!-- <div class="sub-container mega" style="left: 0px; top: 55px; z-index: 1000;">
              <ul class="sub">
                <div class="row" style="width: 668px">
                  <li class="level-2 mega-unit mega-hdr" style="height: 295px">
                    <a href="#" class="mega-hdr-a" style="height:23px;">구성관리</a>
                    <ul>
                      <li class="level-3">
                        <a href="#">장비현황</a>
                      </li>
                    </ul>
                  </li>
                </div>
              </ul>
            </div> -->
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

</template>

<script>

export default {

}
</script>

<style scoped>
#nav {
  width: 100%;
  height: 55px;
  float: left;
}
.gnb {
    position: relative;
    height: 55px;
    width: 100%;
    background: #292929;
}
.p_logo {
    width: 261px;
    position: absolute;
    left: 0;
}
img {
    border: 0;
    vertical-align: middle;
}
ul, li {
    list-style: none;
    padding: 0;
    margin: 0;
}
.netismenu {
  font: normal 13px 맑은 고딕, Arial, sans-serif;
  line-height: 23px;
  height: 55px;
  position: absolute;
  left: 261px;
}
ul.mega-menu {
    position: relative;
    display: inline-block;
    text-align: left;
}
ul.mega-menu li {
    display: inline-block;
    font-size: 11px;
    font-weight: bold;
}
ul.mega-menu li a {
    float: left;
    display: block;
    color: #fff;
    padding: 29px 25px 3px 25px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    text-decoration: none;
}
ul.mega-menu li a.dc-mega {
    position: relative;
    min-width: 100px;
    padding: 0;
    height: 55px;
    text-align: center;
    line-height: 79px;
    opacity: 0.7;
}
.netismenu ul.mega-menu li a .dc-mega-icon-alarm {
	display: block;
	position: absolute;
	top: 10px;
	left: 37px;
	width: 23px;
	height: 23px;
	background: url(../../assets/menu/dc-mega-icon-alarm.png) no-repeat 0 0;
}
.netismenu ul.mega-menu li a .dc-mega-icon-nms {
	display: block;
	position: absolute;
	top: 10px;
	left: 37px;
	width: 23px;
	height: 23px;
	background: url(../../assets/menu/dc-mega-icon-nms.png) no-repeat 0 0;
}
ul.mega-menu li a span[class*='dc-mega-icon-'] {
    display: block;
    position: absolute;
    top: 10px;
    left: 40%;
    width: 23px;
    height: 23px;
}
ul.mega-menu li.mega-hover a,  ul.mega-menu li a:hover
{
	color: #ffffff;
	text-shadow: none;
	background: #545454;
	opacity: 1;
}


/* 서브 컨테이너 */
.mega-menu ul {
    position: relative;
    padding: 0;
    margin: 0;
    list-style: none;
}

</style>