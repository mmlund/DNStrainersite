(function() {
    const TRACKING_API_URL = 'https://dnstracking.onrender.com/track';

    function getUrlParams() {
        const params = new URLSearchParams(window.location.search);
        const entries = {};
        for (const [key, value] of params.entries()) {
            entries[key] = value;
        }
        return entries;
    }

    function sendTrackingData(data) {
        const payload = {
            ...data,
            url: window.location.href,
            referrer: document.referrer,
            user_agent: navigator.userAgent,
            timestamp: new Date().toISOString()
        };

        const urlParams = getUrlParams();
        
        if (!urlParams.utm_source) urlParams.utm_source = 'direct';
        if (!urlParams.utm_medium) urlParams.utm_medium = 'organic';
        if (!urlParams.utm_campaign) urlParams.utm_campaign = 'general';

        Object.assign(payload, urlParams);

        if (navigator.sendBeacon) {
            const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
            navigator.sendBeacon(TRACKING_API_URL, blob);
        } else {
            fetch(TRACKING_API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
                keepalive: true
            }).catch(console.error);
        }
    }

    sendTrackingData({ event_type: 'page_view' });

    let maxScroll = 0;
    const scrollBenchmarks = [25, 50, 75, 100];
    const trackedScrolls = new Set();

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = Math.round((scrollTop / docHeight) * 100);

        if (scrollPercent > maxScroll) maxScroll = scrollPercent;

        scrollBenchmarks.forEach(benchmark => {
            if (maxScroll >= benchmark && !trackedScrolls.has(benchmark)) {
                trackedScrolls.add(benchmark);
                sendTrackingData({ event_type: 'scroll', scroll_depth: benchmark });
            }
        });
    }, { passive: true });
})();
