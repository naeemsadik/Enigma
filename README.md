# Enigma Encryption System

A modern, web-based encryption tool inspired by the historical Enigma machine. Encrypt and decrypt messages using custom-generated numerical keys, all in your browser.

[Live Demo](https://naeemsadik.github.io/Enigma/index.html)

---

## 🚀 Overview

The Enigma Encryption System lets you securely encrypt and decrypt messages using a custom key. The system uses a substitution cipher, where each letter in the alphabet is mapped to another letter based on a unique key you generate.

- **Main App:** [`index.html`](index.html)
- **Key Generator:** [`keygen.html`](keygen.html)

## ✨ Features

- **Custom Key Generation:** Generate strong, random keys with start/end markers.
- **Bidirectional Operation:** Encrypt and decrypt with the same key.
- **Real-time Key Validation:** Instantly see if your key is valid.
- **User-friendly Interface:** Responsive, modern UI for desktop and mobile.
- **Copy to Clipboard:** Easily copy results and generated keys.
- **All Local:** No data leaves your browser.

## 🗝️ How It Works

### Key Structure

- A valid key contains:
  - A start marker (`912`, `913`, or `073`)
  - 52 digits (26 pairs) representing letter mappings
  - An end marker (`891`, `892`, or `893`)
  - Optional random digits before/after for obfuscation

**Example Key:**
```
1239120102030405060708091011121314151617181920212223242525891123
```

### Encryption & Decryption

- **Encrypt:** Enter your key and message, set mode to "Encrypt", and click "Encrypt Message".
- **Decrypt:** Enter the same key, paste the encrypted message, set mode to "Decrypt", and click "Decrypt Message".
- Non-alphabetic characters are preserved.
- Case is preserved.

### Key Generation

- Use the [Key Generator](keygen.html) to create a valid key.
- Click "Generate Key" and copy the result for use in the main app.

## 🛠️ Technical Details

- **Cipher:** Substitution cipher based on key-defined mapping.
- **Mapping Extraction:** The app extracts the mapping from the digits between the start and end markers.
- **Validation:** Only keys with valid markers and 26 pairs are accepted.

## 📋 Usage

1. Go to [Enigma Encryption System](https://naeemsadik.github.io/Enigma/index.html)
2. (Optional) Generate a key at [Key Generator](https://naeemsadik.github.io/Enigma/keygen.html)
3. Enter your key and message.
4. Choose Encrypt or Decrypt.
5. Copy your result.

## 📱 Mobile & Browser Support

- Fully responsive for desktop, tablet, and mobile.
- Works on Chrome, Firefox, Safari, Edge, Opera.

## 🔒 Privacy

All encryption and decryption happens locally in your browser. No data is sent to any server.

## 📄 License

MIT License. See [LICENSE](LICENSE) for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

- Fork the repo
- Create a feature branch
- Submit a pull request

### Future Improvements

- Support for multiple encryption algorithms
- Offline mode
- CLI version
- File and image encryption
- API endpoints
- Enhanced validation and security

---

**Note:** This system is for educational and casual use. For sensitive data, use established cryptographic standards like AES or RSA.
