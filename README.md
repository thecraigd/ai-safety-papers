# The Guardrail

**AI safety research from arXiv, screened daily and ranked weekly.**
[theguardrail.net](https://theguardrail.net)

This repository holds the published website: the static files that the
deploy workflow builds and pushes here, served through GitHub Pages. The
pipeline that screens papers and produces the data is not in this repository.

## What the site does

- Every day, new machine-learning papers from arXiv are screened by a language
  model for relevance to AI safety. Relevant papers are summarized, given
  categories and tags, and scored on five criteria.
- The strongest candidates get a second review by a stronger model. Its scores
  rank **The Weekly Ten** (the ten highest-ranked papers of each week, also sent
  by email) and **The Daily Five** (each day's top five).
- Everything is automated. No one selects, edits or reorders papers by hand.

How it works, and its limitations, are set out in full on the
[methodology page](https://theguardrail.net/methodology/).

## Categories

Interpretability · Alignment · Robustness & Security · Evaluations ·
Agents & Control · Policy & Governance

## Open data

The index is free to download and reuse, and is updated daily:

- [all-papers.json](https://data.theguardrail.net/index/all-papers.json):
  every arXiv paper with its abstract, summary, categories, tags and scores
  (a large file).
- [browse-index.json](https://data.theguardrail.net/index/browse-index.json):
  a smaller version without abstracts, including conference papers.

Paper metadata comes from arXiv. Thank you to arXiv for use of its open access
interoperability. The Guardrail is not affiliated with arXiv.

## Funding

The Guardrail is funded by a BlueDot Impact Rapid Grant.

## Contact

Corrections, questions and suggestions: [contact@theguardrail.net](mailto:contact@theguardrail.net)
