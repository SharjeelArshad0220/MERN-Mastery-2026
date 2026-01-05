//Day 10 .filters()
const numbers=[500, 1500, 300, 4000, 2500, 100];
const cheapPrices=numbers.filter((item) => item<1000);
console.log(`Cheap Prices Available are:`,cheapPrices);

const agents = [
  { name: "Ali", status: "Active" },
  { name: "Sara", status: "Inactive" },
  { name: "Bilal", status: "Active" }
];
const activeAgents=agents.filter((item) => item.status==="Active");
console.log(`Active agents are :\n`,activeAgents);

const emails = [
  { from: "boss@company.com", subject: "Meeting Update", isSpam: false, isStarred: true },
  { from: "offer@scam.com", subject: "You won 1 Million!", isSpam: true, isStarred: false },
  { from: "ali@friends.com", subject: "Dinner tonight?", isSpam: false, isStarred: false },
  { from: "netflix@updates.com", subject: "New Show Alert", isSpam: false, isStarred: false },
  { from: "prince@nigeria.com", subject: "Business Proposal", isSpam: true, isStarred: false }
];
const inboxEmails=emails.filter((email) => !email.isSpam);
const starredEmails=emails.filter((email) => email.isStarred);
console.log(`inbox emails are`,inboxEmails);
console.log(`starred emails are`, starredEmails);