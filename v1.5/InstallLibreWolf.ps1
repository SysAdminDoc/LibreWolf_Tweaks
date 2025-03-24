# Set URLs and paths
$zipUrl = "https://gitlab.com/api/v4/projects/44042130/packages/generic/librewolf/136.0.2-1/librewolf-136.0.2-1-windows-x86_64-portable.zip"
$zipFile = "$env:TEMP\LibreWolf-Portable.zip"
$installFolder = "C:\Program Files\LibreWolf-Portable"
$versionSubfolder = "librewolf-136.0.2-1"
$exePath = Join-Path -Path $installFolder -ChildPath "$versionSubfolder\LibreWolf-Portable.exe"

# Shortcut paths
$desktopShortcut = "$env:PUBLIC\Desktop\LibreWolf.lnk"
$startMenuShortcut = "$env:APPDATA\Microsoft\Windows\Start Menu\Programs\LibreWolf.lnk"

# Remove existing install folder if it exists
if (Test-Path $installFolder) {
    Write-Host "Removing existing LibreWolf installation..."
    Remove-Item -Recurse -Force $installFolder
}

# Ensure target folder exists
New-Item -ItemType Directory -Path $installFolder | Out-Null

# Download ZIP
Write-Host "Downloading LibreWolf Portable..."
Invoke-WebRequest -Uri $zipUrl -OutFile $zipFile

# Extract ZIP directly to install folder
Write-Host "Extracting to $installFolder..."
Expand-Archive -Path $zipFile -DestinationPath $installFolder -Force

# Create shortcut function
function Create-Shortcut {
    param (
        [string]$TargetPath,
        [string]$ShortcutPath
    )
    $WshShell = New-Object -ComObject WScript.Shell
    $Shortcut = $WshShell.CreateShortcut($ShortcutPath)
    $Shortcut.TargetPath = $TargetPath
    $Shortcut.WorkingDirectory = Split-Path $TargetPath
    $Shortcut.Save()
}

# Create shortcuts
Write-Host "Creating shortcuts pointing to $exePath..."
Create-Shortcut -TargetPath $exePath -ShortcutPath $desktopShortcut
Create-Shortcut -TargetPath $exePath -ShortcutPath $startMenuShortcut






