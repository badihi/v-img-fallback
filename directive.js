export default {
    bind(el, binding) {
        const value = binding.value;
        const defaultLoading = '/img/loading_100.gif';
        const defaultError = '';
        const img = new Image();

        let loading = defaultLoading;
        let error = defaultError;
        let original = el.src;

        if (!value) {
            console.warn(`Vue Img Fallback Warning: Directive value is ${typeof value}. Now using default values.`);
        }

        if (typeof value === 'string') {
            loading = value;
            error = value;
        }

        if (value instanceof Object) {
            loading = value.loading || defaultLoading;
            error = value.error || defaultError;
        }

        img.src = original;

        el.src = loading;

        img.onload = () => {
            el.src = original;
        };

        img.onerror = () => {
            el.src = error;
        };
    }
}
