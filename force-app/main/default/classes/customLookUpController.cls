public with sharing class customLookUpController {
  @AuraEnabled
  public static List<Portfolio__c> fetchLookUpValues(String searchKeyWord) {
    String searchKey = '%' + searchKeyWord + '%';
    List<Portfolio__c> returnList = Database.query(
      'SELECT Id, Name FROM Portfolio__c WHERE Name LIKE: searchKey'
    );
    return returnList;
  }
}
