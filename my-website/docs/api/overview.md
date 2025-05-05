---
id: worksense-api
slug: /api/overview
title: Worksense API | Developer Documentation
sidebar_position: 1
description: Comprehensive guide to the Worksense API - an intuitive, AI-powered platform for Agile project planning
keywords: [API, Worksense, Agile, Scrum, Project Management]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Worksense API

<div className="hero shadow--md" style={{borderRadius: '8px', overflow: 'hidden', marginBottom: '2rem'}}>
  <div className="container">
    <div className="row" style={{padding: '2rem 1rem'}}>
      <div className="col col--7">
        <h1 className="hero__title">Simplify Agile with AI</h1>
        <p className="hero__subtitle">
          Automate the operational overhead of Scrum so your team can focus on delivering real value
        </p>
      </div>
      <div className="col col--5">
        <img 
          src={useBaseUrl("/img/worksenseLogo.svg")} 
          alt="Worksense API Illustration" 
          style={{maxHeight: '200px'}}
        />
      </div>
    </div>
  </div>
</div>

## What is Worksense?

Worksense is an intuitive, intelligent, and visually refined platform designed to simplify Agile project planning. It leverages AI to eliminate repetitive tasks by assisting in the creation of:

- User stories
- Epics
- Sprint tasks
- Actionable project insights

By automating the operational overhead of Scrum, Worksense empowers teams to focus on delivering real value—boosting productivity, alignment, and engagement.

:::info Who is it for?
This platform serves both technical and non-technical users, including Scrum Masters, Product Owners, Developers, and cross-functional teams.
:::

## Technology Stack

<div className="row margin-bottom--lg">
  <div className="col col--6">
    <div className="card" style={{height: '100%'}}>
      <div className="card__header">
        <h3>Core Technologies</h3>
      </div>
      <div className="card__body">
        <ul className="tech-list">
          <li>
            <img src={useBaseUrl("/img/icons/typecript.svg")} alt="TypeScript" className="tech-icon" />
            <code>TypeScript</code> - Primary language
          </li>
          <li>
            <img src={useBaseUrl("/img/icons/nodejs.svg")} alt="Node.js" className="tech-icon" />
            <code>Node.js (Express)</code> - Backend framework
          </li>
          <li>
            <img src={useBaseUrl("/img/icons/react.svg")} alt="React" className="tech-icon" />
            <code>React (Vite)</code> - Frontend library
          </li>
          <li>
            <img src={useBaseUrl("/img/icons/tailwind.svg")} alt="TailwindCSS" className="tech-icon" />
            <code>TailwindCSS</code>, <code>ShadCN UI</code>, <code>Hero UI</code> - UI frameworks
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="col col--6">
    <div className="card" style={{height: '100%'}}>
      <div className="card__header">
        <h3>Data & Services</h3>
      </div>
      <div className="card__body">
        <ul className="tech-list">
          <li>
            <ul>
              <li>
              <img src={useBaseUrl("/img/icons/sql.svg")} alt="sql" className="tech-icon" />
              <code>SQL Server</code> - Auth, user management, platform roles
              </li>
              <li>
              <img src={useBaseUrl("/img/icons/firebase.svg")} alt="firebase" className="tech-icon" />
              <code>Firebase Firestore</code> - Project data, backlog, sprints, tasks
              </li>
            </ul>
          </li>
          <li><code>JWT</code> - Authentication</li>
          <li><code>Frida AI</code> + Softtek custom endpoints - AI services</li>
        </ul>
      </div>
    </div>
  </div>
</div>

## Authentication & Authorization

### Token Generation

JWT tokens are issued upon successful login and encode key user data required for authentication and authorization across the system.

<Tabs groupId="auth-code">
  <TabItem value="server" label="Server-side" default>

```typescript
// Token Generation (server-side)
import jwt from "jsonwebtoken";

const payload = {
  email,
  userId: loginData.UserID,
  platformRole: loginData.platformRole,
};

const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
  expiresIn: "1h",
});
```

  </TabItem>
  <TabItem value="client" label="Client-side">

```typescript
// Axios Interceptor (client-side)
apiClient.interceptors.request.use((config) => {
  const token = authService.getToken();
  if (token) {
    config.headers = config.headers || {};
    config.headers["auth-token"] = token;
  }
  return config;
});
```

  </TabItem>
</Tabs>

### Role-Based Access Control

<div className="row">
  <div className="col col--4">
    <div className="card" style={{height: '100%', borderLeft: '4px solid #ac1754'}}>
      <div className="card__header">
        <h3>Platform Admins</h3>
      </div>
      <div className="card__body">
        <p>Manage users, assign platform roles, and access all administrative routes.</p>
      </div>
    </div>
  </div>
  <div className="col col--4">
    <div className="card" style={{height: '100%', borderLeft: '4px solid #ac1754'}}>
      <div className="card__header">
        <h3>Standard Users</h3>
      </div>
      <div className="card__body">
        <p>Limited to project-specific actions and defined access scope.</p>
      </div>
    </div>
  </div>
  <div className="col col--4">
    <div className="card" style={{height: '100%', borderLeft: '4px solid #ac1754'}}>
      <div className="card__header">
        <h3>Custom Project Roles</h3>
      </div>
      <div className="card__body">
        <p>Defined per project with fine-grained permissions based on project modules.</p>
      </div>
    </div>
  </div>
