function sendLeaveEmail(e) {

  var row = e.values;

  var name = row[3];
  var email = row[4];
  var department = row[5];
  var startDate = row[6];
  var endDate = row[7];
  var reason = row[8];

  var today = Utilities.formatDate(
    new Date(),
    Session.getScriptTimeZone(),
    "dd MMMM yyyy"
  );

  var subject = "Leave Application Letter";

  var letter =
"To,\n" +
"The Principal,\n\n" +

"Subject: Application for Leave\n\n" +

"Respected Sir/Madam,\n\n" +

"I, " + name +
", a student of the " + department +
" department, respectfully request leave from " +
startDate + " to " + endDate +
" due to " + reason + ".\n\n" +

"I kindly request you to grant me leave for the above-mentioned period. I assure you that I will complete all the missed classes and assignments after my return.\n\n" +

"I shall be grateful for your kind consideration.\n\n" +

"Thank you.\n\n" +

"Yours faithfully,\n\n" +

name + "\n" +
"Department: " + department + "\n" +
"Email: " + email + "\n" +
"Date: " + today;

  GmailApp.sendEmail(email, subject, letter);

}
