// If link exists redirect to it.
function redirect(countryCode) {
    if (countryData[0][countryCode].link == null) {
        return;
    } else {
        window.location.href = countryData[0][countryCode].link;
    }
}
