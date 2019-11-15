chrome.webRequest.onBeforeRequest.addListener(
    function (req) {
        let url = new URL(req.url);
        url.hostname = url.hostname.split('.')[0].substring(3).replace(/-/g,'.');

        return {
            redirectUrl: url.href
        };
    },
    {
        urls: [
            "*://*.ec2.internal:*/*",
            "*://*.ec2.internal/*",
            "*://*.compute.internal:*/*",
            "*://*.compute.internal/*"
        ]
    },
    [
        "blocking"
    ]
);
