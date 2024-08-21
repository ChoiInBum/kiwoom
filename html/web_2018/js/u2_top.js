// Define some variables used to remember state.
var playlistId, nextPageToken, prevPageToken;
var key = "AIzaSyDGCaVnArra4aJwNObBT7v1ipWuxYE8nLA";
var playlistId = "PLYxgcTlkQOzgzE356Xe4LCfvCcn_V2ckW";
// After the API loads, call a function to get the uploads playlist ID.

var u2dataResponse = "";

function handleAPILoaded() {
  requestVideoPlaylist(playlistId);
}

// Retrieve the list of videos in the specified playlist.
function requestVideoPlaylist(playlistId, pageToken) {
  $("#video-container").html("");
  var requestOptions = {
    key: key,
    playlistId: playlistId,
    part: "snippet",
    maxResults: 12,
  };
  if (pageToken) {
    requestOptions.pageToken = pageToken;
  }

  var request = gapi.client.youtube.playlistItems.list(requestOptions);

  // localStorage.setItem('u2dataResponse',JSON.stringify(u2dataResponse));
  // console.log(JSON.parse(localStorage.getItem('u2dataResponse')));

  /* u2dataOriginResponse = {
  "kind": "youtube#playlistItemListResponse",
  "etag": "pqhjcDhWrqV-1UwgHa72kk_9CSQ",
  "nextPageToken": "EAAaBlBUOkNBVQ",
  "items": [
    {
      "kind": "youtube#playlistItem",
      "etag": "hjBxbQQwUECiZpyjCpSUuw7uzsU",
      "id": "UExZeGdjVGxrUU96Z3pFMzU2WGU0TENmdkNjbl9WMmNrVy4xQkYxRDJDRkRCRkQ1MDk5",
      "snippet": {
        "publishedAt": "2023-04-05T16:38:02Z",
        "channelId": "UC_MA8-XEaVmvyayPzG66IKg",
        "title": "첫 등판 승리투수  大원태👑원태☕원태ㅣ히어로캠 (4.5)",
        "description": "☕ - 14",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/_eAyUIMBD8o/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/_eAyUIMBD8o/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/_eAyUIMBD8o/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/_eAyUIMBD8o/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/_eAyUIMBD8o/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "키움히어로즈",
        "playlistId": "PLYxgcTlkQOzgzE356Xe4LCfvCcn_V2ckW",
        "position": 0,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "_eAyUIMBD8o"
        },
        "videoOwnerChannelTitle": "키움히어로즈",
        "videoOwnerChannelId": "UC_MA8-XEaVmvyayPzG66IKg"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "gPSd_UVGtwR-u9nbNc1vEo4lhR0",
      "id": "UExZeGdjVGxrUU96Z3pFMzU2WGU0TENmdkNjbl9WMmNrVy4xMEFCNjNCMkREODkzMzJD",
      "snippet": {
        "publishedAt": "2023-04-03T04:39:46Z",
        "channelId": "UC_MA8-XEaVmvyayPzG66IKg",
        "title": "야구가 돌아왔다는 건 봄이 왔다는 것 🌸 2023 개막전 스케치",
        "description": "이정후 : \"야구가 돌아왔을 때 그때가 봄입니다.\"",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/Q5QheRJ2Iv4/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/Q5QheRJ2Iv4/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/Q5QheRJ2Iv4/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/Q5QheRJ2Iv4/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/Q5QheRJ2Iv4/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "키움히어로즈",
        "playlistId": "PLYxgcTlkQOzgzE356Xe4LCfvCcn_V2ckW",
        "position": 1,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "Q5QheRJ2Iv4"
        },
        "videoOwnerChannelTitle": "키움히어로즈",
        "videoOwnerChannelId": "UC_MA8-XEaVmvyayPzG66IKg"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "Ii9uTtAwWWrVwl1WMYcLtNscMzA",
      "id": "UExZeGdjVGxrUU96Z3pFMzU2WGU0TENmdkNjbl9WMmNrVy4yNzQ2QjkyNTU1MjE0NkVF",
      "snippet": {
        "publishedAt": "2023-04-02T14:33:15Z",
        "channelId": "UC_MA8-XEaVmvyayPzG66IKg",
        "title": "엄마 오면 큰일났다 진짜 누가 밀가루 가지고 장난치래ㅣ히어로캠 (4.2)",
        "description": "집에서 뛰면 아래층 아저씨가 이놈한다",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/QwUohHiu9RM/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/QwUohHiu9RM/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/QwUohHiu9RM/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/QwUohHiu9RM/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/QwUohHiu9RM/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "키움히어로즈",
        "playlistId": "PLYxgcTlkQOzgzE356Xe4LCfvCcn_V2ckW",
        "position": 2,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "QwUohHiu9RM"
        },
        "videoOwnerChannelTitle": "키움히어로즈",
        "videoOwnerChannelId": "UC_MA8-XEaVmvyayPzG66IKg"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "IJNxsxHf19QY-SmmWe5ZZhm53kI",
      "id": "UExZeGdjVGxrUU96Z3pFMzU2WGU0TENmdkNjbl9WMmNrVy42MTgyQzhGNTY1M0Q0OERE",
      "snippet": {
        "publishedAt": "2023-04-02T09:24:31Z",
        "channelId": "UC_MA8-XEaVmvyayPzG66IKg",
        "title": "아니 개막하자마자 이틀 연속 끝내기요??",
        "description": "어쩌다보니 개막 기념 고척 워터밤🌊",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/F4Jnx4-RDww/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/F4Jnx4-RDww/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/F4Jnx4-RDww/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/F4Jnx4-RDww/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/F4Jnx4-RDww/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "키움히어로즈",
        "playlistId": "PLYxgcTlkQOzgzE356Xe4LCfvCcn_V2ckW",
        "position": 3,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "F4Jnx4-RDww"
        },
        "videoOwnerChannelTitle": "키움히어로즈",
        "videoOwnerChannelId": "UC_MA8-XEaVmvyayPzG66IKg"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "jZ7WE6o1EmKuF3YQx7kX9s2P_0k",
      "id": "UExZeGdjVGxrUU96Z3pFMzU2WGU0TENmdkNjbl9WMmNrVy4wMDJEQzNFRDFFRjYyRjRF",
      "snippet": {
        "publishedAt": "2023-04-02T08:16:43Z",
        "channelId": "UC_MA8-XEaVmvyayPzG66IKg",
        "title": "고척돔에 피어난 장미🌹 하이키(H1-KEY) 시구&그라운드공연",
        "description": "#하이키 #h1key Rose Blossom\n나는 건물 사이에 피어난 장미 / 삭막한 이 도시가 아름답게 물들 때까지\n고갤 들고 버틸게 끝까지 / 모두가 내 향길 맡고 취해 웃을 때까지🌹",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/5bVte7D4ia0/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/5bVte7D4ia0/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/5bVte7D4ia0/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/5bVte7D4ia0/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/5bVte7D4ia0/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "키움히어로즈",
        "playlistId": "PLYxgcTlkQOzgzE356Xe4LCfvCcn_V2ckW",
        "position": 4,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "5bVte7D4ia0"
        },
        "videoOwnerChannelTitle": "키움히어로즈",
        "videoOwnerChannelId": "UC_MA8-XEaVmvyayPzG66IKg"
      }
    }
  ],
  "pageInfo": {
    "totalResults": 908,
    "resultsPerPage": 5
  }
}*/

  //ExpireTime Check

  u2dataResponse = getItemWithExpireTime("u2dataResponse");

  if (
    u2dataResponse == "" ||
    u2dataResponse == null ||
    u2dataResponse == "undefined"
  ) {
    console.log("u2dataResponse check");
    request.execute(function (response) {
      /*if (Array.isArray(response)){	*/
      var playlistItems = response.result.items;
      if (playlistItems) {
        $.each(playlistItems, function (index, item) {
          if (
            item.snippet.title != "Private video" &&
            item.snippet.title != "Deleted video"
          ) {
            console.log(item.snippet.title);
            displayResult(item.snippet);
          }
        });
      } else {
        $("#video-container").html("Sorry you have no uploaded videos");
      }

      var stairsActThis = null;

      u2dataResponse = response;
      // localStorage.setItem with ExpireTime
      setItemWithExpireTime(
        "u2dataResponse",
        u2dataResponse,
        6 * 60 * 1000 * 60
      ); //유효시간 6시간 임시변경 처리
      u2dataResponse = JSON.parse(localStorage.getItem("u2dataResponse"));
      /* }*/
    });
  } else {
    console.log("u2dataResponse Data Reload");
    var playlistItems = u2dataResponse.result.items;
    if (playlistItems) {
      $.each(playlistItems, function (index, item) {
        if (
          item.snippet.title != "Private video" &&
          item.snippet.title != "Deleted video"
        ) {
          console.log("title : " + item.snippet.title);
          displayResult(item.snippet);
        }
      });
    } else {
      $("#video-container").html("Sorry you have no uploaded videos");
    }
  }

  // setItemWithExpireTime("u2dataResponse_test", u2dataResponse, 60*1000*60)
}

