import { CATEGORIES, MENU_ITEMS } from './menu-data.js';

// Application State
const state = {
  cart: {}, // { [itemId]: { item, qty } }
  orderType: 'dine-in', // 'dine-in' | 'takeaway' | 'delivery'
  specialInstructions: '',
  activeCategory: 'All',
  dietFilter: 'all', // 'all' | 'veg' | 'non-veg' | 'special'
  searchQuery: '',
  reviews: [
    {
      id: 'rev-1',
      name: 'Aminu B.',
      orderId: 'PDK-9421',
      rating: 5,
      date: '2 days ago',
      text: 'The Mutton Biryani is unmatched anywhere in Kaduna. Flavourful, tender meat with authentic spices. Garlic naan was hot and fresh from the tandoor!'
    },
    {
      id: 'rev-2',
      name: 'Sunita Patel',
      orderId: 'PDK-8910',
      rating: 5,
      date: '1 week ago',
      text: 'True desi taste in Galaxy Mall! Butter chicken is creamy with the right hint of fenugreek, and the Shahi Tukda brought back memories of Old Delhi.'
    },
    {
      id: 'rev-3',
      name: 'Chinedu O.',
      orderId: 'PDK-7742',
      rating: 5,
      date: '2 weeks ago',
      text: 'Ordered the Jollof Rice Combo and Chicken 65. The fusion flavours are top notch. Very quick takeaway packaging too.'
    }
  ],
  userPoints: 0
};

// Formatting helpers
function formatNaira(amount) {
  return '₦' + Math.round(amount).toLocaleString('en-NG');
}

// Toast notification helper
function showToast(message) {
  let toast = document.getElementById('toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

// -------------------------------------------------------------
// Cart Logic & Calculations
// -------------------------------------------------------------
function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem('pdk_cart');
    if (saved) {
      state.cart = JSON.parse(saved);
    }
    const savedPoints = localStorage.getItem('pdk_reward_points');
    if (savedPoints) {
      state.userPoints = parseInt(savedPoints, 10) || 0;
    }
    const savedReviews = localStorage.getItem('pdk_reviews');
    if (savedReviews) {
      state.reviews = JSON.parse(savedReviews);
    }
  } catch (e) {
    console.warn('Storage read error', e);
  }
}

function saveCartToStorage() {
  try {
    localStorage.setItem('pdk_cart', JSON.stringify(state.cart));
  } catch (e) {
    console.warn('Storage write error', e);
  }
}

function addToCart(itemId, qty = 1) {
  const item = MENU_ITEMS.find(i => i.id === itemId);
  if (!item) return;

  if (state.cart[itemId]) {
    state.cart[itemId].qty += qty;
  } else {
    state.cart[itemId] = { item, qty };
  }

  saveCartToStorage();
  updateCartUI();
  updateCardQtyControls(itemId);
  showToast(`Added ${item.name} to order`);
}

// Expose globally for quick-actions
window.addToCart = addToCart;
window.addToCartFromSpotlight = (id) => addToCart(id, 1);

function updateItemQty(itemId, newQty) {
  if (newQty <= 0) {
    delete state.cart[itemId];
  } else if (state.cart[itemId]) {
    state.cart[itemId].qty = newQty;
  }
  saveCartToStorage();
  updateCartUI();
  updateCardQtyControls(itemId);
}

function calculateBill() {
  let subtotal = 0;
  let totalItemsCount = 0;

  Object.values(state.cart).forEach(({ item, qty }) => {
    subtotal += item.price * qty;
    totalItemsCount += qty;
  });

  // 1) If Dine-in, 10% service charge applies
  let serviceCharge = 0;
  if (state.orderType === 'dine-in' && subtotal > 0) {
    serviceCharge = subtotal * 0.10;
  }

  // 7.5% VAT applicable
  const taxableAmount = subtotal + serviceCharge;
  const vatAmount = taxableAmount > 0 ? taxableAmount * 0.075 : 0;

  const totalEstimate = subtotal + serviceCharge + vatAmount;

  return {
    subtotal,
    serviceCharge,
    vatAmount,
    totalEstimate,
    totalItemsCount
  };
}

