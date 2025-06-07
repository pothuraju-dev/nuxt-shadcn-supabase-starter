import "dotenv/config";
import { execSync } from "child_process";

const projectId = process.env.SUPABASE_PROJECT_ID;

if (!projectId) {
  console.error("❌ SUPABASE_PROJECT_ID is not defined in .env");
  process.exit(1);
}

try {
  console.log(`🧬 Generating Supabase types for project: ${projectId}`);
  execSync(
    `npx supabase gen types --lang=typescript --project-id ${projectId} --schema public > database/types.ts`,
    { stdio: "inherit" }
  );
  console.log("✅ Supabase types generated at database/types.ts");
} catch (error) {
  console.error("❌ Type generation failed:", error.message);
  process.exit(1);
}
