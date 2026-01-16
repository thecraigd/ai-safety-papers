# The Guardrail
## AI Safety Paper Aggregator

[![The Guardrail](https://www.craigdoesdata.com/img/blog/guardrail.png)](https://thecraigd.github.io/ai-safety-papers/)

A web application that automatically identifies, categorizes, and summarizes AI safety-relevant research papers from arXiv. Updated daily with LLM-powered relevance filtering.

## Features

- **Daily automated ingestion** of ML/AI papers from arXiv via their public API
- **LLM-powered filtering** using Google Gemini to identify safety-relevant papers
- **Multi-tag categorization** across 10 safety-focused categories
- **Detailed Analytics** of trends in AI safety-related publication
- **Concise summaries** highlighting key contributions
- **Professional web interface** with filtering and dark mode

## Categories

Papers are classified into the following categories:

- **AI Control** - Human oversight and control over AI systems
- **RLHF** - Reinforcement Learning from Human Feedback
- **I/O Classifiers** - Content filtering and safety classifiers
- **Mechanistic Interpretability** - Understanding model internals
- **Position Paper** - Opinion pieces and policy proposals
- **Alignment Theory** - Foundational alignment research
- **Robustness & Security** - Adversarial robustness and defenses
- **Evaluations & Benchmarks** - Safety evaluations and red-teaming
- **Governance & Policy** - AI governance and regulation
- **Agent Safety** - Safety for autonomous AI agents

## Setup

### Prerequisites

- Python 3.11+
- Node.js 20+
- A Gemini API key from [Google AI Studio](https://ai.google.dev)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ai-safety-papers.git
cd ai-safety-papers
```

2. Install Python dependencies:
```bash
pip install -r requirements.txt
```

3. Install frontend dependencies:
```bash
cd frontend
npm install
```

4. Set up your Gemini API key:
```bash
export GEMINI_API_KEY="your-api-key-here"
```

### Running Locally

1. Fetch papers from arXiv:
```bash
cd scripts
python fetch_papers.py --date 2025-12-18
```

2. Process papers through LLM pipeline:
```bash
python process_papers.py --date 2025-12-18
```

3. Start the frontend dev server:
```bash
cd frontend
npm run dev
```

### Initial Backfill

To backfill 30 days of papers:
```bash
cd scripts
python fetch_papers.py --backfill-days 30
python process_papers.py --all
```

## Deployment

### GitHub Pages

1. Add `GEMINI_API_KEY` to repository secrets
2. Enable GitHub Pages in repository settings
3. The daily workflow will automatically fetch, process, and deploy

### Manual Deploy

```bash
cd frontend
npm run build
# Deploy the `dist` folder to your static host
```

## Configuration

### GitHub Actions Secrets

- `GEMINI_API_KEY` - Your Google Gemini API key

### Customization

- Edit `scripts/llm_processor.py` to adjust categorization prompts
- Edit `frontend/tailwind.config.mjs` to customize styling
- Edit `frontend/astro.config.mjs` to update site URL and base path

## Acknowledgments

Thank you to [arXiv](https://arxiv.org) for use of its open access interoperability, and to [Claude Code](https://code.claude.com/docs/en/overview) and [Codex](https://openai.com/codex/) for making this project much easier to implement than it would have been 6 months ago.

## License

MIT License - see LICENSE file for details.

[![CraigDoesData][logo]][link]

[logo]: https://www.craigdoesdata.com/img/logo/logo.png
[link]: https://www.craigdoesdata.com/
