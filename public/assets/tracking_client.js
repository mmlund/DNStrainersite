(function() {
    const TRACKING_API_URL = 'https://digitaltrackingsite.onrender.com/track';

    function getDeviceId() {
        const cookieName = '_dts_id';
        const match = document.cookie.match(new RegExp('(?:^|; )' + cookieName + '=([^;]*)'));
        if (match) return match[1];

        const id = crypto.randomUUID ? crypto.randomUUID() : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = Math.random() * 16 | 0;
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });

        const expires = new Date(Date.now() + 730 * 24 * 60 * 60 * 1000).toUTCString();
        const hostParts = window.location.hostname.split('.');
        const domain = hostParts.length >= 2 ? '.' + hostParts.slice(-2).join('.') : window.location.hostname;
        document.cookie = cookieName + '=' + id + '; expires=' + expires + '; path=/; domain=' + domain + '; SameSite=Lax';
        return id;
    }

    const deviceId = getDeviceId();

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
            device_id: deviceId,
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
