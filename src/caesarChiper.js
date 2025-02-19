function caesarChiper(str, k) {
    const asciis = [...str].map((char) => chiper(char, k));
    console.log(asciis);
    return String.fromCharCode(...asciis);
}

function chiper(char, k) {
    let code = char.toString().charCodeAt(0);
    if (code >= 65 && code <= 90) {
        code = code - 65;
        code = (code + k) % 26;
        code = code + 65;
    } else if (code >= 97 && code <= 122) {
        code = code - 97;
        code = (code + k) % 26;
        code = code + 97;
    }
    return code;
}

module.exports = caesarChiper;
