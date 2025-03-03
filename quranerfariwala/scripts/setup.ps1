# Navigate to the project directory
cd C:\Users\Public\mjahmad\my-life\quranerfariwala

# Create necessary directories
mkdir src
mkdir src\components
mkdir scripts
mkdir .github
mkdir .github\workflows
mkdir src\components\groundfloor
mkdir src\components\buildingstructure
mkdir src\components\firsttothirdfloors
mkdir src\components\fourthtosixthfloors
mkdir src\components\seventhtoninthfloors
mkdir src\components\tenthtotwelfthfloors
mkdir src\components\thirteenthtofourteenthfloors
mkdir src\components\fifteenthfloor
mkdir src\components\riskmanagement
mkdir src\components\faq\quranerfariwala
mkdir src\components\fileandfolder
mkdir src\components\faq\additional
mkdir src\components\faq\corporate
mkdir src\components\faq\donate
mkdir src\components\faq\membership

# Initialize a new git repository
git init

# Create initial files
New-Item -Path . -Name "README.md" -ItemType "file" -Value "# Quraner Fariwala Project"
New-Item -Path . -Name "LICENSE" -ItemType "file" -Value "MIT License"
New-Item -Path . -Name "tsconfig.json" -ItemType "file" -Value '{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true
  }
}'
New-Item -Path . -Name "package.json" -ItemType "file" -Value '{
  "name": "quranerfariwala",
  "version": "1.0.0",
  "main": "dist/main.js",
  "scripts": {
    "build": "tsc",
    "start": "node dist/main.js"
  },
  "dependencies": {},
  "devDependencies": {
    "typescript": "^4.0.0"
  }
}'
New-Item -Path .\src -Name "main.ts" -ItemType "file" -Value "// Main TypeScript file"
New-Item -Path .\src -Name "app.ts" -ItemType "file" -Value "// App entry point"
New-Item -Path .\src\components\buildingstructure -Name "page.ts" -ItemType "file" -Value "// Building Structure Layout"
New-Item -Path .\src\components\groundfloor -Name "page.ts" -ItemType "file" -Value "// Ground Floor Layout"
New-Item -Path .\src\components\firsttothirdfloors -Name "page.ts" -ItemType "file" -Value "// 1st to 3rd Floors Layout"
New-Item -Path .\src\components\fourthtosixthfloors -Name "page.ts" -ItemType "file" -Value "// 4th to 6th Floors Layout"
New-Item -Path .\src\components\seventhtoninthfloors -Name "page.ts" -ItemType "file" -Value "// 7th to 9th Floors Layout"
New-Item -Path .\src\components\tenthtotwelfthfloors -Name "page.ts" -ItemType "file" -Value "// 10th to 12th Floors Layout"
New-Item -Path .\src\components\thirteenthtofourteenthfloors -Name "page.ts" -ItemType "file" -Value "// 13th to 14th Floors Layout"
New-Item -Path .\src\components\fifteenthfloor -Name "page.ts" -ItemType "file" -Value "// 15th Floor Layout"
New-Item -Path .\src\components\riskmanagement -Name "paget.ts" -ItemType "file" -Value "// Risk Management Page for Quraner Fariwala"
New-Item -Path .\src\components\faq -Name "page.ts" -ItemType "file" -Value "// FAQ Layout"
New-Item -Path .\src\components\faq\additional -Name "page.ts" -ItemType "file" -Value "// FAQ Layout"
New-Item -Path .\src\components\faq\corporate -Name "page.ts" -ItemType "file" -Value "// FAQ Layout"
New-Item -Path .\src\components\faq\donate -Name "page.ts" -ItemType "file" -Value "// FAQ Layout"
New-Item -Path .\src\components\faq\membership -Name "page.ts" -ItemType "file" -Value "// FAQ Layout"

# Initialize npm and install TypeScript
npm init -y
npm install typescript --save-dev
