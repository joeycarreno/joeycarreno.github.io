# IST 226 Final Project — Requirements Checklist

Use this list to verify your portfolio before submitting the URL.

---

## ✅ File & Submission Requirements

- [ ] File is named `LastnameFinalProject` (e.g., `CarrenoFinalProject`)
- [ ] Home page is uploaded to the web server
- [ ] Submitted URL opens and works correctly **before and after** submitting
- [ ] All tutorial assignment links are working (not 404)

---

## ✅ Page Structure

- [ ] One HTML file created **from scratch** as the portfolio home page
- [ ] `<!DOCTYPE html>` declaration present
- [ ] `<html lang="en">` with language attribute
- [ ] `<meta charset="utf-8" />` in `<head>`
- [ ] `<meta name="viewport" ...>` for responsive/mobile behavior
- [ ] `<title>` tag defines an appropriate, descriptive title
- [ ] `<link>` tag connects the **external** style sheet (`styles.css`)
- [ ] Page comment block: author, date, filename, description

---

## ✅ Header (Top of Page)

- [ ] **Profile photo** is displayed at the top of the page
- [ ] Profile photo has a **CSS transform** applied (e.g., `transform: scale()`)
- [ ] Profile photo has a **CSS filter** applied (e.g., `filter: saturate() brightness()`)
- [ ] **Student name** (`<h1>`) is visible in the header
- [ ] **Contact information** (email and phone) is visible in the header
- [ ] Email uses a `mailto:` link

---

## ✅ Three-Column Liquid Layout

- [ ] External CSS defines a **three-column liquid layout**
- [ ] Layout uses **percentage-based** widths (fluid/liquid — not fixed pixels)
- [ ] Left column present (e.g., Welcome / About section)
- [ ] Center column present (assignment links)
- [ ] Right column present (e.g., About Me section)
- [ ] Layout is responsive — columns stack on smaller screens (media queries)

---

## ✅ Assignment Links (Center Column)

- [ ] Links to **all 10 graded practice assignments** (Tutorial 1 – Tutorial 10)
- [ ] Each assignment entry includes a **brief description** of what was learned
- [ ] All links are working and point to the correct pages

---

## ✅ Table with Row and Column Groups

- [ ] `<table>` element present
- [ ] **Column groups** using `<colgroup>` and `<col>` elements
- [ ] **Row groups** using all three:
  - [ ] `<thead>` — table header row group
  - [ ] `<tbody>` — table body row group
  - [ ] `<tfoot>` — table footer row group
- [ ] `colspan` used in `<tfoot>` (spans across all columns)
- [ ] `border-collapse: collapse` applied in CSS
- [ ] Table styled (zebra rows, hover state, etc.)

---

## ✅ Form with Multiple Controls

- [ ] `<form>` with `action`, `method`, and `enctype` attributes
- [ ] At least **two `<fieldset>`** elements with `<legend>` labels
- [ ] **Multiple input types** present:
  - [ ] `type="text"` (first name, last name)
  - [ ] `type="email"` (email address)
  - [ ] `type="tel"` (phone number)
  - [ ] `type="date"` (contact date picker)
  - [ ] `type="number"` (years of experience spinner)
  - [ ] `type="radio"` (preferred reply method)
  - [ ] `type="checkbox"` (interests)
  - [ ] `type="range"` (familiarity slider)
- [ ] `<select>` with `<optgroup>` labeled groups
- [ ] `<textarea>` for multi-line text
- [ ] `<datalist>` with autocomplete suggestions
- [ ] `required`, `pattern`, `maxlength` validation attributes used
- [ ] **Two buttons**: Submit (`type="submit"`) and Reset (`type="reset"`)
- [ ] `<output>` element displays live range slider value (closed with `</output>`)
- [ ] All `<input>` elements have matching `<label for="id">` associations

---

## ✅ Multimedia

