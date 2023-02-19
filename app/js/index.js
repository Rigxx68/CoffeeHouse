var hat = new Vue({
    el: '#hat',
    data: {
        message: 'Coffee House'
    }
})
var img_cont = new Vue({
  el: '#img_cont',
  data: {
    message: 'Coffee ' + new Date().toLocaleString()
  }
})
var quote = new Vue({
  el: '#img_quote',
  data: {
    message: '«Удивительно, как мир начинает меняться в глазах за чашкой кофе», - Донна А. Фаворс'
  }
})
Vue.component('blog-post', {
  props: ['title'],
  template: '<h3>{{ аааааа }}</h3>'
})
var coffee_block = new Vue({
  el: '#coffee_block_espresso',
  data: {
    title: 'Espresso',
    text: 'А не "простой чёрный"',
    visible: true
  }
}) 
var coffee_block2 = new Vue({
  el: '#coffee_block_makkiato',
  data: {
    title: 'Makkiato',
    text: 'Кофе с "пятном" молока',
    visible: true
  }
}) 
var coffee_block3 = new Vue({
  el: '#coffee_block_latte',
  data: {
    title: 'Latte',
    text: 'Чтобы не помереть от тахикардии',
    visible: true
  }
}) 
var coffee_block4 = new Vue({
  el: '#coffee_block_mokka',
  data: {
    title: 'Mokka',
    text: 'Сладкий, как сданная сессия',
    visible: true
  }
}) 
var coffee_block5 = new Vue({
  el: '#coffee_block_americano',
  data: {
    title: 'Americano',
    text: 'Горький, как вся твоя жизнь',
    visible: true
  }
}) 
var coffee_block6 = new Vue({
  el: '#coffee_block_kapuchino',
  data: {
    title: 'Kapuchino',
    text: 'Как у Гермионы Грейнджер',
    visible: true
  }
}) 