function updateCartUI() {
  const { subtotal, serviceCharge, vatAmount, totalEstimate, totalItemsCount } = calculateBill();

  // Update header cart indicators
  const counterPills = document.querySelectorAll('.cart-counter-pill');
  counterPills.forEach(pill => {
    pill.textContent = totalItemsCount;
    pill.style.display = totalItemsCount > 0 ? 'inline-block' : 'none';
  });

  const cartTotalLabels = document.querySelectorAll('.cart-total-amount');
  cartTotalLabels.forEach(el => {
    el.textContent = formatNaira(totalEstimate);
  });

  // Floating pill
  const floatingPill = document.getElementById('floating-cart-pill');
  if (floatingPill) {
    if (totalItemsCount > 0) {
      floatingPill.style.display = 'flex';
      floatingPill.innerHTML = `
        <span>🛒 View Order (${totalItemsCount})</span>
        <span>·</span>
        <span class="tabular-nums">${formatNaira(totalEstimate)}</span>
      `;
    } else {
      floatingPill.style.display = 'none';
    }
  }

  // Render items inside drawer
  const itemsContainer = document.getElementById('cart-items-scroll');
  const emptyView = document.getElementById('cart-empty-view');
  const footerEl = document.getElementById('cart-drawer-footer');

  if (!itemsContainer) return;

  const entries = Object.entries(state.cart);

  if (entries.length === 0) {
    if (emptyView) emptyView.style.display = 'flex';
    if (footerEl) footerEl.style.display = 'none';
    itemsContainer.innerHTML = '';
    return;
  }

  if (emptyView) emptyView.style.display = 'none';
  if (footerEl) footerEl.style.display = 'block';

  itemsContainer.innerHTML = entries.map(([id, { item, qty }]) => {
    return `
      <div class="cart-item-row" data-id="${id}">
        <div class="cart-item-info">
          <div class="cart-item-title">${item.name}</div>
          <div class="cart-item-price-unit tabular-nums">${formatNaira(item.price)} × ${qty} = ${formatNaira(item.price * qty)}</div>
        </div>
        <div class="cart-item-actions">
          <div class="cart-stepper">
            <button class="btn-step btn-step-minus" data-id="${id}" aria-label="Decrease quantity">−</button>
            <span class="step-qty tabular-nums">${qty}</span>
            <button class="btn-step btn-step-plus" data-id="${id}" aria-label="Increase quantity">+</button>
          </div>
          <button class="btn-remove-item" data-id="${id}" style="color:#ef4444; font-size:1.1rem; padding:0.2rem;" title="Remove">×</button>
        </div>
      </div>
    `;
  }).join('');

  // Update Bill rows
  const subtotalEl = document.getElementById('bill-subtotal');
  const serviceRow = document.getElementById('bill-service-row');
  const serviceChargeEl = document.getElementById('bill-service-charge');
  const vatEl = document.getElementById('bill-vat');
  const totalEl = document.getElementById('bill-total');
  const modeNote = document.getElementById('bill-mode-note');

  if (subtotalEl) subtotalEl.textContent = formatNaira(subtotal);

  if (serviceRow) {
    if (state.orderType === 'dine-in') {
      serviceRow.style.display = 'flex';
      if (serviceChargeEl) serviceChargeEl.textContent = formatNaira(serviceCharge);
    } else {
      serviceRow.style.display = 'none';
    }
  }

  if (vatEl) vatEl.textContent = formatNaira(vatAmount);
  if (totalEl) totalEl.textContent = formatNaira(totalEstimate);

  if (modeNote) {
    if (state.orderType === 'delivery') {
      modeNote.textContent = 'Delivery fees apply depending on area in Kaduna. State your address below.';
    } else if (state.orderType === 'takeaway') {
      modeNote.textContent = 'Takeaway packaging charges applicable.';
    } else {
      modeNote.textContent = '10% Dine-In service charge applied to order.';
    }
  }

  // Bind Stepper events in drawer
  itemsContainer.querySelectorAll('.btn-step-minus').forEach(btn => {
    btn.onclick = () => {
      const id = btn.dataset.id;
      if (state.cart[id]) updateItemQty(id, state.cart[id].qty - 1);
    };
  });

  itemsContainer.querySelectorAll('.btn-step-plus').forEach(btn => {
    btn.onclick = () => {
      const id = btn.dataset.id;
      if (state.cart[id]) updateItemQty(id, state.cart[id].qty + 1);
    };
  });

  itemsContainer.querySelectorAll('.btn-remove-item').forEach(btn => {
    btn.onclick = () => {
      const id = btn.dataset.id;
      updateItemQty(id, 0);
    };
  });
}

