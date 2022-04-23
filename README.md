#Øving 2: Tester med Jest

#Instruksjoner
1. Opprett et React prosjekt med Parcel som vist på forelesningen. Legg til react-router-dom
2. Bruk React Router til å la brukeren gå til / for å kunne klikke på "ny quiz", /question for å vise spørsmål og "/answer/*" for å vise svaret
3. Om vis et tilfeldig spørsmål når brukeren ser på en ny quiz. Bruk gjerne randomQuestion i questions.js Last ned questions.js
4. Vi svaralternativene på spørsmålet. Om brukeren velger riktig, send brukeren til /answer/correct. Om de velger feil send dem til /answer/wrong. Bruk isCorrectAnswers i questions.js Last ned questions.js
5. Bruk en nested <Routes> for å vise "riktig" eller feil for "/answer/correct" og "/answer/wrong"
6. Legg inn en useState for questionsAnswered og en useState for correctAnswers på toppnivå. Send inn setterne til "/question" og getterne til "/" slik at du kan oppdatere og vise antall korrekte spørsmål
7. Legg til jest, babel-jest, @babel/preset-env og @babel/preset-react for å kunne skrive Jest-tester med React
8. Skriv en test med expect(element).toMatchSnapshot() for å sjekke at forsiden vises riktig.
   1. Bruk document.createElement og ReactDOM.render for å vise en React komponent
   2. Bruk "jest": { "testEnvironment": "jsdom" } for å kunne benytte `document` i tester
   3. Bruk <MemoryRouter> for å kunne vise <Link> i en test
9. Skriv en test med Simulate.click for å sjekke håndtering av brukerens svar
   1. Flytt randomQuestion til en React.createContext for å kunne styre spørsmålet fra testen
   2. Bruk jest.fn for å sende inn mock-funksjoner til en React komponent
   3. Bruk expect(<mock>).toBeCalled() for å sjekke svaret
10. Fiks slik at Babel som brukes i testene ikke skaper kluss for Parcel:
    1. https://parceljs.org/languages/javascript/#usage-with-other-tools

_Fasit: https://github.com/kristiania-pg6301-2022/pg6301-react-and-express-lectures/commits/exercise/answer/02_