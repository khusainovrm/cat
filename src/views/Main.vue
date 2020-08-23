<template>
<div class="wrapper">
    <Title />
    <div class="cards-container-grid grid2fr2frOnMedium grid1frOnSmall">
      <div
        class="gridItem"
        :style="{gridArea:card.options.grid}"
        v-for="card in context"
        :key="card.id"
      >
        <Card :card="card"/>
      </div>
    </div>
</div>

</template>

<script>
import Card from '@/components/Card.vue'
import Title from '@/components/Title.vue'
import {context} from '../context/context'

export default {
	name: "Main",
	components: { Card, Title },
  data:()=>({
    gridNameTemplate:["a", "b", "c"],
    context
  }),
  computed:{
    selected(){
      return this.$store.getters.selected
    }
  }
}
</script>

<style scoped>
.wrapper{
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.cards-container-grid{
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas:"a b c";
  grid-template-rows: max-content;
}

.gridItem{
  transition: transform 1s;
  height: 480px;
  margin-bottom: 67px;
}



</style>
