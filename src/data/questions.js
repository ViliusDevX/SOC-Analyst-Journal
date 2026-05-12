export const questions = [
  {
    id: 1,
    topic: "Authentication",
    difficulty: "Medium",
    question:
      "A SIEM alert shows multiple failed logins, one successful login, and Event ID 4672 shortly afterward. The account used is a privileged service account. What is the most likely concern?",
    options: [
      "Scheduled task execution",
      "Privileged account compromise",
      "DNS tunneling",
      "Web application attack",
    ],
    myAnswer:
      "B, because multiple failed logins followed by 4672 are highly suspicious.",
  },
  {
    id: 2,
    topic: "Phishing",
    difficulty: "Medium",
    question:
      "An analyst detects the process chain: OUTLOOK.EXE → WINWORD.EXE → powershell.exe -nop -w hidden -enc. What is the most likely initial attack vector?",
    options: [
      "SQL injection",
      "Malicious phishing attachment",
      "Password spraying",
      "ARP poisoning",
    ],
    myAnswer:
      "B, because this behavior is likely caused by a malicious file.",
  },
  {
    id: 3,
    topic: "Vulnerability Management",
    difficulty: "Medium",
    question:
      "A scanner reports a critical Apache vulnerability on a public web server. The server is behind a reverse proxy and the backend patch level is unknown. What should the analyst do first?",
    options: [
      "Ignore the finding",
      "Shut down the server immediately",
      "Validate the vulnerability manually",
      "Restore from backup",
    ],
    myAnswer:
      "C, because the server is behind a reverse proxy, so the report may be a false positive caused by banner grabbing.",
  },
];