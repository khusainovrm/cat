<template>
<div class="container">
  <div class="content">

    <div class="title">
      Ты сегодя покормил кота?
    </div>

    <div class="frame-container">
	    <div class="box">
	    </div>
    </div>

 
  </div>
</div>

</template>

<script>


export default {
	name: "Main",
	components: {}
}
</script>

<style>
.container{
  height: 100vh;
  background-image: url('../assets/background.png');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center; 
  /*background-image: linear-gradient(180deg, #000000 0%, rgba(0,0,0,0) 50%, #000000 100%);*/
}

.title{
	padding-top: 45px;
	height: 44px;
	font-size: 36px;
	color: #ffffff;
	font-family: "Exo2.0";
	text-align: center;
	filter: drop-shadow(0px 1px 0.5px #000000);
}

.frame-container{
	position: relative;
	margin:100px 0 0 200px;
	z-index: 1;
}


.box{
	position:absolute;
	width: 320px;
	height: 480px;
	border-radius: 12px;
	background-color: #f2f2f2;
	border: 4px solid #1698d9;
	clip-path: polygon(-6px 56px, 56px -5px, 102.82% -2px, 101.56% 101.04%, -3.75% 101.46%);
  /*background-image: url('../assets/blue-border.png');*/
}
.box:before{
	content: "";
	position: absolute;
	top: -38px;
	left: -38px;
	border-color: #1698d9;
	border-style: solid;
	border-width: 0 0 72px 72px;
	-webkit-clip-path: polygon( 0% 0%, calc(100% - 40px) 0%, 100% 40px, 100% 100%, 0% 100%);
	
	transform: rotate(45deg);
}



</style>
