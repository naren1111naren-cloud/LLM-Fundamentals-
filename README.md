# LLM Fundamentals Playground (Phase 01)

> **Making LLM Behavior Observable**  
> An interactive engineering environment for understanding the core foundations behind modern Large Language Model systems.

Built as part of **Phase 1 of the LLM Engineering Journey** for a build-in-public showcase on LinkedIn.

---

## ⚡ What Makes This Different?

Most beginner AI projects build a generic ChatGPT clone. This playground is designed from first principles as an **observable developer laboratory** to visually deconstruct the mechanics that occur between user keystrokes and deterministic application execution:

1. **Token Explorer (Byte Pair Encoding)**: Visualizes subword partition boundaries, preserved whitespace tokens, byte lengths, and token vocabulary IDs.
2. **Context Window Simulator**: Stacked memory visualization (System, RAG, Chat History, Question, Completion Reserve) with dynamic saturation warnings at 85%+ memory horizons.
3. **Prompt Engineering Lab**: Side-by-side evaluation of ambiguous unconstrained prompts vs. role-based, schema-constrained engineered specifications with live clarity/specificity scores.
4. **Temperature Playground**: Interactive sampling slider with real-time Softmax probability distribution curves across top candidate logits, contrasting greedy argmax ($T=0.1$) with creative entropy ($T=1.3$).
5. **Structured Output (RFC-8259)**: Grammar-constrained decoding converting natural language into typed JSON objects with validation checks (Valid JSON, Schema Match, Parseable).
6. **Hallucination Lab**: A direct, visual proof that **Confidence $\neq$ Correctness**. Contrasts deceptive parametric hallucinations against grounded RAG evidence citations.
7. **Streaming Telemetry**: Real-time token generation with live Server-Sent Events (SSE) signal, Time to First Token (TTFT) metrics, and tokens/sec throughput.
8. **LLM Application Pipeline**: Clickable 8-stage architectural blueprint from raw user input to deterministic application integration, plus the Phase 1 $\to$ Phase 2 roadmap.

---

## 📸 LinkedIn Presentation Mode

Click the **Presentation Mode** button in the top navigation bar to:
- Hide the sidebar navigation
- Expand the main interactive canvas into optimal 16:9 screenshot framing
- Enhance contrast and glow tokens for high-resolution visual capture
- Rapidly switch between the 5 key showcase screens: **Token Explorer, Prompt Lab, Structured Output, Hallucination Lab, and Architecture**.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Installation & Run
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Open [http://127.0.0.1:5173/](http://127.0.0.1:5173/) in your browser.

---

## 🛠 Tech Stack
- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS (Tailored dark midnight theme, electric cyan & violet glows)
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Design System**: Developer tooling aesthetic (OpenAI tooling + modern research dashboard)
