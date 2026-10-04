# Kiran Avinash Sode

**Forward Deployed Engineer · AI Engineer — Agentic AI · MCP · RAG · AWS Serverless**

Hyderabad, India · Open to relocation: Netherlands · Japan · Global remote
kiranavinash.sode@gmail.com · +91 9666752952 · linkedin.com/in/sode-kiran-avinash · github.com/sodekiranavinash · sodekiranavinash.github.io

## Summary

AI engineer with 5 years building GenAI and full-stack systems from poc to enterprise production. 2+ years forward-deployed with business, sales, and data teams, shipping high-impact AI Solutions — Pitch Intel (agentic sales-intelligence platform), Customer-facing Chat AI MCP server (100+ customers), and RAPID (300+ APIs made searchable as an MCP toolset). My expertise spans agentic AI (agents, agent harnesses, RAG, tools, MCP servers), platform engineering (Kubernetes, CI/CD, IaC). Author of get1agent, a fully serverless AWS agent platform (Bedrock + AgentCore).

## Skills

- **GenAI · LLMOps:** Agentic AI & multi-agent orchestration (LangGraph, LangChain), RAG (hybrid search, reranking, vector search), MCP (servers/clients, OAuth 2.0), prompt/context engineering, tool calling, evaluation & guardrails.
- **Full Stack:** Python (FastAPI, Flask), React (TypeScript), PostgreSQL, Oracle DB, REST APIs, RabbitMQ, Celery.
- **Cloud · Platform:** Kubernetes, AWS (Lambda, ECS, Bedrock, AgentCore, API Gateway, Step Functions, SQS, EventBridge, S3, S3 Vectors, DynamoDB, KMS), Docker, Helm, Kong API Gateway, Terraform, CI/CD, observability (OpenTelemetry, CloudWatch).
- **Delivery:** technical discovery, solution scoping,  onboarding, deployment, enablement, product adoption.

## Experience

### S&P Global — Commodity Insights (Energy) | Engineer II (AI) · Mar 2025 – Present · Hyderabad, India
**Tech:** LangGraph, FastMCP, OpenSearch, FastAPI, React, PostgreSQL, Kubernetes, Kong API Gateway, S3, LangSmith.

- Spearheading a forward-deployed team of 4 engineers across Pitch Intel, Chat AI, RAPID, and MCP Playground — owning discovery, architecture, and delivery across the agent, API, and UI layers, embedded with business and engineering.

**Pitch Intel (in progress)**
- Leading the design and delivery of an agentic sales-intelligence platform, partnering with the sales and commercial-pricing teams to scope requirements and cut pitch-report preparation from ~3 days to ~30 minutes.
- Shipped a drag-and-drop workflow builder that lets users compose agentic workflows from reusable agents, publish them to a shared gallery, and manage access with role-based access control (RBAC).
- Delivered research-backed pitch reports as infographics, HTML, PDF, and PowerPoint — grounded in approved web sources, proprietary company data, and sales MCP servers.

**Chat AI MCP Server**
- Launched a customer-facing MCP server for the Chat AI team exposing the SPGCI Python SDK — adopted by 100+ customers across MS Copilot, Claude, and Databricks.
- Integrated LLM-generated SDK code execution for structured data and AIRD (AI-Ready Data) APIs for unstructured data, reusing their core prompts for answer parity — removing SME review cycles.

**RAPID MCP Server**
- Owned the RAPID MCP server architecture, turning the API surface into a single MCP interface with just four tools (instructions, search, metadata, execute) and no microservice changes — saving hundreds of engineering hours.
- Improved LLM API-selection accuracy from around 85% to 95%+ with a search-and-rerank discovery strategy — the model searches the toolset, reviews top-k candidates, and executes the right endpoint among 300+ APIs.

**MCP Playground**
- Initiated an MCP playground now used by 10+ teams to test their servers against multiple models with real queries before production integration.
- Introduced a consistency framework that measures and compares tool calls and arguments across repeated test-query runs, giving teams a release-confidence score.

**API Platform**
- Modernized deployment for a 15+ microservices in platform from raw Kubernetes manifests to Helm charts, cutting deploy-day friction by ~25%.
- Overhauled platform security (Fluent Bit, OpenTelemetry, Data Prepper, monitoring), fixed critical vulnerabilities, and purged hardcoded secrets from git history across 10 repositories.
- Instrumented OpenSearch dashboards over Kubernetes events and metrics, giving teams faster detection and triage of production issues.

