const scraper = require("../scraper");
const assert = require("assert");

describe("Scraper", () => {
  // Get full list of manga and url from server
  describe("_getFullMangaList()", () => {
    it("should be an object containing data from website", done => {
      return new Promise(resolve => {
        assert.equal(scraper._getFullMangaList(), typeof Object);
        done();
      }).then(done);
    });
  });
});
