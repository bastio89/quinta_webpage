import { defineConfig } from "@playwright/test";

/**
 * Regressionstests gegen den Production-Build.
 * Vorher einmal `bun run build` ausführen; der Server startet automatisch.
 *
 * In Umgebungen mit vorinstalliertem Chromium (statt `playwright install`)
 * kann der Browser über PW_EXECUTABLE_PATH gesetzt werden.
 */
export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  reporter: [["list"]],
  timeout: 30_000,
  use: {
    baseURL: "http://localhost:4545",
    launchOptions: process.env.PW_EXECUTABLE_PATH
      ? { executablePath: process.env.PW_EXECUTABLE_PATH }
      : {},
  },
  webServer: {
    command: "bun run start -p 4545",
    url: "http://localhost:4545",
    reuseExistingServer: true,
    timeout: 60_000,
  },
});
