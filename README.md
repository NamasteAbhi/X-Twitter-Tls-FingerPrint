# Note

When You Use This Js Script For Hook Tls Fingerprint You Need To Clear Your App Data Before Start

# X (Twitter) TLS Fingerprint Hook

This repository contains a Frida script designed for hooking the TLS fingerprint of X (Twitter). The script allows for the monitoring and manipulation of TLS traffic for educational and security research purposes.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- **Frida**: This tool must be installed on your system. Frida is a dynamic instrumentation toolkit for developers, reverse-engineers, and security researchers. [Learn more about installing Frida here](https://frida.re/docs/installation/).
- **X (Twitter) APK**: Download the X (Twitter) from UptoDown: [Download X (Twitter)](https://twitter.en.uptodown.com/android).

## Tls FingerPrint Of X (Twitter)

```
{
  "user_agent": "TwitterAndroid/10.53.0-release.1 (310530001-r-1) RMX2117/11 (realme;RMX2117;realme;RMX2117;0;;1;2016)",
  "ja3_hash": "3a3a7739b7ee9b4dc9078b116b72ab96",
  "ja3_text": "771,4865-4866-4867-49195-49196-52393-49199-49200-52392,0-23-65281-10-11-35-16-5-13-51-45-43-21,29-23-24,0",
  "ja3n_hash": "20bfdd6057734d410542cb1f650e7a6b",
  "ja3n_text": "771,4865-4866-4867-49195-49196-52393-49199-49200-52392,0-5-10-11-13-16-21-23-35-43-45-51-65281,29-23-24,0",
  "akamai_hash": "605a1154008045d7e3cb3c6fb062c0ce",
  "akamai_text": "4:16777216|16711681|0|m,p,a,s"
}
```

## Websites For Test Tls Fingerprint

- **BrowserLeaks TLS Test**: Returns detailed information about your TLS connection.
  - URL: [https://tls.browserleaks.com/json]
  - URL2: [https://tls.peet.ws/api/all]
