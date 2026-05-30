# Accessibility Issue List

**Author**: Zhenyu Song (zhenyus4@uci.edu)
**Date**: 05/16/2026

Each entry: **Issue found in the original `home.html`** → **Fix in the rewritten page** → **WCAG 2.2 criterion**.
Line numbers refer to the original starter file (`263PAccessibilityAssignment/home.html`).

---

## 1. Missing DOCTYPE and page language

- **Original:** Line 1 is `<HTML>` with no DOCTYPE and no `lang` attribute. Browsers fall into quirks mode and screen readers cannot choose a pronunciation profile.
- **Fix:** Page now starts with `<!DOCTYPE html>` followed by `<html lang="en">`. Added `<meta charset="utf-8">` and a `<meta name="viewport">` to render correctly at any zoom level.
- **WCAG:** 3.1.1 Language of Page (A).

## 2. Page laid out with nested `<TABLE>` elements

- **Original:** Five nested `<TABLE>` blocks (lines 133–303) carry every pixel of layout — outer table for the page background, an inner table for the border frame, another for the header band, another for the three-column body, and one more inside each column. Cells are sized with `WIDTH=…px`, `BGCOLOR`, `VALIGN`, etc.
- **Fix:** Every `<table>` removed. The body is a single CSS Grid (`grid-template-columns: 170px 1fr 170px`) inside a flexbox header. No layout tables remain.
- **WCAG:** 1.3.1 Info and Relationships (A).

## 3. No landmark regions

- **Original:** The page has no `<header>`, `<nav>`, `<main>`, `<aside>`, or `<footer>`. Screen-reader landmark navigation is unusable; everything is an anonymous block.
- **Fix:** Added all five landmarks. The `<nav>` and `<aside>` carry `aria-label` (`"Primary"` and `"Featured"`) so each one shows up with a descriptive name in the screen reader's landmark menu. The promo strip also gets `aria-label="Site promotions"`.
- **WCAG:** 1.3.1 Info and Relationships (A).

## 4. Section titles are paragraphs, not headings

- **Original:** "Welcome to Matt's Mats" is styled with `<p class="headline">` (line 222). "Our Environmental Commitment" uses `<p class="subheadline">` (line 244). The two aside titles "Custom Doormats" and "Mat of the Week" are `<FONT>` text inside table cells (lines 256, 277). The three category names ("Doormats", "Kitchen Mats", "Exercise Mats") are plain anchor text.
- **Fix:** One `<h1>` for the page title, `<h2>` for each top-level section ("Top Categories", "Our Environmental Commitment", "Custom Doormats", "Mat of the Week"), and an `<h3>` inside each category card.
- **WCAG:** 1.3.1 Info and Relationships (A), 2.4.6 Headings and Labels (AA).

## 5. Presentational HTML throughout

- **Original:** Deprecated HTML4 attributes on nearly every tag: `<BODY TEXT=#000000 BGCOLOR=#D7D7CD LEFTMARGIN=0px …>` (line 132), `BGCOLOR`, `ALIGN`, `VALIGN`, `BORDER`, `CELLSPACING`, `CELLPADDING`, `WIDTH=…px`, `HEIGHT=…px` on every cell, and `<FONT COLOR=… FACE=Verdana SIZE=2>` (lines 173–174, 256, 277). `<B>` and `<I>` carry visual weight but no semantics.
- **Fix:** All presentational tags and attributes deleted. Visuals moved to a `<style>` block. Emphasis converted to `<strong>` (the "Save:" / "New:" / "Got a question?" labels) and `<em>` (the promo code).
- **WCAG:** 1.3.1 Info and Relationships (A).

## 6. Decorative images with no `alt`

- **Original:** Twelve different decorative GIFs are scattered across the page (`border_left_top.gif`, `border_top.gif`, `border_right_top.gif`, `border_left.gif`, `border_right.gif`, `border_bottom*.gif`, `marker2_w.gif`, `marker2_t.gif`, `blank_5x5.gif`, `top_door.gif`, `top_logo_next*.gif`, `headline_middle.gif`, `mark.gif`, `morearrow.gif`, `list_bullets.gif`) — none carry an `alt` attribute, so JAWS / NVDA / VoiceOver read the filename out loud. Lines 136–138, 167, 180, 191–192, 198, 210, 216, 220, 248, 252, 274, 296–301 are all affected.
- **Fix:** Every decorative image deleted. Borders, separators, and bullet glyphs are now pure CSS (`border`, `padding`, the native `<ul>` marker).
- **WCAG:** 1.1.1 Non-text Content (A).

## 7. Content images rendered as CSS backgrounds

- **Original:** The three category photos `doormat-sm.jpg`, `kitchen-sm.jpg`, `exercise-sm.jpg` (lines 233–235) are painted via `style="background: url(…)"` on empty `<div class="image" title="image">`. Assistive tech sees nothing — the `title="image"` is the only string available.
- **Fix:** Rendered as real `<img>` elements with descriptive `alt` (e.g. `alt="A brown coir doormat at a front entry."`). The two aside teaser images (lines 259, 280) already used `<img>` but lacked `alt`; they now describe what the photo shows.
- **WCAG:** 1.1.1 Non-text Content (A).

