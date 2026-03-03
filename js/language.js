// Language Switcher
const languageMap = {
    'index.html': { kor: 'index-kor.html', eng: 'index.html' },
    'index-kor.html': { kor: 'index-kor.html', eng: 'index.html' },
    'about us.html': { kor: 'about-us-kor.html', eng: 'about us.html' },
    'about-us-kor.html': { kor: 'about-us-kor.html', eng: 'about us.html' },
    'Products.html': { kor: 'Products-kor.html', eng: 'Products.html' },
    'Products-kor.html': { kor: 'Products-kor.html', eng: 'Products.html' },
    'Gallery.html': { kor: 'Gallery-kor.html', eng: 'Gallery.html' },
    'Gallery-kor.html': { kor: 'Gallery-kor.html', eng: 'Gallery.html' },
    'Community.html': { kor: 'Community-kor.html', eng: 'Community.html' },
    'Community-kor.html': { kor: 'Community-kor.html', eng: 'Community.html' },
    'Customer Support.html': { kor: 'Customer-Support-kor.html', eng: 'Customer Support.html' },
    'Customer-Support-kor.html': { kor: 'Customer-Support-kor.html', eng: 'Customer Support.html' }
};

function getCurrentLanguage() {
    const currentPage = window.location.pathname.split('/').pop();
    return currentPage.includes('-kor.html') ? 'kor' : 'eng';
}

function switchLanguage(lang) {
    const currentPage = window.location.pathname.split('/').pop();
    const pageMap = languageMap[currentPage] || languageMap['index.html'];
    const targetPage = lang === 'kor' ? pageMap.kor : pageMap.eng;
    
    // Save language preference
    localStorage.setItem('preferredLanguage', lang);
    
    // Redirect to target page
    window.location.href = targetPage;
}

function initLanguageSwitcher() {
    const currentLang = getCurrentLanguage();
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(btn => {
        const btnLang = btn.getAttribute('data-lang');
        if (btnLang === currentLang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
        
        btn.addEventListener('click', () => {
            if (btnLang !== currentLang) {
                switchLanguage(btnLang);
            }
        });
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initLanguageSwitcher);

