<template>
    <div
      class="card-container"
      ref=card

    >
      <div class="box" :class="{notavailable:!available}" ref="box" @click="toggleChoice">
        <div class="box-relative">

          <div class="upperTitle">Сказочное заморское явство</div>
          <h1>Нямушка</h1>
          <div class="filler">{{card.filler}}</div>
          <div><span class="quantity">{{card.quantity}}</span> порций</div>
          <div><span class="quantity">{{card.giftMouse}}</span> в подарок</div>

          <div v-if="card.custemnerIsSutisfied">заказчик доволен</div>

        </div>

        <div class="circle flexFullCenter" ref="circle">
          <div class="number">{{card.weight}}</div>
          <div class="kg">кг</div>
        </div>
      </div>

          <div class="make-happy-your-cat" v-show="!flagForLinkSelect && card.options.available" ref="cat">
            <p>
              Чего сидишь? Порадуй котэ, <span class="buy" @click="changeFlag">купи</span>.
            </p>
          </div>

          <div class="make-happy-your-cat" v-show="flagForLinkSelect">
            <p>
              {{card.options.info}}
            </p>
          </div>

          <div class="make-happy-your-cat" v-show="!card.options.available">
            <p class="not-available">
              Печалька, {{card.filler}} закончился.
            </p>
          </div>

    </div>
</template>

<script>
export default {
  props:{
    card:{
      type:Object
    }
  },
  data:()=>({
    flagForLinkSelect: false
  }),
  methods:{
    changeFlag(){
      if(this.available){
        this.toggleChoice()
      }
    },
    toggleChoice(){
      if (this.card.options.available) {

        if(this.selected.includes(this.card.id)){
          this.$refs.box.style.borderColor = "#1698d9"
          this.$refs.circle.style.background = "#1698d9"
          this.flagForLinkSelect = !this.flagForLinkSelect

        } else {
          this.$refs.box.style.borderColor = "#d91667"
          this.$refs.circle.style.background = "#d91667"
          this.flagForLinkSelect = !this.flagForLinkSelect
        }

        this.$store.dispatch("toggleChoice",  this.card.id)
      }
    }
  },
  computed:{
    available(){
      return this.card.options.available
    },
    selected(){
      return this.$store.getters.selected
    }
  },
  watch:{
    flagForLinkSelect(){

    }
  }
}
</script>

<style scoped>

.card-container{
  position: relative;
  display: flex;
  justify-content: center;
  height: 100%;
}


.box{
	position:absolute;
	width: 320px;
  height: 480px;
  padding: 18px 43px;
	border-radius: 12px;
	background-color: #f2f2f2;
	border: 4px solid var(--blue);
  clip-path: polygon(15% 0%, 0% 10%, 0% 100%, 100% 100%, 100% 0%);
  transition: border-color .3s;
  background-image: url('../assets/funbox_logo.png');
  background-position: 25% 132%;
  background-size: contain;
  background-repeat:no-repeat;
}

.box:before{
	content: "";
	position: absolute;
	top: -38px;
	left: -38px;
	border-color: var(--blue);
	border-style: solid;
	border-width: 0 0 72px 72px;
  transform: rotate(45deg);
  transition: border-color .3s;
}
/* .box:hover, .box:hover::before{
  border-color: var(--pink);
} */

.box-relative{
  position: relative;
}

.upperTitle{
  font-size: .9rem;
}


h1{
  margin-top: 4px;
  margin-bottom: 0px;
  font-size: 3rem;
}

h1, .filler {
  font-family: 'Exo 2.0 Bold', arial;
}

.filler{
  padding-bottom: 12px;
  font-size: 1.5rem;
}

.circle{
  position: absolute;
  right: 13px;
  bottom: 9px;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  background: var(--blue);
  color:white;
  transition: background .3s;
}

.number{
  font-size: 2.5rem;
}

.kg{
  margin-top: -5px;
}

.quantity{
  font-weight: bold;
}


.makePinky{
  background: var(--pink);
}

.notavailable{
  filter:saturate(20%);
}

.make-happy-your-cat{
  color: white;
  padding-top: 490px;
  text-align: center;
  font-size: .9rem;
  margin-left:45px;
  margin-right:45px;
}

.buy{
  color: var(--blue);
  border-bottom: 1px dashed var(--blue);
}
.buy:hover{
  cursor: pointer;
}

.not-available{
  color: var(--yellow);
}

</style>
