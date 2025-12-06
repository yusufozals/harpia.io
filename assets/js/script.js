// --- Global Variables & Element Selectors ---
let domain = "."; // Used for cart link in older version, might not be needed now

const body = document.querySelector("body"),
      loader = document.querySelector(".loader"),
      header = document.querySelector(".header"),
    //   headerMain = document.querySelector(".header--main"), // Not used, commented out
      nav = document.querySelector("nav.menu"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      navOpen = document.querySelector(".open-nav"),
      navLogo = document.querySelector(".nav-logo"),
      footerLogo = document.querySelector(".footer-logo"),
      year = document.getElementById("year"),
      cartCounterElement = document.getElementById('cart-counter'); // Cart counter in header

// --- Sticky Header ---
// Add class to header when scrolling down
if (header) {
    window.onscroll = () => {
        if (window.scrollY > 20) {
            header.classList.add("f-nav");
        } else {
            header.classList.remove("f-nav");
        }
    };
}

// --- On Page Load ---
window.onload = () => {
    let isSubPage = false;
    // Determine if the current page is a subpage (not in the root directory)
    // Simple check: if path is not root '/' or 'index.html'
    if (window.location.pathname !== '/' && window.location.pathname !== '/index.html') {
        isSubPage = true;
        domain = ".."; // Keep if needed elsewhere
    } else {
        domain = ".";
    }

    // --- Asset Path Correction (General Images on Subpages) ---
    if (isSubPage) {
        // Select images EXCLUDING logos, as their paths are handled by checkBgMode
        let imgDir = document.querySelectorAll('img:not(.nav-logo):not(.footer-logo)');
        imgDir.forEach(item => {
            const currentSrc = item.getAttribute('src');
            // If src starts with './assets/', replace it with '../assets/'
            if (currentSrc && currentSrc.startsWith('./assets/')) {
                item.src = currentSrc.replace('./assets', '../assets');
            }
        });
    }

    // --- Hide Page Loader ---
    if (loader) {
        loader.classList.add("off");
        setTimeout(() => {
            // Ensure loader exists before trying to style it
            if(loader) {
                loader.style.display = 'none';
                loader.style.opacity = '0';
                loader.style.zIndex = '-1';
            }
        }, 700); // Match fade-out duration
    }

    // --- Set Initial Dark/Light Mode ---
    let modeOnload = localStorage.getItem("mode");
    checkBgMode(modeOnload, isSubPage); // Apply theme and correct logo path if needed

    // --- Handle Welcome Alert ---
    const welcome = document.querySelector(".welcome-alert"),
          welcomeCls = welcome ? welcome.querySelector(".welcome") : null; // Find close button inside welcome

    if (welcome && welcomeCls) {
        let welcomeOnload = localStorage.getItem("welcome");
        // Hide immediately if previously closed
        if (welcomeOnload === "d-none") {
            welcome.classList.add("d-none");
        } else {
            // Auto-hide after delay if not previously closed
            setTimeout(() => {
                 if (welcome) { // Check again in case element removed dynamically
                    welcome.classList.add("d-none");
                    localStorage.setItem("welcome", "d-none");
                 }
            }, 3000);
        }

        // Handle manual close click
        welcomeCls.addEventListener("click", () => {
            if (welcome) {
                setTimeout(() => { // Small delay for visual effect
                    welcome.classList.add("d-none");
                    localStorage.setItem("welcome", "d-none");
                }, 500);
            }
        });
    }

    // ==========================================
    // === SHOPPING CART LOGIC (Add to Cart) ===
    // ==========================================
    let cart = JSON.parse(localStorage.getItem('oraCart')) || [];

    // Function to update the cart counter in the header
    function updateCartCounter() {
        if (!cartCounterElement) return; // Do nothing if counter element doesn't exist
        let totalItems = 0;
        cart.forEach(item => {
            totalItems += item.quantity || 0; // Ensure quantity is a number
        });
        cartCounterElement.innerText = totalItems;
    }

    // Function to save the cart to localStorage
    function saveCart() {
        localStorage.setItem('oraCart', JSON.stringify(cart));
    }

    // Find all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

    // Add click listener to each button
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const clickedButton = event.currentTarget; // Use currentTarget to get the element the listener was attached to
            const productId = clickedButton.dataset.id;
            const productName = clickedButton.dataset.name;
            const productPrice = parseFloat(clickedButton.dataset.price);
            const productImgSrc = clickedButton.dataset.imgSrc; // Get image source

            // Check if product data is valid
            if (!productId || !productName || isNaN(productPrice)) {
                console.error("Product data missing or invalid:", clickedButton.dataset);
                alert("Could not add item to cart. Product data is missing.");
                return;
            }

            // Check if product is already in the cart
            let existingProduct = cart.find(item => item.id === productId);

            if (existingProduct) {
                // Increment quantity
                existingProduct.quantity = (existingProduct.quantity || 0) + 1;
                alert(`${existingProduct.name} (adet: ${existingProduct.quantity}) sepete eklendi.`);
            } else {
                // Add new product to cart
                const product = {
                    id: productId,
                    name: productName,
                    price: productPrice,
                    quantity: 1,
                    imgSrc: productImgSrc || '' // Include image source, default to empty string if missing
                };
                cart.push(product);
                alert(`${product.name} sepete eklendi!`);
            }

            saveCart(); // Save updated cart
            updateCartCounter(); // Update header counter
        });
    });

    // Initialize cart counter on page load
    updateCartCounter();
    // ==========================================
    // === END SHOPPING CART LOGIC ===
    // ==========================================

}; // --- End of window.onload ---