function updateCardQtyControls(itemId) {
  const card = document.querySelector(`.menu-card-item[data-id="${itemId}"]`);
  if (!card) return;

  const actionContainer = card.querySelector('.menu-card-action');
  if (!actionContainer) return;

  const currentCartEntry = state.cart[itemId];

  if (currentCartEntry && currentCartEntry.qty > 0) {
    actionContainer.innerHTML = `
      <div class="card-stepper-control">
        <button class="btn-stepper-mini btn-qty-card-minus" data-id="${itemId}" aria-label="Decrease quantity">−</button>
        <span class="card-stepper-count tabular-nums">${currentCartEntry.qty} in Order</span>
        <button class="btn-stepper-mini btn-qty-card-plus" data-id="${itemId}" aria-label="Increase quantity">+</button>
      </div>
    `;
    actionContainer.querySelector('.btn-qty-card-minus').onclick = (e) => {
      e.stopPropagation();
      updateItemQty(itemId, currentCartEntry.qty - 1);
    };
    actionContainer.querySelector('.btn-qty-card-plus').onclick = (e) => {
      e.stopPropagation();
      updateItemQty(itemId, currentCartEntry.qty + 1);
    };
  } else {
    actionContainer.innerHTML = `
      <button class="btn-card-add" data-id="${itemId}">
        <span>+ Add to Order</span>
      </button>
    `;
    actionContainer.querySelector('.btn-card-add').onclick = (e) => {
      e.stopPropagation();
      addToCart(itemId, 1);
    };
  }
}

// -------------------------------------------------------------
// WhatsApp Order Generator
// -------------------------------------------------------------
function generateWhatsAppMessage() {
  const { subtotal, serviceCharge, vatAmount, totalEstimate } = calculateBill();
  const entries = Object.values(state.cart);

  if (entries.length === 0) {
    showToast('Your order is empty. Please add items to proceed.');
    return null;
  }

  const orderNum = 'PDK-' + Math.floor(1000 + Math.random() * 9000);
  const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  let text = `*New Order - Priya's Desi Kitchen*\n`;
  text += `Order Reference: *#${orderNum}*\n`;
  text += `Time: ${now}\n`;
  text += `Order Type: *${state.orderType.toUpperCase()}*\n`;
  text += `--------------------------------\n`;

  entries.forEach(({ item, qty }) => {
    text += `• ${qty}x ${item.name} (${formatNaira(item.price * qty)})\n`;
  });

  text += `--------------------------------\n`;
  text += `Subtotal: ${formatNaira(subtotal)}\n`;
  if (state.orderType === 'dine-in') {
    text += `10% Dine-In Service Charge: ${formatNaira(serviceCharge)}\n`;
  }
  text += `7.5% VAT: ${formatNaira(vatAmount)}\n`;
  text += `*Estimated Total: ${formatNaira(totalEstimate)}*\n\n`;

  if (state.specialInstructions && state.specialInstructions.trim()) {
    text += `*Delivery Address / Instructions:*\n${state.specialInstructions.trim()}\n\n`;
  } else if (state.orderType === 'delivery') {
    text += `*Note:* Delivery address to be confirmed.\n\n`;
  }

  text += `_Note: Final bill will be confirmed and sent by the accountant. Payment will confirm the order._`;

  return { orderNum, text };
}

function sendOrderToWhatsApp() {
  const result = generateWhatsAppMessage();
  if (!result) return;

  const phone = '2348159331121';
  const encoded = encodeURIComponent(result.text);
  const url = `https://wa.me/${phone}?text=${encoded}`;
  window.open(url, '_blank');
}

