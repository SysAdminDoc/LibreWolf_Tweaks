:: Install Spicetify CLI
winget install -e --id=Spicetify.Spicetify --silent --accept-source-agreements --accept-package-agreements --disable-interactivity

:: Run Spicetify Marketplace installation as a non-admin user
powershell -NoProfile -ExecutionPolicy Bypass -Command ^
"Start-Process powershell -ArgumentList '-NoProfile -ExecutionPolicy Bypass -Command Invoke-WebRequest -UseBasicParsing \"https://raw.githubusercontent.com/spicetify/spicetify-marketplace/main/resources/install.ps1\" | Invoke-Expression; spicetify --bypass-admin apply' -NoNewWindow -Wait -Verb RunAs"
