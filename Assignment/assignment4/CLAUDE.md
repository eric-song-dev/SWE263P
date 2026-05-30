# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this directory is

**Not a code repository.** This is a UX/Figma design assignment workspace for **SWE 263P (UX & Interaction Design) at UCI, Spring 2026, Assignment 4 (UXAirways Mobile App)**. The deliverable is a Figma file submitted to Canvas; this directory holds the planning + step-by-step Figma operation guide.

There are no build / lint / test commands. Don't suggest any.

## Files

| File | Role |
|------|------|
| `requirement.txt` | Instructor's assignment spec (rubric, deliverable rules, GenAI policy). The source of truth — when in doubt, check this. |
| `lecture_presentation.txt` | Summary of the Week 5 "Visual Design & Prototyping" lecture (Gestalt, fidelity spectrum). Background context. |
| `assignment4-guide.md` | **The main artifact.** ~2700-line step-by-step Figma operation guide written for the user. 13 sections + 4 appendices. Updated frequently. |
| `assignment4-guide-backup.md` | Earlier over-engineered version (11 components, complex variant system). Kept as reference for `§4.1 IphoneFrame` style — the user repeatedly asks for that level of step granularity. **Do not edit.** |

## Working on `assignment4-guide.md`

This is what you'll spend 95% of your time on. It's **not code, it's Chinese-language Figma instructions** for the user to follow click-by-click.

### Structure

13 main sections + 4 appendices:
- §1 概览/评分映射 → §2 设计规范 → §3 文件结构 → §4 9 个 Components → §5 8 屏 Wireframes → §6 Hi-Fi 转换 → §7 Prototype → §8 命名 → §9 Cover → §10 Notes → §11 提交 → §12 Checklist → §13 附录 A (UI3) + 附录 B/C/D
- Sections cross-reference each other heavily (§5 屏幕步骤 reference §4 components, §7.5 references §7.3, etc.). When changing structure (renumbering, removing sections), grep for `§X` / `第 X 章` and update all references.
- The table of contents at the top (lines 12-25) must stay in sync with section titles + their anchor slugs.

### Writing style (mandatory — user pushes back if violated)

Every Figma step block must follow this pattern (see `§4.1 IphoneFrame` in either guide for the canonical example):

```
### Step N {short verb-phrase title}

1. {Concrete action — which UI3 panel, which button}
2. {Specific number — W/H, X/Y, Spacing, Padding, etc.}
3. ...

### 验证清单
- [ ] {observable outcome}
- [ ] ...

### 常见坑
- **{symptom}**: {cause + fix}
```

Specifically required for any "draw a frame" step:
- **Dimensions**: `W × H` or "起始尺寸随意" (if Auto Layout will resize)
- **Position**: `X / Y` absolute coordinates (or "在 XX 内拖" if parent is Auto Layout)
- **Auto Layout (all 5)**: Direction / Spacing / Padding (per-side: 上/右/下/左) / Alignment (九宫格 position) / Resizing (Horizontal + Vertical)
- **Fill**: never just "Fill: 透明" — write "右侧 Fill 区悬停默认 fill 那行 → 点 − 删除"

### Editing the guide

- Use Edit for surgical changes; use a Python heredoc through Bash for multi-section rewrites or renumbering (Edit struggles with the long Chinese strings containing full-width parens `（）`)
- After any structural change: re-grep `^## ` + `§\d+` + `第 \d+ 章` references and update them
- The user works in the Figma file in parallel and tests every step — when they report something doesn't work, look up Figma official docs (`help.figma.com`) or the community forum **before** proposing a fix

## Cross-referencing the spec

The user wants every design decision tied back to `requirement.txt` rubric items. When proposing changes, name the specific rubric line being addressed (e.g. "Hi-Fi 10 pts — `realistic examples of images & text`"). The current 8-screen design and component decisions are already mapped to the rubric in `§1 评分映射` of the guide.

## Memory

User preferences and Figma quirks discovered during this assignment are saved in `~/.claude/projects/-Users-ericsong-Courses-SWE263P-Assignment-assignment4/memory/` — read those at session start. Especially:
- `feedback-figma-precision.md` — verbosity expectations
- `feedback-verify-before-done.md` — don't guess Figma behaviors, check docs
- `reference-figma-hit-test.md` — 6 Figma quirks already learned (hit test bug, instance limits, Cmd+D behavior, Resizing vs Constraints, etc.)
