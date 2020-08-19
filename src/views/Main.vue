<template>
<div class="wrapper">
    <Title />
    <div class="cards-container">
      <Card />
      <Card />
      <Card />
    </div>
</div>

</template>

<script>
import Card from '@/components/Card.vue'
import Title from '@/components/Title.vue'

export default {
	name: "Main",
	components: { Card, Title }
}
</script>

<style scoped>
.wrapper{
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.cards-container{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-self: stretch;
}

</style>
