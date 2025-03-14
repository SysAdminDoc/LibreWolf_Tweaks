
# Step 1: Define the URLs of the zip files to be downloaded
$url1 = "https://github.com/SysAdminDoc/LibreWolf_DarkPortable/raw/main/LibreSpotify/Roaming/Spotify.zip"
$url2 = "https://github.com/SysAdminDoc/LibreWolf_DarkPortable/raw/main/LibreSpotify/Roaming/spicetify.zip"
$url3 = "https://github.com/SysAdminDoc/LibreWolf_DarkPortable/raw/main/LibreSpotify/Local/Spotify.zip"
$url4 = "https://github.com/SysAdminDoc/LibreWolf_DarkPortable/raw/main/LibreSpotify/Local/spicetify.zip"

# Step 2: Set the Temp directory as the base extraction destination
$tempDir = "$env:TEMP"

# Step 3: Create the 'Local' and 'Roaming' folders within the Temp directory if they don't exist
$localDir = "$tempDir\Local"
$roamingDir = "$tempDir\Roaming"

If (-Not (Test-Path $localDir)) {
    Write-Host "Creating Local directory in Temp"
    New-Item -Path $localDir -ItemType Directory
}

If (-Not (Test-Path $roamingDir)) {
    Write-Host "Creating Roaming directory in Temp"
    New-Item -Path $roamingDir -ItemType Directory
}

# Step 4: Download and extract the first zip file (Roaming) to Roaming folder
Write-Host "Downloading and extracting $url1 to $roamingDir"
$zipFile1 = "$roamingDir\Spotify_1.zip"
Invoke-WebRequest -Uri $url1 -OutFile $zipFile1
Expand-Archive -Path $zipFile1 -DestinationPath $roamingDir -Force
Remove-Item -Path $zipFile1 -Force  # Delete the ZIP file after extraction

# Step 5: Download and extract the second zip file (Roaming) to Roaming folder
Write-Host "Downloading and extracting $url2 to $roamingDir"
$zipFile2 = "$roamingDir\spicetify_2.zip"
Invoke-WebRequest -Uri $url2 -OutFile $zipFile2
Expand-Archive -Path $zipFile2 -DestinationPath $roamingDir -Force
Remove-Item -Path $zipFile2 -Force  # Delete the ZIP file after extraction

# Step 6: Download and extract the third zip file (Local) to Local folder
Write-Host "Downloading and extracting $url3 to $localDir"
$zipFile3 = "$localDir\Spotify_3.zip"
Invoke-WebRequest -Uri $url3 -OutFile $zipFile3
Expand-Archive -Path $zipFile3 -DestinationPath $localDir -Force
Remove-Item -Path $zipFile3 -Force  # Delete the ZIP file after extraction

# Step 7: Download and extract the fourth zip file (Local) to Local folder
Write-Host "Downloading and extracting $url4 to $localDir"
$zipFile4 = "$localDir\spicetify_4.zip"
Invoke-WebRequest -Uri $url4 -OutFile $zipFile4
Expand-Archive -Path $zipFile4 -DestinationPath $localDir -Force
Remove-Item -Path $zipFile4 -Force  # Delete the ZIP file after extraction


# Function to move contents from Temp\Local to %LOCALAPPDATA%\Local
function Move-Local {
    # Define source directory (where extracted files are)
    $sourceDir = "C:\Users\$env:USERNAME\AppData\Local\Temp\Local"

    # Define destination directory (where files should go)
    $destinationDir = "C:\Users\$env:USERNAME\AppData\Local"

    # Check if source directory exists
    If (Test-Path $sourceDir) {
        Write-Host "Moving contents from $sourceDir to $destinationDir"

        # Move only the contents inside the Local folder, not the folder itself
        Get-ChildItem -Path $sourceDir | ForEach-Object { Move-Item -Path $_.FullName -Destination $destinationDir -Force }

    } else {
        Write-Host "No Local folder found in Temp"
    }
}

# Function to move contents from Temp\Roaming to %APPDATA%\Roaming
function Move-Roaming {
    # Define the source directory (Temp\Roaming)
    $sourceDir = "C:\Users\$env:USERNAME\AppData\Local\Temp\Roaming"

    # Define the destination directory (%APPDATA%\Roaming)
    $destinationDir = "C:\Users\$env:USERNAME\AppData\Roaming"

    # Check if the source directory exists
    If (Test-Path $sourceDir) {
        Write-Host "Moving contents from $sourceDir to $destinationDir"
        
        # Move contents from source to destination (not the folder itself, just the contents)
        Move-Item -Path "$sourceDir\*" -Destination $destinationDir
    } else {
        Write-Host "No Roaming folder found in Temp"
    }
}

# Execute the functions
Move-Local
Move-Roaming
