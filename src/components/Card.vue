<template>
	<div>
		<div id="pentagon"></div>

	</div>
</template>

<script>
export default {

}
</script>

<style>

#pentagon {
  position: relative;
	width: 320px;
	height: 480px;
  box-sizing: content-box;
  border-width: 50px 18px 0;
  border-style: solid;
  border-color: red transparent;
}
#pentagon:before {
  content: "";
  position: absolute;
  height: 0;
  width: 0;
  top: -85px;
  left: -18px;
  border-width: 0 45px 35px;
  border-style: solid;
  border-color: transparent transparent red;
}
  

</style>
