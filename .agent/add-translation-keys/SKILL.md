---
name: add-translation-keys
description: Adds new translation keys for a feature, section, or component across all project language files simultaneously, following the project's existing key structure.
---

## Steps

### 1. Read Existing Translation Files
- Open each language file in the project
- Study the existing key hierarchy and naming conventions
- Identify the correct parent key to nest the new content under
- Note the depth and naming pattern (e.g., pageName.sectionName.elementName)

### 2. Define Key Structure
- Plan the full key hierarchy for all new content before writing anything
- Ensure key names are descriptive and match their content purpose
- Confirm no existing keys will be overwritten or duplicated

### 3. Write English Keys First
- Add all new content in English to the English language file
- Use the exact copy specified — do not paraphrase
- Follow the planned key hierarchy precisely

### 4. Write All Other Language Translations
- Add professional translations for each additional language file
- Maintain the exact same key structure as the English file
- Ensure special characters are correctly encoded
- Do not use machine-translation quality — translations must be natural and professional

### 5. Verify Structural Consistency
- Confirm every language file has the same keys in the same structure
- Confirm no language file is missing a key that others have
- Confirm no key has an empty string value

### 6. Confirm No Hardcoded Text
- Search the component or page that uses these keys
- Confirm every string is referenced via a translation function
- Replace any hardcoded strings found with the appropriate key reference