// 만료 시간과 함께 데이터를 저장
function setItemWithExpireTime(keyName, keyValue, tts) {
  // localStorage에 저장할 객체
  const obj = {
    result: keyValue,
    expire: Date.now() + tts,
  };

  // 객체를 JSON 문자열로 변환
  const objString = JSON.stringify(obj);

  // setItem
  window.localStorage.setItem(keyName, objString);
}

// 만료 시간을 체크하며 데이터 읽기
function getItemWithExpireTime(keyName) {
  // localStorage 값 읽기 (문자열)
  const objString = window.localStorage.getItem(keyName);

  // null 체크
  if (!objString) {
    return null;
  }

  // 문자열을 객체로 변환
  const obj = JSON.parse(objString);

  // 현재 시간과 localStorage의 expire 시간 비교
  if (Date.now() > obj.expire) {
    // 만료시간이 지난 item 삭제
    window.localStorage.removeItem(keyName);

    // null 리턴
    return null;
  }

  // 만료기간이 남아있는 경우, value 값 리턴
  return obj.result;
}

// Create a listing for a video.
function displayResult(videoSnippet) {
  var title = videoSnippet.title;
  var videoId = videoSnippet.resourceId.videoId;
  // var thumbnails = videoSnippet.thumbnails.medium.url;
  var thumbnails;
  if (title != "Deleted video") {
    thumbnails = videoSnippet.thumbnails.medium.url;
  }

  var description = videoSnippet.description;
  var publishedAt = videoSnippet.publishedAt;

  var linkCheck = document.location.href;
  var device;
  if (linkCheck.indexOf("mobile") > 0) {
    device = "/mobile";
  } else {
    device = "";
  }

  var li_list = $("<li></li>");
  var alink = $(
    "<a href=https://youtu.be/" +
      videoId +
      "  title='" +
      title +
      "' class='item-box' target=\"_blank\"></a>"
  );
  var image_dt =
    '<div class="photo"><img src=\'' +
    thumbnails +
    "'  alt=\"youtube " +
    title +
    ' 영상 섬네일 " /></div>';

  li_list.append(alink);
  alink.append(image_dt);
  alink.append(
    '<div class="txt-box"><div class="txt" >' + title + "</div></div>"
  );

  $(".youtube2020Type").append(li_list);
}

// Retrieve the next page of videos in the playlist.
function nextPage() {
  requestVideoPlaylist(playlistId, nextPageToken);
}

// Retrieve the previous page of videos in the playlist.
function previousPage() {
  requestVideoPlaylist(playlistId, prevPageToken);
}
