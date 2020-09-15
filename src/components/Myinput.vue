<template>
  <div class="input">
    <i :class="icon"></i>
    <input :type="type" :placeholder="placeholder" @input="$emit('input',$event.target.value)" />
    <button class="btn" v-if="ifBtn" @click="$emit('getverifycode')" :disabled="disabled">{{msg}}</button>
  </div>
</template>

<script>
export default {
  name: "myinput",
  props: {
    phone: String,
    icon: String,
    type: String,
    ifBtn: {
      type: Boolean,
      default: false,
    },
    placeholder: String,
    msg: String,
    disabled: Boolean,
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.input {
  height: 40px;
  width: 100%;
  color: #000000;
  box-sizing: border-box;
  padding: 5px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  border-bottom: 2px solid #eeeeee;
  margin-bottom: 15px;
}
.input i {
  padding-right: 10px;
  font-size: 20px;
}
.input input {
  height: 40px;
  border: 0;
  outline: 0;
  flex: 1;
  background: transparent;
  line-height: 40px;
  font-size: 16px;
  color: #000000;
}
.input .btn {
  height: 30px;
  /* width: 140px; */
  border:0;
  outline: none;
  background: #26a2ff;
  font-size: 13px;
  text-align: center;
  line-height: 30px;
  color: #ffffff;
}
</style>