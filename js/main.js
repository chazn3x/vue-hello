const app = new Vue({
    el: "#root",
    data: {
        text: "Hello",
        img: `https://picsum.photos/id/99/200/300`
    },
    methods: {
        randomNum: function() {
            return Math.floor(Math.random() * 1000) + 1;
        },
        changeImg: function () {
            this.img = `https://picsum.photos/id/${this.randomNum()}/200/300`;
        }
    }
});