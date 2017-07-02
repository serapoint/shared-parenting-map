function getText(countryCode) {
    if (countryData[0][countryCode].text === null) {
        return "No data available for this country";
    } else {
        return countryData[0][countryCode].text;
    }
}
