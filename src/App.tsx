import { LandingPageFrame } from "./shaders/landing-pages/LandingPageFrame";
import { KAGE_TYPOGRAPHY } from "./shaders/landing-pages/pageRecipes";
import { usePageTypography } from "./shaders/landing-pages/pageTypography";
import "./shaders/threeui.css";

export function Scene() {
  const customization = usePageTypography(KAGE_TYPOGRAPHY, {
    headingFont: "onest",
    bodyFont: "onest",
    headingWeight: "500",
    bodyWeight: "300",
    primaryColor: "#e0231c",
    headingSize: 48,
    bodySize: 17,
    headingLetterSpacing: -0.015,
  });

  const baseUrl = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;

  return (
    <div className="shader-frame">
      <LandingPageFrame
        title="Subhadeep Bhandari — Building what comes next"
        sourceUrl={`${baseUrl}landing-pages/kage.html`}
        customization={customization}
      />
    </div>
  );
}

export default Scene;
