function fetchIMOTD() {
    $.ajax({
        type: 'GET',
        url: `https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1`,
        xhrFields : {'withCredentials': false},
        success: function (result) {
            let imageURL = `http://bing.com/${result['images'][0]['url']}`; 
            $('body').css({"background": `url(${imageURL}) no-repeat center`});
            // $('body').css({})
        }
    });
}
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', 'http://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1', true);
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState === 4) {
//             console.log(xhr.responseText);
//         }
//     }
//     xhr.send();
// }