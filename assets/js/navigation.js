// Navigation loader for all pages
function loadNavigation() {
    const navHTML = `
        <div class="nav-menu">
            <a href="/">Home</a> |
            <a href="/publications/">Publications</a> |
            <a href="/services/">Services</a>
        </div>
    `;

    document.body.insertAdjacentHTML('afterbegin', navHTML);
}

document.addEventListener('DOMContentLoaded', loadNavigation);