function copyBillSummary() {
  const result = generateWhatsAppMessage();
  if (!result) return;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(result.text).then(() => {
      showToast('Order summary copied to clipboard!');
    }).catch(() => {
      showToast('Order summary ready!');
    });
  } else {
    showToast('Order ready for WhatsApp');
  }
}

// -------------------------------------------------------------
// Menu Rendering & Filtering
// -------------------------------------------------------------
function filterMenuItems() {
  const query = state.searchQuery.toLowerCase().trim();

  return MENU_ITEMS.filter(item => {
    // Category match
    if (state.activeCategory !== 'All' && item.category !== state.activeCategory) {
      return false;
    }

    // Dietary filter
    if (state.dietFilter === 'veg' && !item.isVeg) return false;
    if (state.dietFilter === 'non-veg' && item.isVeg) return false;
    if (state.dietFilter === 'special' && !item.isChefSpecial) return false;

    // Search query match
    if (query) {
      const nameMatch = item.name.toLowerCase().includes(query);
      const descMatch = (item.description || '').toLowerCase().includes(query);
      const catMatch = item.category.toLowerCase().includes(query);
      if (!nameMatch && !descMatch && !catMatch) return false;
    }

    return true;
  });
}

function renderMenuGrid() {
  const container = document.getElementById('menu-grid');
  const countEl = document.getElementById('dish-counter-text');
  if (!container) return;

  const filtered = filterMenuItems();

  if (countEl) {
    countEl.textContent = `Showing ${filtered.length} of ${MENU_ITEMS.length} dishes`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-menu-state wow fadeInUp">
        <div class="empty-icon">🍲</div>
        <h3 class="empty-title">No dishes match your search</h3>
        <p class="empty-desc">Try clearing your filters or search for another delicious authentic delicacy like Biryani, Naan, or Tikka.</p>
        <button id="btn-reset-filters" class="btn-secondary" style="margin: 0 auto;">Reset All Filters</button>
      </div>
    `;
    const resetBtn = document.getElementById('btn-reset-filters');
    if (resetBtn) {
      resetBtn.onclick = () => {
        state.activeCategory = 'All';
        state.dietFilter = 'all';
        state.searchQuery = '';
        const searchInput = document.getElementById('menu-search-input');
        if (searchInput) searchInput.value = '';
        updateCategoryButtonsUI();
        updateDietButtonsUI();
        renderMenuGrid();
      };
    }
    return;
  }

  container.innerHTML = filtered.map((item, index) => {
    const isVeg = item.isVeg;
    const currentQty = state.cart[item.id] ? state.cart[item.id].qty : 0;
    const delay = ((index % 6) * 0.08).toFixed(2);

    return `
      <article class="menu-card-item wow fadeInUp" data-id="${item.id}" data-wow-delay="${delay}s" data-wow-duration="0.65s">
        <!-- Picture First (User requirement) -->
        <div class="menu-card-media">
          <img 
            src="${item.image || '/src/assets/images/hero_biryani_handi_1793523316183.jpg'}" 
            alt="${item.name}" 
            class="menu-card-img" 
            loading="lazy" 
            referrerPolicy="no-referrer"
          />
          <span class="menu-card-veg-indicator">
            <span style="display:inline-block; width:6px; height:6px; border-radius:50%; background-color:${isVeg ? '#10b981' : '#ef4444'};"></span>
            <span style="color:${isVeg ? '#34d399' : '#f87171'}">${isVeg ? 'Veg' : 'Non-Veg'}</span>
          </span>
        </div>

        <!-- Content: Category, Title, Price, Description -->
        <div class="menu-card-body">
          <div class="menu-card-category-kicker">${item.category}</div>
          <div class="menu-card-headline-row">
            <h3 class="menu-card-title">${item.name}</h3>
            <span class="menu-card-price tabular-nums">${formatNaira(item.price)}</span>
          </div>

          <p class="menu-card-description">${item.description || 'Traditional culinary preparation with hand-ground spices and fresh ingredients.'}</p>

          <div class="menu-card-action">
            ${currentQty > 0 ? `
              <div class="card-stepper-control">
                <button class="btn-stepper-mini btn-qty-card-minus" data-id="${item.id}" aria-label="Decrease quantity">−</button>
                <span class="card-stepper-count tabular-nums">${currentQty} in Order</span>
                <button class="btn-stepper-mini btn-qty-card-plus" data-id="${item.id}" aria-label="Increase quantity">+</button>
              </div>
            ` : `
              <button class="btn-card-add" data-id="${item.id}">
                <span>+ Add to Order</span>
              </button>
            `}
          </div>
        </div>
      </article>
    `;
  }).join('');

  // Re-bind click events on cards
  container.querySelectorAll('.btn-card-add').forEach(btn => {
    btn.onclick = () => addToCart(btn.dataset.id, 1);
  });

  container.querySelectorAll('.btn-qty-card-minus').forEach(btn => {
    btn.onclick = () => {
      const id = btn.dataset.id;
      if (state.cart[id]) updateItemQty(id, state.cart[id].qty - 1);
    };
  });

  container.querySelectorAll('.btn-qty-card-plus').forEach(btn => {
    btn.onclick = () => {
      const id = btn.dataset.id;
      if (state.cart[id]) updateItemQty(id, state.cart[id].qty + 1);
    };
  });

  // Re-trigger WOW animation for newly inserted cards
  triggerWowElements(container);
}

function updateCategoryButtonsUI() {
  document.querySelectorAll('.btn-category-tab').forEach(btn => {
    if (btn.dataset.category === state.activeCategory) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

function updateDietButtonsUI() {
  document.querySelectorAll('.btn-diet-tab').forEach(btn => {
    if (btn.dataset.diet === state.dietFilter) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

function renderCategoryScroller() {
  const scroller = document.getElementById('category-scroller');
  if (!scroller) return;

  scroller.innerHTML = CATEGORIES.map(cat => {
    return `
      <button class="btn-category-tab ${cat === state.activeCategory ? 'active' : ''}" data-category="${cat}">
        ${cat}
      </button>
    `;
  }).join('');

  scroller.querySelectorAll('.btn-category-tab').forEach(btn => {
    btn.onclick = () => {
      state.activeCategory = btn.dataset.category;
      updateCategoryButtonsUI();
      renderMenuGrid();
      btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    };
  });
}

// -------------------------------------------------------------
// Reviews & 200 Reward Points
// -------------------------------------------------------------
function renderReviews() {
  const container = document.getElementById('reviews-grid');
  const userPointsBadge = document.getElementById('user-points-badge');

  if (userPointsBadge) {
    userPointsBadge.textContent = `${state.userPoints} pts`;
  }

  if (!container) return;

  container.innerHTML = state.reviews.map(rev => {
    const starString = '★'.repeat(rev.rating) + '☆'.repeat(5 - rev.rating);
    return `
      <div class="review-card wow fadeInUp">
        <div>
          <div class="review-stars">${starString}</div>
          <p class="review-body">"${rev.text}"</p>
        </div>
        <div class="review-author-meta">
          <span class="review-author-name">${rev.name}</span>
          <span class="review-order-id">Order ${rev.orderId} · ${rev.date}</span>
        </div>
      </div>
    `;
  }).join('');
}

function setupReviewModal() {
  const modal = document.getElementById('review-modal');
  const openBtns = document.querySelectorAll('.btn-open-review-modal');
  const closeBtn = document.getElementById('btn-close-review-modal');
  const form = document.getElementById('review-submit-form');
  const starsContainer = document.getElementById('star-rating-select');

  let selectedRating = 5;

  openBtns.forEach(btn => {
    btn.onclick = () => {
      if (modal) modal.classList.add('active');
    };
  });

  if (closeBtn && modal) {
    closeBtn.onclick = () => modal.classList.remove('active');
    modal.onclick = (e) => {
      if (e.target === modal) modal.classList.remove('active');
    };
  }

  if (starsContainer) {
    const starSpans = starsContainer.querySelectorAll('span');
    starSpans.forEach(span => {
      span.onclick = () => {
        selectedRating = parseInt(span.dataset.value, 10);
        starSpans.forEach(s => {
          const val = parseInt(s.dataset.value, 10);
          if (val <= selectedRating) {
            s.classList.add('selected');
          } else {
            s.classList.remove('selected');
          }
        });
      };
    });
  }

  if (form) {
    form.onsubmit = (e) => {
      e.preventDefault();
      const name = document.getElementById('review-name-input').value.trim();
      const orderId = document.getElementById('review-order-id-input').value.trim();
      const text = document.getElementById('review-text-input').value.trim();

      if (!name || !orderId || !text) {
        showToast('Please fill in your name, Order ID, and review.');
        return;
      }

      // Add 200 points
      state.userPoints += 200;
      localStorage.setItem('pdk_reward_points', state.userPoints.toString());

      // Add new review
      const newRev = {
        id: 'rev-' + Date.now(),
        name,
        orderId,
        rating: selectedRating,
        date: 'Just now',
        text
      };

      state.reviews.unshift(newRev);
      localStorage.setItem('pdk_reviews', JSON.stringify(state.reviews));

      renderReviews();
      form.reset();
      if (modal) modal.classList.remove('active');

      showToast(`🎉 Congratulations! You earned +200 Reward Points for reviewing Order ${orderId}!`);
    };
  }
}

// -------------------------------------------------------------
// WhatsApp Newsletter Subscription
// -------------------------------------------------------------
function setupNewsletterForm() {
  const form = document.getElementById('updates-subscription-form');
  if (!form) return;

  form.onsubmit = (e) => {
    e.preventDefault();
    const phoneInput = document.getElementById('updates-whatsapp-input');
    const emailInput = document.getElementById('updates-email-input');
    const agreeCheck = document.getElementById('updates-agree-checkbox');

    if (!agreeCheck.checked) {
      showToast('Please accept the updates agreement checkbox.');
      return;
    }

    const phone = phoneInput ? phoneInput.value.trim() : '';
    if (!phone) {
      showToast('Please enter your WhatsApp number.');
      return;
    }

    try {
      localStorage.setItem('pdk_subscriber', JSON.stringify({
        phone,
        email: emailInput ? emailInput.value.trim() : '',
        date: new Date().toISOString()
      }));
    } catch (err) {}

    showToast(`✅ Subscribed! You will receive Priya's Desi Kitchen specials directly on WhatsApp.`);
    form.reset();
  };
}