## 8. Logo `alt` describes pixels, not purpose

- **Original:** The logo `<img>` on line 145 has a 90-word `alt` describing the visual ("Beige rectangle symbolizing a doormat with black letters spelling out 'Welcome' above a set of yellow petal shapes …"). A screen-reader user has to sit through paragraphs just to learn they are on the brand mark.
- **Fix:** Short `alt="Matt's Mats"` on the image and `aria-label="Matt's Mats home"` on the wrapping link so the link's purpose is clear when it is encountered out of context.
- **WCAG:** 1.1.1 Non-text Content (A).

## 9. Navigation buttons rendered as image text

- **Original:** Four navigation labels are GIF files (`nav_home.gif`, `nav_shop.gif`, `nav_news.gif`, `nav_survey.gif`, lines 195–213). Cannot be resized, restyled, translated, or reliably read.
- **Fix:** Replaced with a `<ul>` of styled text links. The current page is marked with `aria-current="page"`. *(Rubric Extra Credit: Replace image text with actual text.)*
- **WCAG:** 1.4.5 Images of Text (AA).

## 10. Phone number rendered as image text

- **Original:** `<img src="./img/telefon_white_bg.gif" alt="1234 56789">` (line 245). The number is a graphic — it cannot be selected, copied, dialed by `tel:` handlers, or restyled by a high-contrast user stylesheet. The `alt` itself was also wrong: the GIF actually shows `1 (800) M-A-T-T-M-A-T`, not `1234 56789`, so a screen-reader user got a fabricated number.
- **Fix:** Replaced with real text inside a `tel:` link: `<a href="tel:+18006288628">1 (800) M-A-T-T-M-A-T</a>`. *(Rubric Extra Credit: Replace image text with actual text.)*
- **WCAG:** 1.4.5 Images of Text (AA), 1.1.1 Non-text Content (A) (the original `alt` did not match the image).

## 11. Keyboard focus stripped by `onFocus="blur();"`

- **Original:** Every left-nav link, every category-card link, every "Read More" link, and the morearrow image use `ONFOCUS="blur();"` (lines 195, 201, 207, 213, 227–229, 239–241, 245, 265, 286). The moment a Tab brings focus onto the element, JavaScript steals it back — the page is unusable from the keyboard.
- **Fix:** Every `onFocus="blur()"` removed. A visible `:focus-visible` outline (3px solid `#b8430a`, contrast ≈ 5.4:1 against white) is applied globally to links, buttons, selects, and inputs.
- **WCAG:** 2.1.1 Keyboard (A), 2.4.7 Focus Visible (AA).

## 12. `javascript:` hrefs

- **Original:** The four left-nav anchors use `href="javascript:location.href='…';"` (lines 195, 201, 207, 213). With scripting off the links do nothing, and "open in new tab" / middle-click are broken.
- **Fix:** Replaced with plain relative URLs (`href="home.html"`, `href="shop.html"`, …).
- **WCAG:** 2.1.1 Keyboard (A).

## 13. Quick-nav `<select>` has no label and auto-navigates on change

- **Original:** `<SELECT ONCHANGE="location.href = this.value;">` (lines 150–163). Two failures in one element: there is no `<label>`, and merely arrowing through the options to read them navigates the user away.
- **Fix:** Wrapped in a `<form>`, given a visible `<label for="quicknav-select">Quick navigation</label>`, and paired with a `<button type="submit">Go</button>`. The placeholder first option (`QUICKNAV ---->`) was removed. Navigation now only happens on explicit submit.
- **WCAG:** 3.3.2 Labels or Instructions (A), 4.1.2 Name, Role, Value (A), 3.2.2 On Input (A).

## 14. Non-descriptive link text

- **Original:** "Click here" appears three times in the environmental section (line 245). "Read More..." appears twice in the asides (lines 265, 286). The category-card morearrow images (lines 239–241) have `alt=""`, so screen readers announce only "link".
- **Fix:** Each link now reads stand-alone: "Learn about our sustainable materials", "Read about our manufacturing practices", "Join our recycling program", "Read more about custom doormats", "See more customer photos", "More about doormats", and so on.
- **WCAG:** 2.4.4 Link Purpose (In Context) (A).

## 15. Contrast failure on aside section headers

- **Original:** "Custom Doormats" and "Mat of the Week" use `#41545D` text on `#A9B8BF` (lines 256, 277). Contrast ratio ≈ 3.9:1 — fails AA (needs ≥ 4.5:1 for normal text).
- **Fix:** Aside section headings are now white on `#2d4a55`. Contrast ratio ≈ 9.5:1. All body text and links also re-checked: body `#1a1a1a` on white ≈ 17.4:1, link `#11507a` on white ≈ 8.6:1.
- **WCAG:** 1.4.3 Contrast (Minimum) (AA).

## 16. Reading order scrambled by table layout

