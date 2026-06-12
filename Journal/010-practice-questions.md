==============================
010-cysa-practice-questions.txt
Author: ViliusDevX
Purpose: CySA+ / SOC Analyst Practice Questions
Difficulty: Medium / Hard
==============================

!!!RAW ANSWERS ONLY — KEEP MISTAKES AND UNCERTAINTY!!!

==================================================
SECTION 1 — CYSA+ PRACTICE QUESTIONS (15)
==================================================


Question 1

A vulnerability scanner reports that an internal web application is vulnerable to a high-severity authentication bypass. The application is only reachable through the VPN, but the VPN is used by contractors and third-party support staff.

What should the analyst do FIRST?

A. Lower the severity because the application is not internet-facing
B. Validate exploitability and identify who can reach the affected application
C. Accept the risk because authenticated VPN access is required
D. Disable the vulnerability scanner rule until the next maintenance window

My Answer:

B

--------------------------------------------------


Question 2

A SOC analyst sees the following sequence:

- User receives a Microsoft 365 phishing email
- User grants consent to an unverified OAuth application
- Mailbox searches occur for "invoice", "payment", and "wire"
- No new sign-in occurs after the password reset

What is the MOST likely reason suspicious access continues?

A. The attacker is using previously granted OAuth permissions or active sessions
B. The attacker is performing DNS tunneling through Exchange Online
C. The password reset failed because the domain controller was offline
D. The mailbox searches are caused by normal Outlook indexing

My Answer:

A

--------------------------------------------------


Question 3

A Windows endpoint alert shows:

Parent: explorer.exe
Process: powershell.exe
CommandLine: powershell.exe -NoProfile -EncodedCommand ...
Network: 198.51.100.24:443

The user says they manually opened PowerShell to troubleshoot printer mapping.

Which evidence would BEST help determine whether the activity is suspicious?

A. Whether the user has previously opened PowerShell for printer troubleshooting
B. Whether the encoded command decodes to expected admin activity or malicious behavior
C. Whether the workstation has a DHCP lease from the correct network
D. Whether the destination IP responds to ICMP ping requests

My Answer:

B

--------------------------------------------------


Question 4

A threat hunter sees multiple Kerberos service ticket requests for different SPNs from one workstation. The tickets use RC4 encryption, but there are no failed logins and the user authenticated normally.

What should the hunter suspect?

A. Kerberoasting activity may be occurring despite normal authentication
B. Password spraying is confirmed because RC4 is always a bad password error
C. Golden ticket usage is confirmed because all SPNs are domain controllers
D. DNS tunneling is likely because Kerberos always uses TXT records

My Answer:

A

--------------------------------------------------


Question 5

An EDR product detects a suspicious binary on one host. The hash is unknown, the binary is unsigned, it was created in C:\Users\Public, and it was executed by rundll32.exe.

Which action is MOST appropriate FIRST?

A. Immediately wipe all systems that have rundll32.exe
B. Isolate the affected host and collect process, file, and network artifacts
C. Ignore the alert because rundll32.exe is a legitimate Windows binary
D. Delete the file first so it cannot be collected by another process

My Answer:

B

--------------------------------------------------


Question 6

A company receives many SIEM alerts from impossible travel detection. Investigation shows most are caused by corporate VPN exit nodes and mobile carrier routing.

Which improvement BEST reduces false positives without disabling the detection?

A. Add known VPN/mobile egress context and require additional suspicious signals
B. Disable all geographic anomaly detections for privileged users
C. Lower log retention so repeated alerts age out faster
D. Block every login that uses a mobile network provider

My Answer:

A

--------------------------------------------------


Question 7

A Linux server shows:

sudo: appuser : USER=root ; COMMAND=/usr/bin/chmod +s /bin/bash

Why is this concerning?

A. It can create a repeated privilege escalation path using an SUID shell
B. It rotates the root password and forces all sessions to reauthenticate
C. It enables encrypted DNS tunneling through the bash binary
D. It deletes the bash executable and prevents shell access permanently

My Answer:

A

--------------------------------------------------


Question 8

A web server log shows repeated requests:

GET /api/orders/1001
GET /api/orders/1002
GET /api/orders/1003

The same authenticated user receives HTTP 200 responses for orders belonging to other users.

Which vulnerability is MOST likely?

A. Reflected XSS
B. SQL injection
C. IDOR
D. Path traversal

My Answer:

C

--------------------------------------------------


Question 9

A malware alert is triggered by traffic to a newly registered domain over HTTPS every 60 seconds. The payload size is small and consistent. No large outbound transfer is observed.

Which behavior is MOST likely?

A. Command-and-control beaconing
B. Bulk data exfiltration
C. DHCP address renewal
D. Kerberos pre-authentication failure

My Answer:

A

--------------------------------------------------


Question 10

During a ransomware incident, a manager asks the SOC to restore from backups immediately. The infected host still has mapped network drives and is actively encrypting files.

What should happen FIRST?

A. Restore backups immediately to reduce downtime
B. Isolate the infected host to stop spread and preserve evidence
C. Delete all encrypted files before confirming backup status
D. Reconnect mapped drives to identify which files are affected

My Answer:

B

--------------------------------------------------


Question 11

A SOC receives a threat intelligence feed with IP addresses from an adversary campaign. Many IPs are cloud-hosted and change frequently.

What would be MORE useful for long-term detection?

A. TTPs, tool behavior, infrastructure patterns, and detection logic
B. The exact IP list only, because cloud IPs rarely change
C. A screenshot of the threat actor's public website
D. The number of followers the threat actor has on social media

My Answer:

A

--------------------------------------------------


Question 12

A security engineer wants to monitor whether sensitive files are uploaded to personal cloud storage services from managed endpoints.

Which control would BEST help detect and enforce this policy?

A. CASB or DLP controls integrated with endpoint/cloud activity
B. NTP synchronization on all domain controllers
C. RAID mirroring on the file server
D. Port security on unused switch ports only

My Answer:

A

--------------------------------------------------


Question 13

A host makes thousands of DNS TXT queries with long high-entropy subdomains. The domain is newly registered, and there is no matching browser activity.

Which next step is MOST appropriate?

A. Treat as possible DNS tunneling and identify the process and user behind the queries
B. Treat as normal Active Directory discovery because TXT records are always internal
C. Ignore the activity because DNS is required for normal internet browsing
D. Delete DNS logs first to reduce storage during the investigation

My Answer:

A

--------------------------------------------------


Question 14

An analyst is preparing evidence for possible legal action after a confirmed data theft incident.

Which action is MOST important?

A. Maintain chain of custody and preserve original evidence integrity
B. Edit log timestamps so the timeline is easier to understand
C. Share the raw evidence with all employees for transparency
D. Reboot all systems before collecting volatile evidence

My Answer:

A

--------------------------------------------------


Question 15

A system owner refuses to patch a critical internal application because downtime would affect production. The vulnerability is exploitable only from a restricted subnet.

Which response BEST balances security and operations?

A. Accept the risk permanently because the subnet is restricted
B. Apply compensating controls, restrict access further, monitor closely, and schedule remediation
C. Remove all network segmentation because it creates false confidence
D. Mark the vulnerability as resolved because production downtime is unacceptable

My Answer:

B

==============================
END OF FILE
==============================