// -------------------------------------------------------------
// Operating Hours & Kaduna Local Time
// -------------------------------------------------------------
function updateRestaurantStatus() {
  const statusEl = document.getElementById('store-status-badge');
  if (!statusEl) return;

  // Kaduna is in WAT (UTC+1). Let's calculate current time in WAT
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const kadunaTime = new Date(utc + (3600000 * 1)); // UTC+1

  const hours = kadunaTime.getHours();
  const minutes = kadunaTime.getMinutes();
  const currentDecimalTime = hours + minutes / 60;

  // Restaurant opens at 11:30 AM (11.5) and closes at 10:30 PM (22.5)
  const isOpen = currentDecimalTime >= 11.5 && currentDecimalTime <= 22.5;

  if (isOpen) {
    statusEl.className = 'status-badge open';
    statusEl.innerHTML = `
      <span class="status-indicator-dot"></span>
      <span>Open Now · Closes 10:30pm</span>
    `;
  } else {
    statusEl.className = 'status-badge';
    statusEl.innerHTML = `
      <span class="status-indicator-dot"></span>
      <span>Closed · Opens 11:30am</span>
    `;
  }
}

// -------------------------------------------------------------
// WOW.js & Fallback Scroll Animation Runner
// -------------------------------------------------------------
function initAnimations() {
  // If WOW is loaded globally from wow.min.js
  if (typeof window.WOW !== 'undefined') {
    new window.WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 40,
      mobile: true,
      live: true
    }).init();
  }

  // Resilient IntersectionObserver Fallback
  triggerWowElements(document);
}

