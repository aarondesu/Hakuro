const rq = require("request-promise");
const $ = require("cheerio");

const baseUrl = "https://www.mangareader.net";

module.exports = {
  // Gets the full list of manga from the url
  _getFullMangaList: async () => {
    return rq(`${baseUrl}/alphabetical`)
      .then(html => {
        // Output template
        let output = {
          entries: 0,
          manga: []
        };

        // Gets the number of entries on the list
        output.entries = $("ul.series_alpha > li > a", html).length;

        // Gets the name and url of each and every manga
        $("ul.series_alpha > li > a", html)
          .toArray()
          .map(manga => {
            output.manga.push({
              name: manga.firstChild.data,
              href: manga.attribs.href
            });
          });

        return output;
      })
      .catch(error => {
        // Handle error
        return "Unable to scrap data from website: Reason" + error;
      });
  }
};
