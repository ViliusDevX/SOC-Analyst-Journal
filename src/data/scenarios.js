export const scenarios = [
  {
    id: 1,
    title: "Phishing → PowerShell → Persistence",
    severity: "High",
    summary:
      "Suspicious email attachment leads to hidden encoded PowerShell execution, external HTTPS traffic, and registry persistence.",
    evidence: [
      "Sender: invoices@micr0soft-support.com",
      "SPF: FAIL",
      "Attachment: invoice_review.xlsm",
      "WINWORD.EXE → powershell.exe -nop -w hidden -enc",
      "powershell.exe connected to 91.210.177.18:443",
      "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run\\Updater",
    ],
    myAnswers: [
      "1. Phishing -> malicious file -> powershell execution -> connection to external ip -> persistence",
      "2. Malicious file execution by opening phishing emails attachment",
      "3. Connection to external ip and registry task creation",
      "4. isolate the host",
      "5. Powershell logs, Sysmon",
      "6. (skipping this for now)",
    ],
  },

  {
    id: 2,
    title: "DNS Tunneling & Data Exfiltration",
    severity: "High",
    summary:
      "High-entropy Base64-like DNS queries repeatedly sent over port 53 after opening an email attachment.",
    evidence: [
      "dGhpcy1pcy1zZWNyZXQ=.sync-data-service.com",
      "Y29uZmlkZW50aWFsLWZpbGU=.sync-data-service.com",
      "Repeated every 30 seconds",
      "Traffic only over port 53",
      "No corresponding browser activity",
      "Host recently opened email attachment",
    ],
    myAnswers: [
      "1. data exfil through DNS tunneling",
      "2. Because of high entropy queries",
      "3. Investigate domains and sent traffic",
      "4. Block suspicious domains",
      "5. Possible DNS tunneling detection, high entropy suspicious domains",
    ],
  },

  {
    id: 3,
    title: "Credential Attack & Possible Lateral Movement",
    severity: "Critical",
    summary:
      "Multiple failed logons followed by privileged access, WMI execution, and SMB admin share activity.",
    evidence: [
      "4625 Failed logon",
      "4625 Failed logon",
      "4624 Successful logon",
      "4672 Special privileges assigned",
      'wmic /node:FILESERVER process call create "cmd.exe"',
      "\\\\FILESERVER\\c$",
    ],
    myAnswers: [
      "1. Credential stuffing -> data exfil",
      "2. T1041 (Exfiltration Over C2 Channel) and T1110.003 (Brute Force: Password Spraying)",
      "3. Reset credentials, then isolate host",
      "4. Accessed account with multiple 4625's",
      "5. 4672 logs",
    ],
  },

  {
    id: 4,
    title: "Potential Apache False Positive",
    severity: "Medium",
    summary:
      "Critical Apache RCE reported on internet-facing server behind reverse proxy with uncertain backend patching.",
    evidence: [
      "Apache 2.4.49",
      "Critical RCE vulnerability",
      "Public exploit available",
      "Server behind reverse proxy",
      "Backend patch level uncertain",
      "No exploit attempts in logs",
      "Host segmented from critical infrastructure",
    ],
    myAnswers: [
      "1. No, because of highly possible false banner grabbing",
      "2. Backend patch level, and then vulnerability risk level",
      "3. Because server is behind reverse proxy, so scanner is showing misleading info",
      "4. Low/Medium, but must be checked",
      "5. Host segmentation",
    ],
  },

  {
    id: 5,
    title: "Multi-Alert Incident Correlation",
    severity: "Critical",
    summary:
      "Multiple alerts indicate potential phishing compromise, C2 traffic, encoded PowerShell execution, and DNS tunneling.",
    evidence: [
      "WINWORD.EXE → powershell.exe -enc",
      "Repeated HTTPS traffic to newly registered domain every 60 seconds",
      "User reports slowdown after opening invoice attachment",
      "Outdated Apache version behind reverse proxy",
      "Long Base64-like DNS queries detected",
    ],
    myAnswers: [
      "1. A, B, E, C, D",
      "2. A and E, C and A, A and B, B and E",
      "3. D",
      "4. A",
      "5. Obfuscated powershell command from Word, repeated traffic to new domains, weird DNS queries",
    ],
  },
];