function triggerWowElements(root = document) {
  const wowElements = root.querySelectorAll('.wow');

  if (!('IntersectionObserver' in window)) {
    wowElements.forEach(el => {
      el.style.visibility = 'visible';
      el.classList.add('animated');
    });
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = el.getAttribute('data-wow-delay');
        if (delay) {
          el.style.animationDelay = delay;
        }
        el.style.visibility = 'visible';
        el.classList.add('animated');
        obs.unobserve(el);
      }
    });
  }, {
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.1
  });

  wowElements.forEach(el => observer.observe(el));
}

// -------------------------------------------------------------
// Global UI Bindings
// -------------------------------------------------------------
function initEvents() {
  // Cart Drawer Open/Close
  const drawerBackdrop = document.getElementById('cart-drawer-backdrop');
  const openCartBtns = document.querySelectorAll('.btn-open-cart');
  const closeCartBtn = document.getElementById('btn-close-drawer');

  openCartBtns.forEach(btn => {
    btn.onclick = () => {
      if (drawerBackdrop) drawerBackdrop.classList.add('active');
    };
  });

  if (closeCartBtn && drawerBackdrop) {
    closeCartBtn.onclick = () => drawerBackdrop.classList.remove('active');
    drawerBackdrop.onclick = (e) => {
      if (e.target === drawerBackdrop) drawerBackdrop.classList.remove('active');
    };
  }

  // Floating Cart Pill
  const floatingPill = document.getElementById('floating-cart-pill');
  if (floatingPill && drawerBackdrop) {
    floatingPill.onclick = () => drawerBackdrop.classList.add('active');
  }

  // Order Type Tabs
  const orderTypeTabs = document.querySelectorAll('.btn-order-type');
  orderTypeTabs.forEach(btn => {
    btn.onclick = () => {
      orderTypeTabs.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.orderType = btn.dataset.type;
      updateCartUI();
    };
  });

  // Special Instructions / Address input
  const instructionsInput = document.getElementById('special-instructions-input');
  if (instructionsInput) {
    instructionsInput.oninput = (e) => {
      state.specialInstructions = e.target.value;
    };
  }

  // WhatsApp Checkout Button
  const checkoutBtn = document.getElementById('btn-checkout-whatsapp');
  if (checkoutBtn) {
    checkoutBtn.onclick = sendOrderToWhatsApp;
  }

  // Copy Bill Button
  const copyBillBtn = document.getElementById('btn-copy-bill');
  if (copyBillBtn) {
    copyBillBtn.onclick = copyBillSummary;
  }

  // Search input
  const searchInput = document.getElementById('menu-search-input');
  const searchClear = document.getElementById('search-clear-btn');

  if (searchInput) {
    searchInput.oninput = (e) => {
      state.searchQuery = e.target.value;
      if (searchClear) {
        searchClear.style.display = state.searchQuery ? 'block' : 'none';
      }
      renderMenuGrid();
    };
  }

  if (searchClear && searchInput) {
    searchClear.onclick = () => {
      searchInput.value = '';
      state.searchQuery = '';
      searchClear.style.display = 'none';
      renderMenuGrid();
      searchInput.focus();
    };
  }

  // Dietary filters
  document.querySelectorAll('.btn-diet-tab').forEach(btn => {
    btn.onclick = () => {
      state.dietFilter = btn.dataset.diet;
      updateDietButtonsUI();
      renderMenuGrid();
    };
  });

  // Hero Add Button
  const heroAddBtn = document.getElementById('btn-add-hero-biryani');
  if (heroAddBtn) {
    heroAddBtn.onclick = () => {
      addToCart('biryani-chicken', 1);
    };
  }
}

// -------------------------------------------------------------
// App Initialization
// -------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  loadCartFromStorage();
  updateRestaurantStatus();
  renderCategoryScroller();
  renderMenuGrid();
  renderReviews();
  updateCartUI();
  setupReviewModal();
  setupNewsletterForm();
  initEvents();
  initAnimations();

  // Periodically refresh hours indicator
  setInterval(updateRestaurantStatus, 60000);
});
