==============================
CySA+ Practice Questions & Scenarios (2)
Author: ViliusDevX
Purpose: CySA+ / SOC Analyst Preparation
==============================

all my answers are raw and unredacted!!!

==================================================
SECTION 1 — MULTIPLE CHOICE QUESTIONS (20)
==================================================


Question 1

A SOC analyst notices that endpoint logs and firewall logs differ by approximately 52 minutes during an investigation.

Which of the following is the MOST likely explanation?

A. The host is compromised
B. The firewall is offline
C. Time synchronization/NTP issue
D. The SIEM is corrupted

My Answer:

C, because NTP is responsible for synchronizing time

--------------------------------------------------


Question 2

An EDR alert identifies suspicious activity from:
svch0st.exe

Which of the following would BEST help verify whether the file is malicious?

A. File hashing
B. Browser history
C. Screen resolution
D. Registry startup order

My Answer:

I think A, because other variants are not helpful in this situation

--------------------------------------------------


Question 3

An organization wants the MOST trustworthy source of intelligence regarding active ransomware campaigns targeting healthcare infrastructure.

Which source is BEST?

A. Anonymous Telegram channels
B. Industry government advisories
C. Public Discord communities
D. Social media cybersecurity influencers

My Answer:

B, because they are closest to real info about real threats, especially healthcare sector.

--------------------------------------------------


Question 4

A SOC team receives thousands of repetitive low-value alerts daily.

Which solution would MOST effectively automate duplicate alert handling?

A. SOAR
B. IDS
C. NAC
D. VPN

My Answer:

A, because SOAR automates the whole detection process.

--------------------------------------------------


Question 5

A legacy industrial control system cannot be patched because updates would interrupt manufacturing operations.

Which control BEST reduces organizational risk?

A. Increase internet bandwidth
B. Strict network segmentation
C. Disable logging
D. Allow unrestricted remote access

My Answer:

B, because if system can't be patched, it should be as hard to access for attackers as possible

--------------------------------------------------


Question 6

Which framework is MOST useful for mapping attacker behavior and TTPs?

A. CVSS
B. MITRE ATT&CK
C. OWASP
D. NIST RMF

My Answer:

B

--------------------------------------------------


Question 7

A public-facing Linux web server is actively encrypting files during a ransomware attack.

What should be done FIRST?

A. Apply patches
B. Quarantine/isolate the server
C. Restore backups immediately
D. Notify all employees

My Answer:

B, to stop spreading to other systems and minimize damage

--------------------------------------------------


Question 8

During which incident response phase is root cause analysis MOST likely performed?

A. Preparation
B. Detection and analysis
C. Post-incident activities
D. Recovery

My Answer:

B, because during detection and analysis finding out what is the root cause of attack can help a lot in containment and eradication

--------------------------------------------------


Question 9

After a major security incident concludes, which activity BEST improves future response capabilities?

A. Conduct lessons-learned meeting
B. Disable affected systems permanently
C. Ignore low-severity alerts
D. Delete old SIEM data

My Answer:

A, because next time IR team would have more experience and knowledge

--------------------------------------------------


Question 10

An analyst has removed malware persistence mechanisms and deleted malicious files from a compromised endpoint.

Which incident response phase does this represent?

A. Recovery
B. Preparation
C. Containment
D. Eradication

My Answer:

D

--------------------------------------------------


Question 11

A cloud administrator receives repeated MFA push notifications without attempting login.

Which attack is MOST likely occurring?

A. MFA fatigue attack
B. Kerberoasting
C. ARP spoofing
D. Pass-the-hash

My Answer:

A, because in this attack attackers goal is to make victim tired and overwhelmed by MFA requests so victim just accepts them

--------------------------------------------------


Question 12

A security analyst wants to identify malicious activity that exists only in volatile memory.

Which action is BEST?

A. Analyze RAM dump
B. Reboot system
C. Review printer logs
D. Disable DHCP

My Answer:

A, because RAM hold info until power is turned off.

--------------------------------------------------


Question 13

Which technology BEST helps identify abnormal user behavior over time?

A. VLAN segmentation
B. UEBA
C. RAID
D. Load balancing

My Answer:

B, because UEBA uses pattern recognition over time for specific user

--------------------------------------------------


Question 14

An analyst notices OAuth tokens being used from unusual geographic locations after a phishing campaign.

What is the MOST likely concern?

A. Token/session hijacking
B. DNS poisoning
C. Physical theft
D. SSL certificate renewal

My Answer:

A, because attacker gained access to Tokens/session and is using them

--------------------------------------------------


Question 15

A SIEM detects:
- PowerShell launched from Excel
- External HTTPS connection
- Registry Run key creation

What is the MOST likely attacker objective?

A. Persistence and command-and-control
B. Asset inventory
C. Backup synchronization
D. Patch deployment

My Answer:

A, because connecting to external https, creating registry run keys and launching powershell from weird places are typical indicators of persistence and C2 phase

--------------------------------------------------


Question 16

Which of the following BEST describes a compensating control?

A. Ignoring a vulnerability
B. A different security measure reducing risk when primary mitigation is unavailable
C. Disabling all logs
D. Publicly disclosing vulnerabilities

My Answer:

B, because compensating control is control where its impossible to fully fix vulnerability or patch system so defender just compensates it, trying to minimize the damage in other ways.

--------------------------------------------------


Question 17

A company wants to safely analyze suspicious malware without risking production systems.

