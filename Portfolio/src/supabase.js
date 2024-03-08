// supabase.js

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://oryitpyjlnpzxkptobrh.supabase.co'; // Remplacez par votre URL Supabase
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9yeWl0cHlqbG5wenhrcHRvYnJoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwODA3NDk0MSwiZXhwIjoyMDIzNjUwOTQxfQ.k1C8v4TWbA7HNG_AdtOyl1tFKgGiRCtDhfACvJKn__g'; // Remplacez par votre clé API Supabase

const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };
