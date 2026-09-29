# Implement Client Script & UI Policy (Incident)

ServiceNow project that enforces consistent and accurate data entry on the **Incident** form using Client Scripts and UI Policies.

> Note: Built from the document title/problem statement only. Adjust fields/conditions to match your exact requirements.

## Problem Statement
Incident records need consistent data for triage, routing and resolution. Relying on user awareness alone leads to incomplete or incorrect data, so validation is enforced on the form.

## What is included
| Type | Name | Table | Purpose |
|------|------|-------|---------|
| Client Script (onSubmit) | Validate Incident Short Description | incident | Short description must be at least 10 characters |
| Client Script (onChange) | Clear Subcategory on Category Change | incident | Resets subcategory when category changes |
| Client Script (onChange) | Urgency High Warning | incident | Shows info message when urgency = High |
| Client Script (onLoad) | Set Default Contact Type | incident | Defaults contact type to Self-service for new records |
| UI Policy | Resolution Fields Mandatory | incident | Makes Close code and Close notes mandatory and visible when State = Resolved/Closed |
| UI Policy | Hide On Hold Fields | incident | Shows Hold reason only when State = On Hold |
| UI Policy | Lock Caller After Creation | incident | Caller read-only on saved records |

## Folder structure
```
Complete-Project/
├── README.md
├── .gitignore
├── package.json
├── config/          (ServiceNow config, field values)
├── src/
│   ├── client-scripts/
│   └── ui-policies/
├── tests/           (manual test cases)
└── docs/            (setup steps)
```

## Setup
See `docs/SETUP.md`. Test cases are in `tests/test-cases.md`.
