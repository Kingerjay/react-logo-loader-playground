import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ExampleCard } from "@/components/examples/ExampleCard";
import {
  PageLoadingExample,
  PAGE_LOADING_CODE,
} from "@/components/examples/PageLoadingExample";
import {
  ButtonLoadingExample,
  BUTTON_LOADING_CODE,
} from "@/components/examples/ButtonLoadingExample";
import {
  FormSubmitExample,
  FORM_SUBMIT_CODE,
} from "@/components/examples/FormSubmitExample";
import {
  DataFetchExample,
  DATA_FETCH_CODE,
} from "@/components/examples/DataFetchExample";
import {
  UploadExample,
  UPLOAD_CODE,
} from "@/components/examples/UploadExample";
import { Footer } from "@/components/layout/Footer";

export default function ExamplesPage() {

  return (
    <div>
    <div className="max-w-[1000px] mx-auto px-6 pb-20">

      {/* Page header */}
      <div className="pt-12 pb-10 border-b" style={{ borderColor: "var(--border)" }}>
        <Badge variant="secondary">Real World Examples</Badge>
        <h1 className="text-4xl font-extrabold tracking-[-0.04em] mt-4 mb-3">
          Examples
        </h1>
        <p
          className="text-base leading-relaxed max-w-xl"
          style={{ color: "var(--text-secondary)" }}
        >
          See how react-logo-loader fits into real UI patterns.
          Click &quot;View Code&quot; on any example to see the implementation.
        </p>
        <div className="flex items-center gap-3 mt-6">
          <Button href="/playground" variant="primary" size="md">
            Open Playground →
          </Button>
          <Button href="/docs" variant="outline" size="md">
            Read the Docs
          </Button>
        </div>
      </div>

      {/* Examples grid */}
      <div className="flex flex-col gap-8 mt-10">

        <ExampleCard
          title="Page Loading Overlay"
          description="Full screen overlay with backdrop blur while a page or route loads."
          badge="ArcSpinner"
          badgeVariant="primary"
          code={PAGE_LOADING_CODE}
        >
          <PageLoadingExample />
        </ExampleCard>

        <ExampleCard
          title="Button Loading State"
          description="Inline loader inside buttons during async actions like saving or publishing."
          badge="PulseLogo + SpinLogo"
          badgeVariant="secondary"
          code={BUTTON_LOADING_CODE}
        >
          <ButtonLoadingExample />
        </ExampleCard>

        <ExampleCard
          title="Form Submission"
          description="Show a loader while a form is being submitted, then transition to a success state."
          badge="StrokeDraw"
          badgeVariant="primary"
          code={FORM_SUBMIT_CODE}
        >
          <FormSubmitExample />
        </ExampleCard>

        <ExampleCard
          title="Data Fetching"
          description="Replace a data table with a loader while fetching results from an API."
          badge="OrbitDots"
          badgeVariant="secondary"
          code={DATA_FETCH_CODE}
        >
          <DataFetchExample />
        </ExampleCard>

        <ExampleCard
          title="File Upload Progress"
          description="Use HelixDots to visually communicate upload progress as the logo fills up."
          badge="HelixDots"
          badgeVariant="primary"
          code={UPLOAD_CODE}
        >
          <UploadExample />
        </ExampleCard>

      </div>
    </div>
    
    <Footer />
    </div>
  );
}