document.addEventListener("DOMContentLoaded", function() {
    // function for text editing
    function handleTextEdit(event) {
        const element = event.target;
        const currentText = element.innerText;
        const newText = prompt("Enter new text:", currentText);
        if (newText !== null) {
            element.innerText = newText;
        }
    }

    // editable elements (this is for it to be selected)
    const editableSelectors = [
        ".content h4",
        ".content h1",
        ".content h3",
        ".about-text h2",
        ".about-text h5",
        ".about-text p",
        ".service .title h2",
        ".card h5",
        ".card .pra p",
        ".contact-me p",
        "footer p:nth-child(1)",
        "footer p:nth-child(2)"
    ];

    // click event listeners to all editable elements
    editableSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
            element.style.cursor = "pointer";  // Change cursor to pointer
            element.addEventListener("click", handleTextEdit);
        });
    });
});
