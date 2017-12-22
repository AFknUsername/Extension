function fetchIMOTD() {
    $.ajax({
        type: 'GET',
        url: `https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1`,
        xhrFields: {
            'withCredentials': false
        },
        success: function (result) {
            let imageURL = `http://bing.com/${result['images'][0]['url']}`;
            $('body').css({
                "background": `url(${imageURL}) no-repeat center`
            });
        }
    });
}