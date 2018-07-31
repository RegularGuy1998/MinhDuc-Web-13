$("#threeDots").css({ opacity: 0 });
let nextPageToken = "";
let crol = false;
let ngungDongThoiGian;
let resultNumber = 0;

if ($("#keyword").val().length != 0) {
    searchYoutube();
}

$("#keyword").on("input", function () {
    resultNumber = 0;
    $("#noResult").css({ opacity: 0 });
    $("#threeDots").css({ opacity: 1 });
    $("#result-list").addClass("evodeLink");
    clearTimeout(ngungDongThoiGian);
    ngungDongThoiGian = setTimeout(() => {
        nextPageToken = "";
        if ($("#keyword").val() != "") {
            $("#result-list").empty();
            searchYoutube();
        } else {
            $("#result-list").empty();
            $("#threeDots").css({ opacity: 0 });
        }
    }, 500);
});

$(window).on("scroll", () => {
    $("#threeDots").css({ opacity: 1 });
    if (($(document).height() - $(window).height() - $(document).scrollTop() < 300) && crol === false) {
        crol = true;
        if (nextPageToken === undefined) {
            $("#noResult").text("End");
            $("#threeDots").css({ opacity: 0 });
        } else {
            searchYoutube();
        }
    }
});

function searchYoutube() {
    $.ajax({
        url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=${$("#keyword").val()}&key=AIzaSyA9gQZ-oYomFypZN7PsupZJtOfQqA6Q3qw&pageToken=${nextPageToken}`,
        type: "GET",
        success: (data) => {
            nextPageToken = data.nextPageToken;
            console.log(data);
            if (data.items.length === 0) {
                $("#threeDots").css({ opacity: 0 });
                $("#noResult").css({ opacity: 1 });
            } else {
                data.items.forEach((result) => {
                    if (result.id.kind === "youtube#video") {
                        resultNumber += 1;
                        $("#result-list").append(`
                                    <div class="result animated fadeIn">
                                        <div class="row ketqua${resultNumber}">
                                            <div class="col-lg-4">
                                                <a href="https://www.youtube.com/watch?v=${result.id.videoId}">
                                                    <img src="${result.snippet.thumbnails.medium.url}" alt="" class="youtubeImage">
                                                </a>
                                            </div>
                                            <div class="col-lg-8 info" >
                                                <a href="https://www.youtube.com/watch?v=${result.id.videoId}">
                                                    <h3 class="title" >${result.snippet.title}</h3>
                                                </a>
                                                <a href="https://www.youtube.com/channel/${result.snippet.channelId}" class="channel">
                                                <p>${result.snippet.channelTitle}</p>
                                                </a>
                                                <a href="https://www.youtube.com/watch?v=${result.id.videoId}">
                                                    <p class="description">${result.snippet.description}</p>
                                                    <p id="xemthem${resultNumber}" class="xemthem">Xem Thêm <span id="bamuiten${resultNumber}"> >>></span></p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>`);
                        crol = false;
                        $("#result-list").removeClass("evodeLink");
                        setChay(resultNumber);

                    } else if (result.id.kind) {

                    }
                    $("#threeDots").css({ opacity: 0 });
                });
            }


            // let videos = data.items.filter((item) => {
            //     return item.id.kind === "youtube#video";
            // });
            // console.log(videos);
        }
    });
}

setChay = function (id) {
    $(".ketqua" + id).hover(
        function () {
            $("#bamuiten" + id).removeClass("fadeRight");
            $("#bamuiten" + id).addClass("showRight");
            $("#xemthem" + id).css({ opacity: 1 });
        },
        function () {
            $("#bamuiten" + id).removeClass("showRight");
            $("#bamuiten" + id).addClass("fadeRight");
            $("#xemthem" + id).css({ opacity: 0 });
        }
    )
}