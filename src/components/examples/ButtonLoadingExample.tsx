"use client";

import { useState } from "react";
import { PulseLogo, SpinLogo } from "react-logo-loader";

const MyLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

export function ButtonLoadingExample() {
  const [loadingBtn, setLoadingBtn] = useState<string | null>(null);

  const simulate = (btn: string) => {
    setLoadingBtn(btn);
    setTimeout(() => setLoadingBtn(null), 2500);
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-4">

      {/* Primary button */}
      <button
        onClick={() => simulate("save")}
        disabled={loadingBtn === "save"}
        className="flex items-center gap-2 px-5 py-2.5 rounded-xl
                   text-sm font-semibold cursor-pointer transition-all duration-150"
        style={{
          backgroundColor: "var(--primary)",
          color: "#ffffff",
          border: "none",
          opacity: loadingBtn === "save" ? 0.8 : 1,
          minWidth: "130px",
          justifyContent: "center",
        }}
      >
        {loadingBtn === "save" ? (
          <>
            <PulseLogo size={16} color="#ffffff" speed="fast" logo={<MyLogo />} />
            Saving...
          </>
        ) : (
          "Save Changes"
        )}
      </button>

      {/* Secondary button */}
      <button
        onClick={() => simulate("publish")}
        disabled={loadingBtn === "publish"}
        className="flex items-center gap-2 px-5 py-2.5 rounded-xl
                   text-sm font-semibold cursor-pointer transition-all duration-150"
        style={{
          backgroundColor: "var(--secondary)",
          color: "#ffffff",
          border: "none",
          opacity: loadingBtn === "publish" ? 0.8 : 1,
          minWidth: "130px",
          justifyContent: "center",
        }}
      >
        {loadingBtn === "publish" ? (
          <>
            <SpinLogo size={16} color="#ffffff" speed="fast" logo={<MyLogo />} />
            Publishing...
          </>
        ) : (
          "Publish"
        )}
      </button>

      {/* Outline button */}
      <button
        onClick={() => simulate("delete")}
        disabled={loadingBtn === "delete"}
        className="flex items-center gap-2 px-5 py-2.5 rounded-xl
                   text-sm font-semibold cursor-pointer transition-all duration-150"
        style={{
          backgroundColor: "transparent",
          color: loadingBtn === "delete" ? "var(--text-secondary)" : "var(--foreground)",
          border: "1px solid var(--border)",
          minWidth: "130px",
          justifyContent: "center",
        }}
      >
        {loadingBtn === "delete" ? (
          <>
            <PulseLogo size={16} color="var(--text-secondary)" speed="fast" logo={<MyLogo />} />
            Deleting...
          </>
        ) : (
          "Delete"
        )}
      </button>
    </div>
  );
}

export const BUTTON_LOADING_CODE = `import { useState } from "react";
import { PulseLogo } from "react-logo-loader";

const MyLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
  </svg>
);

export function SaveButton() {
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    setLoading(true);
    await saveData();
    setLoading(false);
  };

  return (
    <button
      onClick={handleSave}
      disabled={loading}
      className="flex items-center gap-2 px-5 py-2.5 rounded-xl
                 bg-teal-600 text-white font-semibold"
    >
      {loading && (
        <PulseLogo size={16} color="#ffffff" speed="fast" logo={<MyLogo />} />
      )}
      {loading ? "Saving..." : "Save Changes"}
    </button>
  );
}`;