- [ ] **Audio** element (`<audio controls>`) with at least one `<source>`
- [ ] **Video** content present — either `<video>` element or `<iframe>` YouTube embed
- [ ] Both media elements have descriptive titles/captions

---

## ✅ External Style Sheet

- [ ] Styles are in a **separate `.css` file** — zero inline styles in HTML
- [ ] `@import` used to load a web font
- [ ] CSS custom properties (`--variables`) used
- [ ] Design is **not** all-black text on all-white background — demonstrates CSS knowledge
- [ ] Styles from **all major tutorials** are reflected:
  - [ ] Tutorial 2: selectors, color (hsl, rgb, hex), typography, pseudo-classes (`:hover`, `:visited`, `:focus`, `:nth-child`), pseudo-elements (`::before`, `::after`, `::first-letter`, `::first-line`)
  - [ ] Tutorial 3: three-column liquid layout, overflow, positioning, clearfix, `display: inline-block`, `display: grid`, `overflow-x: auto`
  - [ ] Tutorial 4: gradients (linear + radial), `background-image`, `transform`, `filter`, `text-shadow`, `box-shadow`, `border-image`, `opacity`, `background-clip`
  - [ ] Tutorial 5: flexbox properties, `@media` queries (mobile/tablet/desktop), `order`, `align-self`, `flex-wrap`
  - [ ] Tutorial 6: `border-collapse`, `vertical-align`, `break-inside`, responsive table with `content: attr(data-label)`
  - [ ] Tutorial 7: `:valid`, `:invalid`, `:focus:invalid`, `:checked`, form control transitions
  - [ ] Tutorial 8: `transition`, `@keyframes` animation, `animation-*` properties, `aspect-ratio`
  - [ ] Tutorial 5 (print): `@media print`, `@page`, `widows`, `orphans`, `page-break-*`

---

## ✅ Footer

- [ ] Footer present at bottom of page
- [ ] Contains **course number** (IST 226)
- [ ] Contains **college name** (Greenville Technical College)
- [ ] Contains **date created** (April 2026)
- [ ] Copyright line present
- [ ] Live clock (updated by JavaScript)

---

## ✅ No Inline Styles

- [ ] Zero `style=""` attributes anywhere in the HTML
- [ ] All presentation handled by `styles.css`

---

## ✅ JavaScript (portfolio.js)

- [ ] External `.js` file linked via `<script src="portfolio.js" defer>`
- [ ] `"use strict"` declared at top
- [ ] Dynamic copyright year (Tutorial 9: `Date`, `getFullYear()`, `innerHTML`)
- [ ] Live range slider display (Tutorial 9: `addEventListener`, function)
- [ ] Live clock (Tutorial 9: `setInterval`, `Date` methods)

---

## ✅ Content & Quality

- [ ] All page text is in **English** (no placeholder "Lorem ipsum" text)
- [ ] Text describes the project, your assignments, or about you
- [ ] No **spelling errors**
- [ ] No **grammar errors**
- [ ] Page demonstrates **creativity** — not a plain unstyled layout

---

## ✅ Validation

- [ ] Page passes the **W3C HTML Validator** with zero errors
  - Validate at: https://validator.w3.org/
- [ ] Check especially:
  - [ ] All tags are properly opened and closed
  - [ ] `<output>` is closed with `</output>` (not `</o>`)
  - [ ] All `<input>` tags self-close: `<input ... />`
  - [ ] No duplicate `id` attributes on the page
  - [ ] `<form>` attributes are correct (`method`, `action`, `enctype`)

---

## 📋 Quick Pre-Submit Checklist

Before copying the URL into the drop-box, confirm:

1. Open the page in a browser — does it look correct?
2. Click every tutorial link — do they all open?
3. Test the form — do inputs validate? Do radio/checkbox highlights work?
4. Play the audio and at least one video — do they load?
5. Resize the browser to a narrow width — does the layout stack/respond?
6. Run the URL through https://validator.w3.org/ — zero errors?
7. Check the footer clock — is it ticking?
