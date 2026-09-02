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
