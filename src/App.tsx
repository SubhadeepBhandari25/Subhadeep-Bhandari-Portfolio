import { KageLandingPage } from "@designcodeio/threeui";
import "@designcodeio/threeui/style.css";

export function Scene() {
  return (
    <div className="shader-frame">
      <KageLandingPage
        headingFont="onest"
        bodyFont="onest"
        headingWeight="500"
        bodyWeight="300"
        primaryColor="#e0231c"
        headingSize={48}
        bodySize={17}
        headingLetterSpacing={-0.015}
      />
    </div>
  );
}

export default Scene;
