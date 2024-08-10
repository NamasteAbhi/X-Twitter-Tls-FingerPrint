#pip install curl_cffi

from curl_cffi import requests
import warnings
warnings.filterwarnings("ignore")
ja3 = ",".join(
    [
        "771",
        "4865-4866-4867-49195-49196-52393-49199-49200-52392",
        "0-23-65281-10-11-35-16-5-13-51-45-43-21",
        "29-23-24",
        "0",
    ]
)
akamai = "4:16777216|16711681|0|m,p,a,s"

extra_fp = {
    "tls_signature_algorithms": [
        "ecdsa_secp256r1_sha256",
        "rsa_pss_rsae_sha256",
        "rsa_pkcs1_sha256",
        "ecdsa_secp384r1_sha384",
        "rsa_pss_rsae_sha384",
        "rsa_pkcs1_sha384",
        "rsa_pss_rsae_sha512",
        "rsa_pkcs1_sha512",
        "rsa_pkcs1_sha1"
    ]
}

r = requests.Session()
r.ja3=ja3
r.akamai=akamai
r.extra_fp=extra_fp

headers= {
    'user-agent': 'TwitterAndroid/10.53.0-release.1 (310530001-r-1) RMX2117/11 (realme;RMX2117;realme;RMX2117;0;;1;2016)',
}

r3 = r.get("https://tls.browserleaks.com/json",headers=headers)
print(r3.text)
