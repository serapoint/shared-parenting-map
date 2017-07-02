// If text for given country existst, return it. If link also exists for such country, add a "Click on country for more information" at the end of the tet and return it.
function getText(countryCode) {
    if (countryData[0][countryCode].text == null) {
        return "No data available for this country";
    } else {
        var text = countryData[0][countryCode].text;
        if (countryData[0][countryCode].link != null) {
            text = text + " Click on country for more information."
        }
        return text;
    }
}
