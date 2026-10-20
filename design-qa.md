**Comparison target**

- Source visual truth: `http://localhost:4175/` (the supplied Product & Brand portfolio), captured in the in-app browser at the default desktop viewport.
- Implementation: `http://localhost:4174/` (Fashion Technology portfolio), captured in the in-app browser at the same desktop viewport.
- CSS viewport and density: browser-default desktop viewport, 1280 × 720 CSS pixels, device scale factor 1. No density normalization was required.
- State: initial home-screen state; mobile was also checked at 390 × 844 CSS pixels.

**Full-view comparison evidence**

Both captures show the required home-screen pattern: compact editorial header, two-column hero, short introductory copy, two actions, and a right-side collage of overlapping selected-work previews. The implementation intentionally retains the fashion portfolio’s warm brown, cream, gold, rust, forest, and Playfair/DM font system rather than copying the source’s navy/blue palette or Outfit type.

The selected-work area was subsequently compared against the source’s card-grid rhythm at `#selected-work`: the implementation now uses three equal project cards with an image, compact category label, project title, short description, and detail link. The contact area was compared against `#contact`: the implementation now uses a centered heading and introduction, three method cards, and a narrow utility footer.

**Focused region comparison evidence**

The hero and header were inspected at desktop size. No additional focused crop was needed: the navigation, title hierarchy, primary/secondary actions, and all three project previews were readable in the full view.

**Findings**

- No actionable P0, P1, or P2 differences. The requested layout and interaction pattern are present while palette, typography, content, and fashion imagery remain intentionally local to this portfolio.
- [P3] The source includes a fourth overlapping project preview; the implementation uses the fashion portfolio’s three available case studies. This is an intentional content match, not a usability issue.

**Required fidelity surfaces**

- Fonts and typography: The implementation correctly preserves the existing Playfair Display display type plus DM Sans/DM Mono UI system; large display hierarchy and compact uppercase labels match the source’s information hierarchy.
- Spacing and layout rhythm: Desktop uses a balanced two-column hero with a collage contained in its own right-side area. At 390 px, the hero becomes one column and the collage remains readable without horizontal overflow.
- Colors and visual tokens: Existing fashion tokens remain in use: dark brown `#211815`, paper `#f3efe7`, gold `#d6a04b`, and rust `#b44d39`.
- Image quality and asset fidelity: Existing project artwork is reused at appropriate cover crops; no placeholder or code-drawn image substitutes were introduced.
- Copy and content: Fashion portfolio title, description, case-study labels, and actions remain specific to the fashion work.

**Interaction checks**

- The “PACE” hero preview expands its existing case study successfully.
- The PACE selected-project card expands its existing case study successfully.
- The persistent PACE / AURA / MADRAS switcher opens the requested case and closes the prior one; PACE → AURA was verified with smooth-scroll behavior and no console errors.
- Primary “See my work” and secondary “About me” actions point to their appropriate sections.
- Browser console: no errors.

**Implementation Checklist**

1. Preserve the `home-reference.css` layer after the legacy stylesheet so the new homepage rules take precedence.
2. Keep hero and selected-project links connected to their existing expandable case studies.
3. Keep the switcher and Previous / All projects / Next controls consistent across any future case study.
4. Keep the mobile breakpoint at 560 px or test again if the base portfolio’s breakpoint strategy changes.

**Follow-up Polish**

- If a fourth fashion case study is added later, add it as a fourth collage card to exactly mirror the source’s card density.

final result: passed
