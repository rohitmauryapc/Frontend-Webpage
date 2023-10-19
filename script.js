document.addEventListener('DOMContentLoaded', function () {
    const codeEditor = document.getElementById('code-editor');
    const copyButton = document.getElementById('copy-button');
    const saveButton = document.getElementById('save-button');
    const lockButton = document.getElementById('lock-button');

    copyButton.addEventListener('click', copyCode);
    saveButton.addEventListener('click', saveCode);
    lockButton.addEventListener('click', toggleLock);

    function copyCode() {
        codeEditor.select();
        document.execCommand('copy');
    }

    function saveCode() {
        // Implement save functionality as needed
        alert('Code saved!');
    }

    function toggleLock() {
        codeEditor.readOnly = !codeEditor.readOnly;
        lockButton.innerText = codeEditor.readOnly ? 'Unlock' : 'Lock';
    }
});
