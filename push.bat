@echo off
echo ==========================================
echo      MAX OMEGA PRIME - AUTO GIT SYSTEM
echo ==========================================
echo.

:: 1. Show Status
echo [1/4] Checking Status...
git status
echo.

:: 2. Add All Files
echo [2/4] Adding Files...
git add .
echo.

:: 3. Ask for Commit Message
set /p commitMsg="Enter Commit Message: "

:: 4. Commit and Push
echo [3/4] Committing...
git commit -m "%commitMsg%"

echo [4/4] Pushing to GitHub...
git push

echo.
echo ==========================================
echo      SUCCESS! CODE PUSHED. SO JAO.
echo ==========================================
pause