# AI Content Generation - Ollama Prompts

This guide contains Ollama prompts you can run locally to generate professional content for your AI consultant portfolio.

## Prerequisites

- Ollama running locally (`ollama serve`)
- A model installed (e.g., `ollama pull mistral` or `ollama pull neural-chat`)

## How to Use These Prompts

1. Open your terminal
2. Run: `ollama run <model-name>` (e.g., `ollama run mistral`)
3. Copy-paste each prompt below into the Ollama chat
4. Copy the generated output
5. Paste into the corresponding field in `content.json`

---

## Prompt 1: Professional Bio

**Use this for:** The main biography in the About section

```
Write a professional 2-3 sentence bio for an AI consultant specializing in helping businesses implement artificial intelligence solutions. 

Key points to cover:
- Expertise in machine learning and LLMs
- Experience helping businesses with AI strategy and implementation
- Passion for turning AI concepts into production systems

Make it engaging, authoritative, and suitable for a portfolio website. 
Write for a technical but professional audience.
```

**Field in content.json:** `bio`

---

## Prompt 2: Service Descriptions

**Use this for:** Services offered in the About section

```
Create 3-4 professional service offerings for an AI consultant. 
For each service, provide:
- A clear, catchy title
- A 1-2 sentence description

Services could include:
- AI/ML strategy consulting
- LLM integration and deployment
- Custom model development
- Data pipeline and ML ops
- AI training and workshops
- Prompt engineering

Format as JSON array:
[
  {
    "title": "Service Name",
    "description": "What it provides and the value it delivers"
  },
  ...
]

Make descriptions action-oriented and benefit-focused.
```

**Field in content.json:** `services` (array)

---

## Prompt 3: Project Description 1

**Use this for:** First featured project

```
I'm building a portfolio for an AI consultant. Write a compelling project description 
for the following scenario:

Project: A chatbot implementation using LLMs and RAG (Retrieval-Augmented Generation) 
that was deployed for a customer support team.

The description should:
- Highlight the technical approach (mention RAG, LLMs, etc.)
- Show measurable impact (e.g., efficiency gains, cost savings)
- Demonstrate business understanding
- Be 1-2 paragraphs (under 280 characters per paragraph ideally)
- Showcase both technical depth and business value

Make it specific with metrics when possible.
```

**Field in content.json:** `projects[0].description`

---

## Prompt 4: Project Description 2

**Use this for:** Second featured project

```
I'm building a portfolio for an AI consultant. Write a compelling project description 
for the following scenario:

Project: A predictive analytics pipeline for customer churn prediction, including 
feature engineering, ML model development (using something like XGBoost), and 
automated retraining. The model was deployed in production.

The description should:
- Explain the ML pipeline architecture
- Show measurable business impact (reduced churn %)
- Demonstrate problem-solving and technical skills
- Be 1-2 paragraphs
- Include specific technical choices and results

Make it specific with metrics and impact.
```

**Field in content.json:** `projects[1].description`

---

## Prompt 5: Project Description 3

**Use this for:** Third featured project

```
I'm building a portfolio for an AI consultant. Write a compelling project description 
for the following scenario:

Project: A document intelligence system using computer vision, OCR, and ML to 
automate data extraction from unstructured documents in bulk. The system 
processed thousands of documents with high accuracy.

The description should:
- Highlight the computer vision and automation approach
- Show scale (documents processed, time saved)
- Demonstrate business process improvement
- Be 1-2 paragraphs
- Explain the technical solution clearly

Make it impressive with metrics and real-world impact.
```

**Field in content.json:** `projects[2].description`

---

## Prompt 6: Service Offerings List (Simplified)

**Use this for:** Additional context/headline in content

```
Write a catchy one-line headline for an AI consultant portfolio. 
It should:
- Communicate what the consultant does (AI/ML/LLM work)
- Appeal to business decision-makers
- Be memorable (under 10 words)

Examples of style:
- "From AI Strategy to Production Deployment"
- "Turning AI Concepts Into Business Results"
- "Enterprise AI Solutions. Built Right."

Provide 3-5 options.
```

**Field in content.json:** `headline`

---

## Prompt 7: Short Subject Line

**Use this for:** Contact section call-to-action

```
Write a compelling 1-2 sentence call-to-action for someone visiting an AI 
consultant's portfolio and ready to get in touch.

It should:
- Create urgency or interest in reaching out
- Be professional but friendly
- Suggest collaboration/partnership
- Be suitable for a contact section

Examples of style:
- "Let's build something amazing together"
- "Ready to unlock your AI potential?"
- "Let's discuss how AI can transform your business"

Provide 3-4 options.
```

**Field in content.json:** `contact.callToAction`

---

## Step-by-Step Workflow

1. **Start Ollama:** `ollama serve` in one terminal
2. **Run the model:** `ollama run mistral` (in another terminal)
3. **Copy each prompt** from above into the Ollama chat
4. **Copy the response** and clean it up as needed
5. **Paste into content.json** in the appropriate field
6. **Save content.json** and refresh your browser to see changes

## Tips

- If a response is too long, ask Ollama to "Make it shorter"
- If you want a different tone, specify: "Make it more technical/business-focused/creative"
- You can iterate: "That's good but make the impact metrics more specific"
- Save good outputs - keep a copy before finalizing

---

## Example content.json Structure

```json
{
  "name": "Your Name",
  "title": "AI Consultant",
  "headline": "[Generated from Prompt 6]",
  "bio": "[Generated from Prompt 1]",
  "services": [
    {
      "title": "[Generated from Prompt 2]",
      "description": "[Generated from Prompt 2]"
    }
  ],
  "projects": [
    {
      "title": "Customer Support Chatbot",
      "description": "[Generated from Prompt 3]"
    },
    {
      "title": "Predictive Analytics Pipeline",
      "description": "[Generated from Prompt 4]"
    },
    {
      "title": "Document Intelligence System",
      "description": "[Generated from Prompt 5]"
    }
  ],
  "contact": {
    "callToAction": "[Generated from Prompt 7]",
    "email": "your.email@example.com"
  }
}
```

---

## Need Help?

If a response doesn't feel right:
- Ask Ollama for a revision or alternative
- Try a different model if available
- Combine the best parts of multiple responses
- Edit manually if needed (render.js will still work)

The goal is to have content that resonates with YOUR audience and YOUR expertise.
