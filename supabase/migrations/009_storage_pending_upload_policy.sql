-- Allow anonymous (form) uploads to car-photos only under the pending/ prefix.
-- Admin uploads use estimationId/ and require authenticated admin (configured in Dashboard if needed).

CREATE POLICY "Allow anon upload to car-photos pending"
  ON storage.objects
  FOR INSERT
  TO anon
  WITH CHECK (
    bucket_id = 'car-photos' AND (name LIKE 'pending/%')
  );
