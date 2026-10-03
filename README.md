# The Guardrail
## AI Safety Paper Aggregator

[![The Guardrail](https://www.craigdoesdata.com/img/blog/guardrail.png)](https://thecraigd.github.io/ai-safety-papers/)

A web application that automatically identifies, categorizes, and summarizes AI safety-relevant research papers from arXiv. Updated daily with LLM-powered relevance filtering.

## Features

- **Daily automated ingestion** of ML/AI papers from arXiv via their public API
- **LLM-powered filtering** using OpenAI GPT-5.6 Terra to identify safety-relevant papers, with GPT-6 Sol reviewing each day's top candidates
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
- An OpenAI API key from the [OpenAI API platform](https://platform.openai.com/api-keys)

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

4. Set up your OpenAI API key:
```bash
export OPENAI_API_KEY="your-api-key-here"
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

To backfill specific arXiv submission days (UTC), e.g. after failed runs:
```bash
python fetch_papers.py --submission-dates 2026-09-10..2026-09-11,2026-09-19
python process_papers.py --all
```

Every analysed paper ID, included or rejected, is recorded in
`data/index/fetch-ledger.json` (stored in R2 alongside `all-papers.json`), so
re-running a fetch never sends the same paper to the model twice. Without
arguments, `fetch_papers.py` fetches from the last day the scheduled run
covered (minus three days for late arXiv announcements) through yesterday, so a
run after a failure catches up automatically.

## Deployment

### GitHub Pages

1. Add `OPENAI_API_KEY` to repository secrets (never commit it or paste it into a workflow):
```bash
gh auth login -h github.com
gh secret set OPENAI_API_KEY --repo thecraigd/claude-code-workspace
gh secret list --repo thecraigd/claude-code-workspace
```
The `gh secret set` command securely prompts for the key value.
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

- `OPENAI_API_KEY` - Your OpenAI project API key
### GitHub Actions Variables (optional)

- `OPENAI_FREE_TOKENS_LARGE` / `OPENAI_FREE_TOKENS_SMALL` - Daily complimentary
  data-sharing tokens for the GPT-5.6 Terra/Luna and GPT-6 Sol/Luna buckets.
  Unset means usage tiers 1-2 (2,500,000 and 250,000); at tier 3+ use
  10000000 and 1000000.

### Environment overrides (local runs)

- `OPENAI_MODEL` - Per-paper analysis model; defaults to `gpt-5.6-terra`
- `OPENAI_REASONING_EFFORT` - Its reasoning effort; defaults to `none`
- `OPENAI_REVIEW_MODEL` / `OPENAI_REVIEW_REASONING_EFFORT` - Top-paper reviewer;
  defaults to `gpt-6-sol` at `medium`
- `OPENAI_TOKEN_GUARD=off` - Allow a deliberately paid run past the free quota

### Free-token budget

The org shares API traffic with OpenAI in exchange for complimentary daily
tokens. `scripts/token_budget.py` tracks each bucket's use per UTC day (kept in
R2 as `index/token-budget.json`) and refuses any request that could cross 92%
of the quota, because a request that crosses it is billed in full. Papers left
over are deferred to the next run, and the fetch cursor is held back so its
window still covers them.

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
