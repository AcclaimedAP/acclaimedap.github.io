<script>
import lines from './shimmerLine.vue';

export default {
  components: {
    lines,
  },
  data() {
    return {
      amount: 72,
    };
  },

};
</script>

<template>

<div><lines v-for="count in amount" :key="`component-${count}`" class="lines"/></div>

</template>

<style scoped lang="scss">
@keyframes fadeIn{
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;

    }
}
@keyframes rotate{
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(-40deg);
  }
}
div {
    transform-origin: center middle;
    transition: all 1s ease-out;
    width: 95vh;
    height: 95vh;
    background-color: rgba(255, 255, 255, 0);
    left: 50%;
    transform: translateX(-50%);
    position: fixed;
    // animation: 3s ease-out 0s 1 rotate forwards;
    @for $i from 1 through 72 {
        .lines:nth-child(#{$i}){
          opacity: 0;
              animation: 1s ease-in calc(0.1s + $i * 0.03s) 1 fadeIn forwards;
            transform: rotate(calc(5deg * $i));
        }
    }
    .lines {
        position: absolute;
        top: 50%;
        left: 50%;
    }
}
</style>
