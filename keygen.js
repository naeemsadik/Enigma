document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const generatedKeyTextarea = document.getElementById('generated-key');
    const copyKeyBtn = document.getElementById('copy-key-btn');
    const keygenStatus = document.getElementById('keygen-status');

    generateBtn.addEventListener('click', () => {
        const key = generateValidKey();
        generatedKeyTextarea.value = key;
        keygenStatus.textContent = 'Valid key generated!';
        keygenStatus.className = 'key-status valid';
    });

    copyKeyBtn.addEventListener('click', () => {
        generatedKeyTextarea.select();
        document.execCommand('copy');
        const originalText = copyKeyBtn.textContent;
        copyKeyBtn.textContent = 'Copied!';
        setTimeout(() => {
            copyKeyBtn.textContent = originalText;
        }, 1500);
    });

    function generateValidKey() {
        // Valid start and end markers
        const validStarts = ['912', '913', '914'];
        const validEnds = ['891', '892', '893'];
        // Randomly pick start and end
        const start = validStarts[Math.floor(Math.random() * validStarts.length)];
        const end = validEnds[Math.floor(Math.random() * validEnds.length)];
        // Generate 52 random digits for mapping (26 pairs)
        let mapping = '';
        let used = [];
        // Generate a random permutation of 0-25 for mapping
        let nums = Array.from({length: 26}, (_, i) => i);
        for (let i = nums.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
        for (let i = 0; i < 26; i++) {
            let val = nums[i];
            if (val < 10) {
                mapping += '0' + val;
            } else {
                mapping += val;
            }
        }
        // Optionally add random digits before and after
        const prefix = Math.random() < 0.5 ? randomDigits(Math.floor(Math.random() * 4)) : '';
        const suffix = Math.random() < 0.5 ? randomDigits(Math.floor(Math.random() * 4)) : '';
        return prefix + start + mapping + end + suffix;
    }

    function randomDigits(n) {
        let s = '';
        for (let i = 0; i < n; i++) {
            s += Math.floor(Math.random() * 10);
        }
        return s;
    }
});