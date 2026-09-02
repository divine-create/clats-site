-- Enable pgcrypto for gen_random_uuid() if needed
-- CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Create ebook_leads table: captures emails from the "free ebook" popup
CREATE TABLE IF NOT EXISTS ebook_leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT NOT NULL,
    source_path TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS ebook_leads_email_idx ON ebook_leads (email);

-- Allow the anonymous (frontend) key to insert leads, but not read/update/delete them.
ALTER TABLE ebook_leads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow anonymous inserts" ON ebook_leads FOR INSERT TO anon WITH CHECK (true);
