$(document).ready(function () {
    var displayElement = document.getElementById('display');

    function appendToDisplay(value) {
        displayElement.value += value;
    }

    function evaluateExpression() {
        var displayValue = displayElement.value;    
        if (displayValue === "") {
            alert("Please enter any numbers to calculate!");
        } else {
            try {
                displayValue = displayValue.replace(/x/g, '*');                
                var result = new Function('return ' + displayValue)();                
                if (isNaN(result) || !isFinite(result)) {
                    throw new Error("Invalid expression");
                }                
                displayElement.value = result;
            } catch (error) {
                alert("Invalid expression");
            }
        }
    }
    

    // Event handlers
    $('#one').click(function () { appendToDisplay(1); });
    $('#two').click(function () { appendToDisplay(2); });
    $('#three').click(function () { appendToDisplay(3); });
    $('#four').click(function () { appendToDisplay(4); });
    $('#five').click(function () { appendToDisplay(5); });
    $('#six').click(function () { appendToDisplay(6); });
    $('#seven').click(function () { appendToDisplay(7); });
    $('#eight').click(function () { appendToDisplay(8); });
    $('#nine').click(function () { appendToDisplay(9); });
    $('#zero').click(function () { appendToDisplay(0); });
    $('#add').click(function () { appendToDisplay('+'); });
    $('#subs').click(function () { appendToDisplay('-'); });
    $('#multi').click(function () { appendToDisplay('x'); });
    $('#divide').click(function () { appendToDisplay('/'); });
    $('#dot').click(function () { appendToDisplay('.'); });
    $('#equal').click(function () { evaluateExpression(); });
    $('#reset').click(function () { displayElement.value = 0; });
    $('#clear').click(function () {
        var displayValue = displayElement.value;
        if (displayValue.length > 0) {
            displayElement.value = displayValue.slice(0, -1);
        }
    });
});
