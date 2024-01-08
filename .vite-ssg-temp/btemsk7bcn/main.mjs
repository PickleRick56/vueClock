import { ref, computed, mergeProps, useSSRContext, createApp } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
const main = "";
const App_vue_vue_type_style_index_0_scoped_2338630c_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    const todoId = ref(0);
    let currentDate = /* @__PURE__ */ new Date();
    const ss = ref(0);
    const startSeconds = currentDate.getSeconds();
    const startMinutes = currentDate.getMinutes();
    const startHours = currentDate.getHours();
    const elapsedSeconds = ref(0);
    const elapsedMinutes = ref(0);
    const elapsedHours = ref(0);
    const secondsRatio = computed(() => (startSeconds + elapsedSeconds.value) / 60);
    const minutesRatio = computed(() => (startMinutes + elapsedMinutes.value) / 60);
    const hoursRatio = computed(() => (startHours + elapsedHours.value) / 12);
    const timeStep = ref(1e3);
    const transitionStyle = ref({
      transition: `transform ${timeStep.value}ms`
    });
    const onSecond = () => {
      elapsedSeconds.value += 1;
      if (secondsRatio.value % 1 === 0) {
        elapsedMinutes.value += 1;
        if (minutesRatio.value % 1 === 0) {
          elapsedHours.value += 1;
        }
      }
      ss.value = /* @__PURE__ */ new Date();
      setTimeout(onSecond, timeStep.value);
    };
    setTimeout(onSecond, timeStep.value);
    return (_ctx, _push, _parent, _attrs) => {
      const _cssVars = { style: {
        "--235c11d7": _ctx.color,
        "--93aa0050": secondsRatio.value,
        "--7883a978": minutesRatio.value,
        "--18db3048": hoursRatio.value
      } };
      _push(`<header${ssrRenderAttrs(mergeProps(_attrs, _cssVars))} data-v-2338630c><div class="wrapper" data-v-2338630c><button data-v-2338630c>sssssssssssssssssssss ${ssrInterpolate(todoId.value)}</button><h1 data-v-2338630c>НАчальная секунда ${ssrInterpolate(ss.value)}</h1><div class="circle" data-v-2338630c><div class="number one" style="${ssrRenderStyle({ "--n": "1" })}" data-v-2338630c><span data-v-2338630c>1</span></div><div class="number two" style="${ssrRenderStyle({ "--n": "2" })}" data-v-2338630c><span data-v-2338630c>2</span></div><div class="number three" style="${ssrRenderStyle({ "--n": "3" })}" data-v-2338630c><span data-v-2338630c>3</span></div><div class="number four" style="${ssrRenderStyle({ "--n": "4" })}" data-v-2338630c><span data-v-2338630c>4</span></div><div class="number five" style="${ssrRenderStyle({ "--n": "5" })}" data-v-2338630c><span data-v-2338630c>5</span></div><div class="number six" style="${ssrRenderStyle({ "--n": "6" })}" data-v-2338630c><span data-v-2338630c>6</span></div><div class="number seven" style="${ssrRenderStyle({ "--n": "7" })}" data-v-2338630c><span data-v-2338630c>7</span></div><div class="number eight" style="${ssrRenderStyle({ "--n": "8" })}" data-v-2338630c><span data-v-2338630c>8</span></div><div class="number nine" style="${ssrRenderStyle({ "--n": "9" })}" data-v-2338630c><span data-v-2338630c>9</span></div><div class="number ten" style="${ssrRenderStyle({ "--n": "10" })}" data-v-2338630c><span data-v-2338630c>10</span></div><div class="number eleven" style="${ssrRenderStyle({ "--n": "11" })}" data-v-2338630c><span data-v-2338630c>11</span></div><div class="number twelve" style="${ssrRenderStyle({ "--n": "12" })}" data-v-2338630c><span data-v-2338630c>12</span></div><div style="${ssrRenderStyle(transitionStyle.value)}" class="arrow hourArrow" id="hour" data-v-2338630c></div><div style="${ssrRenderStyle(transitionStyle.value)}" class="arrow minutArrow" id="minute" data-v-2338630c></div><div style="${ssrRenderStyle(transitionStyle.value)}" class="arrow secondArrow" id="second" data-v-2338630c></div><div class="dot" data-v-2338630c></div></div></div></header>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2338630c"]]);
createApp(App).mount("#app");
