<template>
  <header>
    <div class="wrapper">
      <button @click="todoId++">sssssssssssssssssssss {{ todoId }}</button>
      <h1>НАчальная секунда {{ ss }}</h1>
      <div class="circle" @click="increment">
        <div class="number one" style="--n: 1"><span>1</span></div>
        <div class="number two" style="--n: 2"><span>2</span></div>
        <div class="number three" style="--n: 3"><span>3</span></div>
        <div class="number four" style="--n: 4"><span>4</span></div>
        <div class="number five" style="--n: 5"><span>5</span></div>
        <div class="number six" style="--n: 6"><span>6</span></div>
        <div class="number seven" style="--n: 7"><span>7</span></div>
        <div class="number eight" style="--n: 8"><span>8</span></div>
        <div class="number nine" style="--n: 9"><span>9</span></div>
        <div class="number ten" style="--n: 10"><span>10</span></div>
        <div class="number eleven" style="--n: 11"><span>11</span></div>
        <div class="number twelve" style="--n: 12"><span>12</span></div>

        <div :style="transitionStyle" class="arrow hourArrow" id="hour"></div>
        <div :style="transitionStyle" class="arrow minutArrow" id="minute"></div>
        <div :style="transitionStyle" class="arrow secondArrow" id="second"></div>
        <div class="dot"></div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'

const todoId = ref(0)

let currentDate = new Date()

const ss = ref(0)

const startSeconds = currentDate.getSeconds()
const startMinutes = currentDate.getMinutes()
const startHours = currentDate.getHours()

const elapsedSeconds = ref(0)
const elapsedMinutes = ref(0)
const elapsedHours = ref(0)

const secondsRatio = computed(() => (startSeconds + elapsedSeconds.value) / 60)
const minutesRatio = computed(() => (startMinutes + elapsedMinutes.value) / 60)
const hoursRatio = computed(() => (startHours + elapsedHours.value) / 12)

const timeStep = ref(1000)
const transitionStyle = ref({
  transition: `transform ${timeStep.value}ms`
})

const onSecond = () => {
  elapsedSeconds.value += 1
  if (secondsRatio.value % 1 === 0) {
    elapsedMinutes.value += 1

    if (minutesRatio.value % 1 === 0) {
      elapsedHours.value += 1
    }
  }

  ss.value = new Date()
  setTimeout(onSecond, timeStep.value)
}

setTimeout(onSecond, timeStep.value)
</script>

<style scoped>
header {
  line-height: 1.5;
}

.circle {
  color: v-bind(color);
  width: 500px;
  height: 500px;
  position: relative;
  background-color: aqua;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.dot {
  position: absolute;
  width: 25px;
  height: 25px;
  background-color: black;
  border-radius: 50%;
}

.secondArrow {
  --rotateS: v-bind(secondsRatio);
  position: absolute;
  left: 50%;
  bottom: 50%;
  transform: translate(-50%) rotate(calc(var(--rotateS) * 360deg));
  transform-origin: bottom;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.minutArrow {
  --rotateM: v-bind(minutesRatio);
  position: absolute;
  left: 50%;
  bottom: 50%;
  transform: translate(-50%) rotate(calc(var(--rotateM) * 360deg));
  transform-origin: bottom;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 12px;
  height: 40%;
  background-color: grey;
}

.hourArrow {
  --rotateH: v-bind(hoursRatio);
  position: absolute;
  left: 50%;
  bottom: 50%;
  transform: translate(-50%) rotate(calc(var(--rotateH) * 360deg));
  transform-origin: bottom;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 20px;
  height: 35%;
  background-color: black;
}

.secondArrow {
  width: 10px;
  height: 40%;
  background-color: yellow;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
.number {
  transform: rotate(calc(30deg * var(--n)));
  position: absolute;
  text-align: center;
  inset: 20px;
}

.number span {
  transform: rotate(calc(-30deg * var(--n)));
  display: inline-block;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
