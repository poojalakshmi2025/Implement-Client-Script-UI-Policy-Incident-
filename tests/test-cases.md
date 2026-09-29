# Test Cases

| # | Scenario | Steps | Expected |
|---|----------|-------|----------|
| 1 | Short description too short | New incident, short description "Help", Submit | Error message, form not saved |
| 2 | Valid short description | Enter 10+ characters, Submit | Saved |
| 3 | Category change | Set category and subcategory, change category | Subcategory cleared |
| 4 | High urgency | Set Urgency = High | Info message shown |
| 5 | Default contact type | Open new incident | Contact type = Self-service |
| 6 | Resolve incident | Set State = Resolved | Close code and Close notes mandatory |
| 7 | On Hold | Set State = On Hold | Hold reason visible and mandatory |
| 8 | Caller lock | Open saved incident | Caller field read-only |
