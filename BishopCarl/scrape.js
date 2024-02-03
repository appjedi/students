const rp = require('request-promise');
const url = '';

async function scrape(url) {
    const html = await rp(url);
    return html;
}
async function getHTML(url) {
    const html = await scrape(url);
    console.log(html);
}
async function main() {
    const html = await scrape(url);
    const list = html.split("http");

    list.forEach(element => {
        console.log("http" + element.split('"')[0]);
    });
}
const postOptions = {
    method: 'POST',
    uri: 'http://api.posttestserver.com/post',
    body: {
        some: 'payload'
    },
    json: true // Automatically stringifies the body to JSON
};
const getOptions = {
    uri: 'https://api.github.com/user/repos',
    qs: {
        access_token: 'xxxxx xxxxx' // -> uri + '?access_token=xxxxx%20xxxxx'
    },
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true // Automatically parses the JSON string in the response
};
async function request(options) {
    rp(options)
        .then(function (parsedBody) {
            // POST succeeded...
        })
        .catch(function (err) {
            // POST failed...
        });
}
main();
//getHTML(url);