// --- Function to Check/Apply Dark/Light Mode ---
// Applies 'dark' class to body and sets correct logo paths
const checkBgMode = (mode, fixPath = false) => {
    // Determine the correct path prefix based on whether it's a subpage
    let logoPathPrefix = fixPath ? '../' : './';

    // Ensure body element exists
    if (!body) return;

    // Get current logo elements (might not exist on all pages)
    const currentNavLogo = document.querySelector(".nav-logo");
    const currentFooterLogo = document.querySelector(".footer-logo");

    if (mode === 'dark-mode') {
        body.classList.add("dark");
        // Set dark logos using the correct path prefix
        if (currentNavLogo) currentNavLogo.src = `assets/img/dark-logo.png`;
        if (currentFooterLogo) currentFooterLogo.src = `assets/img/dark-logo.png`;
    } else { // Default to light mode
        body.classList.remove("dark");
        // Set light logos using the correct path prefix
        if (currentNavLogo) currentNavLogo.src = `assets/img/light-logo.png`;
        if (currentFooterLogo) currentFooterLogo.src = `assets/img/light-logo.png`;
    }
};

// --- Dark/Light Mode Toggle Button Event Listener ---
if (modeToggle) {
    modeToggle.addEventListener("click", () => {
        if (!body) return; // Exit if body element not found

        body.classList.toggle("dark");
        modeToggle.classList.toggle("active");

        // Determine current mode and save to localStorage
        let currentMode = body.classList.contains("dark") ? "dark-mode" : "light-mode";
        localStorage.setItem("mode", currentMode);

        // Re-check subpage status and update logos immediately
        let isSubPageNow = (window.location.pathname !== '/' && window.location.pathname !== '/index.html');
        checkBgMode(currentMode, isSubPageNow);
    });
}

// --- SearchBox Toggle ---
if (searchToggle) {
    searchToggle.addEventListener("click", () => {
        searchToggle.classList.toggle("active");
    });
}

// --- Mobile Navigation Toggle ---
if (navOpen && nav) {
    // Assuming navOpen is the checkbox input #menu__toggle
    const menuToggleCheckbox = document.getElementById('menu__toggle');
    if (menuToggleCheckbox) {
        menuToggleCheckbox.addEventListener('change', () => {
             // Toggle nav visibility based on checkbox state
            if (menuToggleCheckbox.checked) {
                nav.classList.add("active");
            } else {
                 nav.classList.remove("active");
            }
            // Optionally, prevent body scroll when menu is active
            // body.classList.toggle("no-scroll", menuToggleCheckbox.checked);
        });
    }
}


// --- Drop Down Menu Logic ---
const dropDown = document.querySelectorAll(".js-sub_menu");
const showDn = document.querySelectorAll(".sub-menu");
const iconDn = document.querySelectorAll(".uil-angle-down");