</div>

## Quick Start Workflow

<div className="workflow-steps">
  <div className="workflow-step">
    <div className="workflow-step__number">1</div>
    <div className="workflow-step__content">
      <h4>Authenticate</h4>
      <code>POST /login</code>
    </div>
  </div>
  <div className="workflow-step">
    <div className="workflow-step__number">2</div>
    <div className="workflow-step__content">
      <h4>Create a Project</h4>
      <code>POST /projects</code>
    </div>
  </div>
  <div className="workflow-step">
    <div className="workflow-step__number">3</div>
    <div className="workflow-step__content">
      <h4>Add Members</h4>
      <code>POST /projects/{'{projectId}'}/members</code>
    </div>
  </div>
  <div className="workflow-step">
    <div className="workflow-step__number">4</div>
    <div className="workflow-step__content">
      <h4>Create Backlog Items</h4>
      <code>POST /projects/{'{projectId}'}/backlog/items</code>
    </div>
  </div>
  <div className="workflow-step">
    <div className="workflow-step__number">5</div>
    <div className="workflow-step__content">
      <h4>Generate or Add Sprints</h4>
      <code>POST /projects/{'{projectId}'}/sprints</code>
    </div>
  </div>
  <div className="workflow-step">
  </div>
  <div className="workflow-step">
  </div>
</div>

:::tip
For detailed request/response definitions, refer to the [Swagger API Reference](http://cg84cocoscc04c8s4gckwok4.4.236.22.176.sslip.io/api-docs/#/).
:::

## AI-Powered Planning

<div className="card ai-features">
  <div className="card__header">
    <h3>🤖 Features</h3>
  </div>
  <div className="card__body">
    <div className="feature-grid">
      <div className="feature-grid__item">
        <h4>Epic Suggestions</h4>
        <p>Based on project title, description, and context (tone, documents, etc.)</p>
      </div>
      <div className="feature-grid__item">
        <h4>User Story Generation</h4>
        <p>Automatically derived from selected epics</p>
      </div>
      <div className="feature-grid__item">
        <h4>Post-Generation Editing</h4>
        <p>All generated artifacts are fully editable</p>
      </div>
      <div className="feature-grid__item">
        <h4>AI Engine</h4>
        <p>Powered by Frida AI + Softtek's proprietary AI endpoint</p>
      </div>
    </div>
  </div>
</div>

## Conventions & Best Practices

<div className="grid-container">
  <div className="grid-item">
    <div className="grid-item__header">
      <h4>Error Handling</h4>
    </div>
    <div className="grid-item__content">
      <p>Human-readable messages with standard HTTP status codes (e.g. 400, 401, 403, 500)</p>
    </div>
  </div>
  <div className="grid-item">
    <div className="grid-item__header">
      <h4>JSON Style</h4>
    </div>
    <div className="grid-item__content">
      <p>camelCase throughout requests and responses</p>
    </div>
  </div>
  <div className="grid-item">
    <div className="grid-item__header">
      <h4>Timestamps</h4>
    </div>
    <div className="grid-item__content">
      <p>Firebase-native timestamp objects</p>
    </div>
  </div>
  <div className="grid-item">
  </div>
</div>

<style>
{`
  .workflow-steps {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 2rem 0;
  }

  .workflow-step {
    display: flex;
    align-items: center;
    background: var(--ifm-card-background-color);
    border-radius: 8px;
    padding: 1rem;
    box-shadow: var(--ifm-card-shadow);
  }

  .workflow-step__number {
    width: 36px;
    height: 36px;
    border-radius: 18px;
    background: var(--ifm-color-primary);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    margin-right: 1rem;
  }

  .workflow-step__content {
    flex: 1;
  }

  .workflow-step__content h4 {
    margin: 0 0 0.25rem 0;
  }

  .workflow-step__content code {
    background: var(--ifm-color-emphasis-100);
  }

  .tech-list li {
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .tech-icon {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }

  .feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 1rem;
  }

  .feature-grid__item h4 {
    margin-bottom: 0.5rem;
    color: var(--ifm-color-primary);
  }

  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
    margin: 2rem 0;
  }

  .grid-item {
    background: var(--ifm-card-background-color);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: var(--ifm-card-shadow);
  }

  .grid-item__header {
    background: var(--ifm-color-emphasis-200);
    padding: 0.75rem 1rem;
  }

  .grid-item__header h4 {
    margin: 0;
  }

  .grid-item__content {
    padding: 1rem;
  }

  .ai-features {
    margin: 2rem 0;
  }

  .card__footer {
    padding: 1rem;
    border-top: 1px solid var(--ifm-color-emphasis-200);
  }
`}
</style>
