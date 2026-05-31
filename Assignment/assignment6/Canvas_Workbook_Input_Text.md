# Canvas Heuristic Evaluation Workbook Input Text

Use this file to copy the text into `Heuristic_Evaluation_Workbook_1_Fillable.pdf`.

## Header Fields

**Evaluator:** Zhenyu Song

**Date:** 05/30/2026

**Product:** Canvas

**Task:** Manage coursework in Canvas

## 1. Visibility of System Status

**Issues**

The Dashboard communicates status well through the To Do list, due dates, notification badges, and course-card activity icons. On the Grades page, total grade and assignment weights are visible. However, some status details are hidden behind small icons or toggles, such as comment counts, unread markers, and hidden scores. Truncated course titles also make the exact item status harder to scan.

**Recommendations**

Keep the current badges and due-date summaries, but add clearer labels/tooltips for icon-only status indicators. Avoid truncating high-priority course and assignment names in the To Do list. On Grades, show a short explanation beside hidden scores and what-if scoring so students understand the current state immediately.

## 2. Match Between System and the Real World

**Issues**

Canvas mostly uses student language: Home, Assignments, Grades, Announcements, Calendar, Due, Submitted, and Score. Assignment grouping by Upcoming and Past also matches how students think about coursework. Some terms and symbols are less direct, such as course-card icons, External Feeds, and small status icons whose meaning is not obvious without exploration.

**Recommendations**

Keep student-centered labels and chronological grouping. Pair ambiguous icons with visible text or accessible tooltips, especially on course cards and grade rows. Replace system-oriented labels such as External Feeds with task-oriented wording, or explain them in context.

## 3. User Control and Freedom

**Issues**

Students can move across Canvas using global navigation, course navigation, breadcrumbs, search, calendar views, and filters. These paths support going back or switching tasks. The Dashboard To Do list also lets students dismiss items, but the evaluated screens do not make Undo, Redo, or restore options visible after an item is hidden. The course menu can collapse, but the return path is not always prominent.

**Recommendations**

Make dismiss and hide actions reversible with an Undo message or a clearly labeled restore option. Keep breadcrumbs visible after navigation, and make cancel/exit paths obvious for filters and collapsed menus. For collapsed course navigation, provide a more obvious way to reopen the menu and preserve the student's current page context.

## 4. Consistency and Standards

**Issues**

Canvas shows strong internal consistency: the left global navigation, course navigation, blue links, and tabular grade layout repeat across pages. It also follows external LMS conventions for assignments, calendars, and gradebooks. The main inconsistency is functional: similar small icons appear in course cards, assignment rows, and grades, but their meaning changes or is not labeled. Kumar's consistency types are mostly satisfied aesthetically and internally, but functional consistency is weaker.

**Recommendations**

Standardize icon meanings across Dashboard, Assignments, and Grades. Use the same visual treatment for the same action or status. Add labels or tooltips where icons are reused in different contexts, and keep primary actions as text buttons when the consequence matters.

## 5. Error Prevention

**Issues**

Canvas prevents some mistakes by surfacing due dates in multiple places: Dashboard To Do, Assignments, Calendar, and Grades. Assignment groups, late status, and weighting details help students avoid misunderstanding progress. However, warning cues are weaker before risky actions such as dismissing To Do items, filtering calendars, or relying on hidden scores. These actions can lead students to miss work or misread grade standing.

**Recommendations**

Add confirmation or Undo before hiding/dismissing high-priority academic items. When a calendar filter hides a course, show a clear reminder that events are filtered. On Grades, separate actual grades from what-if calculations visually and warn when scores are hidden, simulated, or not yet official.

## 6. Recognition Rather Than Recall

**Issues**

The interface supports recognition through persistent global navigation, visible course navigation, search boxes, assignment categories, and clear table headers on Grades. Students do not need to remember where Assignments or Grades live. The downside is that many course names and assignments are truncated, and course-card icons require recall of icon meanings rather than recognition.

**Recommendations**

Expose full course and assignment names on hover, focus, or expanded list views. Add text labels for course-card shortcuts, or provide a compact legend. Keep key grade explanations visible near the grade table instead of relying on students to remember them from prior visits.

## 7. Flexibility and Efficiency of Use

**Issues**

Canvas gives both novice and experienced students multiple paths: course cards, global navigation, search, course search, calendar Week/Month/Agenda views, and assignment filters. Personalization exists through course cards and calendar selection. Canvas does expose keyboard shortcuts on some pages through the ? key, but they are not documented in the evaluated screens, not announced in the UI, and inconsistent across pages, so they mainly help users who already know to look for them. Frequent tasks such as checking upcoming work or jumping to feedback still require scanning and several clicks.

**Recommendations**

Offer saved student views such as This week, Ungraded feedback, and Next deadlines. Make keyboard shortcuts discoverable in Help, tooltips, or a visible shortcut menu, and keep shortcut behavior consistent across pages. Let students pin high-priority courses or assignment groups so repeated workflows require less scanning.

## 8. Aesthetic and Minimalist Design

**Issues**

Canvas provides a lot of useful information, but the Dashboard is visually busy. Course cards, image banners, notification dots, icons, and a long To Do list compete for attention. The course homepage also combines navigation, weekly buttons, course content, To Do, feedback, and utility buttons. Important deadlines are present, but not always visually prioritized.

**Recommendations**

Reduce visual competition on the Dashboard by emphasizing urgent and soon-due work over decorative course-card imagery. Allow students to switch to a denser list view. On course pages, group utility buttons and secondary panels so the main learning content remains the visual focus.

## 9. Help Users Recognize, Diagnose, and Recover from Errors

**Issues**

The Canvas search no-results page gives a useful recovery state: it states "0 Results," repeats the failed search term, and suggests checking spelling, using more general keywords, or trying different keywords. The message is plain rather than red or alarming, which fits a low-risk search failure. It still offers an immediate solution. However, similar recovery support is less visible in other risky workflows, such as dismissed To Do items, hidden calendar events, hidden scores, or misunderstood grade status.

**Recommendations**

Reuse the search page's plain-language recovery pattern across Canvas. For dismissed To Do items, show Undo or Restore. For calendar filters, show a visible reminder when events are hidden. For hidden scores or what-if grades, explain whether the value is official, simulated, or unavailable. When possible, include direct next actions such as View submission, Restore item, Contact instructor, or Check rubric.

## 10. Help and Documentation

**Issues**

Canvas surfaces a global Help icon in the left navigation, which typically opens support options such as Search the Canvas Guides, Ask Your Instructor a Question, Report a Problem, and Submit a Feature Idea. This makes general help searchable and reachable. However, help is not strongly contextual in the evaluated workflows. Students looking at grades, calendar filters, hidden scores, or submission status may need help at the exact moment they are interpreting the page.

**Recommendations**

Provide small, contextual help links near confusing areas: grade weighting, hidden scores, what-if scores, calendar filters, and assignment status. Keep help short and task-specific, with concrete steps. Preserve the global Help entry and Canvas Guides search as fallbacks for broader support.