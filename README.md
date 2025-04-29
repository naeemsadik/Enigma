# Enigma Encryption System

![Enigma](https://img.shields.io/badge/Enigma-Encryption-blue)
![Version](https://img.shields.io/badge/Version-1.0-green)
![License](https://img.shields.io/badge/License-MIT-yellow)

A modern web-based encryption system inspired by the historical Enigma machine, allowing users to encrypt and decrypt messages using custom numerical keys.

## 🔐 Overview

The Enigma Encryption System provides a secure way to encrypt messages using a custom numerical key that follows specific patterns. The system uses a substitution cipher approach where each letter in the alphabet is mapped to another letter based on the numerical patterns in your key.

## ✨ Features

- **Custom Encryption Keys**: Create your own unique encryption keys with specific start and end markers
- **Bidirectional Operation**: Both encrypt and decrypt messages with the same key
- **Real-time Key Validation**: Instant feedback on key validity
- **User-friendly Interface**: Clean, responsive design that works on all devices
- **Copy Functionality**: Easily copy encrypted/decrypted results

## 🚀 How It Works

1. **Key Structure**: 
   - Valid keys must contain a start marker (222, 223, or 231)
   - Followed by numerical values that define the letter mappings
   - Ending with an end marker (232, 233, or 241)

2. **Encryption Process**:
   - Each letter in your message is converted according to the mapping defined in your key
   - Non-alphabetic characters remain unchanged
   - Case is preserved during encryption/decryption

3. **Security**:
   - The security of your messages depends on keeping your key private
   - You can hide your key markers within longer sequences of random numbers

## 📋 Usage

### Creating a Valid Key

A valid Enigma key follows this pattern:
```
[optional random digits]231[52 digits representing mappings]232[optional random digits]
```

Example key:
```
9876543210231060708091011121314151617181920212223242526272829303132333435363738394041424344454647484950515253232987654321
```

### Encrypting a Message

1. Enter your Enigma key in the key field
2. Type your message in the message field
3. Ensure the toggle is set to "Encrypt"
4. Click "Encrypt Message"
5. Copy the encrypted result

### Decrypting a Message

1. Enter the same Enigma key used for encryption
2. Paste the encrypted message in the message field
3. Switch the toggle to "Decrypt"
4. Click "Decrypt Message"
5. View the original message

## 🛠️ Technical Details

The system uses a substitution cipher where:
- Each letter in the alphabet (a-z) is mapped to another letter
- The mapping is derived from the numerical values in your key
- The system extracts the mapping between valid start and end markers
- Each pair of digits in the key represents a mapping value

## 🔍 Key Validation

Your key must:
- Contain one of the valid start markers (222, 223, 231)
- Contain one of the valid end markers (232, 233, 241)
- Have the end marker appear after the start marker

## 🌐 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## 📱 Mobile Support

The interface is fully responsive and works on:
- iOS devices
- Android devices
- Tablets
- Desktop browsers

## 🔒 Privacy

All encryption and decryption happens locally in your browser. No data is sent to any server.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Here are some planned improvements we'd love help with:

### Future Improvements

- Add support for multiple encryption algorithms
- Create a mobile app version
- Add offline mode capabilities
- Enhance security with additional validation layers
- Create a command-line interface (CLI) version
- Add unit tests and integration tests
- Implement file encryption/decryption support
- Add support for encryption/decryption of images
- Create API endpoints for programmatic access

Feel free to:
- Fork the repository
- Create a feature branch
- Submit pull requests
- Report bugs
- Suggest new features
- Help with documentation

Please read our contributing guidelines before making any changes.

## 📧 Contact

For questions or feedback, please open an issue in the repository.

---

**Note**: This encryption system is designed for educational purposes and casual use. For truly sensitive information, please use established encryption standards like AES, RSA, or other professionally audited cryptographic solutions.

        