Which solution is BEST?

A. Sandbox environment
B. Production workstation
C. VPN concentrator
D. NAC appliance

My Answer:

A, because sandboxes are made to be isolated and safe.

--------------------------------------------------


Question 18

An analyst notices a large volume of outbound encrypted traffic to a domain registered two days ago.

What should be investigated FIRST?

A. Possible data exfiltration
B. Printer firmware updates
C. DHCP conflicts
D. Local password policy

My Answer:

A, because traffic to newly registered domains is typical for data exfil

--------------------------------------------------


Question 19

A host repeatedly reconnects externally after reboot despite malware removal attempts.

Which is the MOST likely explanation?

A. Persistence mechanism still exists
B. Browser cache issue
C. DNS timeout
D. VLAN misconfiguration

My Answer:

A, because after removal attempts of malware attacker still has persistence in machine

--------------------------------------------------


Question 20

Which of the following BEST describes threat hunting?

A. Responding only to SIEM alerts
B. Proactively searching for indicators of compromise
C. Installing endpoint protection
D. Creating backups

My Answer:

B, threat hunting is basically searching/hunting for threats, instead of passively waiting


==================================================
SECTION 2 — ADVANCED SOC SCENARIOS (5)
==================================================


==================================================
SCENARIO 1
==================================================

Microsoft 365 Alerts:
- Multiple successful logins from different countries within 15 minutes
- OAuth application consent granted to:
  "Mail-Backup-Sync"

Additional Findings:
- User recently clicked phishing link
- MFA was enabled
- OAuth token remains active after password reset


Tasks:
1. What MOST likely occurred?
2. Why did password reset not fully solve the issue?
3. What should be revoked FIRST?
4. What logs would help investigation most?
5. What controls could reduce similar attacks?


My Answers:

1. Token/session hijack, because attacker can bypass MFA by having tokens of authenticated user
2. Because attacker has access to account/session, so resetting password isn't short term fix
3. Lower "Mail-backup-sync" accounts privileges or disable it fully until deeper investigation
4. IP addresses of logins, OAUTH access granting service logs
5. UEBA by checking unusual country logins, phishing training campaign



==================================================
SCENARIO 2
==================================================

EDR Alerts:
- powershell.exe executed with encoded commands
- No malicious files found on disk
- Suspicious outbound HTTPS traffic observed
- Malware disappears after reboot

Additional Findings:
- RAM usage unusually high
- Antivirus detects nothing


Tasks:
1. What type of malware behavior is MOST likely occurring?
2. Why might antivirus fail to detect it?
3. What forensic evidence should be collected FIRST?
4. What containment action is MOST appropriate?
5. What indicators strongly suggest memory-resident malware?


My Answers:

1. Malware living in RAM and doing data exfil
2. Because antivirus doesn't scan RAM directly
3. Memory dump, suspicious traffic
4. Isolate machine from internet/network
5. RAM usage high, malware disappearing, no malicious files found on disk



==================================================
SCENARIO 3
==================================================

DLP Alerts:
- Employee downloaded 12GB of engineering documents
- Activity occurred at 2:43 AM
- Files uploaded to personal cloud storage

Additional Findings:
- Employee submitted resignation two days ago
- VPN access originated from normal geographic location
- No malware indicators detected


Tasks:
1. What threat scenario is MOST likely?
2. What should analysts verify FIRST?
3. What evidence would strengthen insider threat suspicion?
4. What containment actions are appropriate?
5. How should this incident severity be classified?


My Answers:

1. Insider threat, employee might be threat doing data exfil or spying
2. Employees identity, then any suspicion on being insider threat
3. Recent resignation submition, weird activity timing, and possible sensitive data downloaded
4. Lock account, revoke access
5. High, because of possible sensitive data exfil



==================================================
SCENARIO 4
==================================================

Web Server Logs:
POST /uploads/shell.php

Shortly afterward:
cmd.exe /c whoami
cmd.exe /c net user

Additional Findings:
- Outbound HTTPS traffic to VPS provider
- New local admin account created
- IIS logs show repeated POST requests


Tasks:
1. What attack behavior is MOST likely occurring?
2. What persistence indicators exist?
3. What should be isolated FIRST?
4. What forensic artifacts would be valuable?
5. Which MITRE ATT&CK techniques are likely involved?


My Answers:

1. Reverse shell execution through web server, then priv esc (new admin account created), then data exfil
2. Outbound traffic, new local admin account
3. Affected server/machine, then admin acc
4. POST requests, cmd execution, outbound traffic
5. T1190, then T1136.001, then T1567 


==================================================
SCENARIO 5
==================================================

SOC Metrics:
- 18,000 alerts per day
- Analysts closing most alerts manually
- Many duplicate phishing detections
- Mean response time increasing weekly

Additional Findings:
- Several true positives missed recently
- Analysts report burnout
- Executive leadership requests improvement plan


Tasks:
1. What is the PRIMARY operational problem?
2. Which technologies/processes could improve efficiency?
3. What risks does alert fatigue create?
4. What metrics should leadership monitor?
5. What SIEM improvements would MOST reduce noise?


My Answers:

1. Un-tuned detection logic, too much manual work
2. SIEM/SOAR
3. Missed true positives, analysts burnout
4. Missed true postiives, analysts well being, increasing response time weekly
5. Tuning and specifying detection logic to reduce false positives and reduce manual work



==============================
END OF FILE
==============================
