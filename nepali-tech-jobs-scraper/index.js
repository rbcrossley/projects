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
  growbydata();
  hazesoft();
  gurzu();
  softbenz();
  greenticknepal();
  threatnix();
  esewa();
  hitachi();
  proxmed();
  raralabs();
  ibriz();
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

async function growbydata() {
  const result = await request.get("https://growbydata.com/career-overview/");
  const $ = cheerio.load(result);
  $(
    "#accordion2 > div > div.accordion-heading > h3 > a > span.gbd-careers-title"
  ).each((index, element) => {
    console.log($(element).text().trim() + " " + "growbydata");
  });
}

async function hazesoft() {
  const result = await request.get("https://hazesoft.co/careers/");
  const $ = cheerio.load(result);
  $(
    "body > main > main > section.pb-130 > div > div > div > div > div.content-block.mt-70 > a > h3"
  ).each((index, element) => {
    console.log($(element).text().trim() + " " + "hazesoft");
  });
}

async function esewa() {
  const result = await request.get(
    "https://career.f1soft.com/organizations/esewa"
  );
  const $ = cheerio.load(result);
  $(
    "body > div.job-listing-area.pt-100.pb-70 > div > div > div.col-lg-8 > div > div > div > div > div > div.content > h3 > a"
  ).each((index, element) => {
    console.log($(element).text().trim() + " " + "esewa");
  });
}

async function hitachi() {
  const result = await request.get(
    "https://careers.hitachi.com/search/jobs/in/country/nepal"
  );
  const $ = cheerio.load(result);
  $(
    "#search-jobs-in-country-nepal > div.page-container.fadeIn > div.tal > div > div.page-section-1 > div > div.medium-8.large-9.columns > div > div.jobs-section__inner > div.jobs-section__list.space-2 > div > div > div.large-5.columns > a"
  ).each((index, element) => {
    console.log($(element).text().trim() + " " + "hitachi");
  });
}

async function proxmed() {
  const result = await request.get("https://www.proxmed.com.au/open-positions");
  const $ = cheerio.load(result);
  $($("[id^=comp] > h5 > span > span > span > span")).each((index, element) => {
    console.log($(element).text().trim() + " " + "proxmed");
  });
}

async function raralabs() {
  const result = await request.get("https://raralabs.com/career");
  const $ = cheerio.load(result);
  $(
    "body > div > div > div.desktop\\:max-w-6xl.desktop\\:px-8.mx-auto.desktop\\:py-6.my-8 > div.pt-16 > ul > li > div > h4"
  ).each((index, element) => {
    console.log($(element).text().trim() + " " + "raralabs");
  });
}

//"div.elementor-widget-heading > div > h4

async function ibriz() {
  const result = await request.get("https://ibriz.ai/careers/");
  const $ = cheerio.load(result);
  $(
    "#Roles > div > div > div > section.elementor-section.elementor-inner-section.elementor-element.elementor-element-f06038b.elementor-hidden-phone.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div.elementor-column.elementor-col-33.elementor-inner-column.elementor-element.elementor-element-ccd7139 > div > div.elementor-widget-heading > div > h4"
  ).each((index, element) => {
    console.log($(element).text().trim() + " " + "ibriz.ai");
  });
}

async function gurzu() {
  const result = await request.get("https://careers.gurzu.net/jobs");
  const $ = cheerio.load(result);
  $("#jobs_grid > a > div > div > h3 > span").each((index, element) => {
    console.log($(element).text().trim() + " " + "gurzu");
  });
}

async function softbenz() {
  const result = await request.get("https://softbenz.com/careers");
  const $ = cheerio.load(result);
  $(
    "#services > div > div.ttm-boxes-quickservicebox.position-relative.mt-10 > div > div > div > div > div.featured-title > h4"
  ).each((index, element) => {
    console.log($(element).text().trim() + " " + "softbenz");
  });
}

async function greenticknepal() {
  const result = await request.get("https://gtn.com.np/our-vacancies/");
  const $ = cheerio.load(result);
  $(
    "#panel-1494-1-0-0 > div > div > div > div.sjb-listing > div > div > div > header > div > div.col-md-11.col-sm-10 > div > div.col-md-5 > div > h4 > a > span"
  ).each((index, element) => {
    console.log($(element).text().trim() + " " + "greenticknepal");
  });
}
async function threatnix() {
  const result = await request.get("https://threatnix.io/career");
  const $ = cheerio.load(result);

  $("body > section > div > div > div > h3").each((index, element) => {
    console.log($(element).text().trim() + " " + "threatnix");
  });
}
async function infinite() {
  const result = await request.get(
    "https://sjobs.brassring.com/TGNewUI/Search/Home/Home?partnerid=26656&siteid=5008#Entity=Infinite%20Software%20Services%20Nepal%20Pvt.%20Ltd.&keyWordSearch=&locationSearch="
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
