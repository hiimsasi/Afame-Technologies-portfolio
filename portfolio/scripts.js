function startTyping() {
    const nameElement = document.getElementById('name');
    const nameText = 'A.sasi dharan';
    let i = 0;
    
    function typeWriter() {
        if (i < nameText.length) {
            nameElement.innerHTML += nameText.charAt(i);
            i++;
            setTimeout(typeWriter, 150);
        }
    }

    nameElement.innerHTML = '';
    typeWriter();
}