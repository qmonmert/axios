function performGetRequest() {
    var resultElement = document.getElementById('getResult');
    resultElement.innerHTML = '';

    axios.get('https://www.strava.com/api/v3/athlete/activities?access_token=7352ab3baeb484779ced1f9a35c03bcd4340a403&page=1&per_page=1')
        .then(function(response) {
            resultElement.innerHTML = generateSuccessHTMLOutput(response);
        })
        .catch(function(error) {
            resultElement.innerHTML = generateErrorHTMLOutput(response);
        });
}

function clearOutput() {
    var resultElement = document.getElementById('getResult');
    resultElement.innerHTML = '';
}

function generateSuccessHTMLOutput(response) {
    return '<h4>Result :</h4>' +
        '<h5>Status :</h5>' +
        '<pre>' + response.status + ' ' + response.statusText + '</pre>' +
        '<h5>Headers :</h5>' +
        '<pre>' + JSON.stringify(response.headers, null, '\t') + '</pre>' +
        '<h5>Data :</h5>' +
        '<pre>' + JSON.stringify(response.data, null, '\t') + '</pre>';
}

function generateErrorHTMLOutput(error) {
    return '<h4>Result :</h4>' +
        '<h5>Message :</h5>' +
        '<pre>' + error.message + '</pre>' +
        '<h5>Status :</h5>' +
        '<pre>' + error.status + ' ' + error.statusText + '</pre>' +
        '<h5>Headers :</h5>' +
        '<pre>' + JSON.stringify(error.headers, null, '\t') + '</pre>' +
        '<h5>Data :</h5>' +
        '<pre>' + JSON.stringify(error.data, null, '\t') + '</pre>';
}