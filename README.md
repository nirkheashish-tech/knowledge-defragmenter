# Knowledge Defragmenter

**An automated, zero-effort synthesizer for your knowledge and voice.**

Defrag helps you maintain a single "Master Document" by intelligently absorbing stories and insights from scattered sources (interview notes, drafts, case studies) while ensuring everything matches your unique terminology and tone.

## Features

- **Anchor-Based Synthesis**: Use your Master Doc as a voice anchor.
- **Automated Harvesting**: AI scans your source documents for unique information not present in your Master.
- **Voice Translation**: Automatically rewrites new content to match your established style.
- **Section-Aware Mapping**: Automatically identifies where new info belongs in your document structure.
- **Local-First & Private**: Your documents stay on your machine.
- **Multi-AI Support**: Works with OpenAI, Claude, Gemini, and DeepSeek.

## Quick Start

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run in Development**:
   ```bash
   npm run dev
   ```

3. **Package as a Mac App**:
   ```bash
   npm run package
   ```

## Architecture

Built with the same high-quality standards as [Tessera](https://github.com/nirkheashish-tech/tessera):
- **Electron** for a native desktop experience.
- **Vite + TypeScript** for modern, fast development.
- **Tailwind CSS** for a clean macOS-inspired UI.
- **Prisma + SQLite** for robust local data management.

## License

MIT
