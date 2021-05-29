npm install -g firebase-tools
Step 1: Create new folder & login to firebase

mkdir fcf
cd fcf
firebase login
firebase init functions


It might asks your few questions, please answer as followed

– Choose your firebase project
– Language: JavaScript
– EsLint: No
– Npm install: Yes



Step 2: 

cd functions
npm install --save firebase-functions

cd ..
firebase deploy --only functions
