#!/usr/bin/env python3
from rembg import remove
from PIL import Image
import os

# Input and output paths
input_path = 'src/assets/profile.jpg'
output_path = 'src/assets/profile.png'

# Remove background
input_image = Image.open(input_path)
output_image = remove(input_image)

# Save as PNG (supports transparency)
output_image.save(output_path)

print(f"✅ Background removed successfully!")
print(f"📁 Saved to: {output_path}")
print(f"📊 Size: {os.path.getsize(output_path)} bytes")
