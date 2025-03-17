@echo off
taskkill /IM spotify.exe /F >nul 2>&1

@echo off
mode con:cols=100 lines=55
powershell -Command "&{(Get-Process -Id $PID).MainWindowHandle | ForEach-Object { if ($_ -ne 0) { (New-Object -ComObject Shell.Application).MinimizeAll(); (New-Object -ComObject WScript.Shell).SendKeys('^{ESC}'); Start-Sleep -Milliseconds 500; (New-Object -ComObject WScript.Shell).SendKeys('{F11}') }}}"
cls

@@echo off
color 0A

cls
echo *******************************
echo *** Welcome to LibreSpotify ***
echo *******************************

timeout /t 3 >nul
cls
color 0A
echo *** Steps to be performed by this script: ***
echo "Spotify Customization Guide"
echo "============================"
echo "Step 1: Install SpotX, an ad-free modification for Spotify."
echo "Step 2: Install Spicetify along with its marketplace for powerful UI customization."
echo "Step 3: (In Development) Download and apply a custom Spicetify configuration."
pause
color 0A

cls

mode con:cols=100 lines=55
echo.
echo  M     M    AAAAA    TTTTT   TTTTT   W   W    AAAAA   SSSSS      H   H   EEEEE   RRRRR   EEEEE
echo  MM   MM   A     A     T       T     W W W   A     A  S          H   H   E       R   R   E
echo  M M M M   AAAAAAA     T       T     W W W   AAAAAAA  SSSSS      HHHHH   EEEE    RRRRR   EEEE
echo  M  M  M   A     A     T       T     W W W   A     A      S      H   H   E       R  R    E
echo  M     M   A     A     T       T      W W    A     A  SSSSS      H   H   EEEEE   R   R   EEEEE
echo.
echo  .........                                                              .........  
echo  ................                     ......                     ................  
echo  .....................       ........................       .....................  
echo  .... ................. .................................  ................. ...   
echo   ... [101m0@@@00ooo[0m....................................................[101mooo00@@@0[0m ...   
echo   ... [101mo@@@@@@@@@0o[0m..............................................[101mo@@@@@@@@@@o[0m ...   
echo    ....[101m0@@@@@@0o[0m..................................................[101mo@@@@@@@0[0m....    
echo    ... [101mo@@@@@o[0m......................................................[101m0@@@@@o[0m ...    
echo     ....[101m0@@0[0m.........................................................[101mo@@@0[0m....     
echo     ... [101m.@0[0m............................................................[101m0@[0m.....     
echo      ... [101mo[0m..............................................................[101mo[0m ...      
echo       ... .............................................................  ...       
echo        .. .............................................................. ..        
echo          ...........[42mo0o.....ooo[0m....................[42mooo.....o0o[0m...........          
echo          .........[42mo00o[40m       [42mo00o[0m.......oo.......[42mo000[40m       [42mo00o[0m.........          
echo         .........[42mo00o[40m         [42m000o[0m......00......[42mo00o[40m         [42m000o[0m........          
echo         ..........[42mo00[40m         [42m000o[0m ....0@@0.....[42m000o[40m         [42m00o[0m.........          
echo  ...oooooooooo.....[42mo0o[40m       [42mo00o[0m.....0@@@@0.....[42mo00o[40m       [42mo0o[0m.....oooooooooo...  
echo  ........ooooooooo...[42mooo...oooo[0m.....o0@@@@@@0o.....[42moooo...ooo[0m..oooooooooo......o.  
echo       ...........oo................o0@@@@@@@@@o...............ooo...........       
echo       ..ooooooooooo..............o0@@@@@@@@@@@@0o..............ooooooooooo..       
echo..oooooooooooooooooooo..........oo0@@@@@@@@@@@@@@@@0oo..........ooooooooooooooooooo..
echo....      ...................oo0@@@@@@@@@@@@@@@@@@@@@@0oo...................     ....
echo.          ..ooooooooooooo00@@@@@oo@@@@@@0oo0@@@@@0oo@@@@@00ooooooooooooo..          
echo.        .oooo.o00000@@@@@@@@@@@@@ooooooo000oooooo.o@@@@@@@@@@@@@0000o..oooo.        
echo.      ooo.  .0@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@0oo0@@@@@@@@@@@@@@@@@@@o. ..oo.      
echo.              .oo0@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@0oo.              
echo.                  .oo0@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@0oo.                  
echo.                      ..ooo000@@@@@@@@@@@@@@@@@@@@@@@@000ooo..                      
echo.                              ....oooooooooooooooo....                              
echo.
echo.
timeout /t 3 >nul
@echo off
mode con:cols=100 lines=55
cls

timeout /t 3 >nul

@echo off
color 0A

:: Download Uninstall-Spotify.bat from GitHub
echo Downloading Uninstall-Spotify.bat from GitHub...
curl -o Uninstall-Spotify.bat https://raw.githubusercontent.com/amd64fox/Uninstall-Spotify/refs/heads/main/Uninstall-Spotify.bat

:: Run the downloaded script
echo Running Uninstall-Spotify.bat...
call Uninstall-Spotify.bat

cls

@echo off
color 0A
echo ========================================
echo        Spotify Customization Script
echo ========================================
echo.
echo *** Step 1: Installing SpotX ***

cls
:: Line for changing spotx parameters, each parameter should be separated by a space
set param=-confirm_uninstall_ms_spoti -confirm_spoti_recomended_over -podcasts_off -block_update_on -start_spoti -new_theme -adsections_off -lyrics_stat spotify

set url='https://raw.githubusercontent.com/SpotX-Official/spotx-official.github.io/main/run.ps1'
set url2='https://spotx-official.github.io/run.ps1'
set tls=[Net.ServicePointManager]::SecurityProtocol = [Net.ServicePointManager]::SecurityProtocol -bor [Net.SecurityProtocolType]::Tls12;

%SYSTEMROOT%\System32\WindowsPowerShell\v1.0\powershell.exe ^
-Command %tls% $p='%param%'; """ & { $(try { iwr -useb %url% } catch { $p+= ' -m'; iwr -useb %url2% })} $p """" | iex

taskkill /IM spotify.exe /F >nul 2>&1

cls

@echo off
color 0A
echo ========================================
echo        Spotify Customization Script
echo ========================================
echo.
echo *** Part 2: Installing Spicetify Marketplace ***
echo During the installation, you will be prompted to install the marketplace.
echo Make sure to select "Y" (Yes) when asked.
echo.
echo Press any key to continue...
pause >nul

echo Running Spicetify installation
runas /trustlevel:0x20000 "powershell iwr -useb https://raw.githubusercontent.com/spicetify/cli/main/install.ps1 | iex"
pause

@echo off
echo Continue on, a few more commands need sent for Spicetify to work.
pause

taskkill /IM spotify.exe /F >nul 2>&1
@echo off
color 0A

cls
@echo off
echo Running Spicetify operations 1 of of 3
runas /trustlevel:0x20000 "powershell Spicetify restore backup apply"
pause

cls
@echo off
echo Running Spicetify operations 2 of of 3
runas /trustlevel:0x20000 "powershell Spicetify backup apply"
pause

cls
@echo off
echo Running Spicetify operations 3 of of 3
runas /trustlevel:0x20000 "powershell Spicetify upgrade"
pause

cls
echo Closing Spotify if running...
taskkill /IM spotify.exe /F >nul 2>&1
cls

:: @echo off
:: echo Downloading and executing config file restore script...
:: powershell -ExecutionPolicy Bypass -NoProfile -Command ^
:: "Start-Process powershell -ArgumentList \"-ExecutionPolicy Bypass -NoProfile -Command & {Invoke-Expression (New-Object Net.WebClient).DownloadString('https://raw.githubusercontent.com/SysAdminDoc/LibreWolf_DarkPortable/refs/heads/main/LibreSpotify/DownloadConfigs.ps1')}\" -Wait"
cls

:: @echo off
:: echo Run Spicetify restore backup to create folders
:: runas /trustlevel:0x20000 "powershell Spicetify restore backup"
:: pause

:: @echo off
:: echo Apply Spicetify settings
:: runas /trustlevel:0x20000 "powershell Spicetify apply"
pause
@echo off
color 0A

:: Displaying final message before launching Spotify
echo Before launching your new, amazing Spotify, I’ll leave you with a message.
timeout /t 5 >nul

cls
color 0B
echo "We are born from the stars..."
timeout /t 2 >nul
echo "Both literally and figuratively, we are star children."
timeout /t 2 >nul
echo.

color 0E
echo "The iron in your blood, the calcium in your teeth and bones..."
timeout /t 2 >nul
echo "The nitrogen in your DNA..."
timeout /t 2 >nul
echo "Exists only because massive stars forged these elements under immense pressure."
timeout /t 3 >nul
echo.

color 0C
echo "When these stars went supernova..."
timeout /t 2 >nul
echo "They scattered their cosmic essence across the universe..."
timeout /t 2 >nul
echo "Seeding the building blocks of life itself."
timeout /t 3 >nul
echo.

color 0F
echo "Every atom in you was once part of a dying star."
timeout /t 2 >nul
echo "So shine on, you magnificent superstars."
timeout /t 3 >nul
echo.

color 05
pause

@echo off
echo Launching Spotify
start "" "%APPDATA%\Spotify\Spotify.exe"

