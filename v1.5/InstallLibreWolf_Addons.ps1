# =============================
# LibreWolf Add-on Installer
# =============================

$ErrorActionPreference = "Stop"

# === CONFIGURATION ===
$installFolder = "C:\Program Files\LibreWolf-Portable"
$versionSubfolder = "librewolf-136.0.2-1"
$extensionDir = Join-Path -Path $installFolder -ChildPath "$versionSubfolder\LibreWolf\distribution\extensions"
New-Item -ItemType Directory -Path $extensionDir -Force | Out-Null

# === uBlock Origin ===
$ublockUrl = "https://addons.mozilla.org/firefox/downloads/latest/ublock-origin/latest.xpi"
$ublockId = "uBlock0@raymondhill.net"
Invoke-WebRequest -Uri $ublockUrl -OutFile (Join-Path $extensionDir "$ublockId.xpi")
Write-Host "✅ uBlock Origin installed"

# === Dark Reader (manual link) ===
$darkReaderUrl = "https://addons.mozilla.org/firefox/downloads/file/4439735/darkreader-4.9.103.xpi"
$darkReaderId = "darkreader@darkreader.org"
Invoke-WebRequest -Uri $darkReaderUrl -OutFile (Join-Path $extensionDir "$darkReaderId.xpi")
Write-Host "✅ Dark Reader installed (manual URL)"

# === Bitwarden ===
$bitwardenUrl = "https://addons.mozilla.org/firefox/downloads/latest/bitwarden-password-manager/latest.xpi"
$bitwardenId = "{446900e4-71c2-419f-a6a7-df9c091e268b}"
Invoke-WebRequest -Uri $bitwardenUrl -OutFile (Join-Path $extensionDir "$bitwardenId.xpi")
Write-Host "✅ Bitwarden installed"

# === Adaptive Tab Color (manual link) ===
$tabColorUrl = "https://addons.mozilla.org/firefox/downloads/file/4427118/adaptive_tab_bar_colour-2.3.xpi"
$tabColorId = "{d37dc5d0-a117-4acb-a4de-5b86699c70db}"
Invoke-WebRequest -Uri $tabColorUrl -OutFile (Join-Path $extensionDir "$tabColorId.xpi")
Write-Host "✅ Adaptive Tab Color installed (manual URL)"

# === SponsorBlock ===
$sponsorBlockUrl = "https://addons.mozilla.org/firefox/downloads/latest/sponsorblock/latest.xpi"
$sponsorBlockId = "sponsorBlocker@ajay.app"
Invoke-WebRequest -Uri $sponsorBlockUrl -OutFile (Join-Path $extensionDir "$sponsorBlockId.xpi")
Write-Host "✅ SponsorBlock installed"

# === Violentmonkey (manual link) ===
$violentmonkeyUrl = "https://addons.mozilla.org/firefox/downloads/file/4426490/violentmonkey-2.30.0.xpi"
$violentmonkeyId = "violentmonkey@violentmonkey.net"
Invoke-WebRequest -Uri $violentmonkeyUrl -OutFile (Join-Path $extensionDir "$violentmonkeyId.xpi")
Write-Host "✅ Violentmonkey installed (manual URL)"

Write-Host "`n✅ All selected extensions have been installed successfully."
Read-Host "Press ENTER to exit"
