@echo off
echo "execute apidoc -i src -o dest"

call  apidoc -i src -o dest 

echo "execute done!"

call  "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" dest\index.html 

echo "commit doc"
call  git add . 
call  git commit -m "update doc"

echo "push doc to repository"
call  git push

echo "push doc finish"
pause