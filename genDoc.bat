echo "execute apidoc -i src -o dest"
apidoc -i src -o dest
echo "execute done!"

"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" dest\index.html

echo "commit doc"
git add .
git commit -m "update doc"

echo "push doc to repository"
git push

echo "push doc finish"
pause