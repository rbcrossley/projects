```
const https = require("https");
const cheerio = require("cheerio");

// Function to fetch data from a URL
function fetchData(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
        });
        res.on("end", () => {
          resolve(data);
        });
      })
      .on("error", (err) => {
        reject(err);
      });
  });
}

// Keywords to search for in job titles
const keywords = [
  "administrator",
  "linux",
  "devops",
  "database",
  "administration",
  "network",
];

// Function to check if a job title contains any of the keywords
function containsKeyword(title) {
  return keywords.some((keyword) =>
    title.toLowerCase().includes(keyword.toLowerCase())
  );
}

// Function to scrape a page
async function scrapePage_merojob(pageNumber) {
  const url = `https://merojob.com/category/it-telecommunication/?page=${pageNumber}`;
  try {
    const html = await fetchData(url);
    const $ = cheerio.load(html);

    // Find all anchor tags with title attribute
    $("a[title]").each((index, element) => {
      const title = $(element).attr("title");
      // Check if the job title contains any of the keywords
      if (title && containsKeyword(title)) {
        console.log(`Job Title: ${title}`);
        console.log("Job URL:", $(element).attr("href"));
      }
    });
  } catch (error) {
    console.error(`Error scraping page ${pageNumber}:`, error);
  }
}

// Define the range of pages you want to scrape
const startPage = 1;
const endPage = 5; // Change this to the desired end page

// Iterate over the range of pages and scrape each one
for (let page = startPage; page <= endPage; page++) {
  scrapePage_merojob(page);
}
```
I'm just making backups here.
This is useful
```
const url = "https://www.kumarijob.com/job-listing/it-jobs-in-nepal";
https.get(url, (res) => {
  let data = "";
  res.on("data", (chunk) => {
    data += chunk;
  });
  res.on("end", () => {
    console.log(data);
  });
});
```
https://nanonets.com/blog/web-scraping-with-node-js/