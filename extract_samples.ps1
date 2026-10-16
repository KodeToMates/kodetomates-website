Add-Type -AssemblyName System.Drawing
$ref = [System.Drawing.Bitmap]::FromFile('C:\kodeToMates\company-website\public\website_heroSection.png')
$userCrop = [System.Drawing.Bitmap]::FromFile('C:\kodeToMates\company-website\public\images\hero-illustration-right.png')

# We know userCrop is 435x385, found at x=1187, y=186
# In userCrop, let's look at the center of the gear:
# The gear in userCrop:
# Let's crop the Cube and Gear from the original ref:
# Cube in ref is around x=1380 to 1520, y=210 to 350
# Gear in ref is around x=1460 to 1600, y=370 to 520

# Let's crop the gear with generous padding:
$gearRect = New-Object System.Drawing.Rectangle(1450, 360, 180, 180)
$gearBmp = $ref.Clone($gearRect, $ref.PixelFormat)
$gearBmp.Save('C:\kodeToMates\company-website\public\images\gear-sample.png', [System.Drawing.Imaging.ImageFormat]::Png)
$gearBmp.Dispose()

# Let's crop the cube:
$cubeRect = New-Object System.Drawing.Rectangle(1370, 210, 160, 160)
$cubeBmp = $ref.Clone($cubeRect, $ref.PixelFormat)
$cubeBmp.Save('C:\kodeToMates\company-website\public\images\cube-sample.png', [System.Drawing.Imaging.ImageFormat]::Png)
$cubeBmp.Dispose()

$ref.Dispose()
$userCrop.Dispose()
Set-Content -Path 'C:\kodeToMates\company-website\sample_done.txt' -Value "Samples saved"
