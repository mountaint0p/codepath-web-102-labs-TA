import { createClient } from "@supabase/supabase-js";

const URL = "https://pyvigtchuwqoeutrrosv.supabase.co";
const API_KEY =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB5dmlndGNodXdxb2V1dHJyb3N2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgyODU4NzEsImV4cCI6MjAxMzg2MTg3MX0.Ae3cegb98iQN_0dp5JMOtYTZJR4rawnDxooTPZ4--yQ";

export const supabase = createClient(URL, API_KEY);
