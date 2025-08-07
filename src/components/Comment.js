import React, {useEffect, useRef} from 'react';

export default function GiscusComments() {
    const ref = useRef(null);

    useEffect(() => {
        if (!ref.current) return;

        const script = document.createElement('script');
        script.src = 'https://giscus.app/client.js';
        script.setAttribute('data-repo', 'Byte-Magazine/Byte-Magazine.github.io');
        script.setAttribute('data-repo-id', "R_kgDOPL76FQ");
        script.setAttribute('data-category', "General");
        script.setAttribute('data-category-id', 'DIC_kwDOPL76Fc4Ct6Ww');
        script.setAttribute('data-mapping', 'title');
        script.setAttribute('data-reactions-enabled', '1');
        script.setAttribute('data-emit-metadata', '0');
        script.setAttribute('data-theme', 'dark_protanopia');
        script.setAttribute('data-lang', 'fa');
        script.setAttribute('data-loading', 'lazy');
        script.crossOrigin = 'anonymous';
        script.async = true;

        ref.current.appendChild(script);

        return () => {
            if (ref.current) ref.current.innerHTML = '';
        };
    }, []);

    return <div ref={ref} className="giscus-container"/>;
}
