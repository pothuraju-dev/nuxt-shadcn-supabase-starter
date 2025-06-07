import { createClient } from "@supabase/supabase-js";
import { faker } from "@faker-js/faker";
import "dotenv/config";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY 
);

async function seedProjects(count = 10) {
  for (let i = 0; i < count; i++) {
    const name = faker.company.name();
    const slug = faker.helpers.slugify(name).toLowerCase();
    const collaborators = Array.from(
      { length: faker.number.int({ min: 1, max: 4 }) },
      () => faker.internet.email()
    );

    const { error } = await supabase.from("projects").insert([
      {
        name,
        slug,
        collaborators,
      },
    ]);

    if (error) {
      console.error(`❌ Failed to insert project:`, error);
    } else {
      console.log(`✅ Inserted project: ${name}`);
    }
  }
}

seedProjects(15)
  .then(() => console.log("🌱 Seeding complete."))
  .catch((err) => console.error("❌ Seeding failed:", err));
