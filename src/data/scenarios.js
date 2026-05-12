export const scenarios = [
  {
    id: 1,
    title: "Phishing → PowerShell → Persistence",
    severity: "High",
    summary:
      "Suspicious email attachment leads to hidden encoded PowerShell, external connection, and registry Run key persistence.",
    evidence: [
      "Sender: invoices@micr0soft-support.com",
      "SPF: FAIL",
      "Attachment: invoice_review.xlsm",
      "WINWORD.EXE → powershell.exe -nop -w hidden -enc",
      "powershell.exe connected to 91.210.177.18:443",
      "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run\\Updater",
    ],
    myAnalysis: [
      "Attack chain: phishing → malicious file → PowerShell execution → external connection → persistence",
      "Most likely initial vector: malicious email attachment",
      "Persistence mechanism: registry Run key",
      "First action: isolate the host",
      "Useful logs: PowerShell logs and Sysmon",
    ],
  },
];