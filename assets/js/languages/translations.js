import { en } from "./en.js"
import { pt_br } from "./pt-br.js"
export const translations={
    en:en,
    pt_br:pt_br
}



// Function to set translations
function translatePage(languageObject) {
    const elements = document.querySelectorAll('[data-translate]');

    elements.forEach(element => {
        const translateKey = element.getAttribute('data-translate');
        const translation = getNestedTranslation(languageObject, translateKey);

        if (translation) {
            element.textContent = translation;
        }
    });
}

// Helper function to handle nested keys (e.g., "nav.home")
function getNestedTranslation(obj, key) {
    return key.split('.').reduce((o, i) => (o ? o[i] : null), obj);
}