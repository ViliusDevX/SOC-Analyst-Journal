==============================
008-cysa-wording-traps-prioritization.txt
Author: ViliusDevX
Purpose: CySA+ BEST / FIRST / NEXT / MOST Practice
Difficulty: Medium / Hard / CompTIA Wording Traps
==============================

!!!RAW ANSWERS ONLY — KEEP MISTAKES AND UNCERTAINTY!!!

==================================================
SECTION 1 — CYSA+ WORDING, PRIORITIZATION, AND PROCESS QUESTIONS (20)
==================================================


Question 1

A SOC analyst receives an alert that a workstation executed malware and is currently communicating with a known C2 server. The endpoint contains volatile evidence that may disappear after reboot.

What should the analyst do FIRST?

A. Reimage the workstation to remove the malware completely
B. Isolate the workstation from the network while preserving evidence
C. Restore the workstation from the most recent known backup
D. Notify all users that malware was detected on one endpoint

My Answer:

B

--------------------------------------------------


Question 2

A vulnerability scanner reports a critical vulnerability on a production server. The server is behind a reverse proxy, and the finding is based only on the exposed banner version.

What should the analyst do NEXT?

A. Validate the finding against the actual backend version and configuration
B. Immediately classify the vulnerability as exploited in the environment
C. Delete the scanner result because reverse proxies prevent exploitation
D. Shut down all systems with similar banners before further review

My Answer:

A, because of false banner grabbing which is likely misleading

--------------------------------------------------


Question 3

An analyst is investigating a suspected insider threat. A user downloaded 9GB of sensitive files at 2:00 AM and uploaded them to personal cloud storage. The user is still employed and has legitimate access to the files.

What is the BEST next step?

A. Publicly accuse the user to discourage additional data transfers
B. Verify business justification and preserve logs before taking action
C. Delete the uploaded files locally to reduce evidence exposure
D. Disable all file shares for the entire organization immediately

My Answer:

B

--------------------------------------------------


Question 4

A server is actively encrypting shared files. Backups exist, but the backup team has not verified their integrity or restore status.

Which action should happen BEFORE restoring from backup?

A. Validate that the backup is clean, complete, and restorable
B. Delete all encrypted files before preserving forensic artifacts
C. Restore the backup immediately to shorten business downtime
D. Reconnect the infected server to confirm the ransomware stopped

My Answer:

A

--------------------------------------------------


Question 5

A SOC analyst sees repeated failed logins followed by one successful login and Event ID 4672 for a privileged account. The same account then accesses several admin shares.

What is the MOST likely concern?

A. Normal service account maintenance during a patch window
B. Privileged credential compromise followed by lateral movement
C. DNS tunneling through Active Directory SRV record lookups
D. Failed vulnerability scan authentication against one server

My Answer:

B, more likely to be compromise rather than normal service account

--------------------------------------------------


Question 6

During triage, an analyst finds an OAuth application with mail-read permissions granted after a phishing email. The user changed their password, but suspicious mailbox access continues.

What should be revoked FIRST?

A. The user's local browser cache and saved bookmarks
B. The OAuth app consent, token, or active cloud session
C. The domain controller DNS records for the mail tenant
D. The firewall rule allowing outbound HTTPS from all users

My Answer:

B

--------------------------------------------------


Question 7

A SIEM rule generates thousands of alerts because it triggers on every PowerShell execution. Analysts are missing true positives due to noise.

Which change BEST improves the detection?

A. Disable PowerShell telemetry until the alert volume decreases
B. Keep the rule unchanged because more alerts means better visibility
C. Add context such as parent process, encoded commands, and network activity
D. Raise every PowerShell alert to critical so analysts review them faster

My Answer:

C

--------------------------------------------------


Question 8

A threat intelligence feed provides a list of malicious IP addresses from six months ago. The SOC wants to improve long-term detection quality against the same adversary.

Which information would be MOST valuable?

A. The adversary's tactics, techniques, procedures, and behavior patterns
B. The exact IP addresses only, because infrastructure never changes
C. The number of social media posts mentioning the threat actor
D. The country where the feed publisher is physically located

My Answer:

A

--------------------------------------------------


Question 9

An endpoint alert shows WINWORD.EXE spawning powershell.exe with an encoded command. The host then connects to an external IP over TCP/443.

