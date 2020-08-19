<template>
    <div class="card-container">
      <div class="box">
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.card-container{
  position: relative;
}


.box{
	/* position:absolute; */
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
	transform: rotate(45deg);
}

</style>
