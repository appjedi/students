/**
 * Script to process the submitted form data of the form in file
 * artsdealer.html 
 */

/**
 * Sets the value of the hidden form field to a string with the formatted
 * submitted form data. If invalid form data is submitted, the hidden form
 * field value is set to an empty string. Form fields have to meet the 
 * following criteria:
 * title: must be an non-empty string
 * artist: must be an non-empty string
 * year: must be a postiive integer value or empty
 * price: must be a non-negative value
 * description: any string, possibly an empty string
 * 
 * @returns {boolean} true 
 */
function prepareSummary() {
    const artwork = {
        title: document.getElementById("title").value,
        artist: document.getElementById("artist").value,
        year: document.getElementById("year").value,
        price: document.getElementById("price").value,
        description: document.getElementById("description").value,
    }
    document.forms[0].summary.value = "";
    if (validateAndParseArtworkData(artwork))
    {
        formatSummary(artwork);

    } else {
        document.forms[0].summary.value = "";
    }
    return true;
}

/**
 * Validates the submitted object properties. Properties have to meet the 
 * following criteria:
 *  artwork.title: must be an non-empty string
 *  artwork.artist: must be an non-empty string
 *  artwork.year: must be an empty string or represent a non-negative integer
 *  artwork.price: must be a non-negative value
 * The price and year property are set to the number they represent. If 
 * artwork.year is an empty string, artwork.year is set to the value NaN.
 * 
 * @param {object} artwork the object containing the submitted artwork data
 * @param {string} artwork.title the title of the artwork
 * @param {string} artwork.artist the name of the artist
 * @param {string} artwork.year the year the artwork was created
 * @param {string} artwork.price the sales price
 * @param {string} artwork.description the description of the artwork
 * @returns {boolean} false if invalid data is submitted; otherwise, 
 * returns true
 */
function validateAndParseArtworkData(artwork) {
    let errorCount = 0;
    if (!artwork) {
        return false;
    }
    if (artwork.title === "") {
        ++errorCount;
    }
    if (artwork.artist === "") {
        ++errorCount;
    }
    if (artwork.year === "")
    {
        artwork.year = NaN;
    }else if (isNaN(artwork.year)) {
        ++errorCount;
    } else {
        const year = parseInt(artwork.year);
        if (year > 0)
        {
            artwork.year = year;
        } else {
            ++errorCount;
        }
    }
    if (isNaN(artwork.price) ||parseFloat(artwork.price) < 0) {
        ++errorCount;
    } else {
        const price = parseFloat(artwork.price);
        if (price < 0) {
            ++errorCount;
        } else {
            artwork.price = price;
        }
    }
    return (errorCount < 1);
}

/**
 * Format the data in object for dislpay in an HTML document. The formatted 
 * string has to be of the following form:
 *   {artwork.title}<br>by {artwork.artist}<br>[Year: {artwork.year}<br>]
 *   Price: {artwork.price}<br>[Description: {artwork.description}]
 * where
 *   {artwork.title} is the string artwork.title in uppercase letters
 *   {artwork.artist} is the name of the artist
 *   {artwork.price} is the value of artwork.price with two decimal digits 
 *             after the decimal point.
 *   {artwork.description} is the content of artwork.description
 * The brackets [] indicated that the included part should be omitted in case
 * artwork.year is not a number, repectively, if artwork.description is an
 * empty string. 
 * 
 * @param {object} artwork the object containing the submitted artwork data
 * @param {string} artwork.title the title of the artwork
 * @param {string} artwork.artist the name of the artist
 * @param {number} artwork.year the year the artwork was created
 * @param {number} artwork.price the sales price
 * @param {string} artwork.description the description of the artwork
 * @returns {string} the formatted string
 */
function formatSummary(artwork) {
    const price = parseFloat(artwork.price).toFixed(2);
    artwork.artist = (artwork.artist + "").toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
    const title = (artwork.title + "").toUpperCase();
    let str = `${title}<br>by ${artwork.artist}<br>`;
    if (!isNaN(title))
    {
        str += "Year: " + artwork.year + "<br>";
    }
    str+="Price: $"+ price +" <br>";
    if ((artwork.description + "").length > 100)
    {
        const desc = (artwork.description + "").substring(0, 97) + "...";
        str += "Description: " + desc;
    } else if (artwork.description!==""){
        str += "Description: " + artwork.description;
    }
    document.getElementById("summary").value=str;

//[Description: {artwork.description}]
}