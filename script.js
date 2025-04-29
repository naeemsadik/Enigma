// Enigma Encryption System - Main Script

document.addEventListener('DOMContentLoaded', () => {
    const enigmaKeyInput = document.getElementById('enigma-key');
    const messageInput = document.getElementById('message');
    const resultOutput = document.getElementById('result');
    const processBtn = document.getElementById('process-btn');
    const copyBtn = document.getElementById('copy-btn');
    const modeSwitch = document.getElementById('mode-switch');
    const modeLabel = document.getElementById('mode-label');
    const keyStatus = document.getElementById('key-status');
    
    enigmaKeyInput.addEventListener('input', validateKey);
    processBtn.addEventListener('click', processMessage);
    copyBtn.addEventListener('click', copyResult);
    modeSwitch.addEventListener('change', updateMode);
    
    updateMode();
    
    function validateKey() {
        const key = enigmaKeyInput.value.trim();
        
        if (key === '') {
            keyStatus.textContent = 'Key not validated';
            keyStatus.className = 'key-status';
            return false;
        }
        
        const validStarts = ['912', '913', '073'];
        const validEnds = ['891', '892', '893'];
        
        let isValid = false;
        let startFound = false;
        let startIndex = -1;
        
        for (const start of validStarts) {
            if (key.includes(start)) {
                startFound = true;
                startIndex = key.indexOf(start);
                break;
            }
        }
        
        if (startFound) {
            const keyAfterStart = key.substring(startIndex);
            for (const end of validEnds) {
                if (keyAfterStart.includes(end) && keyAfterStart.indexOf(end) > 3) {
                    isValid = true;
                    break;
                }
            }
        }
        
        if (isValid) {
            keyStatus.textContent = 'Valid key';
            keyStatus.className = 'key-status valid';
            return true;
        } else {
            keyStatus.textContent = 'Invalid key format';
            keyStatus.className = 'key-status invalid';
            return false;
        }
    }
    
    function updateMode() {
        if (modeSwitch.checked) {
            modeLabel.textContent = 'Decrypt';
            processBtn.textContent = 'Decrypt Message';
        } else {
            modeLabel.textContent = 'Encrypt';
            processBtn.textContent = 'Encrypt Message';
        }
    }
    
    function processMessage() {
        if (!validateKey()) {
            alert('Please enter a valid Enigma key');
            enigmaKeyInput.focus();
            return;
        }
        
        const message = messageInput.value.trim();
        if (message === '') {
            alert('Please enter a message to process');
            messageInput.focus();
            return;
        }
        
        const isDecryptMode = modeSwitch.checked;
        const key = enigmaKeyInput.value.trim();
        
        try {
            const result = isDecryptMode ? 
                decryptMessage(message, key) : 
                encryptMessage(message, key);
            
            resultOutput.value = result;
        } catch (error) {
            alert(`Error: ${error.message}`);
            console.error(error);
        }
    }
    
    function encryptMessage(message, key) {
        const mapping = extractMapping(key);
        
        return message.split('').map(char => {
            // Only encrypt letters
            if (/[a-zA-Z]/.test(char)) {
                const isUpperCase = char === char.toUpperCase();
                const normalizedChar = char.toLowerCase();
                const charCode = normalizedChar.charCodeAt(0) - 97;
                
                if (charCode >= 0 && charCode < 26) {
                    const mappedValue = mapping[charCode];
                    const mappedChar = String.fromCharCode(mappedValue + 97);
                    return isUpperCase ? mappedChar.toUpperCase() : mappedChar;
                }
            }
            return char;
        }).join('');
    }
    
    function decryptMessage(message, key) {
        const mapping = extractMapping(key);
        
        const reverseMapping = new Array(26);
        for (let i = 0; i < 26; i++) {
            reverseMapping[mapping[i]] = i;
        }
        
        return message.split('').map(char => {
            if (/[a-zA-Z]/.test(char)) {
                const isUpperCase = char === char.toUpperCase();
                const normalizedChar = char.toLowerCase();
                const charCode = normalizedChar.charCodeAt(0) - 97;
                
                if (charCode >= 0 && charCode < 26) {
                    const mappedValue = reverseMapping[charCode];
                    const mappedChar = String.fromCharCode(mappedValue + 97);
                    return isUpperCase ? mappedChar.toUpperCase() : mappedChar;
                }
            }
            return char;
        }).join('');
    }
    
    function extractMapping(key) {
        const validStarts = ['912', '913', '073'];
        let startIndex = -1;
        let startMarker = '';
        
        for (const start of validStarts) {
            if (key.includes(start)) {
                startIndex = key.indexOf(start);
                startMarker = start;
                break;
            }
        }
        
        if (startIndex === -1) {
            throw new Error('Invalid key: No valid start marker found');
        }
        
        const validEnds = ['891', '892', '893'];
        let endIndex = -1;
        
        for (const end of validEnds) {
            const tempIndex = key.indexOf(end, startIndex + startMarker.length);
            if (tempIndex !== -1) {
                endIndex = tempIndex;
                break;
            }
        }
        
        if (endIndex === -1) {
            throw new Error('Invalid key: No valid end marker found');
        }
        
        const mappingSection = key.substring(startIndex + startMarker.length, endIndex);
        
        const mapping = new Array(26).fill(0);
        let mappingIndex = 0;
        
        for (let i = 0; i < mappingSection.length - 1 && mappingIndex < 26; i += 2) {
            const pair = mappingSection.substring(i, i + 2);
            const value = parseInt(pair, 10);
            // Ensure the value is within range (0-25)
            mapping[mappingIndex] = value % 26;
            // console.log(`Letter ${String.fromCharCode(97 + mappingIndex)} (index ${mappingIndex}): pair=${pair}, value=${value}, mapped to ${String.fromCharCode(97 + (value % 26))} (index ${value % 26})`);
            mappingIndex++;
        }
        
        if (mappingIndex < 26) {
            throw new Error(`Incomplete key: Only ${mappingIndex} out of 26 mappings found`);
        }
        
        return mapping;
    }
    
    function copyResult() {
        resultOutput.select();
        document.execCommand('copy');
        
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'Copied!';
        setTimeout(() => {
            copyBtn.textContent = originalText;
        }, 1500);
    }
});