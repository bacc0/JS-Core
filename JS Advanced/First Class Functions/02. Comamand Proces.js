let commandProcessor = ( function() {
    let text = '';
    return {
        append: (t) => text = text + t,
        removeStart: (count) => text = text.slice(count),
        removeEnd: (count) => text = text.slice(0, text.length - count),
        print: function (  ) {
            console.log(text);
        }
    };
})();

console.log(commandProcessor.append('pesho'));
console.log(commandProcessor.removeStart(2));
console.log(commandProcessor.removeEnd(2));

