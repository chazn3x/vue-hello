const app = new Vue({
    el: "#root",
    data: {
        text: "Hello",
        img: `https://picsum.photos/id/${randomNum()}/200/300`
    },
    methods: {
        changeImg: function () {
            this.img = `https://picsum.photos/id/${randomNum()}/200/300`;
        }
    }
});
function randomNum() {
    const num = Math.floor(Math.random() * 1000) + 1;
    return num;
}