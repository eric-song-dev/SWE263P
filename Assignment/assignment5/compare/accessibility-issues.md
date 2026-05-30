# Accessibility Issue List

Authur: Zhenyu Song (zhenyus4@uci.edu)
Date: 05/16/2026

Each entry: **Issue found in the original `home.html`** → **Fix in the rewritten page** → **WCAG 2.2 criterion**.
Line numbers refer to the original starter file.

---

## 1. Page language not declared

- **Original:** `<HTML>` at line 1 has no `lang` attribute, so assistive tech cannot pick a pronunciation profile.
- **Fix:** `<html lang="en">`.
- **WCAG:** 3.1.1 Language of Page (A).

## 2. Entire layout built from nested `<TABLE>` elements

- **Original:** Three levels of `<TABLE>` with `BORDER=0`, `CELLSPACING`, `CELLPADDING` purely for visual layout (lines 133–303). No landmarks at all.
- **Fix:** All tables removed. The page is now a single semantic tree: `<header>`, `<nav aria-label="Main">`, `<main>`, `<aside>`, `<footer>`. A CSS grid lays out the three columns.
- **WCAG:** 1.3.1 Info and Relationships (A), 1.3.2 Meaningful Sequence (A).

## 3. No landmark / region elements

- **Original:** Page has no `<header>`, `<nav>`, `<main>`, `<aside>`, or `<footer>` — screen-reader landmark navigation is unusable.
- **Fix:** Added all five landmarks. The two `<nav>` regions are disambiguated with `aria-label="Quick navigation"` and `aria-label="Main"`.
- **WCAG:** 1.3.1 (A), 2.4.1 Bypass Blocks (A).

## 4. No headings

- **Original:** "Welcome to Matt's Mats" is a `<p class="headline">` (line 222); "Our Environmental Commitment" is `<p class="subheadline">` (line 244); the three category names ("Doormats", "Kitchen Mats", "Exercise Mats") are plain anchor text.
- **Fix:** `<h1>` for the page title, `<h2>` for each top-level section ("Mat categories" — visually hidden — "Our Environmental Commitment", "Custom Doormats", "Mat of the Week"), `<h3>` for each card.
- **WCAG:** 1.3.1 (A), 2.4.6 Headings and Labels (AA).

## 5. Presentational HTML instead of semantic styling

- **Original:** Deprecated HTML4 attributes everywhere — `BGCOLOR`, `TEXT`, `LINK`, `VLINK`, `ALIGN`, `VALIGN`, `BORDER`, `CELLSPACING`, `CELLPADDING`, `WIDTH=…px`, `HEIGHT=…px` (lines 132–303). `<FONT COLOR=… FACE=… SIZE=…>` for text (lines 173–174, 256, 277). `<B>` used for non-strong emphasis.
- **Fix:** All presentation moved to CSS. `<strong>`/`<em>` used where the meaning is emphasis (promo bar, phone callout).
- **WCAG:** 1.3.1 (A), 4.1.2 Name, Role, Value (A) — well-formed HTML.

## 6. Images missing or misusing `alt` text

- **Original:**
  - The logo image (line 145) has a 227-character alt that describes pixels, not purpose.
  - Spacer/border GIFs (`border_*.gif`, `marker2_*.gif`, `blank_5x5.gif`, lines 136–138, 167, 180, 191–192, 198, 210, 216, 220, 248, 252, 274, 296–301) have no alt at all; screen readers announce their file names.
  - Bullet icons (`headline_middle.gif`, `list_bullets.gif`) used as decoration but lack `alt=""`.
  - Phone-number image (line 245) carries text as a graphic.
- **Fix:**
  - Logo: short `alt="Matt's Mats logo"` plus an `aria-label="Matt's Mats home"` on the wrapping link.
  - Every spacer/border GIF deleted (CSS borders and grid gaps replace them).
  - Bullet decorations replaced with native `<ul>` list markers.
  - Content images (category photos, teaser photos) all have meaningful alt text.
  - Phone-number image replaced — see issue 14.
- **WCAG:** 1.1.1 Non-text Content (A).

## 7. Color contrast failure on aside section headers

- **Original:** Side-panel header bars used `#41545D` text on `#A9B8BF` background (lines 256, 277) — contrast ratio ≈ 3.69:1, fails AA for normal text (needs ≥ 4.5:1).
- **Fix:** Re-styled `.featured h2` to white text on `#41545D` background. Contrast ratio ≈ 7.9:1.
- **WCAG:** 1.4.3 Contrast (Minimum) (AA).

## 8. Keyboard access intentionally broken

- **Original:** Every left-nav link and most in-content links have `ONFOCUS="blur();"` (lines 195, 201, 207, 213, 227–229, 239–241, 245, 265, 286), which immediately removes keyboard focus the moment it arrives. Several anchors also use `HREF="javascript:location.href='…';"` (lines 195, 201, 207, 213) which won't activate on Enter without scripting and can't be opened in a new tab.
- **Fix:** All `onFocus="blur()"` removed. All `javascript:` hrefs replaced with normal relative URLs. A clearly-visible `:focus-visible` outline added globally.
- **WCAG:** 2.1.1 Keyboard (A), 2.4.7 Focus Visible (AA).

