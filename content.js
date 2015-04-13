chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status == "loading") {

        // tumblr post image
        if (urlmatch = tab.url.match(/(^https?\:\/\/(?:gs1\.wac\.edgecastcdn\.net\/)?.*(?:media|data)\.tumblr\.com\/(?:.*\/)?tumblr_.*_)(250|400|500|540|1280)(\.(?:jpg|gif|png))$/i))
            var newurl = get_tumblr_url(0, urlmatch);

        // tumblr profile pic
        else if (urlmatch = tab.url.match(/(^https?\:\/\/(?:[0-9]+)?.*\.media\.tumblr\.com\/avatar_.*_)(16|32|64|128|256|512)(\.(?:jpg|gif|png))$/i))
            var newurl = get_tumblr_url(1, urlmatch);

        // deviantart thumbnail or preview image
        else if (urlmatch = tab.url.match(/(https?\:\/\/th[0-9]{2}\.deviantart\.net\/.*)\/(?:150|200H|PRE)(\/.*)$/i))
            var newurl = get_deviantart_url(1, urlmatch);

        // another deviantart thumb, but weirdly crafted
        else if (urlmatch = tab.url.match(/(https?\:\/\/)(t[0-9]{2})(\.deviantart\.net)\/.*\b(?:filters:).*\/(pre[0-9]{2})(\/.*)$/i))
            var newurl = get_deviantart_url(2, urlmatch);

        if (newurl) // if there is a bigger version of the image, load it
            chrome.tabs.update(tabId, {url: newurl});
    }
});

function get_tumblr_url(type, urlmatch) {
    if (type == 0) // it's an img post
        var sizes = [ 1280, 540, 500, 400, 250 ];

    else if (type == 1) // it's a profile picture
        var sizes = [ 512, 256, 128, 64, 32, 16 ];

    var actual_size = urlmatch[2];
    var url_start = urlmatch[1];
    var url_extension = urlmatch[3];

    var i = 0;
    while (sizes[i] && (sizes[i] != actual_size)) {
        var url = url_start + sizes[i] + url_extension;

        if (url_exists(url))
            return url;

        i++;
    }

    return false;

}

function get_deviantart_url(type, urlmatch) {
    if (type == 1) // usual thumbnail, we remove the size str from the url
        var url = (urlmatch[1] + urlmatch[2]);

    else if (type == 2) // the big, large, weird thumb; we gotta reorder params
        var url = (urlmatch[1] + urlmatch[4] + urlmatch[3] + urlmatch[5]);

    if (url_exists(url))
        return url;

    else
        return false;
}

function url_exists(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send();

    if ((xhr.readyState == 4) && (xhr.status == 200))
        return true;

    else
        return false;
}
