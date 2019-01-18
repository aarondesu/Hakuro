// Import dependencies
const rq = require("request-promise");
const tough = require("tough-cookie");
const $ = require("cheerio");

// Base url
const mangahereUrl = "http://www.mangahere.cc";

// Set cookie request
// Needed to bypass adult filter
var cookie = new tough.Cookie({
  key: "isAdult",
  value: "1",
  domain: "www.mangahere.cc",
  expires: 999999
});

var cookieJar = rq.jar();
cookieJar.setCookie(cookie.toString(), mangahereUrl);

module.exports = {
  // Gets full list from mangahere/mangalist
  _getFullMangaList: () => {
    return rq(`${mangahereUrl}/mangalist`)
      .then(html => {
        const output = {
          entries: 0,
          manga: []
        };

        output.entries = $("p.browse-new-block-content > a", html).length;
        $("p.browse-new-block-content > a", html)
          .toArray()
          .map(manga => {
            output.manga.push({
              id: manga.attribs.href.replace("manga", "").replace(/\\|\//g, ""),
              name: manga.attribs.title,
              href: manga.attribs.href
            });
          });

        return output;
      })
      .catch(error => {
        console.log(error);
      });
  },
  // Gets list of manga from 'mangahere/directory'
  _getMangaList: page => {
    return rq(`${mangahereUrl}/directory/${page}.htm`)
      .then(html => {
        const list = {
          page: page,
          entries: 0,
          manga: []
        };

        // Get the number of manga from the list
        list.entries = $("ul.manga-list-1-list > li", html).length;

        // Iterate
        $("ul.manga-list-1-list > li", html)
          .toArray()
          .map(mangaItem => {
            list.manga.push({
              name: mangaItem.children[3].firstChild.attribs.title, // Get the title part of the <a> element
              href: mangaItem.children[3].firstChild.attribs.href
                .replace("manga", "")
                .replace(/\\|\//g, ""), // Get the href part of the <a> element
              thumbnail: mangaItem.children[1].firstChild.attribs.src, // Get the src part of the <img> element  //
              latestChapter: mangaItem.children[5].firstChild.firstChild.data, // Get the text part of the <a> element. Latest/# of chapters
              rating: mangaItem.children[7].children[11].firstChild.data
            });
          });

        return list;
      })
      .catch(error => {
        console.log(error);
      });
  },
  // Gets specific details from the specified manga
  _getMangaInfo: mangaUrl => {
    var options = {
      url: `${mangahereUrl}/manga/${mangaUrl}/`,
      jar: cookieJar
    };

    return rq(options)
      .then(html => {
        // Initialize manga info object
        const mangaInfo = {
          name: "",
          author: "",
          cover: "",
          description: "",
          latestChapterDate: "",
          rating: "",
          genres: [],
          chapters: []
        };

        // Set the values
        mangaInfo.name = $("span.detail-info-right-title-font", html).text();
        mangaInfo.author = $("p.detail-info-right-say > a", html).text();
        mangaInfo.cover = $("div.detail-info-cover > img", html).attr("src");
        mangaInfo.description = $("p.fullcontent", html).text();
        mangaInfo.latestChapterDate = $(
          "span.detail-main-list-title-right",
          html
        )
          .first()
          .text()
          .replace("Last Updated: ", "");
        mangaInfo.rating = $(".item-score", html).text();
        mangaInfo.genres = $("p.detail-info-right-tag-list > a", html)
          .toArray()
          .map(genre => {
            return genre.firstChild.data;
          });
        mangaInfo.chapters = $("#chapterlist > div > ul > li > a", html)
          .toArray()
          .map(chapterEl => {
            return {
              href: chapterEl.attribs.href,
              name: chapterEl.attribs.title,
              release: chapterEl.children[1].children[3].firstChild.data
            };
          });

        return mangaInfo;
      })
      .catch(error => {
        console.error(error);
      });
  }
};
