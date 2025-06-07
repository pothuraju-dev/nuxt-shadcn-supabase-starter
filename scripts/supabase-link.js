import "dotenv/config";
import { execSync } from "child_process";

const projectId = process.env.SUPABASE_PROJECT_ID;

if (!projectId) {
  console.error("❌ SUPABASE_PROJECT_ID is not defined in .env");
  process.exit(1);
}

try {
  console.log(`🔗 Linking to Supabase project: ${projectId}`);
  execSync(`supabase link --project-ref ${projectId}`, { stdio: "inherit" });
} catch (error) {
  console.error("❌ Failed to link project:", error.message);
  process.exit(1);
}
