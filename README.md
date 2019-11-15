# aws-internal-hostname-rewriter


## What is this

A chrome plugin to automatically rewrite AWS internal hostname into its IP address.

Example:

When you put the following URL in Chrome:

```http://ip-10-80-117-108.ec2.internal:8088/proxy/application_1548568905120_1689406/```

The URL will be automatically rewritten into this:

```http://10.80.117.108:8088/proxy/application_1548568905120_1689406/```


## How to install

1. Clone this project
2. Follow this guidance: https://webkul.com/blog/how-to-install-the-unpacked-extension-in-chrome/