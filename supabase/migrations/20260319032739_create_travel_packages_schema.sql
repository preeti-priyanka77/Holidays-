/*
  # Create Travel Packages Database Schema

  ## Tables Created
  
  1. destinations
    - `id` (uuid, primary key)
    - `name` (text) - Destination name (e.g., "Kashmir", "Bali")
    - `category` (text) - "india" or "international"
    - `image_url` (text) - Main destination image
    - `description` (text) - Short description
    - `created_at` (timestamptz)
    
  2. packages
    - `id` (uuid, primary key)
    - `destination_id` (uuid, foreign key)
    - `title` (text) - Package title
    - `description` (text) - Detailed description
    - `nights` (integer) - Number of nights
    - `days` (integer) - Number of days
    - `price_from` (integer) - Starting price
    - `image_url` (text) - Main package image
    - `slug` (text, unique) - URL-friendly identifier
    - `created_at` (timestamptz)
    
  3. itinerary_items
    - `id` (uuid, primary key)
    - `package_id` (uuid, foreign key)
    - `day_number` (integer)
    - `title` (text) - Day title
    - `description` (text) - Day activities
    - `created_at` (timestamptz)
    
  4. inclusions
    - `id` (uuid, primary key)
    - `package_id` (uuid, foreign key)
    - `item` (text) - Inclusion item
    - `created_at` (timestamptz)
    
  5. exclusions
    - `id` (uuid, primary key)
    - `package_id` (uuid, foreign key)
    - `item` (text) - Exclusion item
    - `created_at` (timestamptz)
    
  6. testimonials
    - `id` (uuid, primary key)
    - `customer_name` (text)
    - `rating` (numeric) - Rating out of 5
    - `review_text` (text)
    - `destination` (text)
    - `created_at` (timestamptz)

  ## Security
  - Enable RLS on all tables
  - Add public read policies for all tables (no authentication required for viewing)
*/

-- Create destinations table
CREATE TABLE IF NOT EXISTS destinations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  category text NOT NULL CHECK (category IN ('india', 'international')),
  image_url text NOT NULL,
  description text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

-- Create packages table
CREATE TABLE IF NOT EXISTS packages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  destination_id uuid REFERENCES destinations(id) ON DELETE CASCADE,
  title text NOT NULL,
  description text DEFAULT '',
  nights integer NOT NULL,
  days integer NOT NULL,
  price_from integer NOT NULL,
  image_url text NOT NULL,
  slug text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create itinerary_items table
CREATE TABLE IF NOT EXISTS itinerary_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  package_id uuid REFERENCES packages(id) ON DELETE CASCADE NOT NULL,
  day_number integer NOT NULL,
  title text NOT NULL,
  description text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

-- Create inclusions table
CREATE TABLE IF NOT EXISTS inclusions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  package_id uuid REFERENCES packages(id) ON DELETE CASCADE NOT NULL,
  item text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create exclusions table
CREATE TABLE IF NOT EXISTS exclusions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  package_id uuid REFERENCES packages(id) ON DELETE CASCADE NOT NULL,
  item text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  rating numeric NOT NULL CHECK (rating >= 0 AND rating <= 5),
  review_text text NOT NULL,
  destination text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE destinations ENABLE ROW LEVEL SECURITY;
ALTER TABLE packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE itinerary_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE inclusions ENABLE ROW LEVEL SECURITY;
ALTER TABLE exclusions ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Create public read policies (allow anyone to view travel data)
CREATE POLICY "Public can read destinations"
  ON destinations FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Public can read packages"
  ON packages FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Public can read itinerary items"
  ON itinerary_items FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Public can read inclusions"
  ON inclusions FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Public can read exclusions"
  ON exclusions FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Public can read testimonials"
  ON testimonials FOR SELECT
  TO anon, authenticated
  USING (true);