What should the analyst investigate FIRST?

A. Whether the user recently opened a suspicious document or attachment
B. Whether the monitor resolution changed after the document opened
C. Whether the DHCP lease duration was longer than seven days
D. Whether the external IP uses port 443 for normal printer traffic

My Answer:

A

--------------------------------------------------


Question 10

A public web application shows SQL injection attempts in WAF logs. Shortly afterward, the web server process launches cmd.exe and a new local administrator account appears.

Which action is MOST appropriate FIRST?

A. Isolate the affected web server and preserve relevant evidence
B. Delete the local administrator account and close the investigation
C. Patch every internal workstation before investigating the server
D. Ignore the WAF logs because exploitation always fails behind a WAF

My Answer:

A

--------------------------------------------------


Question 11

A Linux host shows a suspicious cron entry running curl every minute and piping the output to bash as root. The host is still online.

What is the BEST interpretation?

A. The system is renewing a DHCP lease with a custom script
B. The host has a possible recurring remote-code execution mechanism
C. The user is compressing logs before sending them to a SIEM
D. The cron entry is required for normal SSH public key authentication

My Answer:

B

--------------------------------------------------


Question 12

A company cannot patch a legacy industrial system because downtime would stop production. The system must remain operational.

Which risk reduction approach is BEST?

A. Segment the system and restrict access with monitoring controls
B. Disable all logging to improve performance and system stability
C. Allow direct internet access so vendors can troubleshoot faster
D. Mark all vulnerabilities as accepted without compensating controls

My Answer:

A

--------------------------------------------------


Question 13

An analyst is asked to preserve evidence for possible legal proceedings after a data theft incident.

Which activity is MOST important?

A. Maintaining chain of custody for collected evidence
B. Rebooting all systems to clear volatile memory quickly
C. Sharing raw evidence publicly for transparency
D. Editing original logs to make the timeline easier to read

My Answer:

A

--------------------------------------------------


Question 14

A host sends long, high-entropy DNS TXT queries every 20 seconds to a newly registered domain. No browser activity matches the traffic.

Which conclusion is MOST defensible?

A. The host may be using DNS tunneling or DNS-based exfiltration
B. The host is performing normal Active Directory discovery only
C. The host is downloading updates from a trusted CDN provider
D. The host is renewing its IP address from the DHCP server

My Answer:

A

--------------------------------------------------


Question 15

A malware sample is suspected to run only in memory. The analyst plans to reboot the system to stop the process before collection.

Why is this risky?

A. Rebooting may destroy volatile evidence needed for analysis
B. Rebooting always encrypts all disk evidence automatically
C. Rebooting prevents all future network containment actions
D. Rebooting converts memory artifacts into firewall events

My Answer:

A

--------------------------------------------------


Question 16

A SOC team wants to measure how quickly it detects incidents after malicious activity begins.

Which metric is MOST relevant?

A. RPO
B. MTTR
C. MTTD
D. RTO

My Answer:

C, Mean time to detect

--------------------------------------------------


Question 17

A SOC team wants to measure how quickly it restores service or completes response after an incident.

Which metric is MOST relevant?

A. MTTR
B. CVSS
C. IOC
D. TTP

My Answer:

A, Mean time to recover

--------------------------------------------------


Question 18

An analyst receives a malware hash from a threat feed. The same hash is present on many endpoints, but the file is signed by a trusted vendor and exists in the normal application directory.

What should the analyst do FIRST?

A. Wipe every endpoint containing the hash immediately
B. Validate whether the alert is a false positive using signature, path, and prevalence
C. Disable the EDR tool because signed files cannot be malicious
D. Delete the threat intelligence feed from the SIEM permanently

My Answer:

B

--------------------------------------------------


Question 19

An attacker tries a single common password against hundreds of usernames. The attempts are slow and distributed over several hours.

Which attack is MOST likely occurring?

A. Password spraying
B. Credential stuffing
C. Kerberoasting
D. Pass-the-ticket

My Answer:

A

--------------------------------------------------


Question 20

After a major incident, the team reviews the timeline, identifies what failed, updates playbooks, and adds new detections.

Which incident response phase is represented?

A. Recovery only
B. Containment only
C. Preparation before detection
D. Post-incident activity

My Answer:

D, but i think i answered this question in other file, it repeats

==============================
END OF FILE
==============================
