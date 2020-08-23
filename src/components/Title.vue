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
  margin: 69px auto 24px;
}

.title{

	font-size: 36px;
	color: var(--pink);
	font-family: "Exo 2.0 Bold";
	text-align: center;
	filter: drop-shadow(0px 1px 0.5px #000000);
}
</style>
