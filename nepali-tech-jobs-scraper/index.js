const request = require("request-promise");
const cheerio = require("cheerio");
const jsdom = require("jsdom");
const axios = require("axios");

async function main() {
  logpoint();
  cedar_gate();
  chuchuro_firm();
  verisk();
  ebpearls();
  genesesolution();
  globallynepal();
  wolfmatrix();
  javra();
  infinite();
  insight_workshop();
  fusemachines();
  tekkon();
}

async function logpoint() {
  const result = await request.get(
    "https://merojob.com/employer/logpoint-nepal"
  );
  const $ = cheerio.load(result);
  $(
    "#jobs > div > div.row > div.col-md-12.mt-3.border > div > div.row.job-card.text-center.text-lg-left.px-3 > div.col-md-11.p-0.pl-lg-5.pt-lg-3 > h1 > a"
  ).each((index, element) => {
    console.log($(element).text().trim() + " " + "logpoint");
  });
}

async function cedar_gate() {
  const result = await request.get(
    "https://merojob.com/employer/cedar-gate-services-pvt-ltd/"
  );
  const $ = cheerio.load(result);
  $(
    "#jobs > div > div.row > div.col-md-12.mt-3.border > div > div.row.job-card.text-center.text-lg-left.px-3 > div.col-md-11.p-0.pl-lg-5.pt-lg-3 > h1 > a"
  ).each((index, element) => {
    console.log($(element).text().trim() + " " + "cedar");
  });
}

async function chuchuro_firm() {
  const result = await request.get(
    "https://merojob.com/employer/chuchuro-firm/"
  );
  const $ = cheerio.load(result);
  $(
    "#jobs > div > div.row > div.col-md-12.mt-3.border > div > div.row.job-card.text-center.text-lg-left.px-3 > div.col-md-11.p-0.pl-lg-5.pt-lg-3 > h1 > a"
  ).each((index, element) => {
    console.log($(element).text().trim() + " " + "chuchuro-firm");
  });
}

async function verisk() {
  const result = await request.get(
    "https://www.jobsnepal.com/employer/verisk-nepal-pvt-ltd/9531"
  );
  const $ = cheerio.load(result);
  $(
    "#app > div > div > div.row.my-4 > div.col-md-8.py-2.px-0.top-content > div > div > div > div.card-body > h2 > a"
  ).each((index, element) => {
    console.log($(element).text().trim() + " " + "verisk");
  });
}

async function ebpearls() {
  const result = await request.get(
    "https://jobaxle.com/employer/eb-pearls-173"
  );
  const $ = cheerio.load(result);
  $(
    "body > div.wrapper > div.main > div > div > div > div > div.col-md-9.col-sm-8 > div > div > div > div > div > h4.job-title > a"
  ).each((index, element) => {
    console.log($(element).text().trim() + " " + "eb pearls");
  });
}

async function genesesolution() {
  const result = await request.get(
    "https://jobaxle.com/employer/genese-solution-870"
  );
  const $ = cheerio.load(result);
  $(
    "body > div.wrapper > div.main > div > div > div > div > div.col-md-9.col-sm-8 > div > div > div > div > div > h4.job-title > a"
  ).each((index, element) => {
    console.log($(element).text().trim() + " " + "genese solution");
  });
}

async function globallynepal() {
  const result = await request.get(
    "https://jobaxle.com/employer/globally-nepal-pvt-ltd-8036"
  );
  const $ = cheerio.load(result);
  $(
    "body > div.wrapper > div.main > div > div > div > div > div.col-md-9.col-sm-8 > div > div > div > div > div > h4.job-title > a"
  ).each((index, element) => {
    console.log($(element).text().trim() + " " + "globally nepal");
  });
}

async function wolfmatrix() {
  const result = await request.get(
    "https://jobaxle.com/employer/wolfmatrix-1270"
  );
  const $ = cheerio.load(result);
  $(
    "body > div.wrapper > div.main > div > div > div > div > div.col-md-9.col-sm-8 > div > div > div > div > div > h4.job-title > a"
  ).each((index, element) => {
    console.log($(element).text().trim() + " " + "wolfmatrix");
  });
}

async function javra() {
  const result = await request.get(
    "https://javra.com/career-opportunities-at-javra"
  );
  const $ = cheerio.load(result);
  $("#nepal > a > div > div > div.col-md-7 > h3").each((index, element) => {
    console.log($(element).text().trim() + " " + "javra");
  });
}

async function infinite() {
  const result = await request.get(
    "https://sjobs.brassring.com/TGNewUI/Search/Home/Home?partnerid=26656&siteid=5008#keyWordSearch=&locationSearch=Nepal"
  );
  //console.log(result)
  const $ = cheerio.load(result);
  //console.log($);
  console.log($("#Job_0").text());
}

async function insight_workshop() {
  const results = await request.get(
    "https://api.insightworkshop.io/careers/?format=json"
  );
  const jobList = JSON.parse(results);
  for (i = 0; i < jobList.length; i++) {
    const slug = jobList[i].slug;
    console.log(slug.trim() + " " + "insight workshop");
  }
}

async function fusemachines() {
  const results = await request.get(
    "https://api-website-v1.fusemachines.com/api/v1/careers?status=open&city=&_=1716437215453"
  );
  const jobList = JSON.parse(results);
  for (i = 0; i < jobList.length; i++) {
    if (jobList[i].country_id === "Nepal") {
      const title = jobList[i].title;
      console.log(title.trim() + " " + "fusemachines");
    }
  }
}

async function tekkon() {
  try {
    const response = await axios.get(
      "https://tekkon.com.np/?feed=job_feed&job_types=freelance%2Cfull-time%2Cinternship%2Cpart-time%2Ctemporary&search_location&job_categories&search_keywords"
    );
    const dom = new jsdom.JSDOM(response.data);
    const titles = dom.window.document.querySelectorAll("item title");
    titles.forEach((title) => {
      console.log(title.textContent.trim() + " " + "tekkon");
    });
  } catch (error) {
    console.error("Error fetching the feed:", error);
  }
}

main();
