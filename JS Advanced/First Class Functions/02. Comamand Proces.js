let commandProcessor = ( function() {
    let text = '';
    return {
        append: (t) => text = text + t;
    };
})();
