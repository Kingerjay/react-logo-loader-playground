"use client";

import { useState } from "react";
import { HelixDots, } from "react-logo-loader";

const MyLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="55%" height="55%">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

export function UploadExample() {
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [done, setDone] = useState(false);

  const simulate = () => {
    setDone(false);
    setProgress(0);
    setUploading(true);

    let p = 0;
    const interval = setInterval(() => {
      p += Math.random() * 15;
      if (p >= 100) {
        p = 100;
        clearInterval(interval);
        setUploading(false);
        setDone(true);
      }
      setProgress(Math.min(p, 100));
    }, 300);
  };

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-xs">

      {/* Upload zone */}
      <div
        className="w-full flex flex-col items-center justify-center gap-4
                   rounded-2xl border-2 border-dashed py-8 px-6 text-center"
        style={{
          borderColor: uploading ? "var(--primary)" : "var(--border)",
          backgroundColor: uploading
            ? "var(--primary-light)"
            : "var(--surface-2)",
          transition: "all 0.3s ease",
        }}
      >
        {/* Loader */}
        <HelixDots
          size={64}
          color="#0d9488"
          speed="slow"
          logoBehavior="pulse"
          logo={<MyLogo />}
        />

        {/* Progress text */}
        <div className="flex flex-col items-center gap-1">
          {done ? (
            <p
              className="text-sm font-bold"
              style={{ color: "#10b981" }}
            >
              ✓ Upload complete!
            </p>
          ) : uploading ? (
            <>
              <p
                className="text-sm font-bold"
                style={{ color: "var(--primary)" }}
              >
                Uploading... {Math.round(progress)}%
              </p>
              {/* Progress bar */}
              <div
                className="w-full rounded-full overflow-hidden"
                style={{
                  height: "4px",
                  backgroundColor: "var(--border)",
                  width: "160px",
                }}
              >
                <div
                  className="h-full rounded-full transition-all duration-300"
                  style={{
                    width: `${progress}%`,
                    backgroundColor: "var(--primary)",
                  }}
                />
              </div>
            </>
          ) : (
            <p
              className="text-sm"
              style={{ color: "var(--text-secondary)" }}
            >
              Click below to simulate upload
            </p>
          )}
        </div>
      </div>

      <button
        onClick={simulate}
        disabled={uploading}
        className="px-5 py-2.5 rounded-xl text-sm font-semibold
                   cursor-pointer transition-all duration-150"
        style={{
          backgroundColor: uploading ? "var(--surface-2)" : "var(--secondary)",
          color: uploading ? "var(--text-secondary)" : "#ffffff",
          border: "1px solid var(--border)",
        }}
      >
        {uploading ? "Uploading..." : done ? "Upload Again" : "Simulate Upload"}
      </button>
    </div>
  );
}

export const UPLOAD_CODE = `import { useState } from "react";
import { HelixDots } from "react-logo-loader";

const MyLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
  </svg>
);

export function FileUploader() {
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (file) => {
    setUploading(true);
    await uploadWithProgress(file, (p) => setProgress(p));
    setUploading(false);
  };

  return (
    <div>
      {uploading && (
        <HelixDots
          size={64}
          color="#0d9488"
          speed="slow"
          logoBehavior="pulse"
          logo={<MyLogo />}
        />
      )}
      <p>{Math.round(progress)}% uploaded</p>
    </div>
  );
}`;