- **Original:** The three category cards are split across three sibling `<div class="newsbar">` rows (lines 226–242): one row holds all three headlines, the next holds all three images, the next holds all three stories. A screen reader reads "Doormats, Kitchen Mats, Exercise Mats, [image], [image], [image], story-1, story-2, story-3" — the three cards are interleaved instead of read top-to-bottom. The wider page suffers the same problem: the right-hand aside cells appear before the main column in DOM order.
- **Fix:** Each category card is a single `<li>` containing its heading, image, paragraph, and link in natural reading order; CSS Grid places them side-by-side visually. At page level the DOM order is: skip link → header → promo strip → primary nav → main → aside → footer.
- **WCAG:** 1.3.2 Meaningful Sequence (A), 2.4.3 Focus Order (A).

## 17. Fake list built with `<br>` and bullet GIFs

- **Original:** The environmental commitment "list" (line 245) is three lines separated by `<br/>`, each prefixed with `<img src="./img/list_bullets.gif" alt="bullet">`. Screen readers announce three loose paragraphs and the word "bullet" three times.
- **Fix:** Marked up as a real `<ul>` of three `<li>` links. The top-category section is also a real `<ul>`. *(Rubric Extra Credit: Format lists correctly.)*
- **WCAG:** 1.3.1 Info and Relationships (A).

## 18. Links not visually distinguishable

- **Original:** `text-decoration: none` is set on `#main a` (line 14), the right-column `Read More...` anchors (lines 265, 286), and elsewhere. Links are conveyed by colour alone (a slight blue shift), which fails for low-vision and colour-blind users.
- **Fix:** Underline restored on all body links by default. Navigation buttons use background + border + hover/focus styles so they do not rely on colour alone either. *(Rubric Extra Credit: Make links visually distinct.)*
- **WCAG:** 1.4.1 Use of Color (A).

## 19. No way to skip the repeated header and nav

- **Original:** A keyboard user must tab through the logo, the quick-nav select, the Go button, and four nav links before reaching the main content on every page.
- **Fix:** A "Skip to main content" link is the first focusable element. It is positioned off-screen until it receives focus, then jumps into view and targets `<main id="main" tabindex="-1">`. *(Rubric Extra Credit: Provide skip links.)*
- **WCAG:** 2.4.1 Bypass Blocks (A).

## 20. Page title kept — already descriptive

- **Original:** `<TITLE>Welcome to Matt's Mats</TITLE>` (line 3) already identifies the page; left unchanged.
- **WCAG:** 2.4.2 Page Titled (A) — already satisfied; no change.

---

## Other cleanups (caught while rewriting, not WCAG failures)

- The spacer reference `.img/marker2_w.gif` (line 180) is missing a slash and never loaded — removed with the rest of the decorative images.
- The background color `#eeeee` (line 40) only has five hex digits — removed.
- Stray `</TR></TR>` and other unbalanced tags around line 304 — gone after the rewrite.

---

## WAVE alerts left in (intentional)

Running the rewritten page through WAVE produces **0 Errors, 0 Contrast Errors, and 4 "Redundant link" Alerts**. The alerts are not WCAG failures — WAVE's own reference page calls them out as "potential issues" that need human review, and points to WCAG 2.4.4 (Level A) only as related guidance, not a violation. They were kept on purpose:

1. **Header logo and the "Home" item in the primary nav both link to `home.html`.** This is a near-universal pattern on the web; removing either one hurts orientation more than it helps.
2. **Each of the three category cards ("Doormats", "Kitchen Mats", "Exercise Mats") has a clickable heading and a "More about X" link, both pointing to the same category page.** Collapsing them into a single block-level link would force screen readers to announce the heading, image alt, paragraph, and call-to-action as one long link, which is a worse experience than the redundant pair.

In both cases the trade-off favours keeping the redundant link over eliminating the alert.

---

## Summary

| WCAG criterion | Level | Status |
|---|---|---|
| 1.1.1 Non-text Content | A | Fixed (issues 6, 7, 8) |
| 1.3.1 Info and Relationships | A | Fixed (issues 2, 3, 4, 5, 17) |
| 1.3.2 Meaningful Sequence | A | Fixed (issue 16) |
| 1.4.1 Use of Color | A | Fixed (issue 18) |
| 1.4.3 Contrast (Minimum) | AA | Fixed (issue 15) |
| 1.4.5 Images of Text | AA | Fixed (issues 9, 10) |
| 2.1.1 Keyboard | A | Fixed (issues 11, 12) |
| 2.4.1 Bypass Blocks | A | Fixed (issue 19) |
| 2.4.2 Page Titled | A | Already met (issue 20) |
| 2.4.3 Focus Order | A | Fixed (issue 16) |
| 2.4.4 Link Purpose (In Context) | A | Fixed (issue 14) |
| 2.4.6 Headings and Labels | AA | Fixed (issue 4) |
| 2.4.7 Focus Visible | AA | Fixed (issue 11) |
| 3.1.1 Language of Page | A | Fixed (issue 1) |
| 3.2.2 On Input | A | Fixed (issue 13) |
| 3.3.2 Labels or Instructions | A | Fixed (issue 13) |
| 4.1.2 Name, Role, Value | A | Fixed (issue 13) |

All Level A and AA criteria applicable to this page are now satisfied, plus all four Extra Credit items (format lists, visually distinct links, skip link, image-text replacement).
