# Setup Steps (ServiceNow Personal Developer Instance)

## Client Scripts
1. Go to **System Definition > Client Scripts** > New.
2. Set Table = `Incident [incident]`, Type and Field as listed in the header comment of each file in `src/client-scripts/`.
3. Paste the script, check **Active**, Save.

## UI Policies
1. Go to **System UI > UI Policies** > New.
2. Table = Incident, fill Short description and Conditions from the matching JSON file in `src/ui-policies/`.
3. Check **On load** and **Reverse if false**.
4. Save, then add **UI Policy Actions** in the related list (one per entry in `actions`).

## Verify
Run the scenarios in `tests/test-cases.md`.
