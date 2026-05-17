export const questions = [
  {
    id: 1,
    topic: "Authentication",
    status: "Raw Answer",
    question:
      "A SIEM alert shows multiple failed logins, one successful login, and Event ID 4672 shortly afterward. The account used is a privileged service account. What is the MOST likely concern?",
    options: ["Scheduled task execution", "Privileged account compromise", "DNS tunneling", "Web application attack"],
    myAnswer: "B, because multiple failed logins followed by 4672 are highly suspicious.",
  },
  {
    id: 2,
    topic: "Phishing",
    status: "Raw Answer",
    question:
      "An analyst detects the process chain OUTLOOK.EXE → WINWORD.EXE → powershell.exe -nop -w hidden -enc. Which is the MOST likely initial attack vector?",
    options: ["SQL injection", "Malicious phishing attachment", "Password spraying", "ARP poisoning"],
    myAnswer: "B, because this behavior is likely caused by malicious file.",
  },
  {
    id: 3,
    topic: "Vulnerability Management",
    status: "Raw Answer",
    question:
      "A scanner reports a critical Apache vulnerability on a public web server. The server is behind a reverse proxy and the backend patch level is unknown. What should the analyst do FIRST?",
    options: ["Ignore the finding", "Shut down the server immediately", "Validate the vulnerability manually", "Restore from backup"],
    myAnswer:
      "C, because server is behind reverse proxy, so report showing critical Apache vulnerability is probably false positive, because of false banner grabbing.",
  },
  {
    id: 4,
    topic: "Command and Control",
    status: "Raw Answer",
    question:
      "A host repeatedly contacts a newly registered domain every 60 seconds over HTTPS using small amounts of traffic. What is the MOST likely explanation?",
    options: ["Software updates", "DNS poisoning", "Command-and-control beaconing", "Backup synchronization"],
    myAnswer: "C, because newly registered domains and timed requests are usual for C2.",
  },
  {
    id: 5,
    topic: "Credential Attacks",
    status: "Raw Answer",
    question: "Which of the following BEST represents credential stuffing?",
    options: ["One password attempted against many users", "Stolen credential pairs tested automatically", "Forged Kerberos ticket usage", "Brute-force attack against one account"],
    myAnswer:
      "B, because in this case attacker gets access to pairs of stolen creds, and uses them on various accounts.",
  },
  {
    id: 6,
    topic: "Threat Intelligence",
    status: "Raw Answer",
    question: "Which framework is MOST useful for comparing adversary TTPs?",
    options: ["OWASP", "STIX/TAXII", "MITRE ATT&CK", "CVSS"],
    myAnswer: "C, because MITRE ATT&CK is a framework that include various APT TTPs.",
  },
  {
    id: 7,
    topic: "DNS Tunneling",
    status: "Raw Answer",
    question: "An analyst suspects DNS tunneling. Which indicator BEST supports this suspicion?",
    options: ["Long high-entropy DNS queries", "Large ICMP packets", "Frequent DHCP renewals", "Browser cache changes"],
    myAnswer: "A, because long queries are used to obfuscate/mask data exfil.",
  },
  {
    id: 8,
    topic: "Linux Investigation",
    status: "Raw Answer",
    question:
      "A Linux host shows: Accepted password for devuser; sudo: devuser : COMMAND=/bin/bash; sudo: devuser : COMMAND=/usr/bin/nmap. What is MOST likely occurring?",
    options: ["Data destruction", "Privilege escalation followed by reconnaissance", "SQL injection", "Backup verification"],
    myAnswer: "B, because /bin/bash indicates priv esc and nmap is tool used for reconnaissance.",
  },
  {
    id: 9,
    topic: "SIEM Tuning",
    status: "Raw Answer",
    question: "Which of the following BEST reduces SIEM false positives?",
    options: ["Disabling PowerShell logs", "Reducing retention periods", "Baselining and correlation tuning", "Ignoring alerts from administrators"],
    myAnswer: "C, because tuning and narrowing detection rules would create less false positives.",
  },
  {
    id: 10,
    topic: "Incident Response",
    status: "Raw Answer",
    question: "A workstation has confirmed malware execution. What should be performed FIRST?",
    options: ["Reimage the system", "Restore from backup", "Isolate the host", "Notify legal department"],
    myAnswer: "C, because first step in IR is containment",
  },
  {
    id: 11,
    topic: "Persistence",
    status: "Raw Answer",
    question: "Which of the following is a persistence mechanism?",
    options: ["ICMP echo request", "Scheduled task creation", "Port scanning", "DNS resolution"],
    myAnswer: "A, because ICMP is used for persistence? (not confident, forgot what ICMP means)",
  },
  {
    id: 12,
    topic: "Attack Lifecycle",
    status: "Raw Answer",
    question:
      "An analyst observes WINWORD.EXE → powershell.exe → external IP. Which phase of the attack is MOST likely occurring?",
    options: ["Persistence with active C2", "Recovery", "Asset inventory", "Vulnerability management"],
    myAnswer: "A, because connecting to external IP indicates attempt to establish persistence.",
  },
  {
    id: 13,
    topic: "UEBA",
    status: "Raw Answer",
    question: "A company wants to detect impossible travel logins. Which solution BEST fits this requirement?",
    options: ["NetFlow analysis", "UEBA", "Port mirroring", "VLAN segmentation"],
    myAnswer:
      "B, because UEBA is used to detect behavior anomalies, and impossible travel login is a suspicious anomaly",
  },
  {
    id: 14,
    topic: "Vulnerability Management",
    status: "Raw Answer",
    question: "Which of the following is MOST likely a false positive vulnerability finding?",
    options: ["Public exploit exists", "Critical CVSS score", "Version/banner detection mismatch", "Internet-facing application"],
    myAnswer:
      "C, because false banner grabbing is a common false positive indicator, like with server behind reverse proxy",
  },
  {
    id: 15,
    topic: "PowerShell",
    status: "Raw Answer",
    question: "An analyst notices encoded PowerShell commands using powershell.exe -enc. What does this MOST likely indicate?",
    options: ["Compression activity", "Encoded or obfuscated payload execution", "DNS resolution", "Software patching"],
    myAnswer: "B, because -enc means encoded/obfuscated payload execution",
  },
  {
    id: 16,
    topic: "Incident Response",
    status: "Raw Answer",
    question: "Which phase of incident response includes removing malware persistence artifacts?",
    options: ["Recovery", "Detection and analysis", "Eradication", "Preparation"],
    myAnswer:
      "C, because eradication means removing any possible threat before doing post-incident analysis or recovering system",
  },
  {
    id: 17,
    topic: "DLP",
    status: "Raw Answer",
    question:
      "A user downloads thousands of sensitive files at 3:00 AM and triggers a DLP alert. What should the analyst do FIRST?",
    options: ["Publicly accuse the user", "Verify the activity and investigate the session", "Wipe the workstation", "Disable file sharing company-wide"],
    myAnswer:
      "B, because this behavior is suspicious (especially because of DLP alert and time), but not enough to immediately isolate the workstation.",
  },
  {
    id: 18,
    topic: "Lateral Movement",
    status: "Raw Answer",
    question: "Which log source is MOST useful for detecting WMI lateral movement?",
    options: ["DNS logs", "DHCP logs", "Windows process creation / Sysmon logs", "Printer logs"],
    myAnswer: "C, because WMI is Windows framework",
  },
  {
    id: 19,
    topic: "Credential Attacks",
    status: "Raw Answer",
    question: "An attacker tries one password against hundreds of accounts. Which attack is this?",
    options: ["Credential stuffing", "Password spraying", "Pass-the-ticket", "Kerberoasting"],
    myAnswer: "B, because in password spraying technique attacker uses one known password for many different accounts.",
  },
  {
    id: 20,
    topic: "Malware Persistence",
    status: "Raw Answer",
    question:
      "A compromised host maintains persistence, reconnects externally after reboot, and creates registry Run keys. What severity should MOST likely be assigned?",
    options: ["Informational", "Low", "Medium", "High/Critical"],
    myAnswer:
      "D, because this is highly risky and dangerous situation, especially because of attackers ability to maintain persistence.",
  },
];
