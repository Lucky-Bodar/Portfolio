from PIL import Image

img1_path = "/Users/lucky/.gemini/antigravity/brain/a63da9f7-f4e3-4bdb-bcc0-c9015253c962/.user_uploaded/media_1788348916812.png"
img2_path = "/Users/lucky/.gemini/antigravity/brain/a63da9f7-f4e3-4bdb-bcc0-c9015253c962/.user_uploaded/media_1788348916881.png"

img1 = Image.open(img1_path)
img2 = Image.open(img2_path)

# Let's crop both to their centers so they fit well together as a 4:3 aspect ratio total.
# Target ratio 4:3 -> Width = 4, Height = 3. 
# We'll make the final image 1600x1200.
# Left half is img1 (800x1200), Right half is img2 (800x1200).
target_h = 1200
target_w = 800

def center_crop_and_resize(img, tw, th):
    # crop img to ratio tw:th
    img_ratio = img.width / img.height
    target_ratio = tw / th
    if img_ratio > target_ratio:
        # crop width
        new_w = int(img.height * target_ratio)
        left = (img.width - new_w) // 2
        img = img.crop((left, 0, left + new_w, img.height))
    else:
        # crop height
        new_h = int(img.width / target_ratio)
        top = (img.height - new_h) // 2
        img = img.crop((0, top, img.width, top + new_h))
    return img.resize((tw, th), Image.LANCZOS)

left_img = center_crop_and_resize(img1, target_w, target_h)
right_img = center_crop_and_resize(img2, target_w, target_h)

final_img = Image.new('RGB', (target_w * 2, target_h))
final_img.paste(left_img, (0, 0))
final_img.paste(right_img, (target_w, 0))

final_img.save("/Users/lucky/Downloads/Portfolio/images/express.png")
print("Combined Express images successfully.")
