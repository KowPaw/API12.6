$(function() {

  var url = 'https://restcountries.eu/rest/v2/name/';
  var countriesList = $('#countries');

  $('#search').click(searchCountries);

  function searchCountries() {
    var countryName = $('#country-name').val();
    if(!countryName.length) countryName = 'Poland';
    $.ajax({
      url: url + countryName,
      method: 'GET',
      success: showCountriesList
    });
  }

  function showCountriesList(resp) {
    countriesList.empty();
    resp.forEach(function(item) {
      $('<img>').attr('src', item.flag).appendTo(countriesList);
      $('<li>').text('Country: ' + item.name).appendTo(countriesList);
      $('<p>').text('Capital: ' + item.capital).appendTo(countriesList);
      $('<p>').text('Currency: ' + item.currencies[0].name).appendTo(countriesList);
      $('<p>').text('Language: ' + item.languages[0].name).appendTo(countriesList);
      $('<p>').text('Region: ' + item.region).appendTo(countriesList);
      $('<p>').text('Population: ' + item.population + ' people').appendTo(countriesList);
      $('<p>').text('Area: ' + item.area + ' sq. km').appendTo(countriesList);
    });
  }

})