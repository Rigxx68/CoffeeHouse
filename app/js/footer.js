
var footer_feature_left = {
    template:`<div><p><a href='advices.html'>Советы для кофеманов</a></p>
                <p><a href='test.html'>Тест для сомневающихся</a></p>
                <p><a href='animation.html'>Успокаивающая анимация</a></p></div>`
};

new Vue({
    el: "#footer_feature_left",
    components: {
        'coffee': footer_feature_left
    }
});

var footer_feature_middle = {
    template:`<div><p><a href='espresso.html'>Эспрессо</a></p>
                <p><a href='makkiato.html'>Маккиато</a></p>
                <p><a href='latte.html'>Латте</a></p></div>`
};

new Vue({
    el: "#footer_feature_middle",
    components: {
        'coffee': footer_feature_middle
    }
});

var footer_feature_right = {
    template:`<div><p><a href='mokka.html'>Мокка</a></p>
                <p><a href='americano.html'>Американо</a></p>
                <p><a href='kapuchino.html'>Капучино</a></p></div>`
};

new Vue({
    el: "#footer_feature_right",
    components: {
        'coffee': footer_feature_right
    }
});