function handleDropdownClick(event) {
    event.preventDefault(); // ← BU ÇOK ÖNEMLİ! Link davranışını engelle
    
    const clickedElement = event.currentTarget; // The element the listener is attached to (the <a> tag)
    const parentMenuItem = clickedElement.closest('.menu-item-child');
    if (!parentMenuItem) return;

    const currentSubMenu = parentMenuItem.querySelector(".sub-menu");
    const currentIcon = clickedElement.querySelector(".uil-angle-down"); // Icon is inside the <a>
    const isActive = currentSubMenu && currentSubMenu.classList.contains("active");

    // Close all other sub-menus first
    showDn.forEach(elem => {
        if (elem !== currentSubMenu) {
            elem.classList.remove("active");
        }
    });
    
    // Reset all icons except the current one (if applicable)
    iconDn.forEach(icon => {
         const parentLink = icon.closest('.js-sub_menu');
         if (parentLink !== clickedElement) {
             icon.classList.remove("opened");
         }
    });

    // Toggle the current one
    if (currentSubMenu) currentSubMenu.classList.toggle("active", !isActive);
    if (currentIcon) currentIcon.classList.toggle("opened", !isActive);
}

// Attach listener to each dropdown trigger link
dropDown.forEach(elem => elem.addEventListener("click", handleDropdownClick));
// --- Back to Top Button & Scroll Progress Bar ---
const showOnPx = 100; // Show button after scrolling 100px
const backToTopButton = document.querySelector(".back-to-top");
const pageProgressBar = document.querySelector(".progress");

// Function to get the scrollable element
const scrollContainer = () => document.documentElement || document.body;

// Function to smoothly scroll to top
const goToTop = () => {
    // Use scrollIntoView on a top element like body for simplicity
    document.body.scrollIntoView({ behavior: "smooth" });
};

// Check if both elements exist before adding scroll listener
if (backToTopButton && pageProgressBar && header) { // Added header check for progress bar logic
    document.addEventListener("scroll", () => {
        const scrollTop = scrollContainer().scrollTop;
        const scrollHeight = scrollContainer().scrollHeight;
        const clientHeight = scrollContainer().clientHeight;

        // Prevent division by zero if scrollHeight equals clientHeight
        if (scrollHeight <= clientHeight) {
            pageProgressBar.style.width = "0%";
        } else {
            const scrolledPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
            pageProgressBar.style.width = `${scrolledPercentage}%`;
        }


        // Show/hide back-to-top button
        if (scrollTop > showOnPx) {
            backToTopButton.classList.remove("hidden");
        } else {
            backToTopButton.classList.add("hidden");
        }
    });

    // Add click listener to the button
    backToTopButton.addEventListener("click", goToTop);
}


// --- Cookie Consent Logic ---
const cookieWrb = document.querySelector(".cookie");
if (cookieWrb) {
    const btnAction = cookieWrb.querySelector(".btn-actions button");

    // Only run cookie logic if on a web server (not local file://) and button exists
    if (window.location.protocol.startsWith("http") && btnAction) {
        // Function to hide the cookie bar
        const hideCookieBar = () => {
            if(cookieWrb) { // Check if element still exists
                 setTimeout(() => {
                    cookieWrb.classList.add("hide");
                 }, 500); // Delay for visual effect
            }
        };

        // Event listener for the accept button
        btnAction.onclick = () => {
            // Set cookie for 30 days, accessible site-wide
            document.cookie = "OraKsConsent=accepted; max-age=" + 60 * 60 * 24 * 30 + "; path=/; SameSite=Lax"; // Added SameSite attribute
            if (document.cookie.includes("OraKsConsent=accepted")) {
                hideCookieBar();
            } else {
                console.error("Cookie could not be set! Check browser settings.");
            }
        };

        // Check if cookie already exists when the page loads
        let checkforCookie = document.cookie.includes("OraKsConsent=accepted");
        if (checkforCookie) {
            cookieWrb.classList.add("hide"); // Hide immediately if already accepted
        } else {
            cookieWrb.classList.remove("hide"); // Show if not accepted
        }

    } else {
        // Hide cookie bar if on local file system or button not found
        cookieWrb.classList.add("hide");
    }
}


// --- Update Footer Year ---
if (year) {
    try { // Add try-catch in case of issues with Date object
        year.innerText = new Date().getFullYear();
    } catch (e) {
        console.error("Could not set footer year:", e);
        if(year.parentNode.textContent.includes('.')) { // Simple check if placeholder exists
            year.parentNode.textContent = year.parentNode.textContent.replace('. My Web Name.', ` ${new Date().getFullYear()}. My Web Name.`); // Fallback
        }
    }
}


// Footer'ı yükle
fetch('footer.html') // Eğer footer.html ile bu script aynı klasördeyse
    .then(response => {
        if (!response.ok) {
            throw new Error('Footer yüklenemedi');
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
    })
    .catch(error => console.error('Hata:', error));

