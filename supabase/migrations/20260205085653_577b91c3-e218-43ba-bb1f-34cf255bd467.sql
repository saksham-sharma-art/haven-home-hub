-- Create rooms table
CREATE TABLE public.rooms (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  type TEXT NOT NULL,
  price INTEGER NOT NULL,
  capacity INTEGER NOT NULL,
  features TEXT[] NOT NULL DEFAULT '{}',
  available_count INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create booking inquiries table
CREATE TABLE public.booking_inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  room_id UUID REFERENCES public.rooms(id),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  check_in_date DATE NOT NULL,
  message TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.rooms ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.booking_inquiries ENABLE ROW LEVEL SECURITY;

-- Allow anyone to view rooms (public listing)
CREATE POLICY "Anyone can view rooms" 
ON public.rooms 
FOR SELECT 
USING (true);

-- Allow anyone to submit booking inquiries
CREATE POLICY "Anyone can submit inquiries" 
ON public.booking_inquiries 
FOR INSERT 
WITH CHECK (true);

-- Insert default room data
INSERT INTO public.rooms (type, price, capacity, features, available_count) VALUES
('Double Sharing', 8000, 2, ARRAY['Shared with 1 roommate', 'Attached bathroom', 'Individual study desk', 'Personal wardrobe', 'AC included', 'All meals included'], 4),
('Triple Sharing', 6000, 3, ARRAY['Shared with 2 roommates', 'Common bathroom', 'Shared study area', 'Personal locker', 'Fan/Cooler', 'All meals included'], 4),
('Four Sharing', 5000, 4, ARRAY['Shared with 3 roommates', 'Common bathroom', 'Shared study area', 'Personal locker', 'Fan/Cooler', 'All meals included'], 4);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for rooms table
CREATE TRIGGER update_rooms_updated_at
BEFORE UPDATE ON public.rooms
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();