==============================
CySA+ Practice Questions & Scenarios
Author: ViliusDevX
Purpose: CySA+ / SOC Analyst Preparation
==============================

!!!MY ANSWERS ARE UNREDACTED, RAW VERSION ONLY!!!

==================================================
SECTION 1 — MULTIPLE CHOICE QUESTIONS (20)
==================================================


Question 1

A SIEM alert shows:
- Multiple failed logins
- One successful login
- Event ID 4672 shortly afterward

The account used is a privileged service account.

Which of the following is the MOST likely concern?

A. Scheduled task execution
B. Privileged account compromise
C. DNS tunneling
D. Web application attack

My Answer:

B, because multiple failed logins followed by 4672 are highly suspicious.

--------------------------------------------------


Question 2

An analyst detects the following process chain:

OUTLOOK.EXE
 └── WINWORD.EXE
      └── powershell.exe -nop -w hidden -enc ...

Which of the following is the MOST likely initial attack vector?

A. SQL injection
B. Malicious phishing attachment
C. Password spraying
D. ARP poisoning

My Answer:

B, because this behavior is likely caused by malicious file.

--------------------------------------------------


Question 3

A scanner reports a critical Apache vulnerability on a public web server. The server is behind a reverse proxy and the backend patch level is unknown.

What should the analyst do FIRST?

A. Ignore the finding
B. Shut down the server immediately
C. Validate the vulnerability manually
D. Restore from backup

My Answer:

C, because server is behind reverse proxy, so report showing critical Apache vulnerability is probably false positive, because of false banner grabbing.

--------------------------------------------------


Question 4

A host repeatedly contacts a newly registered domain every 60 seconds over HTTPS using small amounts of traffic.

What is the MOST likely explanation?

A. Software updates
B. DNS poisoning
C. Command-and-control beaconing
D. Backup synchronization

My Answer:

C, because newly registered domains and timed requests are usual for C2.

--------------------------------------------------


Question 5

Which of the following BEST represents credential stuffing?

A. One password attempted against many users
B. Stolen credential pairs tested automatically
C. Forged Kerberos ticket usage
D. Brute-force attack against one account

My Answer:

B, because in this case attacker gets access to pairs of stolen creds, and uses them on various accounts.

--------------------------------------------------


Question 6

Which framework is MOST useful for comparing adversary TTPs?

A. OWASP
B. STIX/TAXII
C. MITRE ATT&CK
D. CVSS

My Answer:

C, because MITRE ATT&CK is a framework that include various APT TTPs.

--------------------------------------------------


Question 7

An analyst suspects DNS tunneling.

Which of the following indicators BEST supports this suspicion?

A. Long high-entropy DNS queries
B. Large ICMP packets
C. Frequent DHCP renewals
D. Browser cache changes

My Answer:

A, because long queries are used to obfuscate/mask data exfil.

--------------------------------------------------


Question 8

A Linux host shows:

Accepted password for devuser
sudo: devuser : COMMAND=/bin/bash
sudo: devuser : COMMAND=/usr/bin/nmap

What is MOST likely occurring?

A. Data destruction
B. Privilege escalation followed by reconnaissance
C. SQL injection
D. Backup verification

My Answer:

B, because /bin/bash indicates priv esc and nmap is tool used for reconnaissance.

--------------------------------------------------


Question 9

Which of the following BEST reduces SIEM false positives?

A. Disabling PowerShell logs
B. Reducing retention periods
C. Baselining and correlation tuning
D. Ignoring alerts from administrators

My Answer:

C, because tuning and narrowing detection rules would create less false positives.

--------------------------------------------------


Question 10

A workstation has confirmed malware execution.

What should be performed FIRST?

A. Reimage the system
B. Restore from backup
C. Isolate the host
D. Notify legal department

My Answer:

C, because first step in IR is containment

--------------------------------------------------


Question 11

Which of the following is a persistence mechanism?

A. ICMP echo request
B. Scheduled task creation
C. Port scanning
D. DNS resolution

My Answer:

A, because ICMP is used for persistence? (not confident, forgot what ICMP means)

--------------------------------------------------


Question 12

An analyst observes:

WINWORD.EXE → powershell.exe → external IP

Which phase of the attack is MOST likely occurring?

A. Persistence with active C2
B. Recovery
C. Asset inventory
D. Vulnerability management

My Answer:

A, because connecting to external IP indicates attempt to establish persistence.

--------------------------------------------------


Question 13

A company wants to detect impossible travel logins.

Which solution BEST fits this requirement?

A. NetFlow analysis
B. UEBA
C. Port mirroring
D. VLAN segmentation

My Answer:

B, because UEBA is used to detect behavior anomalies, and impossible travel login is a suspicious anomaly

--------------------------------------------------


Question 14

Which of the following is MOST likely a false positive vulnerability finding?

A. Public exploit exists
B. Critical CVSS score
C. Version/banner detection mismatch
D. Internet-facing application

My Answer:

C, because false banner grabbing is a common false positive indicator, like with server behind reverse proxy

--------------------------------------------------


Question 15

An analyst notices encoded PowerShell commands using:
powershell.exe -enc

What does this MOST likely indicate?

A. Compression activity
B. Encoded or obfuscated payload execution
C. DNS resolution
D. Software patching

My Answer:

B, because -enc means encoded/obfuscated payload execution

--------------------------------------------------


Question 16

Which phase of incident response includes removing malware persistence artifacts?

A. Recovery
B. Detection and analysis
C. Eradication
D. Preparation

My Answer:

C, because eradication means removing any possible threat before doing post-incident analysis or recovering system

