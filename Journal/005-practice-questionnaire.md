==============================
005-broad-cysa-practice.txt
Author: ViliusDevX
Purpose: Broader CySA+ Preparation
Difficulty: Medium / Hard
==============================

!!!RAW ANSWERS ONLY — KEEP MISTAKES AND UNCERTAINTY!!!

==================================================
SECTION 1 — BROAD CYSA+ QUESTIONS (20)
==================================================


Question 1

A vulnerability scan reports a critical vulnerability on an internet-facing API server. The vulnerability has a public exploit, but the affected endpoint requires authentication and is protected by a WAF.

What should the analyst do FIRST?

A. Ignore the finding because a WAF is present
B. Validate exploitability and prioritize based on exposure, exploit availability, and business impact
C. Shut down all internet-facing systems
D. Mark the vulnerability as a false positive automatically

My Answer:

B, because first thing that is needed to be done is evaluation and risk calculation, it might be not easy to exploit but it's still critical vuln

--------------------------------------------------


Question 2

A SOC analyst receives an alert showing a user logged in from Lithuania and then from Singapore eight minutes later. MFA was completed for both logins.

Which of the following is the MOST likely concern?

A. Impossible travel or session/token compromise
B. DNS tunneling
C. Normal Kerberos renewal
D. DHCP starvation

My Answer:

A, because locations are too far away from each other and MFA was completed for both logins, meaning possible token compromise

--------------------------------------------------


Question 3

An incident responder is preparing to collect evidence from a compromised workstation that is still powered on and communicating externally.

Which evidence should generally be collected FIRST if memory-resident malware is suspected?

A. Disk image only
B. Volatile memory
C. Printer logs
D. User's browser bookmarks

My Answer:

B, because volatile memory should be targeted first IF malware is suspected to be memory resident

--------------------------------------------------


Question 4

A security team receives a threat intelligence report containing IP addresses, file hashes, domains, and associated MITRE ATT&CK techniques.

Which part of the report BEST represents TTPs?

A. IP addresses
B. SHA256 hashes
C. Domains
D. ATT&CK techniques

My Answer:

D, because MITRE ATT&CK is a framework consisting of TTPs 

--------------------------------------------------


Question 5

A company detects many failed logins from one source IP against hundreds of user accounts using the same password.

Which attack is MOST likely occurring?

A. Credential stuffing
B. Password spraying
C. Kerberoasting
D. Golden ticket

My Answer:

B, it's not credential stuffing because credential stuffing uses username + password

--------------------------------------------------


Question 6

A security analyst finds a suspicious PowerShell command:

powershell.exe -NoProfile -ExecutionPolicy Bypass -EncodedCommand SQBFAFgA...

Which of the following BEST explains why this is suspicious?

A. It is guaranteed to be normal software installation
B. It uses options commonly associated with obfuscation and policy bypass
C. It proves DNS tunneling occurred
D. It indicates a DHCP renewal

My Answer:

B, because of suspicious command options

--------------------------------------------------


Question 7

An organization wants to improve incident response consistency by automatically enriching alerts, opening tickets, and executing approved containment steps.

Which technology BEST supports this goal?

A. SOAR
B. RAID
C. DHCP
D. NAT

My Answer:

A, because SOAR automates and orchestrates alerts and security events

--------------------------------------------------


Question 8

A web application log shows repeated requests containing:

../../../../etc/passwd

Which attack should the analyst suspect?

A. SQL injection
B. Directory traversal
C. Cross-site request forgery
D. Kerberoasting

My Answer:

B, because "../../" indicates directory traversal

--------------------------------------------------


Question 9

A company discovers that several employees are using unsanctioned cloud storage applications to share sensitive documents.

Which solution BEST helps discover and control this shadow IT risk?

A. CASB
B. DHCP
C. RAID
D. NTP

My Answer:

A, because cloud access security broker discovers and controls possible cloud storage misuse

--------------------------------------------------


Question 10

During an incident, an analyst isolates an affected host, blocks known malicious domains, and disables a compromised account.

Which incident response phase do these actions MOST closely represent?

A. Preparation
B. Containment
C. Recovery
D. Lessons learned

My Answer:

B

--------------------------------------------------


Question 11

A security analyst notices that a service account successfully accessed several admin shares using SMB shortly after failed login attempts.

Which behavior is MOST likely occurring?

A. Normal DNS resolution
B. Lateral movement using compromised credentials
C. SSL certificate renewal
D. Backup verification only

My Answer:

B

--------------------------------------------------


Question 12

A SIEM rule triggers on every PowerShell execution, creating thousands of alerts per day.

Which improvement would MOST reduce noise while preserving useful detection?

A. Disable all PowerShell logging
B. Add correlation conditions such as suspicious parent process, encoded commands, and external network connections
C. Delete old alerts
D. Ignore all PowerShell from administrators

My Answer:

B

--------------------------------------------------


Question 13

A ransomware infection has encrypted several files on a file server. Backups exist, but their integrity has not been verified.

What should happen before restoration?

A. Restore immediately without checking anything
B. Validate backup integrity and ensure the backup is clean
C. Delete all backups
D. Pay the ransom first

My Answer:

B

--------------------------------------------------


Question 14

A threat hunter wants to detect Kerberoasting activity.

Which evidence would be MOST relevant?

A. Large number of Kerberos service ticket requests for SPNs
B. DHCP renewals every hour
C. ICMP echo replies
D. Browser cache deletion

My Answer:

A

--------------------------------------------------


Question 15

An analyst receives an alert for a malicious file hash found on one endpoint. The same hash appears on 200 endpoints, but all are in the approved software directory and signed by the vendor.

What should the analyst do FIRST?

A. Wipe all 200 systems
B. Validate whether the detection is a false positive by checking signature, path, prevalence, and vendor reputation
C. Ignore because signed files are always safe
D. Disable EDR

My Answer:

B

--------------------------------------------------


Question 16

A company wants to reduce risk from an unpatchable legacy system that supports a critical manufacturing process.

Which approach is BEST?

A. Place the system on a segmented network with strict access controls and monitoring
B. Expose the system directly to the internet
C. Disable all logging to improve performance
D. Remove all compensating controls

My Answer:

A

--------------------------------------------------


Question 17

A SOC analyst sees outbound traffic from a workstation to a newly registered domain every 30 seconds with small payload sizes.

Which activity is MOST likely?

A. C2 beaconing
B. Normal DHCP negotiation
C. Local privilege assignment
D. Physical access control

My Answer:

A

--------------------------------------------------


Question 18

A cloud administrator notices that an OAuth application was granted mail-read permissions by a user after a phishing email.

What should be done FIRST?

A. Revoke the OAuth app consent/token
B. Reboot the user's monitor
C. Disable DNS globally
D. Change the Wi-Fi password only

My Answer:

A

--------------------------------------------------


Question 19

An analyst wants to ensure evidence can be used in legal proceedings.

Which process is MOST important?

A. Chain of custody
B. Load balancing
C. Port mirroring only
D. Asset tagging only

My Answer:

A

--------------------------------------------------


Question 20

After an incident is resolved, the team meets to discuss what happened, what worked, what failed, and how procedures should improve.

Which phase does this represent?

A. Preparation
B. Containment
C. Post-incident activity
D. Initial detection

My Answer:

C

==============================
END OF FILE
==============================
