# Typography

- System sans-serif text with explicit Latin, CJK and emoji fallbacks; no additional web-font downloads. Segoe UI Emoji is preferred where installed, followed by Apple Color Emoji and Noto Color Emoji. Emoji artwork remains platform-dependent; no proprietary fonts are redistributed.
- Body and headings use 400 and 700. Synthetic weight is disabled. Root size stays at 100%; text scales use rem, with separate body, UI and heading leading tokens.
- Code retains a monospace-first stack with CJK fallbacks. Code and KaTeX keep their own spacing and local overflow behavior.
- Secondary information uses readable color tokens; article links retain underlines, keyboard focus has an outline, and independent controls have 2.75rem minimum targets. Inline prose links are not expanded into separate blocks.
- Long headings and navigation wrap. Browser zoom is not disabled. Search is a native keyboard-operable button. System fonts avoid font-loading blank text and late font swaps.

## Assets and licenses

Existing Iconify collections: Tabler (MIT), Line MD (MIT), Catppuccin (MIT), Remix Icon (Apache-2.0), Simple Icons (CC0-1.0). Existing theme SVGs and KaTeX retain their supplied licenses. Brand marks remain subject to trademark rights. No new font or icon dependencies are added. Existing icon bundling/loading is retained.

## Verification scope

Static build, lint, narrow viewport and enlarged text reflow are checked. Native rendering still depends on installed fonts and the OS; a CSS stack is not a guarantee of identical rasterization. No claim of complete cross-platform accessibility certification is made.
