export const scenarios = [
  {
    id: 1,
    title: "Phishing → PowerShell → Persistence",
    category: "Phishing Investigation",
    status: "Raw Answer",
    sections: [
      {
        title: "Email Gateway Alert",
        items: [
          "Sender: invoices@micr0soft-support.com",
          "SPF: FAIL",
          "Attachment: invoice_review.xlsm",
        ],
      },
      {
        title: "Endpoint Logs",
        items: [
          "WINWORD.EXE → powershell.exe -nop -w hidden -enc",
        ],
      },
      {
        title: "Sysmon",
        items: [
          "powershell.exe connected to 91.210.177.18:443",
        ],
      },
      {
        title: "Registry",
        items: [
          "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run\\Updater",
        ],
      },
    ],
    tasks: [
      "Identify the attack chain.",
      "What is the MOST likely initial vector?",
      "What persistence mechanism is present?",
      "What should the analyst do FIRST?",
      "What additional logs would help most?",
      "Write a simple detection logic idea.",
    ],
    myAnswers: [
      "Phishing -> malicious file -> powershell execution -> connection to external ip -> persistence",
      "Malicious file execution by opening phishing emails attachment",
      "Connection to external ip and registry task creation",
      "isolate the host",
      "Powershell logs, Sysmon",
      "(skipping this for now)",
    ],
  },

  {
    id: 2,
    title: "DNS Tunneling & Data Exfiltration",
    category: "DNS Tunneling",
    status: "Raw Answer",
    sections: [
      {
        title: "DNS Monitoring Alerts",
        items: [
          "dGhpcy1pcy1zZWNyZXQ=.sync-data-service.com",
          "Y29uZmlkZW50aWFsLWZpbGU=.sync-data-service.com",
          "Repeated every 30 seconds",
        ],
      },
      {
        title: "Additional Info",
        items: [
          "Traffic only over port 53",
          "No corresponding browser activity",
          "Host recently opened email attachment",
        ],
      },
    ],
    tasks: [
      "What is MOST likely occurring?",
      "Why are the DNS queries suspicious?",
      "What should the analyst investigate FIRST?",
      "What containment action is MOST appropriate?",
      "What SIEM detection logic could detect this?",
    ],
    myAnswers: [
      "data exfil through DNS tunneling",
      "Because of high entropy queries",
      "Investigate domains and sent traffic",
      "Block suspicious domains",
      "Possible DNS tunneling detection, high entropy suspicious domains",
    ],
  },

  {
    id: 3,
    title: "Credential Attack & Possible Lateral Movement",
    category: "Lateral Movement",
    status: "Raw Answer",
    sections: [
      {
        title: "Windows Security Logs",
        items: [
          "4625 Failed logon",
          "4625 Failed logon",
          "4624 Successful logon",
          "4672 Special privileges assigned",
        ],
      },
      {
        title: "Shortly afterward",
        items: [
          'wmic /node:FILESERVER process call create "cmd.exe"',
        ],
      },
      {
        title: "SMB Activity",
        items: [
          "\\\\FILESERVER\\c$",
        ],
      },
    ],
    tasks: [
      "What attack behavior is MOST likely occurring?",
      "Which MITRE ATT&CK techniques are involved?",
      "What should be prioritized FIRST?",
      "What systems/accounts should be investigated?",
      "What evidence would confirm lateral movement?",
    ],
    myAnswers: [
      "Credential stuffing -> data exfil",
      "T1041 (Exfiltration Over C2 Channel) and T1110.003 (Brute Force: Password Spraying)",
      "Reset credentials, then isolate host",
      "Accessed account with multiple 4625's",
      "4672 logs",
    ],
  },

  {
    id: 4,
    title: "Potential Apache False Positive",
    category: "Vulnerability Validation",
    status: "Raw Answer",
    sections: [
      {
        title: "Scanner Output",
        items: [
          "Apache 2.4.49",
          "Critical RCE vulnerability",
          "Public exploit available",
        ],
      },
      {
        title: "Additional Findings",
        items: [
          "Server behind reverse proxy",
          "Backend patch level uncertain",
          "No exploit attempts in logs",
          "Host segmented from critical infrastructure",
        ],
      },
    ],
    tasks: [
      "Is this automatically a critical emergency?",
      "What should be validated FIRST?",
      "Why could this be a false positive?",
      "How should the vulnerability be prioritized?",
      "What compensating controls already exist?",
    ],
    myAnswers: [
      "No, because of highly possible false banner grabbing",
      "Backend patch level, and then vulnerability risk level",
      "Because server is behind reverse proxy, so scanner is showing misleading info",
      "Low/Medium, but must be checked",
      "Host segmentation",
    ],
  },

  {
    id: 5,
    title: "Multi-Alert Incident Correlation",
    category: "Alert Correlation",
    status: "Raw Answer",
    sections: [
      {
        title: "Alert A",
        items: [
          "WINWORD.EXE → powershell.exe -enc",
        ],
      },
      {
        title: "Alert B",
        items: [
          "Repeated HTTPS traffic to newly registered domain every 60 seconds",
        ],
      },
      {
        title: "Alert C",
        items: [
          "User reports slowdown after opening invoice attachment",
        ],
      },
      {
        title: "Alert D",
        items: [
          "Outdated Apache version behind reverse proxy",
        ],
      },
      {
        title: "Alert E",
        items: [
          "Long Base64-like DNS queries detected",
        ],
      },
    ],
    tasks: [
      "Rank alerts from MOST urgent to LEAST urgent.",
      "Which alerts are likely related?",
      "Which alert may be false positive/noise?",
      "What should be contained FIRST?",
      "What evidence strongly suggests active compromise?",
    ],
    myAnswers: [
      "A, B, E, C, D",
      "A and E, C and A, A and B, B and E",
      "D",
      "A",
      "Obfuscated powershell command from Word, repeated traffic to new domains, weird DNS queries",
    ],
  },
];