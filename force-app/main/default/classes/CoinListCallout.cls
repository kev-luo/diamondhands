public with sharing class CoinListCallout {
  @AuraEnabled
  public static List<Object> makeGetCallout() {
    Http http = new Http();
    HttpRequest request = new HttpRequest();
    request.setEndpoint('https://api.coingecko.com/api/v3/coins/list');
    request.setMethod('GET');

    HttpResponse response = http.send(request);
    List<Object> results = (List<Object>)JSON.deserializeUntyped(response.getBody());
    return results;
  }
}
