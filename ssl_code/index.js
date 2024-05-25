const sslChecker = require("ssl-checker");
const fs = require("fs");

// Read domain names from a file and split them into an array
const domainNames = fs
  .readFileSync("domain_names.txt", "utf-8")
  .split("\n")
  .map((domain) => domain.trim());

// Function to clean up the domain name
function cleanDomainName(domain) {
  // Remove "https://" if present
  let cleanedDomain = domain.replace(/^https:\/\//, "");

  // Remove trailing "/"
  cleanedDomain = cleanedDomain.replace(/\/$/, "");

  return cleanedDomain;
}
// Iterate through the array of domain names
domainNames.forEach((domainName) => {
  const cleanedDomain = cleanDomainName(domainName);

  sslChecker(cleanedDomain, "GET", 443)
    .then((result) => {
      if (result.daysRemaining < 15) {
        console.log(
          `${domainName}: SSL certificate is expiring in ${result.daysRemaining} days!`
        );
      }
    })
    .catch((error) => {
      console.error(
        `${domainName}: Error checking SSL certificate - ${error.message}`
      );
    })
    .finally(() => {
      // Code in this block will be executed regardless of success or failure
    });
});
