    // Sample data (replace this with your actual data)
    const products = [
        { category: 'creams', name: 'Body Lotion' },
        { category: 'creams', name: 'Skin Wash' },
        { category: 'perfumes-oils', name: 'Oils' },
        { category: 'perfumes-oils', name: 'Perfume 1' },
        { category: 'perfumes-oils', name: 'Perfume 2' },
    ];

    const searchBar = document.getElementById('search-bar');
    const creamsSection = document.getElementById('creams-section');
    const perfumesOilsSection = document.getElementById('perfumes-oils-section');

    // Initialize sections with all products
    updateSection(creamsSection, 'creams');
    updateSection(perfumesOilsSection, 'perfumes-oils');

    // Add event listener for search bar
    searchBar.addEventListener('input', function () {
        const searchTerm = searchBar.value.toLowerCase();
        filterProducts(searchTerm);
    });

    // Function to update sections with filtered products
    function updateSection(section, category) {
        const filteredProducts = products.filter(product => product.category === category);
        section.innerHTML = filteredProducts.map(product => createProductItem(product)).join('');
    }

    // Function to filter products based on search term
    function filterProducts(searchTerm) {
        const allFilteredItems = document.querySelectorAll('.filtered-item');
        allFilteredItems.forEach(item => {
            const productName = item.dataset.productName.toLowerCase();
            if (productName.includes(searchTerm)) {
                item.classList.add('show');
            } else {
                item.classList.remove('show');
            }
        });
    }

    // Function to create HTML for each product item
    function createProductItem(product) {
        return `
            <li class="scrollbar-item filtered-item" data-product-name="${product.name}">
                <div class="shop-card">
                    <!-- Your product card HTML goes here -->
                    <h3>${product.name}</h3>
                </div>
            </li>
        `;
    }