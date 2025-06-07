<script setup>
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { createClient } from "@supabase/supabase-js";
const config = useRuntimeConfig();
const supabase = createClient(
  config.public.supabaseUrl,
  config.public.supabaseAnonKey
);
const projects = ref([]);
async function getProjects() {
  const { data } = await supabase.from("projects").select();
  projects.value = data;
}
onMounted(() => {
  getProjects();
});
</script>
<template>
  <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3 p-4">
    <Card v-for="project in projects" :key="project.id">
      <CardHeader>
        <CardTitle>{{ project.name }}</CardTitle>
        <CardDescription>{{ project.slug }}</CardDescription>
      </CardHeader>
      <CardContent>
        <p class="text-sm text-gray-500 mb-2">Collaborators:</p>
        <div class="flex flex-wrap gap-2">
          <Badge
            v-for="email in project.collaborators"
            :key="email"
            variant="secondary"
          >
            {{ email }}
          </Badge>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