--------------------------------------------------


Question 17

A user downloads thousands of sensitive files at 3:00 AM and triggers a DLP alert.

What should the analyst do FIRST?

A. Publicly accuse the user
B. Verify the activity and investigate the session
C. Wipe the workstation
D. Disable file sharing company-wide

My Answer:

B, because this behavior is suspicious (especially because of DLP alert and time), but not enough to immediately isolate the workstation.

--------------------------------------------------


Question 18

Which log source is MOST useful for detecting WMI lateral movement?

A. DNS logs
B. DHCP logs
C. Windows process creation / Sysmon logs
D. Printer logs

My Answer:

C, because WMI is Windows framework

--------------------------------------------------


Question 19

An attacker tries one password against hundreds of accounts.

Which attack is this?

A. Credential stuffing
B. Password spraying
C. Pass-the-ticket
D. Kerberoasting

My Answer:

B, because in password spraying technique attacker uses one known password for many different accounts.

--------------------------------------------------


Question 20

A compromised host:
- maintains persistence
- reconnects externally after reboot
- creates registry Run keys

What severity should MOST likely be assigned?

A. Informational
B. Low
C. Medium
D. High/Critical

My Answer:

D, because this is highly risky and dangerous situation, especially because of attackers ability to maintain persistence.

==================================================
SECTION 2 — ADVANCED SOC SCENARIOS (5)
==================================================


==================================================
SCENARIO 1
==================================================

Email Gateway Alert:
- Sender: invoices@micr0soft-support.com
- SPF: FAIL
- Attachment: invoice_review.xlsm

Endpoint Logs:
WINWORD.EXE
 └── powershell.exe -nop -w hidden -enc ...

Sysmon:
powershell.exe connected to 91.210.177.18:443

Registry:
HKCU\Software\Microsoft\Windows\CurrentVersion\Run\Updater


Tasks:
1. Identify the attack chain.
2. What is the MOST likely initial vector?
3. What persistence mechanism is present?
4. What should the analyst do FIRST?
5. What additional logs would help most?
6. Write a simple detection logic idea.

My Answers:

1. Phishing -> malicious file -> powershell execution -> connection to external ip -> persistence 
2. Malicious file execution by opening phishing emails attachment
3. Connection to external ip and registry task creation
4. isolate the host
5. Powershell logs, Sysmon
6. (skipping this for now)



==================================================
SCENARIO 2
==================================================

DNS Monitoring Alerts:

dGhpcy1pcy1zZWNyZXQ=.sync-data-service.com
Y29uZmlkZW50aWFsLWZpbGU=.sync-data-service.com

Repeated every 30 seconds.

Additional Info:
- Traffic only over port 53
- No corresponding browser activity
- Host recently opened email attachment


Tasks:
1. What is MOST likely occurring?
2. Why are the DNS queries suspicious?
3. What should the analyst investigate FIRST?
4. What containment action is MOST appropriate?
5. What SIEM detection logic could detect this?

My Answers:


1. data exfil through DNS tunneling
2. Because of high entropy queries
3. Investigate domains and sent traffic
4. Block suspicious domains
5. Possible DNS tunneling detection, high entropy suspicious domains



==================================================
SCENARIO 3
==================================================

Windows Security Logs:

4625 Failed logon
4625 Failed logon
4624 Successful logon
4672 Special privileges assigned

Shortly afterward:
wmic /node:FILESERVER process call create "cmd.exe"

SMB Activity:
\\FILESERVER\c$


Tasks:
1. What attack behavior is MOST likely occurring?
2. Which MITRE ATT&CK techniques are involved?
3. What should be prioritized FIRST?
4. What systems/accounts should be investigated?
5. What evidence would confirm lateral movement?

My Answers:

1. Credential stuffing -> data exfil
2. T1041 (Exfiltration Over C2 Channel) and T1110.003 (Brute Force: Password Spraying)
3. Reset credentials, then isolate host
4. Accessed account with multiple 4625's
5. 4672 logs

==================================================
SCENARIO 4
==================================================

Scanner Output:
- Apache 2.4.49
- Critical RCE vulnerability
- Public exploit available

Additional Findings:
- Server behind reverse proxy
- Backend patch level uncertain
- No exploit attempts in logs
- Host segmented from critical infrastructure


Tasks:
1. Is this automatically a critical emergency?
2. What should be validated FIRST?
3. Why could this be a false positive?
4. How should the vulnerability be prioritized?
5. What compensating controls already exist?

My Answers:

1. No, because of highly possible false banner grabbing
2. Backend patch level, and then vulnerability risk level
3. Because server is behind reverse proxy, so scanner is showing misleading info
4. Low/Medium, but must be checked
5. Host segmentation


==================================================
SCENARIO 5
==================================================

Alert A:
WINWORD.EXE → powershell.exe -enc

Alert B:
Repeated HTTPS traffic to newly registered domain every 60 seconds

Alert C:
User reports system slowdown after opening invoice attachment

Alert D:
Vulnerability scanner reports outdated Apache version behind reverse proxy

Alert E:
Long Base64-like DNS queries detected


Tasks:
1. Rank alerts from MOST urgent to LEAST urgent.
2. Which alerts are likely related?
3. Which alert may be false positive/noise?
4. What should be contained FIRST?
5. What evidence strongly suggests active compromise?

My Answers:

1. A, B, E, C, D
2. A and E, C and A, A and B, B and E
3. D
4. A
5. Obfuscated powershell command from Word, repeated traffic to new domains, weird DNS queries



==============================
END OF FILE
==============================