### Genpact — Consultant (client: Shutterfly, USA) · Feb 2024 – Mar 2025 · Hyderabad, India
**Tech:** LangGraph, FastAPI, React, Oracle DB, Azure OpenAI, EC2, S3, Erlang OTP, Jenkins, RabbitMQ, Celery.

**Product Intelligence Agent**
- Designed a TEXT2SQL chat application so the product team can query orders, complaints, and products in natural language — cutting ad-hoc data-team requests by ~25%.
- Extended it with a watchdog agent on top of the same product logic that proactively surfaces emerging issues — paper shortages, material alternatives, waste, and delays.

**Forge Module**
- Replaced legacy systems with production microservices (PDF generation, cutlines, template mapping) on RabbitMQ with Celery workers, lifting throughput ~50%.
- Accelerated upstream-service incident diagnosis with an Mnesia DB viewer (Python subprocess) and Erlang OTP cluster tooling, saving ~$10K per production incident.

### Creditsafe Technology | Jr. Full Stack Engineer · Oct 2021 – Feb 2024 · Hyderabad, India
**Tech:** FastAPI, Flask, React, JavaScript, PostgreSQL, ECS, S3, Terraform, Azure Pipelines, .NET, Jinja.

**Ledger Insights**
- Drove the platform's migration from legacy .NET to Python, React, AWS, and PostgreSQL — improving the user experience and lifting customer retention ~35%.
- Scaled premium features (AR Requests, CFO Reports, trade groups, Combined Experience) across backend services and React pages, supporting B2B deals worth ~$150K.

**Global Data Editing Tool**
- Developed a Flask data-editing application used across entities to correct inaccurate and redundant company data, raising data quality from ~85% to ~95%.
- Exposed REST APIs over US customer data (business expenditure, trade payments, accounts receivable) with authorization workflows that push audited records back to production databases.

## Selected Project

### get1agent — fully serverless AWS platform for agents, MCP tools & RAG | 2025 – Present
Solo-built, open source (Apache-2.0) · Live: get1agent.com · github.com/sodekiranavinash/get1agent

**Tech:** AWS Lambda, Bedrock AgentCore, Strands Agents, S3 Vectors, DynamoDB, React, Python, Github Actions.

- Architected a fully serverless, multi-tenant AWS platform where users build and share AI capabilities — knowledge bases, agents, workflows, skills, and tools — with per-user isolation and quotas, an agent marketplace, a skills catalog, scheduled runs, and a KMS-encrypted, operator-blind BYOK Vault.
- Built the agent runtime: a planner decomposing requests into sub-queries and todo steps, long-term memory, context compression, human-in-the-loop interrupts, and a chat with inline citations and feedback (Strands + Bedrock AgentCore).
- Pioneered a multi-agent workflow builder on Strands for deterministic Graph and dynamic Swarm orchestration — coordinator host, parallel execution, per-node overrides, and a live run timeline.
- Assembled the MCP layer: five servers (knowledge, code interpreter, web fetch, browser, custom tools), an OAuth 2.0 broker for third-party servers, and policy-checked AgentCore Gateway routing — plus an AI-assisted builder that generates and sandbox-tests custom MCP servers in microVMs.
- Engineered retrieval that cites its sources: event-driven ingestion (PDF, DOCX, XLSX), hybrid semantic + keyword search (Titan embeddings in S3 Vectors, BM25) fused with RRF, Bedrock Rerank, small-to-big retrieval, and page/sheet citations.
- Established quality and operations: trace replay with A/B model runs, datasets and annotation queues, Ragas-aligned LLM judges, and signed trace links — plus Bedrock Guardrails, OpenTelemetry tracing into CloudWatch/X-Ray, AI-credit budgets, and cost levers (prompt caching, semantic cache).

## Awards

S&P Global Energy Recognition Program (2026) · Genpact Outstanding Contribution (2024) · Creditsafe Extra Mile Award (2023)

## Education

**B.Tech — JNTUK** | Chaitanya Institute of Science and Technology (CIST), Kakinada, India | 2018 – 2021

**Languages:** English — full professional proficiency.
