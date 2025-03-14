@echo off
taskkill /IM spotify.exe /F >nul 2>&1

@@echo off
:: Set the text color (green on black background)
color 0A

:: Clear screen and add a title
cls
echo **********************************************
echo *** Welcome to the Ultimate Spotify Script ***
echo **********************************************

:: Add a 2-second pause for dramatic effect
timeout /t 2 >nul

color 0A
echo *** Steps to be performed by this script: ***
timeout /t 1 >nul

echo Step 1: Install SpotX... This will help get Spotify ready!
timeout /t 1 >nul

echo Step 2: Log into Spotify to create local profile files on system.
timeout /t 1 >nul

echo Step 3: Installing Spicetify and its marketplace for customization.
timeout /t 1 >nul

echo Step 4: Downloading and importing my custom configuration.
timeout /t 1 >nul

echo Step 5: Launch Spotify so you can start jammin'!
timeout /t 3 >nul
pause
color 0A

:: Clear screen
cls

:: Display the colored ASCII art logo
echo.
echo  M     M    AAAAA    TTTTT   TTTTT   W   W    AAAAA   SSSSS      H   H   EEEEE   RRRRR   EEEEE
echo  MM   MM   A     A     T       T     W W W   A     A  S          H   H   E       R   R   E
echo  M M M M   AAAAAAA     T       T     W W W   AAAAAAA  SSSSS      HHHHH   EEEE    RRRRR   EEEE
echo  M  M  M   A     A     T       T     W W W   A     A      S      H   H   E       R  R    E
echo  M     M   A     A     T       T      W W    A     A  SSSSS      H   H   EEEEE   R   R   EEEEE

echo.

timeout /t 3 >nul


color 0A 
echo *** Step 1: Installing SpotX ***
timeout /t 3 >nul
echo Spotify will automatically launch after SpotX is installed.
timeout /t 3 >nul
echo Once Spotify opens, go ahead and log in with your account.
timeout /t 3 >nul
echo After you're logged in, come back to this script to continue the setup.
timeout /t 3 >nul
echo Ready?
pause

cls
:: Line for changing spotx parameters, each parameter should be separated by a space
set param=-confirm_uninstall_ms_spoti -confirm_spoti_recomended_over -podcasts_off -block_update_on -start_spoti -new_theme -adsections_off -lyrics_stat spotify

set url='https://raw.githubusercontent.com/SpotX-Official/spotx-official.github.io/main/run.ps1'
set url2='https://spotx-official.github.io/run.ps1'
set tls=[Net.ServicePointManager]::SecurityProtocol = [Net.ServicePointManager]::SecurityProtocol -bor [Net.SecurityProtocolType]::Tls12;

%SYSTEMROOT%\System32\WindowsPowerShell\v1.0\powershell.exe ^
-Command %tls% $p='%param%'; """ & { $(try { iwr -useb %url% } catch { $p+= ' -m'; iwr -useb %url2% })} $p """" | iex

echo Welcome back after logging into Spotify.
pause

taskkill /IM spotify.exe /F >nul 2>&1

cls

@echo off
echo This next script will ask if you want to install the marketplace.
echo Make sure to choose Y for yes.
echo If Spotify launches afterward, please close it and come back here.
pause

runas /trustlevel:0x20000 "powershell iwr -useb https://raw.githubusercontent.com/spicetify/cli/main/install.ps1 | iex"
pause
cls

taskkill /IM spotify.exe /F >nul 2>&1


@echo off
echo Congratulations, spicetify and its marketplace is installed.
pause


runas /trustlevel:0x20000 "powershell Spicetify restore backup apply"

@echo off
echo Countdown starts now:
for /l %%i in (30,-1,0) do (
    echo %%i
    timeout /t 1 >nul
)

runas /trustlevel:0x20000 "powershell Spicetify backup apply"

@echo off
echo Countdown starts now:
for /l %%i in (30,-1,0) do (
    echo %%i
    timeout /t 1 >nul
)

runas /trustlevel:0x20000 "powershell Spicetify upgrade"

@echo off
echo Countdown starts now:
for /l %%i in (30,-1,0) do (
    echo %%i
    timeout /t 1 >nul
)


echo Closing Spotify if running...
taskkill /IM spotify.exe /F >nul 2>&1


@echo off
echo Downloading and executing config file restore script...
powershell -ExecutionPolicy Bypass -NoProfile -Command ^
"Start-Process powershell -ArgumentList \"-ExecutionPolicy Bypass -NoProfile -Command & {Invoke-Expression (New-Object Net.WebClient).DownloadString('https://raw.githubusercontent.com/SysAdminDoc/LibreWolf_DarkPortable/refs/heads/main/LibreSpotify/DownloadConfigs.ps1')}\" -Wait"


runas /trustlevel:0x20000 "powershell Spicetify restore backup"

@echo off
echo Countdown starts now:
for /l %%i in (10,-1,0) do (
    echo %%i
    timeout /t 1 >nul
)

runas /trustlevel:0x20000 "powershell Spicetify apply"

@echo off
echo Countdown to launching Spotify:
for /l %%i in (10,-1,0) do (
    echo %%i
    timeout /t 1 >nul
)


start "" "%APPDATA%\Spotify\Spotify.exe"

