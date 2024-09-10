Individuell inlämninguppgift, FED23

Din uppgift är att bygga en webbshop, som ska sälja sommarleksaker. Appen ska publiceras online. Uppgiften är individuell.

Icke-funktionella krav och user stories:

Du ska använda teknikerna: React, React Router (med HashRouter), state manager (Zustand, Context eller Redux) och Firestore. 

Du får använda styled components, MUI och <Suspense>. (Fråga om du vill använda något annat som inte är uppräknat.)

Du ska visa upp din app och din kod för läraren minst en gång under sista kursveckan. Var beredd på att förklara vad koden gör, samt att berätta om testningen.


Designskiss i Figma. (Ska testas i testgrupp - se nedan)
Webbshoppen ska ha stöd för två sorters användare: kunder och administratörer.

För G: ingen inloggning nödvändig.

För VG: man måste logga in för att kunna använda admin-funktionalitet.

För kunder ska appen vara responsiv: fungera både på breda skärmar och ner till 320px.

Vyer som bara administratörer använder behöver bara byggas för en större layout.

Appen ska se snygg och professionell ut.

Webbshoppen ska ha minst 20 produkter. Det ska vara realistisk data. (Tips: ni kan hjälpas åt att ta fram en lista med bildlänkar.)

Koden ska testas kontinuerligt under utvecklingen, i din testgrupp. Du ska lämna in en individuell testrapport. (se nedan)

Alla formulär ska valideras, på det sätt vi gått igenom i skolan. (Länk till presentation)

(Visa inget förrän användaren fått en chans att skriva i fälten. Var informativ och användarvänlig.)

Appen ska vara en statisk frontend SPA. Man får inte ladda om webbsidan. Funktionerna alert, input och location.reload är strängt förbjudna. Undvik vanlig DOM-manipulation t.ex. document.querySelector och använd React, JSX och state i stället.

Appen ska publiceras med GitHub Pages.

Som en besökare vill jag kunna se alla produkter i ett rutnät, för att få en överblick på ett ordnat sätt. (Använd 1 kolumn när skärmen är smal.)

Som en besökare vill jag kunna lägga till en produkt i en kundvagn, så att jag kan köpa flera saker på samma gång.

För VG:Som en besökare vill jag kunna söka efter produkter med namn eller kategori, för att snabbt kunna hitta produkter jag är intresserad av. (Sökning ska vara "smart", dvs. den fungerar på delar av namn och oavsett case.)

För VG: Som en besökare vill jag kunna sortera produkter efter namn och pris, stigande och fallande; så jag kan hitta den billigaste.

För VG: Som en besökare vill jag kunna ändra antalet av produkterna jag har i kundvagnen, så att jag kan ändra mig.

Som en besökare vill jag kunna se hur mycket alla produkter i min kundvagn kostar, så att jag vet vad det kommer kosta mig.

Som en administratör vill jag kunna lägga till, ta bort och ändra produkter; så att webbshopen kan ändra sitt sortiment och uppdatera priser.

För VG: Som en administratör vill jag att ändringar ska vara skyddade av inloggning, så att inte obehöriga ska kunna komma in.