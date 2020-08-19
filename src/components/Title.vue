<template>
  <div class="title-container">
    <div class="title">Ты сегодня покормил кота?</div>
  </div>
</template>

<script>
export default {
	name: "Title"
}
</script>

<style scoped>
.title-container{
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
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
</style>
