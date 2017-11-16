let myUrl;

$(document).ready(function() {

    $('.btn').on('click', () => {
        myUrl = $(".input").val();

        myUrl = myUrl.replace(/^https?:\/\/(www\.)?/, "").replace(/(\..+)$/, "");

        myUrl = myUrl.replace(/[O, o]/g, "0").replace(/l/g, "1").replace(/i/g, "3").replace(/s/g, "5");

        myUrl += str_rand();

        $('.result').html("<p><b>" + myUrl + "</b></p>");

        console.log(myUrl);
    });

    function str_rand() {
        let result = '';
        let words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
        let max_position = words.length - 1;
        for (i = 0; i < 4; ++i) {
            position = Math.floor(Math.random() * max_position);
            result = result + words.substring(position, position + 1);
        }
        return result;
    }

});