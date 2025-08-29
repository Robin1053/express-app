# Express App

Eine moderne Express.js-Anwendung mit robuster Architektur und Best Practices.

## 📋 Inhaltsverzeichnis

- [Beschreibung](#beschreibung)
- [Features](#features)
- [Voraussetzungen](#voraussetzungen)
- [Installation](#installation)
- [Verwendung](#verwendung)
- [API Endpoints](#api-endpoints)
- [Projektstruktur](#projektstruktur)
- [Konfiguration](#konfiguration)
- [Scripts](#scripts)
- [Technologien](#technologien)
- [Mitwirken](#mitwirken)
- [Lizenz](#lizenz)

## 🎯 Beschreibung

Diese Express.js-Anwendung bietet eine skalierbare Grundlage für Web-APIs und Server-seitige Anwendungen. Sie implementiert moderne JavaScript-Praktiken und bewährte Architekturmuster für robuste und wartbare Webanwendungen.

## ✨ Features

- ⚡ Express.js Server mit moderner ES6+ Syntax
- 🛡️ Sicherheitsmiddleware (CORS, Helmet, Rate Limiting)
- 📝 Strukturiertes Logging
- 🔧 Environment-basierte Konfiguration
- 📊 API-Dokumentation
- 🧪 Test-Setup
- 🐳 Docker-Unterstützung (optional)
- 📦 Package Management mit npm

## 🔧 Voraussetzungen

Stellen Sie sicher, dass folgende Software installiert ist:

- **Node.js** (Version 16.0.0 oder höher)
- **npm** (Version 8.0.0 oder höher)
- **Git**

```bash
# Version prüfen
node --version
npm --version
```

## 🚀 Installation

1. **Repository klonen**
   ```bash
   git clone https://github.com/Robin1053/express-app.git
   cd express-app
   ```

2. **Dependencies installieren**
   ```bash
   npm install
   ```

3. **Umgebungsvariablen konfigurieren**
   ```bash
   cp .env.example .env
   ```
   Bearbeiten Sie die `.env`-Datei mit Ihren spezifischen Konfigurationen.

4. **Anwendung starten**
   ```bash
   # Development Mode
   npm run dev
   
   # Production Mode
   npm start
   ```

## 💻 Verwendung

Nach der Installation ist die Anwendung unter folgender Adresse erreichbar:

```
http://localhost:3000
```

### Development Server

```bash
npm run dev
```
Startet die Anwendung im Development-Modus mit Hot-Reload.

### Production Server

```bash
npm run build
npm start
```

## 🌐 API Endpoints

### Grundlegende Endpoints

| Method | Endpoint | Beschreibung |
|--------|----------|--------------|
| GET    | `/`      | Willkommensseite |
| GET    | `/health`| Health Check |
| GET    | `/api/status` | API Status |

### Beispiel API Calls

```javascript
// Health Check
fetch('http://localhost:3000/health')
  .then(response => response.json())
  .then(data => console.log(data));

// API Status
fetch('http://localhost:3000/api/status')
  .then(response => response.json())
  .then(data => console.log(data));
```

## 📁 Projektstruktur

```
express-app/
├── src/                    # Quellcode
│   ├── controllers/        # Route Controller
│   ├── middleware/         # Custom Middleware
│   ├── routes/            # Route Definitionen
│   ├── services/          # Business Logic
│   ├── utils/             # Hilfsfunktionen
│   └── app.js             # Express App Setup
├── tests/                 # Test-Dateien
├── public/                # Statische Assets
├── config/                # Konfigurationsdateien
├── .env.example           # Environment Variablen Vorlage
├── .gitignore            # Git Ignore Rules
├── package.json          # NPM Dependencies
├── server.js             # Server Entry Point
└── README.md             # Projektdokumentation
```

## ⚙️ Konfiguration

### Environment Variablen

Erstellen Sie eine `.env`-Datei im Projektroot:

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Database (falls verwendet)
DB_HOST=localhost
DB_PORT=5432
DB_NAME=express_app
DB_USER=your_username
DB_PASS=your_password

# JWT Secret (falls verwendet)
JWT_SECRET=your_jwt_secret_here

# API Keys (falls benötigt)
API_KEY=your_api_key_here
```

### Konfigurationsdateien

Die Anwendung unterstützt verschiedene Konfigurationsdateien:

- `config/development.js` - Development Einstellungen
- `config/production.js` - Production Einstellungen
- `config/test.js` - Test Einstellungen

## 📜 Scripts

```bash
# Development
npm run dev          # Startet Development Server mit nodemon
npm run start        # Startet Production Server

# Testing
npm run test         # Führt Tests aus
npm run test:watch   # Führt Tests im Watch-Modus aus

# Code Quality
npm run lint         # ESLint Code-Prüfung
npm run lint:fix     # Automatische ESLint Korrekturen
npm run format       # Prettier Code-Formatierung

# Build (falls Build-Prozess vorhanden)
npm run build        # Erstellt Production Build
```

## 🛠️ Technologien

### Core Dependencies

- **Express.js** - Web Framework
- **Node.js** - Runtime Environment
- **dotenv** - Environment Variables
- **cors** - Cross-Origin Resource Sharing
- **helmet** - Security Middleware

### Development Dependencies

- **nodemon** - Development Auto-Restart
- **eslint** - Code Linting
- **prettier** - Code Formatting
- **jest** - Testing Framework (optional)

### Optional Dependencies

- **morgan** - HTTP Request Logger
- **express-rate-limit** - Rate Limiting
- **compression** - Response Compression
- **jsonwebtoken** - JWT Authentication
- **bcryptjs** - Password Hashing

## 🧪 Testing

```bash
# Alle Tests ausführen
npm test

# Tests mit Coverage
npm run test:coverage

# Einzelne Testdatei
npm test -- --testPathPattern=routes
```

### Test Struktur

```
tests/
├── unit/              # Unit Tests
├── integration/       # Integration Tests
├── fixtures/          # Test Data
└── setup.js          # Test Setup
```

## 🐳 Docker (Optional)

Falls Docker-Unterstützung implementiert ist:

```bash
# Docker Build
docker build -t express-app .

# Docker Run
docker run -p 3000:3000 express-app

# Docker Compose
docker-compose up
```

## 🔧 Development

### Code Style

Das Projekt verwendet ESLint und Prettier für einheitlichen Code-Style:

```bash
# Code-Style prüfen
npm run lint

# Automatische Korrekturen
npm run lint:fix
npm run format
```

### Git Hooks (falls konfiguriert)

- **pre-commit**: Führt Linting und Formatierung aus
- **pre-push**: Führt Tests aus

## 🤝 Mitwirken

Beiträge sind willkommen! Bitte beachten Sie folgende Schritte:

1. Fork des Repositories
2. Feature Branch erstellen (`git checkout -b feature/amazing-feature`)
3. Änderungen committen (`git commit -m 'Add amazing feature'`)
4. Branch pushen (`git push origin feature/amazing-feature`)
5. Pull Request erstellen

### Entwicklungsrichtlinien

- Schreiben Sie Tests für neue Features
- Befolgen Sie die bestehenden Code-Style-Richtlinien
- Dokumentieren Sie Ihre Änderungen
- Verwenden Sie aussagekräftige Commit-Messages

## 📄 Lizenz

Dieses Projekt ist unter der [MIT Lizenz](LICENSE) lizenziert.

## 👨‍💻 Autor

**Robin1053**
- GitHub: [@Robin1053](https://github.com/Robin1053)

## 🆘 Support

Bei Fragen oder Problemen:

1. Überprüfen Sie die [Issues](https://github.com/Robin1053/express-app/issues)
2. Erstellen Sie ein neues Issue
3. Kontaktieren Sie den Autor

## 📝 Changelog

### [1.0.0] - 2024-XX-XX
- Initiale Veröffentlichung
- Grundlegende Express.js Setup
- API Endpoints implementiert
- Dokumentation erstellt

---

⭐ **Gefällt Ihnen das Projekt? Geben Sie ihm einen Stern auf GitHub!**
