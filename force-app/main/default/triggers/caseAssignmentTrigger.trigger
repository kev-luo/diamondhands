trigger caseAssignmentTrigger on Case(after update) {
  Database.DMLOptions dmlOpts = new Database.DMLOptions();
  dmlOpts.assignmentRuleHeader.useDefaultRule = true;
  for (Case c : Trigger.new) {
    c.setOptions(dmlOpts);
    update c;
  }
}