## 9. `<SELECT>` quick-nav has no label and changes context on input

- **Original:** `<SELECT ONCHANGE="location.href = this.value;">` (lines 150–163) has no associated `<label>`, and merely selecting an option navigates away — a "change of context on input" surprise.
- **Fix:** Wrapped in a `<form role="search">` with a visible `<label for="quicknav">Quick navigation</label>`, a placeholder first option, and an explicit `<button type="submit">Go</button>`. Navigation happens only when the user submits.
- **WCAG:** 3.3.2 Labels or Instructions (A), 3.2.2 On Input (A), 4.1.2 (A).

## 10. Non-descriptive link text

- **Original:** "Click here." appears three times (line 245). "Read More..." appears twice (lines 265, 286). The category "More" arrow (lines 239–241) is an image with `alt=""`, so screen readers announce only "link".
- **Fix:** Rewrote each link so the purpose is clear from its text alone — for example "More about doormats", "Sustainable materials", "Read more about custom doormats", "See the customer gallery".
- **WCAG:** 2.4.4 Link Purpose (In Context) (A), 2.4.9 Link Purpose (Link Only) (AAA — bonus).

## 11. Reading order of the three category cards was scrambled

- **Original:** The three "cards" were laid out across three sibling `<div class="newsbar">` rows (lines 226–242): one row of all three headlines, one row of all three images, one row of all three stories. A screen reader read all headlines first, then all images, then all stories.
- **Fix:** Each card is now a single `<li class="card">` containing its heading, image, paragraph, and link in the natural order. CSS grid places the three list items side-by-side visually.
- **WCAG:** 1.3.2 Meaningful Sequence (A).

## 12. Fake lists built from `<br>` + bullet images

- **Original:** The Environmental Commitment "list" (line 245) is three lines separated by `<br/>`, each prefixed with a `<img src="list_bullets.gif" alt="bullet">`.
- **Fix:** Replaced with a real `<ul class="commitments">` containing three `<li><a>…</a></li>`.
- **WCAG:** 1.3.1 (A). *(Rubric Extra Credit: Format lists correctly.)*

## 13. Links not visually distinguishable from surrounding text

- **Original:** `text-decoration: none` set globally for `#main a` (line 14) and other anchor rules; links were distinguished only by a slight blue color shift — fails for low-vision and color-blind users.
- **Fix:** Restored `text-decoration: underline` on all anchors. Hover and focus states preserve the underline. *(Rubric Extra Credit: Make links visually distinct.)*
- **WCAG:** 1.4.1 Use of Color (A).

## 14. Phone number rendered as an image

- **Original:** `<img src="./img/telefon_white_bg.gif" alt="1234 56789">` (line 245) — the number is a graphic, cannot be selected, copied, or re-styled, and fails images-of-text.
- **Fix:** Replaced with real text inside a `tel:` link: `<a href="tel:+123456789">1234 56789</a>`. Now selectable, copyable, click-to-call on mobile. *(Rubric Extra Credit: Replace image text with actual text.)*
- **WCAG:** 1.4.5 Images of Text (AA).

## 15. No way to skip past the repeated header/nav

- **Original:** A keyboard user must tab through the logo, the quick-nav select, and every left-nav button before reaching the main content.
- **Fix:** Added a "Skip to main content" link as the very first focusable element. It is visually hidden until focused, then jumps to `#main`. *(Rubric Extra Credit: Provide skip links.)*
- **WCAG:** 2.4.1 Bypass Blocks (A).

## 16. Page title kept but verified descriptive

- **Original:** `<TITLE>Welcome to Matt's Mats</TITLE>` (line 3) — already descriptive, retained.
- **WCAG:** 2.4.2 Page Titled (A) — already satisfied; no change.

---

## Summary

| WCAG criterion | Level | Status |
|---|---|---|
| 1.1.1 Non-text Content | A | Fixed (issue 6) |
| 1.3.1 Info and Relationships | A | Fixed (issues 2, 3, 4, 5, 12) |
| 1.3.2 Meaningful Sequence | A | Fixed (issues 2, 11) |
| 1.4.1 Use of Color | A | Fixed (issue 13) |
| 1.4.3 Contrast (Minimum) | AA | Fixed (issue 7) |
| 1.4.5 Images of Text | AA | Fixed (issue 14) |
| 2.1.1 Keyboard | A | Fixed (issue 8) |
| 2.4.1 Bypass Blocks | A | Fixed (issues 3, 15) |
| 2.4.2 Page Titled | A | Already met (issue 16) |
| 2.4.4 Link Purpose (In Context) | A | Fixed (issue 10) |
| 2.4.6 Headings and Labels | AA | Fixed (issue 4) |
| 2.4.7 Focus Visible | AA | Fixed (issue 8) |
| 3.1.1 Language of Page | A | Fixed (issue 1) |
| 3.2.2 On Input | A | Fixed (issue 9) |
| 3.3.2 Labels or Instructions | A | Fixed (issue 9) |
| 4.1.2 Name, Role, Value | A | Fixed (issues 5, 9) |

All Level A and AA criteria applicable to this page are now satisfied, plus all four Extra Credit items (format lists, visually distinct links, skip link, image-text replacement).
