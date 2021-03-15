public with sharing class CoinListCallout {
  @AuraEnabled
  public static Object makeGetCallout(String url) {
    Http http = new Http();
    HttpRequest request = new HttpRequest();
    request.setEndpoint(url);
    request.setMethod('GET');

    HttpResponse response = http.send(request);
    Object result = (Object) JSON.deserializeUntyped(response.getBody());
    return result;
  }

  @AuraEnabled
  public static List<Portfolio__c> retrievePortfolios() {
    List<Portfolio__c> portfoliosList = [
      SELECT
        Id,
        Name,
        (
          SELECT Id, CreatedDate, Name__c, Market_Price__c, Quantity__c
          FROM Crypto_Orders__r
          ORDER BY CreatedOn__c DESC
        )
      FROM Portfolio__c
    ];

    return portfoliosList;
  }
}
